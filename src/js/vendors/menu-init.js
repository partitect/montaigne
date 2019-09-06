(function(i) {
	"use strict";
	i.isFunction(i.fn.matchHeight) && i(".match-height").matchHeight();
}.apply(this, [jQuery]),
	function(i) {
		"use strict";
		i.isFunction(i.fn.bmmPluginAnimate) &&
			i(function() {
				i("[data-appear-animation]").each(function() {
					var t,
						n = i(this),
						a = bmm.fn.getOptions(n.data("plugin-options"));
					a && (t = a), n.bmmPluginAnimate(t);
				});
			});
	}.apply(this, [jQuery]),
	function(i) {
		"use strict";
		i.isFunction(i.fn.bmmPluginMatchHeight) &&
			i(function() {
				i("[data-plugin-match-height]:not(.manual)").each(function() {
					var t,
						n = i(this),
						a = bmm.fn.getOptions(n.data("plugin-options"));
					a && (t = a), n.bmmPluginMatchHeight(t);
				});
			});
	}.apply(this, [jQuery]),
	function(i) {
		"use strict";
		i.isFunction(i.fn.nanoScroller) &&
			i(function() {
				i("[data-plugin-scrollable]").each(function() {
					var t = i(this),
						n = {},
						a = t.data("plugin-options");
					a && (n = a), t.bmmPluginScrollable(n);
				});
			});
	}.apply(this, [jQuery]),
	function(i) {
		"use strict";
		i.isFunction(i.fn.bmmPluginSticky) &&
			i(function() {
				i("[data-plugin-sticky]:not(.manual)").each(function() {
					var t,
						n = i(this),
						a = bmm.fn.getOptions(n.data("plugin-options"));
					a && (t = a), n.bmmPluginSticky(t);
				});
			});
	}.apply(this, [jQuery]),
	function(i) {
		"use strict";
		i.isFunction(i.fn.bmmPluginToggle) &&
			i(function() {
				i("[data-plugin-toggle]:not(.manual)").each(function() {
					var t,
						n = i(this),
						a = bmm.fn.getOptions(n.data("plugin-options"));
					a && (t = a), n.bmmPluginToggle(t);
				});
			});
	}.apply(this, [jQuery]),
	function(i) {
		"use strict";
		void 0 !== bmm.StickyHeader && bmm.StickyHeader.initialize(),
			void 0 !== bmm.Nav && bmm.Nav.initialize(),
			void 0 !== bmm.Account && bmm.Account.initialize();
	}.apply(this, [jQuery]));
