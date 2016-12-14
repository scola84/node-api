import { loadI18n as loadI18nHttp } from '@scola/api-http';
import { loadI18n as loadI18nRouter } from '@scola/api-router';
import { loadI18n as loadI18nWs } from '@scola/api-ws';

export {
  HttpConnection,
  HttpConnector,
  ServerRequest,
  ServerResponse,
  parseHeader
} from '@scola/api-http';

export {
  ConnectionHandler,
  ConnectorHandler,
  RouterHandler,
  ConsoleLogger
} from '@scola/api-log';

export {
  Router,
  handleError
} from '@scola/api-router';

export {
  WsConnection,
  WsConnector
} from '@scola/api-ws';

export function loadI18n() {
  loadI18nHttp();
  loadI18nRouter();
  loadI18nWs();
}
