import { load as loadHttp } from '@scola/api-http';
import { load as loadRouter } from '@scola/api-router';
import { load as loadWs } from '@scola/api-ws';

import {
  Cache,
  MemCacheClient,
  MemoryClient,
  RedisClient,
  cached,
  respond
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
  MysqlClient
} from '@scola/api-database';

import {
  HttpConnection,
  HttpConnector,
  ServerRequest,
  ServerResponse,
  Writer,
  parseHeader
} from '@scola/api-http';

import {
  Logger,
  TransformTask,
  transformTask
} from '@scola/api-logger';

import {
  PubSub,
  publish,
  subscribe
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
  Cache,
  MemCacheClient,
  MemoryClient,
  RedisClient,
  cached,
  respond,
  formDataCodec,
  formDataFilter,
  jsonCodec,
  jsonFilter,
  msgPackCodec,
  msgPackFilter,
  sodiumCodec,
  urlEncodedCodec,
  urlEncodedFilter,
  MysqlClient,
  HttpConnection,
  HttpConnector,
  ServerRequest,
  ServerResponse,
  Writer,
  parseHeader,
  Logger,
  TransformTask,
  transformTask,
  PubSub,
  publish,
  subscribe,
  Router,
  handleError,
  WsConnection,
  WsConnector,
  load
};
