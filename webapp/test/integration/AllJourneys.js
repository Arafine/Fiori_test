jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 ProductsSet in the list

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
		"btech/szkolenia/test/integration/MasterJourney",
		"btech/szkolenia/test/integration/NavigationJourney",
		"btech/szkolenia/test/integration/NotFoundJourney",
		"btech/szkolenia/test/integration/BusyJourney",
		"btech/szkolenia/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});