import { load as loadHttp } from '@scola/api-http';
import { load as loadRouter } from '@scola/api-router';
import { load as loadWs } from '@scola/api-ws';

export {
  Cache,
  cacheClient,
  cacheList,
  cacheObject,
  getList,
  getObject,
  getTotal,
  setList,
  setObject,
  setTotal
} from '@scola/api-cache';

export {
  formDataFilter,
  jsonCodec,
  jsonFilter,
  msgPackCodec,
  msgPackFilter,
  sodiumCodec,
  urlEncodedFilter
} from '@scola/api-codec';

export {
  HttpConnection,
  HttpConnector,
  ServerRequest,
  ServerResponse,
  Writer,
  parseHeader
} from '@scola/api-http';

export {
  PubSub,
  publish,
  subscribe,
  subscribeList,
  subscribeObject
} from '@scola/api-pubsub';

export {
  Router,
  handleError
} from '@scola/api-router';

export {
  WsConnection,
  WsConnector
} from '@scola/api-ws';

export function load(app) {
  loadHttp(app);
  loadRouter(app);
  loadWs(app);
}
