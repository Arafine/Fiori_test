sap.ui.define([], function() {
	"use strict";

	return {
		/**
		 * Rounds the currency value to 2 digits
		 *
		 * @public
		 * @param {string} sValue value to be formatted
		 * @returns {string} formatted currency value with 2 digits
		 */
		floatParsing: function(sValue) {
			if (!sValue) {
				return "";
			}

			return parseFloat(sValue).toFixed(0);
		},
		quantityFormat: function(sValue) {
			if (sValue === "0.000") {
				return 0;
			}
			return parseFloat(sValue).toFixed(2);
		},
		pieceUnit: function(sValue) {
			if (!sValue) {
				return "";
			} else if (sValue === "ST") {
				return this.getResourceBundle().getText("masterPieceUnit");
			}
			return this.getResourceBundle().getText("masterPieceNoUnit");
		},
		quantityStatusText: function(sValue) {
			if (sValue === "0.000") {
				return this.getResourceBundle().getText("masterOutOfStock");
			}
			return this.getResourceBundle().getText("masterMatAvailable");
		},
		dateParse: function(oDate) {
			var dateFormat = sap.ui.core.format.DateFormat.getDateInstance({
				style: "medium"
			});
			return dateFormat.format(oDate);
		},
		sexFormat: function(iValue) {
			if (iValue === "1") {
				return this.getResourceBundle().getText("contactSexMale");
			} else if (iValue === "2") {
				return this.getResourceBundle().getText("contactSexFemale");
			} else {
				return iValue;
			}
		},
		languageFormat: function(sValue) {
			return sValue;
		}
	};
});