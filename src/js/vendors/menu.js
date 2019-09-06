(window.bmm = {}),
	(window.bmm.fn = {
		getOptions: function(e) {
			if ("object" == typeof e) return e;
			if ("string" != typeof e) return {};
			try {
				return JSON.parse(e.replace(/'/g, '"').replace(";", ""));
			} catch (e) {
				return {};
			}
		}
	}),
	function(e, t) {
		e = e || {};
		var i = function(e, t) {
			return this.initialize(e, t);
		};
		(i.defaults = { accX: 0, accY: -80, delay: 100, duration: "750ms" }),
			(i.prototype = {
				initialize: function(e, t) {
					return e.data("__animate")
						? this
						: ((this.$el = e),
						  this.setData()
								.setOptions(t)
								.build(),
						  this);
				},
				setData: function() {
					return this.$el.data("__animate", this), this;
				},
				setOptions: function(e) {
					return (this.options = t.extend(!0, {}, i.defaults, e, { wrapper: this.$el })), this;
				},
				build: function() {
					var e = this,
						i = this.options.wrapper,
						a = 0,
						n = this.options.duration,
						o = i.offset().top,
						s = t(window).scrollTop();
					return (
						i.addClass("appear-animation animated"),
						!t("html").hasClass("no-csstransitions") && t(window).width() > 767 && o > s
							? i.appear(
									function() {
										i.one("animation:show", function(t) {
											(a = i.attr("data-appear-animation-delay")
												? i.attr("data-appear-animation-delay")
												: e.options.delay),
												"750ms" !=
													(n = i.attr("data-appear-animation-duration")
														? i.attr("data-appear-animation-duration")
														: e.options.duration) && i.css("animation-duration", n),
												i.css("animation-delay", a + "ms"),
												i.addClass(i.attr("data-appear-animation") + " appear-animation-visible");
										}),
											i.trigger("animation:show");
									},
									{ accX: e.options.accX, accY: e.options.accY }
							  )
							: i.addClass("appear-animation-visible"),
						this
					);
				}
			}),
			t.extend(e, { PluginAnimate: i }),
			(t.fn.bmmPluginAnimate = function(e) {
				return this.map(function() {
					var a = t(this);
					return a.data("__animate") ? a.data("__animate") : new i(a, e);
				});
			});
	}.apply(this, [window.bmm, jQuery]),
	function(e, t) {
		e = e || {};
		var i = function(e, t) {
			return this.initialize(e, t);
		};
		(i.defaults = { byRow: !0, property: "height", target: null, remove: !1 }),
			(i.prototype = {
				initialize: function(e, t) {
					return e.data("__matchHeight")
						? this
						: ((this.$el = e),
						  this.setData()
								.setOptions(t)
								.build(),
						  this);
				},
				setData: function() {
					return this.$el.data("__matchHeight", this), this;
				},
				setOptions: function(e) {
					return (this.options = t.extend(!0, {}, i.defaults, e, { wrapper: this.$el })), this;
				},
				build: function() {
					if (!t.isFunction(t.fn.matchHeight)) return this;
					return this.options.wrapper.matchHeight(this.options), this;
				}
			}),
			t.extend(e, { PluginMatchHeight: i }),
			(t.fn.bmmPluginMatchHeight = function(e) {
				return this.map(function() {
					var a = t(this);
					return a.data("__matchHeight") ? a.data("__matchHeight") : new i(a, e);
				});
			});
	}.apply(this, [window.bmm, jQuery]),
	function(e, t) {
		e = e || {};
		var i = function(e, t) {
			return this.initialize(e, t);
		};
		(i.defaults = {
			contentClass: "scrollable-content",
			paneClass: "scrollable-pane",
			sliderClass: "scrollable-slider",
			alwaysVisible: !0,
			preventPageScrolling: !0
		}),
			(i.prototype = {
				initialize: function(e, t) {
					return e.data("__scrollable")
						? this
						: ((this.$el = e),
						  this.setData()
								.setOptions(t)
								.build(),
						  this);
				},
				setData: function() {
					return this.$el.data("__scrollable", this), this;
				},
				setOptions: function(e) {
					return (this.options = t.extend(!0, {}, i.defaults, e, { wrapper: this.$el })), this;
				},
				build: function() {
					return this.options.wrapper.nanoScroller(this.options), this;
				}
			}),
			t.extend(e, { PluginScrollable: i }),
			(t.fn.bmmPluginScrollable = function(e) {
				return this.each(function() {
					var a = t(this);
					return a.data("__scrollable") ? a.data("__scrollable") : new i(a, e);
				});
			});
	}.apply(this, [window.bmm, jQuery]),
	function(e, t) {
		e = e || {};
		var i = function(e, t) {
			return this.initialize(e, t);
		};
		(i.defaults = { minWidth: 991, activeClass: "sticky-active" }),
			(i.prototype = {
				initialize: function(e, t) {
					return e.data("__sticky")
						? this
						: ((this.$el = e),
						  this.setData()
								.setOptions(t)
								.build()
								.events(),
						  this);
				},
				setData: function() {
					return this.$el.data("__sticky", this), this;
				},
				setOptions: function(e) {
					return (this.options = t.extend(!0, {}, i.defaults, e, { wrapper: this.$el })), this;
				},
				build: function() {
					if (!t.isFunction(t.fn.pin)) return this;
					var e = this,
						i = t(window);
					if (
						(e.options.wrapper.pin(e.options),
						e.options.wrapper.hasClass("sticky-container-transparent") &&
							e.options.wrapper.parent().addClass("position-absolute w-100"),
						i.afterResize(function() {
							e.options.wrapper.removeAttr("style").removeData("pin"),
								e.options.wrapper.pin(e.options),
								i.trigger("scroll");
						}),
						e.options.wrapper.find("img").attr("data-change-src"))
					) {
						var a = e.options.wrapper.find("img"),
							n = a.attr("src"),
							o = a.attr("data-change-src");
						e.changeLogoSrc = function(e) {
							e ? a.attr("src", o) : a.attr("src", n);
						};
					}
					return this;
				},
				events: function() {
					var e = this,
						i = t(window),
						a = e.options.wrapper.find("img"),
						n = !0,
						o = !1,
						s = e.options.wrapper.hasClass("sticky-container-effect-1") ? "sticky-effect-active" : "sticky-active";
					i.on("scroll sticky.effect.active", function() {
						e.options.wrapper.hasClass(s)
							? n && (a.attr("data-change-src") && e.changeLogoSrc(!0), (n = !1), (o = !0))
							: o && (a.attr("data-change-src") && e.changeLogoSrc(!1), (o = !1), (n = !0));
					});
					var r = !1;
					e.options.stickyStartEffectAt &&
						(e.options.stickyStartEffectAt < i.scrollTop() &&
							(e.options.wrapper.addClass("sticky-effect-active"), i.trigger("sticky.effect.active")),
						i.on("scroll", function() {
							e.options.stickyStartEffectAt < i.scrollTop()
								? (e.options.wrapper.addClass("sticky-effect-active"), (r = !0), i.trigger("sticky.effect.active"))
								: (r && (e.options.wrapper.find(".sticky-body").addClass("position-fixed"), (r = !1)),
								  0 == i.scrollTop() && e.options.wrapper.find(".sticky-body").removeClass("position-fixed"),
								  e.options.wrapper.removeClass("sticky-effect-active"));
						}));
				}
			}),
			t.extend(e, { PluginSticky: i }),
			(t.fn.bmmPluginSticky = function(e) {
				return this.map(function() {
					var a = t(this);
					return a.data("__sticky") ? a.data("__sticky") : new i(a, e);
				});
			});
	}.apply(this, [window.bmm, jQuery]),
	function(e, t) {
		e = e || {};
		var i = !1;
		t.extend(e, {
			Account: {
				defaults: { wrapper: t("#headerAccount") },
				initialize: function(e, t) {
					return i ? this : ((i = !0), (this.$wrapper = e || this.defaults.wrapper), this.setOptions(t).events(), this);
				},
				setOptions: function(i) {
					return (
						(this.options = t.extend(!0, {}, this.defaults, i, e.fn.getOptions(this.$wrapper.data("plugin-options")))),
						this
					);
				},
				events: function() {
					var e = this;
					t(window).on("load", function() {
						t(document).ready(function() {
							setTimeout(function() {
								e.$wrapper.find("input").on("focus", function() {
									e.$wrapper.addClass("open"),
										t(document).mouseup(function(t) {
											e.$wrapper.is(t.target) ||
												0 !== e.$wrapper.has(t.target).length ||
												e.$wrapper.removeClass("open");
										});
								});
							}, 1500);
						});
					}),
						t("#headerSignUp").on("click", function(t) {
							t.preventDefault(),
								e.$wrapper
									.addClass("signup")
									.removeClass("signin")
									.removeClass("recover"),
								e.$wrapper.find(".signup-form input:first").focus();
						}),
						t("#headerSignIn").on("click", function(t) {
							t.preventDefault(),
								e.$wrapper
									.addClass("signin")
									.removeClass("signup")
									.removeClass("recover"),
								e.$wrapper.find(".signin-form input:first").focus();
						}),
						t("#headerRecover").on("click", function(t) {
							t.preventDefault(),
								e.$wrapper
									.addClass("recover")
									.removeClass("signup")
									.removeClass("signin"),
								e.$wrapper.find(".recover-form input:first").focus();
						}),
						t("#headerRecoverCancel").on("click", function(t) {
							t.preventDefault(),
								e.$wrapper
									.addClass("signin")
									.removeClass("signup")
									.removeClass("recover"),
								e.$wrapper.find(".signin-form input:first").focus();
						});
				}
			}
		});
	}.apply(this, [window.bmm, jQuery]),
	function(e, t) {
		e = e || {};
		var a = !1;
		t.extend(e, {
			Nav: {
				defaults: { wrapper: t("#headerNavPrimary"), scrollDelay: 600, scrollAnimation: "easeOutQuad" },
				initialize: function(e, t) {
					return a
						? this
						: ((a = !0),
						  (this.$wrapper = e || this.defaults.wrapper),
						  this.setOptions(t)
								.build()
								.events(),
						  this);
				},
				setOptions: function(i) {
					return (
						(this.options = t.extend(!0, {}, this.defaults, i, e.fn.getOptions(this.$wrapper.data("plugin-options")))),
						this
					);
				},
				build: function() {
					var e,
						a = this,
						n = t("html"),
						o = t("#header"),
						s = t("#header .header-nav-primary");
					(a.$wrapper.find("a[data-dropdown-img]").each(function() {
						(e = t("<span />")
							.addClass("dropdown-img dropdown-img-preview")
							.append(
								t("<span />")
									.addClass("dropdown-img-container")
									.append(
										t("<span />")
											.addClass("dropdown-img-image")
											.css("background-image", "url(" + t(this).data("dropdown-img") + ")")
									)
							)),
							t(this).append(e);
					}),
					n.hasClass("sidebar") || n.hasClass("sidebar-hamburger")
						? (n.hasClass("sidebar-right") || n.hasClass("sidebar-hamburger-right")) &&
						  (n.hasClass("sidebar-right-no-reverse") || o.find(".dropdown-submenu").addClass("dropdown-reverse"))
						: ((a.checkReverse = function() {
								a.$wrapper.find(".dropdown, .dropdown-submenu").removeClass("dropdown-reverse"),
									a.$wrapper
										.find(".dropdown:not(.manual):not(.dropdown-full), .dropdown-submenu:not(.manual)")
										.each(function() {
											t(this)
												.find(".dropdown-menu")
												.visible(!1, !0, "horizontal") || t(this).addClass("dropdown-reverse");
										});
						  }),
						  a.checkReverse(),
						  t(window).on("resize", function() {
								a.checkReverse();
						  })),
					s.hasClass("header-nav-primary-clone-items") &&
						s.find("nav > ul > li > a").each(function() {
							var e = t(this).parent(),
								i = t(this).clone(),
								a = t(this).clone(),
								n = t('<span class="wrapper-items-cloned"></span>');
							t(this).addClass("item-original"), a.addClass("item-two"), e.prepend(n), n.append(i).append(a);
						}),
					t("#header.header-floating-icons").get(0) && t(window).width() > 991) &&
						{
							$menuFloating: t("#header.header-floating-icons .header-container > .header-row"),
							build: function() {
								this.init();
							},
							init: function() {
								var e = this,
									i = 0;
								t(window).scroll(function() {
									var a = (100 * t(window).scrollTop()) / (t(document).height() - t(window).height()),
										n = t(this).scrollTop();
									(i = t(document).height() / t(window).height()),
										e.$menuFloating
											.find(".header-column > .header-row")
											.css({ transform: "translateY( calc(" + a + "vh - " + n / i + "px) )" });
								});
							}
						}.build();
					if (t(".header-nav-links-vertical-slide").get(0)) {
						var r = {
							$headerNavPrimary: t("#headerNavPrimary"),
							$headerNavPrimaryItem: t("#headerNavPrimary li"),
							build: function() {
								this.menuNav();
							},
							menuNav: function() {
								this.$headerNavPrimaryItem.on("click", function(e) {
									var a = t(this),
										n = t(this).parent(),
										o = t(this)
											.find("ul")
											.first(),
										s = t(this).closest(".next-menu"),
										r = a.hasClass("dropdown") || a.hasClass("dropdown-submenu"),
										d = a.hasClass("btn-back"),
										h = o.find("> li").length * o.find("> li").outerHeight() - o.outerHeight(),
										c = s.find("> li").length * s.find("> li").outerHeight() - s.outerHeight();
									if (r) {
										for (
											n.addClass("next-menu"),
												o.addClass("visible"),
												n.css({ overflow: "visible", "overflow-y": "visible" }),
												h > 0 && o.css({ overflow: "hidden", "overflow-y": "scroll" }),
												i = 0;
											i < o.find("> li").length;
											i++
										)
											o.outerHeight() < t(".header-row-sidebar").outerHeight() - 100 &&
												o.css({ height: o.outerHeight() + o.find("> li").outerHeight() });
										o.css({ "padding-top": h + "px" });
									}
									d &&
										(n
											.parent()
											.parent()
											.removeClass("next-menu"),
										n.removeClass("visible"),
										c > 0 && s.css({ overflow: "hidden", "overflow-y": "scroll" })),
										e.stopPropagation();
								});
							}
						};
						t(window).trigger("resize"),
							t(window).width() > 991 && r.build(),
							t(document).ready(function() {
								t(window).afterResize(function() {
									t(window).width() > 991 && r.build();
								});
							});
					}
					return (
						t(".header-nav-primary-mobile-dark").get(0) &&
							t(
								"#header:not(.header-transparent-dark-bottom-border):not(.header-transparent-light-bottom-border)"
							).addClass("header-no-border-bottom"),
						this
					);
				},
				events: function() {
					var i = this,
						a = t("html"),
						n = t("#header"),
						o = t(window),
						s = t(".header-body").outerHeight();
					n.find('a[href="#"]').on("click", function(e) {
						e.preventDefault();
					}),
						n.find(".dropdown-toggle, .dropdown-submenu > a").append('<i class="pe-7s-angle-down"></i>'),
						n
							.find(
								'.dropdown-toggle[href="#"], .dropdown-submenu a[href="#"], .dropdown-toggle[href!="#"] .pe-7s-angle-down, .dropdown-submenu a[href!="#"] .pe-7s-angle-down'
							)
							.on("click", function(i) {
								if ((i.preventDefault(), o.width() < 992)) {
									t(this)
										.closest("li")
										.toggleClass("open");
									var r =
										n.hasClass("header-effect-shrink") && a.hasClass("sticky-header-active")
											? e.StickyHeader.options.headerStickyHeaderContainerHeight
											: s;
									t(".header-body").animate({ height: t(".header-nav-primary nav").outerHeight(!0) + r + 10 }, 0);
								}
							}),
						n
							.find(
								'.header-nav-click-to-open .dropdown-toggle[href="#"], .header-nav-click-to-open .dropdown-submenu a[href="#"]'
							)
							.on("click", function(e) {
								if ((e.preventDefault(), o.width() > 991)) {
									if (
										t(this)
											.closest("li")
											.hasClass("open")
									)
										t(this)
											.closest("li")
											.removeClass("open");
									else {
										var i = t(this).closest("li"),
											a = !1;
										t(this)
											.parent()
											.hasClass("dropdown-submenu") && (a = !0),
											t(this)
												.closest(".dropdown-menu")
												.find(".dropdown-submenu.open")
												.removeClass("open"),
											t(this)
												.parent(".dropdown")
												.parent()
												.find(".dropdown.open")
												.removeClass("open"),
											a ||
												t(this)
													.parent()
													.find(".dropdown-submenu.open")
													.removeClass("open"),
											i.addClass("open"),
											t(document)
												.off("click.nav-click-to-open")
												.on("click.nav-click-to-open", function(e) {
													i.is(e.target) ||
														0 !== i.has(e.target).length ||
														(i.removeClass("open"), i.parents(".open").removeClass("open"));
												});
									}
									o.trigger("resize");
								}
							}),
						n.find("[data-collapse-nav]").on("click", function(e) {
							t(this)
								.parents(".collapse")
								.removeClass("show");
						}),
						n.find(".header-nav-extended-toggle").on("click", function(e) {
							e.preventDefault();
							var i = t(this).parent();
							if (
								t(this)
									.siblings(".header-nav-extended-dropdown")
									.hasClass("show")
							)
								t(this)
									.siblings(".header-nav-extended-dropdown")
									.removeClass("show");
							else {
								var a = t(this).siblings(".header-nav-extended-dropdown");
								t(".header-nav-extended-dropdown.show").removeClass("show"),
									a.addClass("show"),
									t(document)
										.off("click.header-nav-extended-toggle")
										.on("click.header-nav-extended-toggle", function(e) {
											i.is(e.target) ||
												0 !== i.has(e.target).length ||
												t(".header-nav-extended-dropdown.show").removeClass("show");
										}),
									t(this).attr("data-focus") && t("#" + t(this).attr("data-focus")).focus();
							}
						});
					var r = t(".hamburger-btn"),
						d = t("#header.sidebar, #header.sidebar-overlay-full-screen");
					return (
						r.on("click", function() {
							"false" != t(this).attr("data-set-active") && t(this).toggleClass("active"),
								d.toggleClass("sidebar-hidden"),
								a.toggleClass("sidebar-hidden"),
								o.trigger("resize");
						}),
						t(".hamburger-close").on("click", function() {
							t(".hamburger-btn:not(.hamburger-btn-side-header-mobile-show)").trigger("click");
						}),
						t(".header-nav-primary nav").on("show.bs.collapse", function() {
							t(this).removeClass("closed"),
								t("html").addClass("mobile-menu-opened"),
								t(".header-body").animate({
									height: t(".header-body").outerHeight() + t(".header-nav-primary nav").outerHeight(!0) + 10
								}),
								t("#header").is(".header-bottom-slider, .header-below-slider") &&
									!t("html").hasClass("sticky-header-active") &&
									i.scrollToTarget(t("#header"), 0);
						}),
						t(".header-nav-primary nav").on("hide.bs.collapse", function() {
							t(this).addClass("closed"),
								t("html").removeClass("mobile-menu-opened"),
								t(".header-body").animate(
									{ height: t(".header-body").outerHeight() - t(".header-nav-primary nav").outerHeight(!0) },
									function() {
										t(this).height("auto");
									}
								);
						}),
						o.on("stickyHeader.activate", function() {
							o.width() < 992 &&
								n.hasClass("header-effect-shrink") &&
								"true" == t(".header-btn-collapse-nav").attr("aria-expanded") &&
								t(".header-body").animate({
									height:
										t(".header-nav-primary nav").outerHeight(!0) +
										e.StickyHeader.options.headerStickyHeaderContainerHeight +
										(t(".header-nav-bar").get(0) ? t(".header-nav-bar").outerHeight() : 0)
								});
						}),
						o.on("stickyHeader.deactivate", function() {
							o.width() < 992 &&
								n.hasClass("header-effect-shrink") &&
								"true" == t(".header-btn-collapse-nav").attr("aria-expanded") &&
								t(".header-body").animate({ height: s + t(".header-nav-primary nav").outerHeight(!0) + 10 });
						}),
						t(document).ready(function() {
							if (o.width() > 991) {
								var e = !1;
								o.on("resize", function() {
									o.width() < 992 &&
										0 == e &&
										((s = t(".header-body").outerHeight()),
										(e = !0),
										setTimeout(function() {
											e = !1;
										}, 300));
								});
							}
						}),
						a.hasClass("sidebar") &&
							(o.width() < 992 &&
								n.css({
									height:
										t(".header-body .header-container").outerHeight() +
										(parseInt(t(".header-body").css("border-top-width")) +
											parseInt(t(".header-body").css("border-bottom-width")))
								}),
							t(document).ready(function() {
								o.afterResize(function() {
									o.width() < 992
										? n.css({
												height:
													t(".header-body .header-container").outerHeight() +
													(parseInt(t(".header-body").css("border-top-width")) +
														parseInt(t(".header-body").css("border-bottom-width")))
										  })
										: n.css({ height: "" });
								});
							})),
						t("[data-hash]").each(function() {
							var e = t(this).attr("href"),
								a = t(this).is("[data-hash-offset]") ? t(this).data("hash-offset") : 0;
							t(e).get(0) &&
								t(this).on("click", function(n) {
									n.preventDefault(),
										t(n.target).is("i") ||
											(t(this)
												.parents(".collapse.show")
												.collapse("hide"),
											i.scrollToTarget(e, a));
								});
						}),
						t("#header.header-floating-icons").get(0) &&
							t("#header.header-floating-icons [data-hash]")
								.off()
								.each(function() {
									var e = t(this).attr("href"),
										i = t(this).is("[data-hash-offset]") ? t(this).data("hash-offset") : 0;
									t(e).get(0) &&
										t(this).on("click", function(a) {
											a.preventDefault(),
												t("html, body").animate(
													{ scrollTop: t(e).offset().top - i },
													600,
													"easeOutQuad",
													function() {}
												);
										});
								}),
						this
					);
				},
				scrollToTarget: function(e, i) {
					return (
						t("body").addClass("scrolling"),
						t("html, body").animate(
							{ scrollTop: t(e).offset().top - i },
							this.options.scrollDelay,
							this.options.scrollAnimation,
							function() {
								t("body").removeClass("scrolling");
							}
						),
						this
					);
				}
			}
		});
	}.apply(this, [window.bmm, jQuery]),
	function(e, t) {
		e = e || {};
		var i = !1;
		t.extend(e, {
			StickyHeader: {
				defaults: {
					wrapper: t("#header"),
					headerBody: t("#header .header-body"),
					headerStickyEnabled: !0,
					headerStickyBoxedEnable: !0,
					headerStickyMobileEnable: !0,
					headerStickyStart: 0,
					headerStickyStartElement: !1,
					headerStickySetTop: 0,
					headerStickyEffect: "",
					headerStickyHeaderContainerHeight: !1,
					headerStickyLogoChange: !1,
					headerStickyLogoChangeWrapper: !0
				},
				initialize: function(e, t) {
					return i
						? this
						: ((i = !0),
						  (this.$wrapper = e || this.defaults.wrapper),
						  this.setOptions(t)
								.build()
								.events(),
						  this);
				},
				setOptions: function(i) {
					return (
						(this.options = t.extend(!0, {}, this.defaults, i, e.fn.getOptions(this.$wrapper.data("plugin-options")))),
						this
					);
				},
				build: function() {
					if (
						(!this.options.headerStickyBoxedEnable && t("html").hasClass("boxed")) ||
						t("html").hasClass("sidebar-hamburger") ||
						!this.options.headerStickyEnabled
					)
						return this;
					var i = this,
						a = t("html"),
						n = t(window),
						o = a.hasClass("sidebar"),
						s = i.options.wrapper.find(".header-top").outerHeight(),
						r = i.options.wrapper.find(".header-container").outerHeight();
					if (
						(a.addClass("sticky-header-enabled"),
						parseInt(i.options.headerStickySetTop) < 0 && a.addClass("sticky-header-negative"),
						i.options.headerStickyStartElement)
					) {
						var d = t(i.options.headerStickyStartElement);
						t(window).on("scroll resize", function() {
							i.options.headerStickyStart = d.offset().top;
						}),
							t(window).trigger("resize");
					}
					i.options.wrapper.find(".header-top").get(0),
						o ||
							(t(".header-logo-sticky-change").get(0)
								? n.on("headerStickyLogoChange.loaded", function() {
										i.options.wrapper.css("height", i.options.headerBody.outerHeight());
								  })
								: i.options.wrapper.css("height", i.options.headerBody.outerHeight()),
							"shrink" == i.options.headerStickyEffect &&
								(t(document).ready(function() {
									n.scrollTop() >= i.options.headerStickyStart
										? i.options.wrapper
												.find(".header-container")
												.on("transitionend webkitTransitionEnd oTransitionEnd", function() {
													i.options.headerBody.css("position", "fixed");
												})
										: i.options.headerBody.css("position", "fixed");
								}),
								i.options.wrapper.find(".header-container").css("height", r),
								i.options.wrapper.find(".header-top").css("height", s))),
						i.options.headerStickyHeaderContainerHeight &&
							i.options.wrapper
								.find(".header-container")
								.css("height", i.options.wrapper.find(".header-container").outerHeight()),
						a.hasClass("boxed") &&
							"shrink" == i.options.headerStickyEffect &&
							(0 == parseInt(i.options.headerStickyStart) && n.width() > 991 && (i.options.headerStickyStart = 30),
							i.options.headerBody.css("position", "absolute"),
							n.on("scroll", function() {
								n.scrollTop() > t(".body").offset().top
									? i.options.headerBody.css({ position: "fixed", top: 0 })
									: i.options.headerBody.css({ position: "absolute", top: 0 });
							}));
					var h = !0,
						c = !1;
					if (
						((i.checkStickyHeader = function() {
							if (n.width() > 991 && a.hasClass("sidebar")) return a.removeClass("sticky-header-active"), void (h = !0);
							n.scrollTop() >= parseInt(i.options.headerStickyStart)
								? h && (i.activateStickyHeader(), (h = !1), (c = !0))
								: c && (i.deactivateStickyHeader(), (c = !1), (h = !0));
						}),
						(i.activateStickyHeader = function() {
							if (n.width() < 992) {
								if (!i.options.headerStickyMobileEnable) return void i.deactivateStickyHeader();
							} else if (o) return void i.deactivateStickyHeader();
							if (
								(a.addClass("sticky-header-active"),
								"reveal" == i.options.headerStickyEffect &&
									(i.options.headerBody.css("top", "-" + i.options.headerStickyStart + "px"),
									i.options.headerBody.animate({ top: i.options.headerStickySetTop }, 400, function() {})),
								"shrink" == i.options.headerStickyEffect)
							)
								if (
									(i.options.wrapper.find(".header-top").get(0) &&
										i.options.wrapper.find(".header-top").css({ height: 0, "min-height": 0, overflow: "hidden" }),
									i.options.headerStickyHeaderContainerHeight)
								)
									i.options.wrapper
										.find(".header-container")
										.css({ height: i.options.headerStickyHeaderContainerHeight, "min-height": 0 });
								else {
									i.options.wrapper.find(".header-container").css({ height: (r / 3) * 2, "min-height": 0 });
									var s = r - (r / 3) * 2;
									t(".body").css({ transform: "translate3d(0, -" + s + "px, 0)", transition: "ease transform 500ms" }),
										a.hasClass("boxed") && i.options.headerBody.css("position", "fixed");
								}
							i.options.headerBody.css("top", i.options.headerStickySetTop),
								i.options.headerStickyLogoChange && i.changeLogo(!0),
								t("[data-sticky-header-style]").each(function() {
									var i = t(this),
										a = e.fn.getOptions(i.data("sticky-header-style-active")),
										o = e.fn.getOptions(i.data("sticky-header-style"));
									n.width() > o.minResolution && i.css(a);
								}),
								t.event.trigger({ type: "stickyHeader.activate" });
						}),
						(i.deactivateStickyHeader = function() {
							a.removeClass("sticky-header-active"),
								"shrink" == i.options.headerStickyEffect &&
									(a.hasClass("boxed")
										? (i.options.headerBody.css("position", "absolute"),
										  n.scrollTop() > t(".body").offset().top && i.options.headerBody.css("position", "fixed"))
										: i.options.headerBody.css("position", "fixed"),
									i.options.wrapper.find(".header-top").get(0) &&
										i.options.wrapper.find(".header-top").css({ height: s, overflow: "visible" }),
									i.options.wrapper.find(".header-container").css({ height: r })),
								i.options.headerBody.css("top", 0),
								i.options.headerStickyLogoChange && i.changeLogo(!1),
								t("[data-sticky-header-style]").each(function() {
									var i = t(this),
										a = e.fn.getOptions(i.data("sticky-header-style-deactive")),
										o = e.fn.getOptions(i.data("sticky-header-style"));
									n.width() > o.minResolution && i.css(a);
								}),
								t.event.trigger({ type: "stickyHeader.deactivate" });
						}),
						parseInt(i.options.headerStickyStart) <= 0 && i.activateStickyHeader(),
						i.options.headerStickyLogoChange)
					) {
						var p = i.options.wrapper.find(".header-logo"),
							l = p.find("img"),
							u = l.attr("width"),
							f = l.attr("height"),
							g = parseInt(l.attr("data-sticky-top") ? l.attr("data-sticky-top") : 0),
							w = parseInt(l.attr("data-sticky-width") ? l.attr("data-sticky-width") : "auto"),
							m = parseInt(l.attr("data-sticky-height") ? l.attr("data-sticky-height") : "auto");
						i.options.headerStickyLogoChangeWrapper && p.css({ width: l.outerWidth(!0), height: l.outerHeight(!0) }),
							(i.changeLogo = function(e) {
								e ? l.css({ top: g, width: w, height: m }) : l.css({ top: 0, width: u, height: f });
							}),
							t.event.trigger({ type: "headerStickyLogoChange.loaded" });
					}
					var y,
						v = !1;
					return (
						(i.checkSideHeader = function() {
							n.width() < 992 && 0 == v && ((y = i.options.headerBody.height()), (v = !0)),
								0 == i.options.headerStickyStart && o && i.options.wrapper.css("min-height", 0),
								i.options.headerStickyStart > 0 && o && n.width() < 992 && i.options.wrapper.css("min-height", y);
						}),
						this
					);
				},
				events: function() {
					var e = this;
					return (!this.options.headerStickyBoxedEnable && t("body").hasClass("boxed")) ||
						t("html").hasClass("sidebar-hamburger") ||
						!this.options.headerStickyEnabled
						? this
						: (e.options.alwaysheaderStickyEnabled
								? e.activateStickyHeader()
								: t(window).on("scroll resize", function() {
										e.checkStickyHeader();
								  }),
						  t(window).on("load resize", function() {
								e.checkSideHeader();
						  }),
						  this);
				}
			}
		});
	}.apply(this, [window.bmm, jQuery]);
