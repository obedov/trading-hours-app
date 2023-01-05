import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TradingHoursApp } from './app/TradingHoursApp';

const App: React.FC = () => {
	return <TradingHoursApp />;
};

ReactDOM.render(<App />, document.getElementById('root'));
