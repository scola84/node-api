import { load as loadHttp } from '@scola/api-http';
import { load as loadRouter } from '@scola/api-router';
import { load as loadWs } from '@scola/api-ws';

import {
  CacheFactory,
  MemCacheClient,
  MemoryClient,
  RedisClient,
  getList,
  setList,
  getObject,
  setObject
} from '@scola/api-cache';

import {
  formDataCodec,
  formDataFilter,
  jsonCodec,
  jsonFilter,
  msgPackCodec,
  msgPackFilter,
  sodiumCodec,
  urlEncodedCodec,
  urlEncodedFilter
} from '@scola/api-codec';

import {
  HttpConnection,
  HttpConnector,
  ServerRequest,
  ServerResponse,
  Writer,
  parseHeader
} from '@scola/api-http';

import {
  PubSubFactory,
  publish,
  subscribe,
  subscribeList,
  subscribeObject
} from '@scola/api-pubsub';

import {
  Router,
  handleError
} from '@scola/api-router';

import {
  WsConnection,
  WsConnector
} from '@scola/api-ws';

function load(app) {
  loadHttp(app);
  loadRouter(app);
  loadWs(app);
}

export {
  CacheFactory,
  MemCacheClient,
  MemoryClient,
  RedisClient,
  getList,
  getObject,
  setList,
  setObject,
  formDataCodec,
  formDataFilter,
  jsonCodec,
  jsonFilter,
  msgPackCodec,
  msgPackFilter,
  sodiumCodec,
  urlEncodedCodec,
  urlEncodedFilter,
  HttpConnection,
  HttpConnector,
  ServerRequest,
  ServerResponse,
  Writer,
  parseHeader,
  PubSubFactory,
  publish,
  subscribe,
  subscribeList,
  subscribeObject,
  Router,
  handleError,
  WsConnection,
  WsConnector,
  load
};
