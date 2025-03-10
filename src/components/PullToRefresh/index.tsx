import { RefreshIcon } from '@heroicons/react/outline';
import Router from 'next/router';
import PR from 'pulltorefreshjs';
import { useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';

const PullToRefresh: React.FC = () => {
  useEffect(() => {
    PR.init({
      mainElement: '#pull-to-refresh',
      onRefresh() {
        Router.reload();
      },
      iconArrow: ReactDOMServer.renderToString(
        <RefreshIcon className="z-50 m-auto h-9 w-9 rounded-full border-4 border-gray-800 bg-gray-800 text-indigo-500 ring-1 ring-gray-700" />
      ),
      iconRefreshing: ReactDOMServer.renderToString(
        <RefreshIcon
          className="z-50 m-auto h-9 w-9 animate-spin rounded-full border-4 border-gray-800 bg-gray-800 text-indigo-500 ring-1 ring-gray-700"
          style={{ animationDirection: 'reverse' }}
        />
      ),
      instructionsPullToRefresh: ReactDOMServer.renderToString(<div />),
      instructionsReleaseToRefresh: ReactDOMServer.renderToString(<div />),
      instructionsRefreshing: ReactDOMServer.renderToString(<div />),
      distReload: 55,
    });
    return () => {
      PR.destroyAll();
    };
  }, []);

  return <div id="pull-to-refresh"></div>;
};

export default PullToRefresh;
