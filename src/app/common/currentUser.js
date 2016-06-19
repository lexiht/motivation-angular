(function(module) {
	var currentUser = function() {
		var setProfile = function(email, token) {
			profile.email = email;
			profile.token = token;
		};

		var profile = {
			email: "",
			token: "",
			get loggedIn() {
				return this.token;
			}
		};

		return {
			setProfile: setProfile;
			profile: profile;
		};
	};

	module.factory('currentUser', currentUser);
	
}(angular.module("common")));