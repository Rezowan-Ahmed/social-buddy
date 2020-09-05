import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import PostDetail from "./components/PostDetail/PostDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoMatch from "./components/NoMatch/NoMatch";

function App() {
	return (
		<div>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Posts />
					</Route>
					<Route exact path="/posts">
						<Posts />
					</Route>
					<Route exact path="/posts/:postId">
						<PostDetail />
					</Route>
          <Route path="*">
            <NoMatch/>
          </Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
