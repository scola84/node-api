import { load as loadHttp } from '@scola/api-http';
import { load as loadRouter } from '@scola/api-router';
import { load as loadWs } from '@scola/api-ws';

export {
  formdataCodec,
  formdataFilter,
  jsonCodec,
  jsonFilter,
  msgpackCodec,
  msgpackFilter,
  urlencodedCodec,
  urlencodedFilter
} from '@scola/api-codec';

export {
  HttpConnection,
  HttpConnector,
  ServerRequest,
  ServerResponse,
  parseHeader
} from '@scola/api-http';

export {
  ConsoleLogger,
  logClose,
  logConnection,
  logError,
  logOpen,
  logRequest
} from '@scola/api-log';

export {
  Router,
  handleError
} from '@scola/api-router';

export {
  WsConnection,
  WsConnector
} from '@scola/api-ws';

export function load(i18n) {
  loadHttp(i18n);
  loadRouter(i18n);
  loadWs(i18n);
}
