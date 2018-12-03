/* eslint-disable*/
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);


global.fetch = require('node-fetch');

import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/main';

describe('Spotify Wrapper', () => {
  let stubedFetch;

  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch');
    stubedFetch.resolves({ json: () => ({}) });
  });

  afterEach(() => {
    stubedFetch.restore();
  });


  describe('smoke tests', () => {
    it('should exist the search method', () => {
      expect(search).to.exist;
    })

    it('should exist the searchAlbums method', () => {
      expect(searchAlbums).to.exist;
    });

    it('should exist the searchArtists method', () => {
      expect(searchArtists).to.exist;
    });

    it('should exist the searchTracks method', () => {
      expect(searchTracks).to.exist;
    });

    it('should exist the searchPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    });
  });

  describe('Generic search', () => {

    it('should call fetch function', () => {
      const artists = search();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {
      context('passing one type', () => {
        const artists = search('Incubus', 'artist');
        expect(stubedFetch).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist')

        const albums = search('Incubus', 'album');
        expect(stubedFetch)
          .to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album')
      });

      context('passing more than one type', () => {
        const artistsAndAlbums = search('Incubus', ['artist', 'album']);
        expect(stubedFetch)
          .to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,album')
      });
    });

    it('should return the JSON Data from the Promise', () => {
      const artists = search('Incubus', 'artist');

      artists.then((data) => {
        expect(data).to.be.eql({})
      })
    })

  });

  describe('searchArtists', () => {
    it('should call fetch function', () => {
      const artists = searchArtists('Incubus');
      expect(stubedFetch).to.been.calledOnce;
    });

    it('should call fetch with the correct url',() => {
      const artists = searchArtists('Incubus');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist')

      const artists2 = searchArtists('Muse');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=artist')
    });
  });

  describe('searchAlbums', () => {
    it('should call fetch function', () => {
      const albums = searchAlbums('Incubus');
      expect(stubedFetch).to.been.calledOnce;
    });

    it('should call fetch with the correct url',() => {
      const albums = searchAlbums('Incubus');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album')

      const albums2 = searchAlbums('Muse');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=album')
    });
  });

  describe('searchTracks', () => {
    it('should call fetch function', () => {
      const tracks = searchTracks('Incubus');
      expect(stubedFetch).to.been.calledOnce;
    });

    it('should call fetch with the correct url',() => {
      const tracks = searchTracks('Incubus');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track')

      const tracks2 = searchTracks('Muse');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=track')
    });
  });

  describe('searchPlaylists', () => {
    it('should call fetch function', () => {
      const playlists = searchPlaylists('Incubus');
      expect(stubedFetch).to.been.calledOnce;
    });

    it('should call fetch with the correct url',() => {
      const playlists = searchPlaylists('Incubus');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist')

      const playlists2 = searchPlaylists('Muse');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=playlist')
    });
  });

})
