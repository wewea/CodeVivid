var React = require('react');
var ReactDOM = require('react-dom');
var linkifyStr = require('linkifyjs/string');
var util = require('./util.js');

function UserCard (props) {
	var user = props.user;
	var htmlText = '';
	if (user.signature)
		htmlText = linkifyStr(user.signature);

	return (
		<div className="ui card user-info">
			<div className="content">
				<div className="header">
					<h3 className="username"> {user.username}</h3>
					<div className="signature" dangerouslySetInnerHTML={{__html:htmlText}}></div>
				</div>
			</div>
			<div className="extra content">
				<div className="fans">{user.fans} 人关注</div>
			</div>
		</div>
	);
}

function UserAvatar (props) {
	return (
	<div className='ui circular blurring dimmable image user-avatar'>
		<div className='ui inverted dimmer'>
			<div className='content'>
					<div className='center'>
						<a className='ui center aligned header' 
						href="http://www.gravatar.com/">
								设置头像
						</a>
					</div>
			</div>
		</div>
		<img className="ui small circular image" src={props.url}/>
	</div>
	);
}

var Profile = React.createClass({
	render: function () {
		var user = this.props.user;
		var avatar = util.getAvatarByEamil(user.email, {s: 150});
		return (
			<div className="ui two column" id='profile-wrapper'>
				<UserAvatar url={avatar}/>
				<UserCard user={user}/>
			</div>
		)
	}
});

module.exports = Profile;
