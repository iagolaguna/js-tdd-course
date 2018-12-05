/* eslint-disable*/
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);


global.fetch = require('node-fetch');

import SpotifyWrapper from '../src';

describe('Search', () => {
  let spotify;
  let stubedFetch;

  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'foo',
    })
    stubedFetch = sinon.stub(global, 'fetch');
    stubedFetch.resolves({ json: () => ({}) });
  });

  afterEach(() => {
    stubedFetch.restore();
  });


  describe('smoke tests', () => {

    it('should exist the spotify.search.albums method', () => {
      expect(spotify.search.albums).to.exist;
    });

    it('should exist the spotify.search.artists method', () => {
      expect(spotify.search.artists).to.exist;
    });

    it('should exist the spotify.search.tracks method', () => {
      expect(spotify.search.tracks).to.exist;
    });

    it('should exist the spotify.search.playlists method', () => {
      expect(spotify.search.playlists).to.exist;
    });
  });

  describe('spotify.search.artists', () => {
    it('should call fetch function', () => {
      const artists = spotify.search.artists('Incubus');
      expect(stubedFetch).to.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const artists = spotify.search.artists('Incubus');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist')

      const artists2 = spotify.search.artists('Muse');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=artist')
    });
  });

  describe('spotify.search.albums', () => {
    it('should call fetch function', () => {
      const albums = spotify.search.albums('Incubus');
      expect(stubedFetch).to.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const albums = spotify.search.albums('Incubus');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album')

      const albums2 = spotify.search.albums('Muse');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=album')
    });
  });

  describe('spotify.search.tracks', () => {
    it('should call fetch function', () => {
      const tracks = spotify.search.tracks('Incubus');
      expect(stubedFetch).to.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const tracks = spotify.search.tracks('Incubus');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track')

      const tracks2 = spotify.search.tracks('Muse');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=track')
    });
  });

  describe('spotify.search.playlists', () => {
    it('should call fetch function', () => {
      const playlists = spotify.search.playlists('Incubus');
      expect(stubedFetch).to.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const playlists = spotify.search.playlists('Incubus');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist')

      const playlists2 = spotify.search.playlists('Muse');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=playlist')
    });
  });

})
