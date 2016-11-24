jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"btech/szkolenia/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"btech/szkolenia/test/integration/pages/App",
	"btech/szkolenia/test/integration/pages/Browser",
	"btech/szkolenia/test/integration/pages/Master",
	"btech/szkolenia/test/integration/pages/Detail",
	"btech/szkolenia/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "btech.szkolenia.view."
	});

	sap.ui.require([
		"btech/szkolenia/test/integration/NavigationJourneyPhone",
		"btech/szkolenia/test/integration/NotFoundJourneyPhone",
		"btech/szkolenia/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});