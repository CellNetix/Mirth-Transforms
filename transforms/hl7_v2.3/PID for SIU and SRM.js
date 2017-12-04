// PID for SIU and SRM
var pid;
if (msg['PID'].length() > 0) {
	pid = [];
	var index = 0;
	for each (seg in msg.PID) {
		pid[index] = {};

		// PID.1, setId
		if (seg['PID.1']['PID.1.1'].toString() != "") {pid[index].setId = seg['PID.1']['PID.1.1']; }

		// PID.2, externalId
		pid[index].externalId = {};
		if (seg['PID.2']['PID.2.1'].toString() != "") { pid[index].externalId.id = seg['PID.2']['PID.2.1']; }
		if (seg['PID.2']['PID.2.2'].toString() != "") { pid[index].externalId.identifierCheckDigit = seg['PID.2']['PID.2.2']; }
		if (seg['PID.2']['PID.2.3'].toString() != "") { pid[index].externalId.codeIdentifyingCheckDigitScheme = seg['PID.2']['PID.2.3']; }
		pid[index].externalId.assigningAuthority = {};
		if (seg['PID.2']['PID.2.4']['PID.2.4.1'].toString() != "") { pid[index].externalId.assigningAuthority.namespaceId = seg['PID.2']['PID.2.4']['PID.2.4.1']; }
		if (seg['PID.2']['PID.2.4']['PID.2.4.2'].toString() != "") { pid[index].externalId.assigningAuthority.universalId = seg['PID.2']['PID.2.4']['PID.2.4.2']; }
		if (seg['PID.2']['PID.2.4']['PID.2.4.3'].toString() != "") { pid[index].externalId.assigningAuthority.universalIdType = seg['PID.2']['PID.2.4']['PID.2.4.3']; }
		if (Object.keys(pid[index].externalId.assigningAuthority).length == 0) {
			delete pid[index].externalId.assigningAuthority;
		}
		if (seg['PID.2']['PID.2.5'].toString() != "") { pid[index].externalId.idTypeCode = seg['PID.2']['PID.2.5']; }
		pid[index].externalId.assigningFacility = {};
		if (seg['PID.2']['PID.2.6']['PID.2.6.1'].toString() != "") { pid[index].externalId.assigningFacility.namespaceId = seg['PID.2']['PID.2.6']['PID.2.6.1']; }
		if (seg['PID.2']['PID.2.6']['PID.2.6.2'].toString() != "") { pid[index].externalId.assigningFacility.universalId = seg['PID.2']['PID.2.6']['PID.2.6.2']; }
		if (seg['PID.2']['PID.2.6']['PID.2.6.3'].toString() != "") { pid[index].externalId.assigningFacility.universalIdType = seg['PID.2']['PID.2.6']['PID.2.6.3']; }
		if (Object.keys(pid[index].externalId.assigningFacility).length == 0) {
			delete pid[index].externalId.assigningFacility;
		}
		if (Object.keys(pid[index].externalId).length == 0) {
			delete pid[index].externalId;
		}

		// PID.3, internalId
		pid[index].internalId = [];
		for each (field in seg['PID.3']) {
			var block = {};
			if (field['PID.3.1'].toString() != "") { block.id = field['PID.3.1']; }
			if (field['PID.3.2'].toString() != "") { block.identifierCheckDigit = field['PID.3.2']; }
			if (field['PID.3.3'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['PID.3.3']; }
			block.assigningAuthority = {};
			if (field['PID.3.4']['PID.3.4.1'].toString() != "") { block.assigningAuthority.namespaceId = field['PID.3.4']['PID.3.4.1']; }
			if (field['PID.3.4']['PID.3.4.2'].toString() != "") { block.assigningAuthority.universalId = field['PID.3.4']['PID.3.4.2']; }
			if (field['PID.3.4']['PID.3.4.3'].toString() != "") { block.assigningAuthority.universalIdType = field['PID.3.4']['PID.3.4.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				delete block.assigningAuthority;
			}
			if (field['PID.3.5'].toString() != "") { block.idTypeCode = field['PID.3.5']; }
			block.assigningFacility = {};
			if (field['PID.3.6']['PID.3.6.1'].toString() != "") { block.assigningFacility.namespaceId = field['PID.3.6']['PID.3.6.1']; }
			if (field['PID.3.6']['PID.3.6.2'].toString() != "") { block.assigningFacility.universalId = field['PID.3.6']['PID.3.6.2']; }
			if (field['PID.3.6']['PID.3.6.3'].toString() != "") { block.assigningFacility.universalIdType = field['PID.3.6']['PID.3.6.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				pid[index].internalId.push(block);
			}
		}
		if (pid[index].internalId.length == 0) {
			delete pid[index].internalId;
		}

		// PID.4, alternateId
		pid[index].alternateId = [];
		for each (field in seg['PID.4']) {
			var block = {};
			if (field['PID.4.1'].toString() != "") { block.id = field['PID.4.1']; }
			if (field['PID.4.2'].toString() != "") { block.identifierCheckDigit = field['PID.4.2']; }
			if (field['PID.4.3'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['PID.4.3']; }
			block.assigningAuthority = {};
			if (field['PID.4.4']['PID.4.4.1'].toString() != "") { block.assigningAuthority.namespaceId = field['PID.4.4']['PID.4.4.1']; }
			if (field['PID.4.4']['PID.4.4.2'].toString() != "") { block.assigningAuthority.universalId = field['PID.4.4']['PID.4.4.2']; }
			if (field['PID.4.4']['PID.4.4.3'].toString() != "") { block.assigningAuthority.universalIdType = field['PID.4.4']['PID.4.4.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				delete block.assigningAuthority;
			}
			if (field['PID.4.5'].toString() != "") { block.idTypeCode = field['PID.4.5']; }
			block.assigningFacility = {};
			if (field['PID.4.6']['PID.4.6.1'].toString() != "") { block.assigningFacility.namespaceId = field['PID.4.6']['PID.4.6.1']; }
			if (field['PID.4.6']['PID.4.6.2'].toString() != "") { block.assigningFacility.universalId = field['PID.4.6']['PID.4.6.2']; }
			if (field['PID.4.6']['PID.4.6.3'].toString() != "") { block.assigningFacility.universalIdType = field['PID.4.6']['PID.4.6.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				pid[index].alternateId.push(block);
			}
		}
		if (pid[index].alternateId.length == 0) {
			delete pid[index].alternateId;
		}

		// PID.5, patientName
		pid[index].patientName = [];
		for each (field in seg['PID.5']) {
			var block = {};
			if (field['PID.5.1'].toString() != "") { block.lastName = field['PID.5.1']; }
			if (field['PID.5.2'].toString() != "") { block.firstName = field['PID.5.2']; }
			if (field['PID.5.3'].toString() != "") { block.middleInitOrName = field['PID.5.3']; }
			if (field['PID.5.4'].toString() != "") { block.suffix = field['PID.5.4']; }
			if (field['PID.5.5'].toString() != "") { block.prefix = field['PID.5.5']; }
			if (field['PID.5.6'].toString() != "") { block.degree = field['PID.5.6']; }
			if (field['PID.5.7'].toString() != "") { block.nameTypeCode = field['PID.5.7']; }
			if (Object.keys(block).length > 0) {
				pid[index].patientName.push(block);
			}	
		}
		if (pid[index].patientName.length == 0) {
			delete pid[index].patientName;
		}

		// PID.6, mothersMaidenName
		pid[index].mothersMaidenName = {};
		if (seg['PID.6']['PID.6.1'].toString() != "") { pid[index].mothersMaidenName.lastName = seg['PID.6']['PID.6.1']; }
		if (seg['PID.6']['PID.6.2'].toString() != "") { pid[index].mothersMaidenName.firstName = seg['PID.6']['PID.6.2']; }
		if (seg['PID.6']['PID.6.3'].toString() != "") { pid[index].mothersMaidenName.middleInitOrName = seg['PID.6']['PID.6.3']; }
		if (seg['PID.6']['PID.6.4'].toString() != "") { pid[index].mothersMaidenName.suffix = seg['PID.6']['PID.6.4']; }
		if (seg['PID.6']['PID.6.5'].toString() != "") { pid[index].mothersMaidenName.prefix = seg['PID.6']['PID.6.5']; }
		if (seg['PID.6']['PID.6.6'].toString() != "") { pid[index].mothersMaidenName.degree = seg['PID.6']['PID.6.6']; }
		if (seg['PID.6']['PID.6.7'].toString() != "") { pid[index].mothersMaidenName.nameTypeCode = seg['PID.6']['PID.6.7']; }
		if (Object.keys(pid[index].mothersMaidenName).length == 0) {
			delete pid[index].mothersMaidenName;
		}

		// PID.7, dateTimeBirth
		if (seg['PID.7']['PID.7.1'].toString() != "") {pid[index].dateTimeBirth = seg['PID.7']['PID.7.1']; }
		
		// PID.8, sex
		if (seg['PID.8']['PID.8.1'].toString() != "") {pid[index].sex = seg['PID.8']['PID.8.1']; }
		
		// PID.9, alias
		pid[index].alias = [];
		for each (field in seg['PID.9']) {
			var block = {};
			if (field['PID.9.1'].toString() != "") { block.lastName = field['PID.9.1']; }
			if (field['PID.9.2'].toString() != "") { block.firstName = field['PID.9.2']; }
			if (field['PID.9.3'].toString() != "") { block.middleInitOrName = field['PID.9.3']; }
			if (field['PID.9.4'].toString() != "") { block.suffix = field['PID.9.4']; }
			if (field['PID.9.5'].toString() != "") { block.prefix = field['PID.9.5']; }
			if (field['PID.9.6'].toString() != "") { block.degree = field['PID.9.6']; }
			if (field['PID.9.7'].toString() != "") { block.nameTypeCode = field['PID.9.7']; }
			if (Object.keys(block).length > 0) {
				pid[index].alias.push(block);
			}	
		}
		if (pid[index].alias.length == 0) {
			delete pid[index].alias;
		}

		// PID.10, race
		if (seg['PID.10']['PID.10.1'].toString() != "") {pid[index].race = seg['PID.10']['PID.10.1']; }
		
		// PID.11, address
		pid[index].address = [];
		for each (field in seg['PID.11']) {
			var block = {};
			if (field['PID.11.1'].toString() != "") { block.streetAddress = field['PID.11.1']; }
			if (field['PID.11.2'].toString() != "") { block.otherDesignation = field['PID.11.2']; }
			if (field['PID.11.3'].toString() != "") { block.city = field['PID.11.3']; }
			if (field['PID.11.4'].toString() != "") { block.stateOrProvince = field['PID.11.4']; }
			if (field['PID.11.5'].toString() != "") { block.zip = field['PID.11.5']; }
			if (field['PID.11.6'].toString() != "") { block.country = field['PID.11.6']; }
			if (field['PID.11.7'].toString() != "") { block.addressType = field['PID.11.7']; }
			if (field['PID.11.8'].toString() != "") { block.otherGeographicDesignation = field['PID.11.8']; }
			if (field['PID.11.9'].toString() != "") { block.countyOrParishCode = field['PID.11.9']; }
			if (field['PID.11.10'].toString() != "") { block.censusTract = field['PID.11.10']; }
			if (Object.keys(block).length > 0) {
				pid[index].address.push(block);
			}
		}
		if (pid[index].address.length == 0) {
			delete pid[index].address;
		}

		// PID.12, countyCode
		if (seg['PID.12']['PID.12.1'].toString() != "") {pid[index].countyCode = seg['PID.12']['PID.12.1']; }
		
		// PID.13, homePhone
		pid[index].homePhone = [];
		for each (field in seg['PID.13']) {
			var block = {};
			if (field['PID.13.1'].toString() != "") { block.number = field['PID.13.1']; }
			if (field['PID.13.2'].toString() != "") { block.telecommunicationUseCode = field['PID.13.2']; }
			if (field['PID.13.3'].toString() != "") { block.telecommunicationEquipmentType = field['PID.13.3']; }
			if (field['PID.13.4'].toString() != "") { block.emailAddress = field['PID.13.4']; }
			if (field['PID.13.5'].toString() != "") { block.countryCode = field['PID.13.5']; }
			if (field['PID.13.6'].toString() != "") { block.areaCityCode = field['PID.13.6']; }
			if (field['PID.13.7'].toString() != "") { block.phoneNumber = field['PID.13.7']; }
			if (field['PID.13.8'].toString() != "") { block.extension = field['PID.13.8']; }
			if (field['PID.13.9'].toString() != "") { block.text = field['PID.13.9']; }
			if (Object.keys(block).length > 0) {
				pid[index].homePhone.push(block);
			}
		}
		if (pid[index].homePhone.length == 0) {
			delete pid[index].homePhone;
		}

		// PID.14, businessPhone
		pid[index].businessPhone = [];
		for each (field in seg['PID.14']) {
			var block = {};
			if (field['PID.14.1'].toString() != "") { block.number = field['PID.14.1']; }
			if (field['PID.14.2'].toString() != "") { block.telecommunicationUseCode = field['PID.14.2']; }
			if (field['PID.14.3'].toString() != "") { block.telecommunicationEquipmentType = field['PID.14.3']; }
			if (field['PID.14.4'].toString() != "") { block.emailAddress = field['PID.14.4']; }
			if (field['PID.14.5'].toString() != "") { block.countryCode = field['PID.14.5']; }
			if (field['PID.14.6'].toString() != "") { block.areaCityCode = field['PID.14.6']; }
			if (field['PID.14.7'].toString() != "") { block.phoneNumber = field['PID.14.7']; }
			if (field['PID.14.8'].toString() != "") { block.extension = field['PID.14.8']; }
			if (field['PID.14.9'].toString() != "") { block.text = field['PID.14.9']; }
			if (Object.keys(block).length > 0) {
				pid[index].businessPhone.push(block);
			}
		}
		if (pid[index].businessPhone.length == 0) {
			delete pid[index].businessPhone;
		}

		// PID.15, primaryLanguage
		pid[index].primaryLanguage = {};
		if (seg['PID.15']['PID.15.1'].toString() != "") { pid[index].primaryLanguage.id = seg['PID.15']['PID.15.1']; }
		if (seg['PID.15']['PID.15.2'].toString() != "") { pid[index].primaryLanguage.text = seg['PID.15']['PID.15.2']; }
		if (seg['PID.15']['PID.15.3'].toString() != "") { pid[index].primaryLanguage.codingSystem = seg['PID.15']['PID.15.3']; }
		if (seg['PID.15']['PID.15.4'].toString() != "") { pid[index].primaryLanguage.altId = seg['PID.15']['PID.15.4']; }
		if (seg['PID.15']['PID.15.5'].toString() != "") { pid[index].primaryLanguage.altText = seg['PID.15']['PID.15.5']; }
		if (seg['PID.15']['PID.15.6'].toString() != "") { pid[index].primaryLanguage.altCodingSystem = seg['PID.15']['PID.15.6']; }
		if (Object.keys(pid[index].primaryLanguage).length == 0) {
			delete pid[index].primaryLanguage;
		}

		// PID.16, maritalStatus
		if (seg['PID.16']['PID.16.1'].toString() != "") {pid[index].maritalStatus = seg['PID.16']['PID.16.1']; }
		
		// PID.17, religion
		if (seg['PID.17']['PID.17.1'].toString() != "") {pid[index].religion = seg['PID.17']['PID.17.1']; }

		// PID.18, patientAccountNumber
		pid[index].patientAccountNumber = {};
		if (seg['PID.18']['PID.18.1'].toString() != "") { pid[index].patientAccountNumber.id = seg['PID.18']['PID.18.1']; }
		if (seg['PID.18']['PID.18.2'].toString() != "") { pid[index].patientAccountNumber.identifierCheckDigit = seg['PID.18']['PID.18.2']; }
		if (seg['PID.18']['PID.18.3'].toString() != "") { pid[index].patientAccountNumber.codeIdentifyingCheckDigitScheme = seg['PID.18']['PID.18.3']; }
		pid[index].patientAccountNumber.assigningAuthority = {};
		if (seg['PID.18']['PID.18.4']['PID.18.4.1'].toString() != "") { pid[index].patientAccountNumber.assigningAuthority.namespaceId = seg['PID.18']['PID.18.4']['PID.18.4.1']; }
		if (seg['PID.18']['PID.18.4']['PID.18.4.2'].toString() != "") { pid[index].patientAccountNumber.assigningAuthority.universalId = seg['PID.18']['PID.18.4']['PID.18.4.2']; }
		if (seg['PID.18']['PID.18.4']['PID.18.4.3'].toString() != "") { pid[index].patientAccountNumber.assigningAuthority.universalIdType = seg['PID.18']['PID.18.4']['PID.18.4.3']; }
		if (Object.keys(pid[index].patientAccountNumber.assigningAuthority).length == 0) {
			delete pid[index].patientAccountNumber.assigningAuthority;
		}
		if (seg['PID.18']['PID.18.5'].toString() != "") { pid[index].patientAccountNumber.idTypeCode = seg['PID.18']['PID.18.5']; }
		pid[index].patientAccountNumber.assigningFacility = {};
		if (seg['PID.18']['PID.18.6']['PID.18.6.1'].toString() != "") { pid[index].patientAccountNumber.assigningFacility.namespaceId = seg['PID.18']['PID.18.6']['PID.18.6.1']; }
		if (seg['PID.18']['PID.18.6']['PID.18.6.2'].toString() != "") { pid[index].patientAccountNumber.assigningFacility.universalId = seg['PID.18']['PID.18.6']['PID.18.6.2']; }
		if (seg['PID.18']['PID.18.6']['PID.18.6.3'].toString() != "") { pid[index].patientAccountNumber.assigningFacility.universalIdType = seg['PID.18']['PID.18.6']['PID.18.6.3']; }
		if (Object.keys(pid[index].patientAccountNumber.assigningFacility).length == 0) {
			delete pid[index].patientAccountNumber.assigningFacility;
		}
		if (Object.keys(pid[index].patientAccountNumber).length == 0) {
			delete pid[index].patientAccountNumber;
		}

		// PID.19, ssn
		if (seg['PID.19']['PID.19.1'].toString() != "") {pid[index].ssn = seg['PID.19']['PID.19.1']; }
		
		// PID.20, driversLicenseNumber
		pid[index].driversLicenseNumber = {};
		if (seg['PID.20']['PID.20.1'].toString() != "") {pid[index].driversLicenseNumber.licenseNumber = seg['PID.20']['PID.20.1']; }
		if (seg['PID.20']['PID.20.2'].toString() != "") {pid[index].driversLicenseNumber.issuingStateProvinceCountry = seg['PID.20']['PID.20.2']; }
		if (seg['PID.20']['PID.20.3'].toString() != "") {pid[index].driversLicenseNumber.expirationDate = seg['PID.20']['PID.20.3']; }
		if (Object.keys(pid[index].driversLicenseNumber).length == 0) {
			delete pid[index].driversLicenseNumber;
		}

		// PID.21, mothersId
		pid[index].mothersId = [];
		for each (field in seg['PID.21']) {
			var block = {};
			if (field['PID.21.1'].toString() != "") { block.id = field['PID.21.1']; }
			if (field['PID.21.2'].toString() != "") { block.identifierCheckDigit = field['PID.21.2']; }
			if (field['PID.21.3'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['PID.21.3']; }
			block.assigningAuthority = {};
			if (field['PID.21.4']['PID.21.4.1'].toString() != "") { block.assigningAuthority.namespaceId = field['PID.21.4']['PID.21.4.1']; }
			if (field['PID.21.4']['PID.21.4.2'].toString() != "") { block.assigningAuthority.universalId = field['PID.21.4']['PID.21.4.2']; }
			if (field['PID.21.4']['PID.21.4.3'].toString() != "") { block.assigningAuthority.universalIdType = field['PID.21.4']['PID.21.4.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				delete block.assigningAuthority;
			}
			if (field['PID.21.5'].toString() != "") { block.idTypeCode = field['PID.21.5']; }
			block.assigningFacility = {};
			if (field['PID.21.6']['PID.21.6.1'].toString() != "") { block.assigningFacility.namespaceId = field['PID.21.6']['PID.21.6.1']; }
			if (field['PID.21.6']['PID.21.6.2'].toString() != "") { block.assigningFacility.universalId = field['PID.21.6']['PID.21.6.2']; }
			if (field['PID.21.6']['PID.21.6.3'].toString() != "") { block.assigningFacility.universalIdType = field['PID.21.6']['PID.21.6.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				pid[index].mothersId.push(block);
			}
		}
		if (pid[index].mothersId.length == 0) {
			delete pid[index].mothersId;
		}

		// PID.22, ethnicGroup
		if (seg['PID.22']['PID.22.1'].toString() != "") {pid[index].ethnicGroup = seg['PID.22']['PID.22.1']; }
		
		// PID.23, birthPlace
		if (seg['PID.23']['PID.23.1'].toString() != "") {pid[index].birthPlace = seg['PID.23']['PID.23.1']; }
		
		// PID.24, multipleBirthIndicator
		if (seg['PID.24']['PID.24.1'].toString() != "") {pid[index].multipleBirthIndicator = seg['PID.24']['PID.24.1']; }
		
		// PID.25, birthOrder
		if (seg['PID.25']['PID.25.1'].toString() != "") {pid[index].birthOrder = seg['PID.25']['PID.25.1']; }
		
		// PID.26, citizenship
		pid[index].citizenship = [];
		for each (field in seg['PID.26']) {
			if (field['PID.26.1'].toString() != "") {
				pid[index].citizenship.push(field['PID.26.1']);
			}
		}
		if (pid[index].citizenship.length == 0) {
			delete pid[index].citizenship;
		}
		
		// PID.27, veteranStatus
		pid[index].veteranStatus = {};
		if (seg['PID.27']['PID.27.1'].toString() != "") { pid[index].veteranStatus.id = seg['PID.27']['PID.27.1']; }
		if (seg['PID.27']['PID.27.2'].toString() != "") { pid[index].veteranStatus.text = seg['PID.27']['PID.27.2']; }
		if (seg['PID.27']['PID.27.3'].toString() != "") { pid[index].veteranStatus.codingSystem = seg['PID.27']['PID.27.3']; }
		if (seg['PID.27']['PID.27.4'].toString() != "") { pid[index].veteranStatus.altId = seg['PID.27']['PID.27.4']; }
		if (seg['PID.27']['PID.27.5'].toString() != "") { pid[index].veteranStatus.altText = seg['PID.27']['PID.27.5']; }
		if (seg['PID.27']['PID.27.6'].toString() != "") { pid[index].veteranStatus.altCodingSystem = seg['PID.27']['PID.27.6']; }
		if (Object.keys(pid[index].veteranStatus).length == 0) {
			delete pid[index].veteranStatus;
		}

		// PID.28, nationality
		pid[index].nationality = {};
		if (seg['PID.28']['PID.28.1'].toString() != "") { pid[index].nationality.id = seg['PID.28']['PID.28.1']; }
		if (seg['PID.28']['PID.28.2'].toString() != "") { pid[index].nationality.text = seg['PID.28']['PID.28.2']; }
		if (seg['PID.28']['PID.28.3'].toString() != "") { pid[index].nationality.codingSystem = seg['PID.28']['PID.28.3']; }
		if (seg['PID.28']['PID.28.4'].toString() != "") { pid[index].nationality.altId = seg['PID.28']['PID.28.4']; }
		if (seg['PID.28']['PID.28.5'].toString() != "") { pid[index].nationality.altText = seg['PID.28']['PID.28.5']; }
		if (seg['PID.28']['PID.28.6'].toString() != "") { pid[index].nationality.altCodingSystem = seg['PID.28']['PID.28.6']; }
		if (Object.keys(pid[index].nationality).length == 0) {
			delete pid[index].nationality;
		}

		// PID.29, deathDateTime
		if (seg['PID.29']['PID.29.1'].toString() != "") {pid[index].deathDateTime = seg['PID.29']['PID.29.1']; }
		
		// PID.30, deathIndicator
		if (seg['PID.30']['PID.30.1'].toString() != "") {pid[index].deathIndicator = seg['PID.30']['PID.30.1']; }
		
		// PD1 (PID)
		var pd1Group = getSegmentsAfter(msg,seg,'PD1',true);
		if (pd1Group.length > 0) {
			pid[index].PD1 = [];
			var indexPD1 = 0;
			for each (pd1Seg in pd1Group) {
				pid[index].PD1[indexPD1] = {};

				// PD1.1, livingDependency
				pid[index].PD1[indexPD1].livingDependency = [];
				for each (field in pd1Seg['PD1.1']) {
					if (field['PD1.1.1'].toString() != "") {
						pid[index].PD1[indexPD1].livingDependency.push(field['PD1.1.1']);
					}
				}
				if (pid[index].PD1[indexPD1].livingDependency.length == 0) {
					delete pid[index].PD1[indexPD1].livingDependency;
				}
				
				// PD1.2, livingArrangement
				if (pd1Seg['PD1.2']['PD1.2.1'].toString() != "") { pid[index].PD1[indexPD1].livingArrangement = pd1Seg['PD1.2']['PD1.2.1']; }

				// PD1.3, patientPrimaryFacility
				pid[index].PD1[indexPD1].patientPrimaryFacility = [];
				for each (field in pd1Seg['PD1.3']) {
					var block = {};
					if (field['PD1.3.1'].toString() != "") { block.organizationName = field['PD1.3.1']; }
					if (field['PD1.3.2'].toString() != "") { block.organizationNameTypeCode = field['PD1.3.2']; }
					if (field['PD1.3.3'].toString() != "") { block.idNumber = field['PD1.3.3']; }
					if (field['PD1.3.4'].toString() != "") { block.identifierCheckDigit = field['PD1.3.4']; }
					if (field['PD1.3.5'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['PD1.3.5']; }
					block.assigningAuthority = {};
					if (field['PD1.3.6']['PD1.3.6.1'].toString() != "") { block.assigningAuthority.namespaceId = field['PD1.3.6']['PD1.3.6.1']; }
					if (field['PD1.3.6']['PD1.3.6.2'].toString() != "") { block.assigningAuthority.universalId = field['PD1.3.6']['PD1.3.6.2']; }
					if (field['PD1.3.6']['PD1.3.6.3'].toString() != "") { block.assigningAuthority.universalIdType = field['PD1.3.6']['PD1.3.6.3']; }
					if (Object.keys(block.assigningAuthority).length == 0) {
						delete block.assigningAuthority;
					}
					if (field['PD1.3.7'].toString() != "") { block.idTypeCode = field['PD1.3.7']; }
					block.assigningFacility = {};
					if (field['PD1.3.8']['PD1.3.8.1'].toString() != "") { block.assigningFacility.namespaceId = field['PD1.3.8']['PD1.3.8.1']; }
					if (field['PD1.3.8']['PD1.3.8.2'].toString() != "") { block.assigningFacility.universalId = field['PD1.3.8']['PD1.3.8.2']; }
					if (field['PD1.3.8']['PD1.3.8.3'].toString() != "") { block.assigningFacility.universalIdType = field['PD1.3.8']['PD1.3.8.3']; }
					if (Object.keys(block.assigningFacility).length == 0) {
						delete block.assigningFacility;
					}
					if (Object.keys(block).length > 0) {
						pid[index].PD1[indexPD1].patientPrimaryFacility.push(block);
					}
				}
				if (pid[index].PD1[indexPD1].patientPrimaryFacility.length == 0) {
					delete pid[index].PD1[indexPD1].patientPrimaryFacility;
				}

				// PD1.4, primaryCareProvider
				pid[index].PD1[indexPD1].primaryCareProvider = [];
				for each (field in pd1Seg['PD1.4']) {
					var block = {};
					if (field['PD1.4.1'].toString() != "") { block.id = field['PD1.4.1']; }
					if (field['PD1.4.2'].toString() != "") { block.lastName = field['PD1.4.2']; }
					if (field['PD1.4.3'].toString() != "") { block.firstName = field['PD1.4.3']; }
					if (field['PD1.4.4'].toString() != "") { block.middleInitOrName = field['PD1.4.4']; }
					if (field['PD1.4.5'].toString() != "") { block.suffix = field['PD1.4.5']; }
					if (field['PD1.4.6'].toString() != "") { block.prefix = field['PD1.4.6']; }
					if (field['PD1.4.7'].toString() != "") { block.degree = field['PD1.4.7']; }
					if (field['PD1.4.8'].toString() != "") { block.sourceTable = field['PD1.4.8']; }
					block.assigningAuthority = {};
					if (field['PD1.4.9']['PD1.4.9.1'].toString() != "") { block.assigningAuthority.id = field['PD1.4.9']['PD1.4.9.1']; }
					if (field['PD1.4.9']['PD1.4.9.2'].toString() != "") { block.assigningAuthority.universalId = field['PD1.4.9']['PD1.4.9.2']; }
					if (field['PD1.4.9']['PD1.4.9.3'].toString() != "") { block.assigningAuthority.universalIdType = field['PD1.4.9']['PD1.4.9.3']; }
					if (Object.keys(block.assigningAuthority).length == 0) {
						delete block.assigningAuthority;
					}
					if (field['PD1.4.10'].toString() != "") { block.nameTypeCode = field['PD1.4.10']; }
					if (field['PD1.4.11'].toString() != "") { block.identifierCheckDigit = field['PD1.4.11']; }
					if (field['PD1.4.12'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['PD1.4.12']; }
					if (field['PD1.4.13'].toString() != "") { block.identifierTypeCode = field['PD1.4.13']; }
					block.assigningFacility = {};
					if (field['PD1.4.14']['PD1.4.14.1'].toString() != "") { block.assigningFacility.id = field['PD1.4.14']['PD1.4.14.1']; }
					if (field['PD1.4.14']['PD1.4.14.2'].toString() != "") { block.assigningFacility.universalId = field['PD1.4.14']['PD1.4.14.2']; }
					if (field['PD1.4.14']['PD1.4.14.3'].toString() != "") { block.assigningFacility.universalIdType = field['PD1.4.14']['PD1.4.14.3']; }
					if (Object.keys(block.assigningFacility).length == 0) {
						delete block.assigningFacility;
					}
					if (Object.keys(block).length > 0) {
						pid[index].PD1[indexPD1].primaryCareProvider.push(block);
					}
				}
				if (pid[index].PD1[indexPD1].primaryCareProvider.length == 0) {
					delete pid[index].PD1[indexPD1].primaryCareProvider;
				}

				// PD1.5, studentIndicator
				if (pd1Seg['PD1.5']['PD1.5.1'].toString() != "") { pid[index].PD1[indexPD1].studentIndicator = pd1Seg['PD1.5']['PD1.5.1']; }
				
				// PD1.6, handicap
				if (pd1Seg['PD1.6']['PD1.6.1'].toString() != "") { pid[index].PD1[indexPD1].handicap = pd1Seg['PD1.6']['PD1.6.1']; }
				
				// PD1.7, livingWillCode
				if (pd1Seg['PD1.7']['PD1.7.1'].toString() != "") { pid[index].PD1[indexPD1].livingWillCode = pd1Seg['PD1.7']['PD1.7.1']; }
				
				// PD1.8, organDonorCode
				if (pd1Seg['PD1.8']['PD1.8.1'].toString() != "") { pid[index].PD1[indexPD1].organDonorCode = pd1Seg['PD1.8']['PD1.8.1']; }
				
				// PD1.9, separateBill
				if (pd1Seg['PD1.9']['PD1.9.1'].toString() != "") { pid[index].PD1[indexPD1].separateBill = pd1Seg['PD1.9']['PD1.9.1']; }
				
				// PD1.10, duplicatePatient
				pid[index].PD1[indexPD1].duplicatePatient = [];
				for each (field in pd1Seg['PD1.10']) {
					var block = {};
					if (field['PD1.10.1'].toString() != "") { block.id = field['PD1.10.1']; }
					if (field['PD1.10.2'].toString() != "") { block.identifierCheckDigit = field['PD1.10.2']; }
					if (field['PD1.10.3'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['PD1.10.3']; }
					block.assigningAuthority = {};
					if (field['PD1.10.4']['PD1.10.4.1'].toString() != "") { block.assigningAuthority.namespaceId = field['PD1.10.4']['PD1.10.4.1']; }
					if (field['PD1.10.4']['PD1.10.4.2'].toString() != "") { block.assigningAuthority.universalId = field['PD1.10.4']['PD1.10.4.2']; }
					if (field['PD1.10.4']['PD1.10.4.3'].toString() != "") { block.assigningAuthority.universalIdType = field['PD1.10.4']['PD1.10.4.3']; }
					if (Object.keys(block.assigningAuthority).length == 0) {
						delete block.assigningAuthority;
					}
					if (field['PD1.10.5'].toString() != "") { block.idTypeCode = field['PD1.10.5']; }
					block.assigningFacility = {};
					if (field['PD1.10.6']['PD1.10.6.1'].toString() != "") { block.assigningFacility.namespaceId = field['PD1.10.6']['PD1.10.6.1']; }
					if (field['PD1.10.6']['PD1.10.6.2'].toString() != "") { block.assigningFacility.universalId = field['PD1.10.6']['PD1.10.6.2']; }
					if (field['PD1.10.6']['PD1.10.6.3'].toString() != "") { block.assigningFacility.universalIdType = field['PD1.10.6']['PD1.10.6.3']; }
					if (Object.keys(block.assigningFacility).length == 0) {
						delete block.assigningFacility;
					}
					if (Object.keys(block).length > 0) {
						pid[index].PD1[indexPD1].duplicatePatient.push(block);
					}
				}
				if (pid[index].PD1[indexPD1].duplicatePatient.length == 0) {
					delete pid[index].PD1[indexPD1].duplicatePatient;
				}

				// PD1.11, publicityIndicator
				pid[index].PD1[indexPD1].publicityIndicator = {};
				if (pd1Seg['PD1.11']['PD1.11.1'].toString() != "") { pid[index].PD1[indexPD1].publicityIndicator.id = pd1Seg['PD1.11']['PD1.11.1']; }
				if (pd1Seg['PD1.11']['PD1.11.2'].toString() != "") { pid[index].PD1[indexPD1].publicityIndicator.text = pd1Seg['PD1.11']['PD1.11.2']; }
				if (pd1Seg['PD1.11']['PD1.11.3'].toString() != "") { pid[index].PD1[indexPD1].publicityIndicator.codingSystem = pd1Seg['PD1.11']['PD1.11.3']; }
				if (pd1Seg['PD1.11']['PD1.11.4'].toString() != "") { pid[index].PD1[indexPD1].publicityIndicator.altId = pd1Seg['PD1.11']['PD1.11.4']; }
				if (pd1Seg['PD1.11']['PD1.11.5'].toString() != "") { pid[index].PD1[indexPD1].publicityIndicator.altText = pd1Seg['PD1.11']['PD1.11.5']; }
				if (pd1Seg['PD1.11']['PD1.11.6'].toString() != "") { pid[index].PD1[indexPD1].publicityIndicator.altCodingSystem = pd1Seg['PD1.11']['PD1.11.6']; }
				if (Object.keys(pid[index].PD1[indexPD1].publicityIndicator).length == 0) {
					delete pid[index].PD1[indexPD1].publicityIndicator;
				}
				
				// PD1.12, protectionIndicator
				if (pd1Seg['PD1.12']['PD1.12.1'].toString() != "") { pid[index].PD1[indexPD1].protectionIndicator = pd1Seg['PD1.12']['PD1.12.1']; }

				// clean up PD1 and increment index
				if (Object.keys(pid[index].PD1[indexPD1]).length == 0) {
					delete pid[index].PD1[indexPD1];
				} else {
					indexPD1++;
				}
			}
		}

		// PV1 (PID)
		var pv1Group = getSegmentsAfter(msg,seg,'PV1',false);
		if (pv1Group.length > 0 && pid) {
			pid[index].PV1 = [];
			var indexPV1 = 0;
			for each (pv1Seg in pv1Group) {
				pid[index].PV1[indexPV1] = {};
		
				// PV1.1, setId
				if (pv1Seg['PV1.1']['PV1.1.1'].toString() != "") { pid[index].PV1[indexPV1].setId = pv1Seg['PV1.1']['PV1.1.1']; }
		
				// PV1.2, patientClass
				if (pv1Seg['PV1.2']['PV1.2.1'].toString() != "") { pid[index].PV1[indexPV1].patientClass = pv1Seg['PV1.2']['PV1.2.1']; }
		
				// PV1.3, assignedPatientLocation
				pid[index].PV1[indexPV1].assignedPatientLocation = {};
				if (pv1Seg['PV1.3']['PV1.3.1'].toString() != "") { pid[index].PV1[indexPV1].assignedPatientLocation.pointOfCare = pv1Seg['PV1.3']['PV1.3.1']; }
				if (pv1Seg['PV1.3']['PV1.3.2'].toString() != "") { pid[index].PV1[indexPV1].assignedPatientLocation.room = pv1Seg['PV1.3']['PV1.3.2']; }
				if (pv1Seg['PV1.3']['PV1.3.3'].toString() != "") { pid[index].PV1[indexPV1].assignedPatientLocation.bed = pv1Seg['PV1.3']['PV1.3.3']; }
				pid[index].PV1[indexPV1].assignedPatientLocation.facility = {};
				if (pv1Seg['PV1.3']['PV1.3.4']['PV1.3.4.1'].toString() != "") { pid[index].PV1[indexPV1].assignedPatientLocation.facility.nameSpaceId =  pv1Seg['PV1.3']['PV1.3.4']['PV1.3.4.1']; }
				if (pv1Seg['PV1.3']['PV1.3.4']['PV1.3.4.2'].toString() != "") { pid[index].PV1[indexPV1].assignedPatientLocation.facility.universalId =  pv1Seg['PV1.3']['PV1.3.4']['PV1.3.4.2']; }
				if (pv1Seg['PV1.3']['PV1.3.4']['PV1.3.4.3'].toString() != "") { pid[index].PV1[indexPV1].assignedPatientLocation.facility.universalIdType =  pv1Seg['PV1.3']['PV1.3.4']['PV1.3.4.3']; }
				if (Object.keys(pid[index].PV1[indexPV1].assignedPatientLocation.facility).length == 0) {
					delete pid[index].PV1[indexPV1].assignedPatientLocation.facility;
				}
				if (pv1Seg['PV1.3']['PV1.3.5'].toString() != "") { pid[index].PV1[indexPV1].assignedPatientLocation.locationStatus = pv1Seg['PV1.3']['PV1.3.5']; }
				if (pv1Seg['PV1.3']['PV1.3.6'].toString() != "") { pid[index].PV1[indexPV1].assignedPatientLocation.personLocationType = pv1Seg['PV1.3']['PV1.3.6']; }
				if (pv1Seg['PV1.3']['PV1.3.7'].toString() != "") { pid[index].PV1[indexPV1].assignedPatientLocation.building = pv1Seg['PV1.3']['PV1.3.7']; }
				if (pv1Seg['PV1.3']['PV1.3.8'].toString() != "") { pid[index].PV1[indexPV1].assignedPatientLocation.floor = pv1Seg['PV1.3']['PV1.3.8']; }
				if (pv1Seg['PV1.3']['PV1.3.9'].toString() != "") { pid[index].PV1[indexPV1].assignedPatientLocation.locationDescription = pv1Seg['PV1.3']['PV1.3.9']; }
				if (Object.keys(pid[index].PV1[indexPV1].assignedPatientLocation).length == 0) {
					delete pid[index].PV1[indexPV1].assignedPatientLocation;
				}
		
				// PV1.4, admissionType
				if (pv1Seg['PV1.4']['PV1.4.1'].toString() != "") { pid[index].PV1[indexPV1].admissionType = pv1Seg['PV1.4']['PV1.4.1']; }
		
				// PV1.5, preadmitNumber
				pid[index].PV1[indexPV1].preadmitNumber = {};
				if (pv1Seg['PV1.5']['PV1.5.1'].toString() != "") { pid[index].PV1[indexPV1].preadmitNumber.id = pv1Seg['PV1.5']['PV1.5.1']; }
				if (pv1Seg['PV1.5']['PV1.5.2'].toString() != "") { pid[index].PV1[indexPV1].preadmitNumber.identifierCheckDigit = pv1Seg['PV1.5']['PV1.5.2']; }
				if (pv1Seg['PV1.5']['PV1.5.3'].toString() != "") { pid[index].PV1[indexPV1].preadmitNumber.codeIdentifyingCheckDigitScheme = pv1Seg['PV1.5']['PV1.5.3']; }
				pid[index].PV1[indexPV1].preadmitNumber.assigningAuthority = {};
				if (pv1Seg['PV1.5']['PV1.5.4']['PV1.5.4.1'].toString() != "") { pid[index].PV1[indexPV1].preadmitNumber.assigningAuthority.namespaceId = pv1Seg['PV1.5']['PV1.5.4']['PV1.5.4.1']; }
				if (pv1Seg['PV1.5']['PV1.5.4']['PV1.5.4.2'].toString() != "") { pid[index].PV1[indexPV1].preadmitNumber.assigningAuthority.universalId = pv1Seg['PV1.5']['PV1.5.4']['PV1.5.4.2']; }
				if (pv1Seg['PV1.5']['PV1.5.4']['PV1.5.4.3'].toString() != "") { pid[index].PV1[indexPV1].preadmitNumber.assigningAuthority.universalIdType = pv1Seg['PV1.5']['PV1.5.4']['PV1.5.4.3']; }
				if (Object.keys(pid[index].PV1[indexPV1].preadmitNumber.assigningAuthority).length == 0) {
					delete pid[index].PV1[indexPV1].preadmitNumber.assigningAuthority;
				}
				if (pv1Seg['PV1.5']['PV1.5.5'].toString() != "") { pid[index].PV1[indexPV1].preadmitNumber.idTypeCode = pv1Seg['PV1.5']['PV1.5.5']; }
				pid[index].PV1[indexPV1].preadmitNumber.assigningFacility = {};
				if (pv1Seg['PV1.5']['PV1.5.6']['PV1.5.6.1'].toString() != "") { pid[index].PV1[indexPV1].preadmitNumber.assigningFacility.namespaceId = pv1Seg['PV1.5']['PV1.5.6']['PV1.5.6.1']; }
				if (pv1Seg['PV1.5']['PV1.5.6']['PV1.5.6.2'].toString() != "") { pid[index].PV1[indexPV1].preadmitNumber.assigningFacility.universalId = pv1Seg['PV1.5']['PV1.5.6']['PV1.5.6.2']; }
				if (pv1Seg['PV1.5']['PV1.5.6']['PV1.5.6.3'].toString() != "") { pid[index].PV1[indexPV1].preadmitNumber.assigningFacility.universalIdType = pv1Seg['PV1.5']['PV1.5.6']['PV1.5.6.3']; }
				if (Object.keys(pid[index].PV1[indexPV1].preadmitNumber.assigningFacility).length == 0) {
					delete pid[index].PV1[indexPV1].preadmitNumber.assigningFacility;
				}
				if (Object.keys(pid[index].PV1[indexPV1].preadmitNumber).length == 0) {
					delete pid[index].PV1[indexPV1].preadmitNumber;
				}
		
				// PV1.6, priorPatientLocation
				pid[index].PV1[indexPV1].priorPatientLocation = {};
				if (pv1Seg['PV1.6']['PV1.6.1'].toString() != "") { pid[index].PV1[indexPV1].priorPatientLocation.pointOfCare = pv1Seg['PV1.6']['PV1.6.1']; }
				if (pv1Seg['PV1.6']['PV1.6.2'].toString() != "") { pid[index].PV1[indexPV1].priorPatientLocation.room = pv1Seg['PV1.6']['PV1.6.2']; }
				if (pv1Seg['PV1.6']['PV1.6.3'].toString() != "") { pid[index].PV1[indexPV1].priorPatientLocation.bed = pv1Seg['PV1.6']['PV1.6.3']; }
				pid[index].PV1[indexPV1].priorPatientLocation.facility = {};
				if (pv1Seg['PV1.6']['PV1.6.4']['PV1.6.4.1'].toString() != "") { pid[index].PV1[indexPV1].priorPatientLocation.facility.nameSpaceId =  pv1Seg['PV1.6']['PV1.6.4']['PV1.6.4.1']; }
				if (pv1Seg['PV1.6']['PV1.6.4']['PV1.6.4.2'].toString() != "") { pid[index].PV1[indexPV1].priorPatientLocation.facility.universalId =  pv1Seg['PV1.6']['PV1.6.4']['PV1.6.4.2']; }
				if (pv1Seg['PV1.6']['PV1.6.4']['PV1.6.4.3'].toString() != "") { pid[index].PV1[indexPV1].priorPatientLocation.facility.universalIdType =  pv1Seg['PV1.6']['PV1.6.4']['PV1.6.4.3']; }
				if (Object.keys(pid[index].PV1[indexPV1].priorPatientLocation.facility).length == 0) {
					delete pid[index].PV1[indexPV1].priorPatientLocation.facility;
				}
				if (pv1Seg['PV1.6']['PV1.6.5'].toString() != "") { pid[index].PV1[indexPV1].priorPatientLocation.locationStatus = pv1Seg['PV1.6']['PV1.6.5']; }
				if (pv1Seg['PV1.6']['PV1.6.6'].toString() != "") { pid[index].PV1[indexPV1].priorPatientLocation.personLocationType = pv1Seg['PV1.6']['PV1.6.6']; }
				if (pv1Seg['PV1.6']['PV1.6.7'].toString() != "") { pid[index].PV1[indexPV1].priorPatientLocation.building = pv1Seg['PV1.6']['PV1.6.7']; }
				if (pv1Seg['PV1.6']['PV1.6.8'].toString() != "") { pid[index].PV1[indexPV1].priorPatientLocation.floor = pv1Seg['PV1.6']['PV1.6.8']; }
				if (pv1Seg['PV1.6']['PV1.6.9'].toString() != "") { pid[index].PV1[indexPV1].priorPatientLocation.locationDescription = pv1Seg['PV1.6']['PV1.6.9']; }
				if (Object.keys(pid[index].PV1[indexPV1].priorPatientLocation).length == 0) {
					delete pid[index].PV1[indexPV1].priorPatientLocation;
				}
		
				// PV1.7, attendingDoctor
				pid[index].PV1[indexPV1].attendingDoctor = [];
				for each (field in pv1Seg['PV1.7']) {
					var block = {};
					if (field['PV1.7.1'].toString() != "") { block.id = field['PV1.7.1']; }
					if (field['PV1.7.2'].toString() != "") { block.lastName = field['PV1.7.2']; }
					if (field['PV1.7.3'].toString() != "") { block.firstName = field['PV1.7.3']; }
					if (field['PV1.7.4'].toString() != "") { block.middleInitOrName = field['PV1.7.4']; }
					if (field['PV1.7.5'].toString() != "") { block.suffix = field['PV1.7.5']; }
					if (field['PV1.7.6'].toString() != "") { block.prefix = field['PV1.7.6']; }
					if (field['PV1.7.7'].toString() != "") { block.degree = field['PV1.7.7']; }
					if (field['PV1.7.8'].toString() != "") { block.sourceTable = field['PV1.107.8']; }
					block.assigningAuthority = {};
					if (field['PV1.7.9']['PV1.7.9.1'].toString() != "") { block.assigningAuthority.id = field['PV1.7.9']['PV1.7.9.1']; }
					if (field['PV1.7.9']['PV1.7.9.2'].toString() != "") { block.assigningAuthority.universalId = field['PV1.7.9']['PV1.7.9.2']; }
					if (field['PV1.7.9']['PV1.7.9.3'].toString() != "") { block.assigningAuthority.universalIdType = field['PV1.7.9']['PV1.7.9.3']; }
					if (Object.keys(block.assigningAuthority).length == 0) {
						delete block.assigningAuthority;
					}
					if (field['PV1.7.10'].toString() != "") { block.nameTypeCode = field['PV1.7.10']; }
					if (field['PV1.7.11'].toString() != "") { block.identifierCheckDigit = field['PV1.7.11']; }
					if (field['PV1.7.12'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['PV1.7.12']; }
					if (field['PV1.7.13'].toString() != "") { block.identifierTypeCode = field['PV1.7.13']; }
					block.assigningFacility = {};
					if (field['PV1.7.14']['PV1.7.14.1'].toString() != "") { block.assigningFacility.id = field['PV1.7.14']['PV1.7.14.1']; }
					if (field['PV1.7.14']['PV1.7.14.2'].toString() != "") { block.assigningFacility.universalId = field['PV1.7.14']['PV1.7.14.2']; }
					if (field['PV1.7.14']['PV1.7.14.3'].toString() != "") { block.assigningFacility.universalIdType = field['PV1.7.14']['PV1.7.14.3']; }
					if (Object.keys(block.assigningFacility).length == 0) {
						delete block.assigningFacility;
					}
					if (Object.keys(block).length > 0) {
						pid[index].PV1[indexPV1].attendingDoctor.push(block);
					}
				}
				if (pid[index].PV1[indexPV1].attendingDoctor.length == 0) {
					delete pid[index].PV1[indexPV1].attendingDoctor;
				}

				// PV1.8, referringDoctor
				pid[index].PV1[indexPV1].referringDoctor = [];
				for each (field in pv1Seg['PV1.8']) {
					var block = {};
					if (field['PV1.8.1'].toString() != "") { block.id = field['PV1.8.1']; }
					if (field['PV1.8.2'].toString() != "") { block.lastName = field['PV1.8.2']; }
					if (field['PV1.8.3'].toString() != "") { block.firstName = field['PV1.8.3']; }
					if (field['PV1.8.4'].toString() != "") { block.middleInitOrName = field['PV1.8.4']; }
					if (field['PV1.8.5'].toString() != "") { block.suffix = field['PV1.8.5']; }
					if (field['PV1.8.6'].toString() != "") { block.prefix = field['PV1.8.6']; }
					if (field['PV1.8.7'].toString() != "") { block.degree = field['PV1.8.7']; }
					if (field['PV1.8.8'].toString() != "") { block.sourceTable = field['PV1.8.8']; }
					block.assigningAuthority = {};
					if (field['PV1.8.9']['PV1.8.9.1'].toString() != "") { block.assigningAuthority.id = field['PV1.8.9']['PV1.8.9.1']; }
					if (field['PV1.8.9']['PV1.8.9.2'].toString() != "") { block.assigningAuthority.universalId = field['PV1.8.9']['PV1.8.9.2']; }
					if (field['PV1.8.9']['PV1.8.9.3'].toString() != "") { block.assigningAuthority.universalIdType = field['PV1.8.9']['PV1.8.9.3']; }
					if (Object.keys(block.assigningAuthority).length == 0) {
						delete block.assigningAuthority;
					}
					if (field['PV1.8.10'].toString() != "") { block.nameTypeCode = field['PV1.8.10']; }
					if (field['PV1.8.11'].toString() != "") { block.identifierCheckDigit = field['PV1.8.11']; }
					if (field['PV1.8.12'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['PV1.8.12']; }
					if (field['PV1.8.13'].toString() != "") { block.identifierTypeCode = field['PV1.8.13']; }
					block.assigningFacility = {};
					if (field['PV1.8.14']['PV1.8.14.1'].toString() != "") { block.assigningFacility.id = field['PV1.8.14']['PV1.8.14.1']; }
					if (field['PV1.8.14']['PV1.8.14.2'].toString() != "") { block.assigningFacility.universalId = field['PV1.8.14']['PV1.8.14.2']; }
					if (field['PV1.8.14']['PV1.8.14.3'].toString() != "") { block.assigningFacility.universalIdType = field['PV1.8.14']['PV1.8.14.3']; }
					if (Object.keys(block.assigningFacility).length == 0) {
						delete block.assigningFacility;
					}
					if (Object.keys(block).length > 0) {
						pid[index].PV1[indexPV1].referringDoctor.push(block);
					}
				}
				if (pid[index].PV1[indexPV1].referringDoctor.length == 0) {
					delete pid[index].PV1[indexPV1].referringDoctor;
				}
				
				// PV1.9, consultingDoctor
				pid[index].PV1[indexPV1].consultingDoctor = [];
				for each (field in pv1Seg['PV1.9']) {
					var block = {};
					if (field['PV1.9.1'].toString() != "") { block.id = field['PV1.9.1']; }
					if (field['PV1.9.2'].toString() != "") { block.lastName = field['PV1.9.2']; }
					if (field['PV1.9.3'].toString() != "") { block.firstName = field['PV1.9.3']; }
					if (field['PV1.9.4'].toString() != "") { block.middleInitOrName = field['PV1.9.4']; }
					if (field['PV1.9.5'].toString() != "") { block.suffix = field['PV1.9.5']; }
					if (field['PV1.9.6'].toString() != "") { block.prefix = field['PV1.9.6']; }
					if (field['PV1.9.7'].toString() != "") { block.degree = field['PV1.9.7']; }
					if (field['PV1.9.8'].toString() != "") { block.sourceTable = field['PV1.9.8']; }
					block.assigningAuthority = {};
					if (field['PV1.9.9']['PV1.9.9.1'].toString() != "") { block.assigningAuthority.id = field['PV1.9.9']['PV1.9.9.1']; }
					if (field['PV1.9.9']['PV1.9.9.2'].toString() != "") { block.assigningAuthority.universalId = field['PV1.9.9']['PV1.9.9.2']; }
					if (field['PV1.9.9']['PV1.9.9.3'].toString() != "") { block.assigningAuthority.universalIdType = field['PV1.9.9']['PV1.9.9.3']; }
					if (Object.keys(block.assigningAuthority).length == 0) {
						delete block.assigningAuthority;
					}
					if (field['PV1.9.10'].toString() != "") { block.nameTypeCode = field['PV1.9.10']; }
					if (field['PV1.9.11'].toString() != "") { block.identifierCheckDigit = field['PV1.9.11']; }
					if (field['PV1.9.12'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['PV1.9.12']; }
					if (field['PV1.9.13'].toString() != "") { block.identifierTypeCode = field['PV1.9.13']; }
					block.assigningFacility = {};
					if (field['PV1.9.14']['PV1.9.14.1'].toString() != "") { block.assigningFacility.id = field['PV1.9.14']['PV1.9.14.1']; }
					if (field['PV1.9.14']['PV1.9.14.2'].toString() != "") { block.assigningFacility.universalId = field['PV1.9.14']['PV1.9.14.2']; }
					if (field['PV1.9.14']['PV1.9.14.3'].toString() != "") { block.assigningFacility.universalIdType = field['PV1.9.14']['PV1.9.14.3']; }
					if (Object.keys(block.assigningFacility).length == 0) {
						delete block.assigningFacility;
					}
					if (Object.keys(block).length > 0) {
						pid[index].PV1[indexPV1].consultingDoctor.push(block);
					}
				}
				if (pid[index].PV1[indexPV1].consultingDoctor.length == 0) {
					delete pid[index].PV1[indexPV1].consultingDoctor;
				}
				
				// PV1.10, hospitalService
				if (pv1Seg['PV1.10']['PV1.10.1'].toString() != "") { pid[index].PV1[indexPV1].hospitalService = pv1Seg['PV1.10']['PV1.10.1']; }
		
				// PV1.11, temporaryLocation
				pid[index].PV1[indexPV1].temporaryLocation = {};
				if (pv1Seg['PV1.11']['PV1.11.1'].toString() != "") { pid[index].PV1[indexPV1].temporaryLocation.pointOfCare = pv1Seg['PV1.11']['PV1.11.1']; }
				if (pv1Seg['PV1.11']['PV1.11.2'].toString() != "") { pid[index].PV1[indexPV1].temporaryLocation.room = pv1Seg['PV1.11']['PV1.11.2']; }
				if (pv1Seg['PV1.11']['PV1.11.3'].toString() != "") { pid[index].PV1[indexPV1].temporaryLocation.bed = pv1Seg['PV1.11']['PV1.11.3']; }
				pid[index].PV1[indexPV1].temporaryLocation.facility = {};
				if (pv1Seg['PV1.11']['PV1.11.4']['PV1.11.4.1'].toString() != "") { pid[index].PV1[indexPV1].temporaryLocation.facility.nameSpaceId =  pv1Seg['PV1.11']['PV1.11.4']['PV1.11.4.1']; }
				if (pv1Seg['PV1.11']['PV1.11.4']['PV1.11.4.2'].toString() != "") { pid[index].PV1[indexPV1].temporaryLocation.facility.universalId =  pv1Seg['PV1.11']['PV1.11.4']['PV1.11.4.2']; }
				if (pv1Seg['PV1.11']['PV1.11.4']['PV1.11.4.3'].toString() != "") { pid[index].PV1[indexPV1].temporaryLocation.facility.universalIdType =  pv1Seg['PV1.11']['PV1.11.4']['PV1.11.4.3']; }
				if (Object.keys(pid[index].PV1[indexPV1].temporaryLocation.facility).length == 0) {
					delete pid[index].PV1[indexPV1].temporaryLocation.facility;
				}
				if (pv1Seg['PV1.11']['PV1.11.5'].toString() != "") { pid[index].PV1[indexPV1].temporaryLocation.locationStatus = pv1Seg['PV1.11']['PV1.11.5']; }
				if (pv1Seg['PV1.11']['PV1.11.6'].toString() != "") { pid[index].PV1[indexPV1].temporaryLocation.personLocationType = pv1Seg['PV1.11']['PV1.11.6']; }
				if (pv1Seg['PV1.11']['PV1.11.7'].toString() != "") { pid[index].PV1[indexPV1].temporaryLocation.building = pv1Seg['PV1.11']['PV1.11.7']; }
				if (pv1Seg['PV1.11']['PV1.11.8'].toString() != "") { pid[index].PV1[indexPV1].temporaryLocation.floor = pv1Seg['PV1.11']['PV1.11.8']; }
				if (pv1Seg['PV1.11']['PV1.11.9'].toString() != "") { pid[index].PV1[indexPV1].temporaryLocation.locationDescription = pv1Seg['PV1.11']['PV1.11.9']; }
				if (Object.keys(pid[index].PV1[indexPV1].temporaryLocation).length == 0) {
					delete pid[index].PV1[indexPV1].temporaryLocation;
				}
		
				// PV1.12, preadmitTestIndicator
				if (pv1Seg['PV1.12']['PV1.12.1'].toString() != "") { pid[index].PV1[indexPV1].preadmitTestIndicator = pv1Seg['PV1.12']['PV1.12.1']; }
		
				// PV1.13, readmissionIndicator
				if (pv1Seg['PV1.13']['PV1.13.1'].toString() != "") { pid[index].PV1[indexPV1].readmissionIndicator = pv1Seg['PV1.13']['PV1.13.1']; }
		
				// PV1.14, admitSource
				if (pv1Seg['PV1.14']['PV1.14.1'].toString() != "") { pid[index].PV1[indexPV1].admitSource = pv1Seg['PV1.14']['PV1.14.1']; }
		
				// PV1.15, ambulatoryStatus
				pid[index].PV1[indexPV1].ambulatoryStatus = [];
				for each (field in pv1Seg['PV1.15']) {
					if (field['PV1.15.1'].toString() != "") {
						pid[index].PV1[indexPV1].ambulatoryStatus.push(field['PV1.15.1']);
					}
				}
				if (pid[index].PV1[indexPV1].ambulatoryStatus.length == 0){
					delete pid[index].PV1[indexPV1].ambulatoryStatus;
				}
		
				// PV1.16, vipIndicator
				if (pv1Seg['PV1.16']['PV1.16.1'].toString() != "") { pid[index].PV1[indexPV1].vipIndicator = pv1Seg['PV1.16']['PV1.16.1']; }
		
				// PV1.17, admittingDoctor
				pid[index].PV1[indexPV1].admittingDoctor = [];
				for each (field in pv1Seg['PV1.17']) {
					var block = {};
					if (field['PV1.17.1'].toString() != "") { block.id = field['PV1.17.1']; }
					if (field['PV1.17.2'].toString() != "") { block.lastName = field['PV1.17.2']; }
					if (field['PV1.17.3'].toString() != "") { block.firstName = field['PV1.17.3']; }
					if (field['PV1.17.4'].toString() != "") { block.middleInitOrName = field['PV1.17.4']; }
					if (field['PV1.17.5'].toString() != "") { block.suffix = field['PV1.17.5']; }
					if (field['PV1.17.6'].toString() != "") { block.prefix = field['PV1.17.6']; }
					if (field['PV1.17.7'].toString() != "") { block.degree = field['PV1.17.7']; }
					if (field['PV1.17.8'].toString() != "") { block.sourceTable = field['PV1.17.8']; }
					block.assigningAuthority = {};
					if (field['PV1.17.9']['PV1.17.9.1'].toString() != "") { block.assigningAuthority.id = field['PV1.17.9']['PV1.17.9.1']; }
					if (field['PV1.17.9']['PV1.17.9.2'].toString() != "") { block.assigningAuthority.universalId = field['PV1.17.9']['PV1.17.9.2']; }
					if (field['PV1.17.9']['PV1.17.9.3'].toString() != "") { block.assigningAuthority.universalIdType = field['PV1.17.9']['PV1.17.9.3']; }
					if (Object.keys(block.assigningAuthority).length == 0) {
						delete block.assigningAuthority;
					}
					if (field['PV1.17.10'].toString() != "") { block.nameTypeCode = field['PV1.17.10']; }
					if (field['PV1.17.11'].toString() != "") { block.identifierCheckDigit = field['PV1.17.11']; }
					if (field['PV1.17.12'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['PV1.17.12']; }
					if (field['PV1.17.13'].toString() != "") { block.identifierTypeCode = field['PV1.17.13']; }
					block.assigningFacility = {};
					if (field['PV1.17.14']['PV1.17.14.1'].toString() != "") { block.assigningFacility.id = field['PV1.17.14']['PV1.17.14.1']; }
					if (field['PV1.17.14']['PV1.17.14.2'].toString() != "") { block.assigningFacility.universalId = field['PV1.17.14']['PV1.17.14.2']; }
					if (field['PV1.17.14']['PV1.17.14.3'].toString() != "") { block.assigningFacility.universalIdType = field['PV1.17.14']['PV1.17.14.3']; }
					if (Object.keys(block.assigningFacility).length == 0) {
						delete block.assigningFacility;
					}
					if (Object.keys(block).length > 0) {
						pid[index].PV1[indexPV1].admittingDoctor.push(block);
					}
				}
				if (pid[index].PV1[indexPV1].admittingDoctor.length == 0) {
					delete pid[index].PV1[indexPV1].admittingDoctor;
				}
				
				// PV1.18, patientType
				if (pv1Seg['PV1.18']['PV1.18.1'].toString() != "") { pid[index].PV1[indexPV1].patientType = pv1Seg['PV1.18']['PV1.18.1']; }
		
				// PV1.19, visitNumber
				pid[index].PV1[indexPV1].visitNumber = {};
				if (pv1Seg['PV1.19']['PV1.19.1'].toString() != "") { pid[index].PV1[indexPV1].visitNumber.id = pv1Seg['PV1.19']['PV1.19.1']; }
				if (pv1Seg['PV1.19']['PV1.19.2'].toString() != "") { pid[index].PV1[indexPV1].visitNumber.identifierCheckDigit = pv1Seg['PV1.19']['PV1.19.2']; }
				if (pv1Seg['PV1.19']['PV1.19.3'].toString() != "") { pid[index].PV1[indexPV1].visitNumber.codeIdentifyingCheckDigitScheme = pv1Seg['PV1.19']['PV1.19.3']; }
				pid[index].PV1[indexPV1].visitNumber.assigningAuthority = {};
				if (pv1Seg['PV1.19']['PV1.19.4']['PV1.19.4.1'].toString() != "") { pid[index].PV1[indexPV1].visitNumber.assigningAuthority.namespaceId = pv1Seg['PV1.19']['PV1.19.4']['PV1.19.4.1']; }
				if (pv1Seg['PV1.19']['PV1.19.4']['PV1.19.4.2'].toString() != "") { pid[index].PV1[indexPV1].visitNumber.assigningAuthority.universalId = pv1Seg['PV1.19']['PV1.19.4']['PV1.19.4.2']; }
				if (pv1Seg['PV1.19']['PV1.19.4']['PV1.19.4.3'].toString() != "") { pid[index].PV1[indexPV1].visitNumber.assigningAuthority.universalIdType = pv1Seg['PV1.19']['PV1.19.4']['PV1.19.4.3']; }
				if (Object.keys(pid[index].PV1[indexPV1].visitNumber.assigningAuthority).length == 0) {
					delete pid[index].PV1[indexPV1].visitNumber.assigningAuthority;
				}
				if (pv1Seg['PV1.19']['PV1.19.5'].toString() != "") { pid[index].PV1[indexPV1].visitNumber.idTypeCode = pv1Seg['PV1.19']['PV1.19.5']; }
				pid[index].PV1[indexPV1].visitNumber.assigningFacility = {};
				if (pv1Seg['PV1.19']['PV1.19.6']['PV1.19.6.1'].toString() != "") { pid[index].PV1[indexPV1].visitNumber.assigningFacility.namespaceId = pv1Seg['PV1.19']['PV1.19.6']['PV1.19.6.1']; }
				if (pv1Seg['PV1.19']['PV1.19.6']['PV1.19.6.2'].toString() != "") { pid[index].PV1[indexPV1].visitNumber.assigningFacility.universalId = pv1Seg['PV1.19']['PV1.19.6']['PV1.19.6.2']; }
				if (pv1Seg['PV1.19']['PV1.19.6']['PV1.19.6.3'].toString() != "") { pid[index].PV1[indexPV1].visitNumber.assigningFacility.universalIdType = pv1Seg['PV1.19']['PV1.19.6']['PV1.19.6.3']; }
				if (Object.keys(pid[index].PV1[indexPV1].visitNumber.assigningFacility).length == 0) {
					delete pid[index].PV1[indexPV1].visitNumber.assigningFacility;
				}
				if (Object.keys(pid[index].PV1[indexPV1].visitNumber).length == 0) {
					delete pid[index].PV1[indexPV1].visitNumber;
				}
				
				// PV1.20, financialClass
				pid[index].PV1[indexPV1].financialClass = {};
				if (pv1Seg['PV1.20']['PV1.20.1'].toString() != "") {pid[index].PV1[indexPV1].financialClass.financialClass = pv1Seg['PV1.20']['PV1.20.1']; }
				if (pv1Seg['PV1.20']['PV1.20.2'].toString() != "") {pid[index].PV1[indexPV1].financialClass.effectiveDate = pv1Seg['PV1.20']['PV1.20.2']; }
				if (Object.keys(pid[index].PV1[indexPV1].financialClass).length == 0) {
					delete pid[index].PV1[indexPV1].financialClass;
				}

				// PV1.21, chargePriceIndicator
				if (pv1Seg['PV1.21']['PV1.21.1'].toString() != "") { pid[index].PV1[indexPV1].chargePriceIndicator = pv1Seg['PV1.21']['PV1.21.1']; }
		
				// PV1.22, courtesyCode
				if (pv1Seg['PV1.22']['PV1.22.1'].toString() != "") { pid[index].PV1[indexPV1].courtesyCode = pv1Seg['PV1.22']['PV1.22.1']; }
		
				// PV1.23, creditRating
				if (pv1Seg['PV1.23']['PV1.23.1'].toString() != "") { pid[index].PV1[indexPV1].creditRating = pv1Seg['PV1.23']['PV1.23.1']; }
		
				// PV1.24, contractCode
				pid[index].PV1[indexPV1].contractCode = [];
				for each (field in pv1Seg['PV1.24']) {
					if (field['PV1.24.1'].toString() != "") {
						pid[index].PV1[indexPV1].contractCode.push(field['PV1.24.1']);
					}
				}
				if (pid[index].PV1[indexPV1].contractCode.length == 0) {
					delete pid[index].PV1[indexPV1].contractCode;
				}
		
				// PV1.25, contractEffectiveDate
				pid[index].PV1[indexPV1].contractEffectiveDate = [];
				for each (field in pv1Seg['PV1.25']) {
					if (field['PV1.25.1'].toString() != "") {
						pid[index].PV1[indexPV1].contractEffectiveDate.push(field['PV1.25.1']);
					}
				}
				if (pid[index].PV1[indexPV1].contractEffectiveDate.length == 0) {
					delete pid[index].PV1[indexPV1].contractEffectiveDate;
				}
		
				// PV1.26, contractAmount
				pid[index].PV1[indexPV1].contractAmount = [];
				for each (field in pv1Seg['PV1.26']) {
					if (field['PV1.26.1'].toString() != "") {
						pid[index].PV1[indexPV1].contractAmount.push(field['PV1.26.1']);
					}
				}
				if (pid[index].PV1[indexPV1].contractAmount.length == 0) {
					delete pid[index].PV1[indexPV1].contractAmount;
				}
		
				// PV1.27, contractPeriod
				pid[index].PV1[indexPV1].contractPeriod = [];
				for each (field in pv1Seg['PV1.27']) {
					if (field['PV1.27.1'].toString() != "") {
						pid[index].PV1[indexPV1].contractPeriod.push(field['PV1.27.1']);
					}
				}
				if (pid[index].PV1[indexPV1].contractPeriod.length == 0) {
					delete pid[index].PV1[indexPV1].contractPeriod;
				}
		
				// PV1.28, interestCode
				if (pv1Seg['PV1.28']['PV1.28.1'].toString() != "") { pid[index].PV1[indexPV1].interestCode = pv1Seg['PV1.28']['PV1.28.1']; }
		
				// PV1.29, transferToBadDebtCode
				if (pv1Seg['PV1.29']['PV1.29.1'].toString() != "") { pid[index].PV1[indexPV1].transferToBadDebtCode = pv1Seg['PV1.29']['PV1.29.1']; }
		
				// PV1.30, transferToBadDebtDate
				if (pv1Seg['PV1.30']['PV1.30.1'].toString() != "") { pid[index].PV1[indexPV1].transferToBadDebtDate = pv1Seg['PV1.30']['PV1.30.1']; }
		
				// PV1.31, badDebtAgencyCode
				if (pv1Seg['PV1.31']['PV1.31.1'].toString() != "") { pid[index].PV1[indexPV1].badDebtAgencyCode = pv1Seg['PV1.31']['PV1.31.1']; }
		
				// PV1.32, badDebtTransferAmount
				if (pv1Seg['PV1.32']['PV1.32.1'].toString() != "") { pid[index].PV1[indexPV1].badDebtTransferAmount = pv1Seg['PV1.32']['PV1.32.1']; }
		
				// PV1.33, badDebtRecoveryAmount
				if (pv1Seg['PV1.33']['PV1.33.1'].toString() != "") { pid[index].PV1[indexPV1].badDebtRecoveryAmount = pv1Seg['PV1.33']['PV1.33.1']; }
		
				// PV1.34, deleteAccountIndicator
				if (pv1Seg['PV1.34']['PV1.34.1'].toString() != "") { pid[index].PV1[indexPV1].deleteAccountIndicator = pv1Seg['PV1.34']['PV1.34.1']; }
		
				// PV1.35, deleteAccountDate
				if (pv1Seg['PV1.35']['PV1.35.1'].toString() != "") { pid[index].PV1[indexPV1].deleteAccountDate = pv1Seg['PV1.35']['PV1.35.1']; }
		
				// PV1.36, dischargeDisposition
				if (pv1Seg['PV1.36']['PV1.36.1'].toString() != "") { pid[index].PV1[indexPV1].dischargeDisposition = pv1Seg['PV1.36']['PV1.36.1']; }
		
				// PV1.37, dischargedtoLocation
				pid[index].PV1[indexPV1].dischargedtoLocation = {};
				if (pv1Seg['PV1.37']['PV1.37.1'].toString() != "") { pid[index].PV1[indexPV1].dischargedtoLocation.dischargeLocation = pv1Seg['PV1.37']['PV1.37.1']; }
				if (pv1Seg['PV1.37']['PV1.37.2'].toString() != "") { pid[index].PV1[indexPV1].dischargedtoLocation.effectiveDate = pv1Seg['PV1.37']['PV1.37.2']; }
				if (Object.keys(pid[index].PV1[indexPV1].dischargedtoLocation).length == 0) {
					delete pid[index].PV1[indexPV1].dischargedtoLocation;
				}
		
				// PV1.38, dietType
				if (pv1Seg['PV1.38']['PV1.38.1'].toString() != "") { pid[index].PV1[indexPV1].dietType = pv1Seg['PV1.38']['PV1.38.1']; }
		
				// PV1.39, servicingFacility
				if (pv1Seg['PV1.39']['PV1.39.1'].toString() != "") { pid[index].PV1[indexPV1].servicingFacility = pv1Seg['PV1.39']['PV1.39.1']; }
		
				// PV1.40, bedStatus
				if (pv1Seg['PV1.40']['PV1.40.1'].toString() != "") { pid[index].PV1[indexPV1].bedStatus = pv1Seg['PV1.40']['PV1.40.1']; }
		
				// PV1.41, accountStatus
				if (pv1Seg['PV1.41']['PV1.41.1'].toString() != "") { pid[index].PV1[indexPV1].accountStatus = pv1Seg['PV1.41']['PV1.41.1']; }
		
				// PV1.42, pendingLocation
				pid[index].PV1[indexPV1].pendingLocation = {};
				if (pv1Seg['PV1.42']['PV1.42.1'].toString() != "") { pid[index].PV1[indexPV1].pendingLocation.pointOfCare = pv1Seg['PV1.42']['PV1.42.1']; }
				if (pv1Seg['PV1.42']['PV1.42.2'].toString() != "") { pid[index].PV1[indexPV1].pendingLocation.room = pv1Seg['PV1.42']['PV1.42.2']; }
				if (pv1Seg['PV1.42']['PV1.42.3'].toString() != "") { pid[index].PV1[indexPV1].pendingLocation.bed = pv1Seg['PV1.42']['PV1.42.3']; }
				pid[index].PV1[indexPV1].pendingLocation.facility = {};
				if (pv1Seg['PV1.42']['PV1.42.4']['PV1.42.4.1'].toString() != "") { pid[index].PV1[indexPV1].pendingLocation.facility.nameSpaceId =  pv1Seg['PV1.42']['PV1.42.4']['PV1.42.4.1']; }
				if (pv1Seg['PV1.42']['PV1.42.4']['PV1.42.4.2'].toString() != "") { pid[index].PV1[indexPV1].pendingLocation.facility.universalId =  pv1Seg['PV1.42']['PV1.42.4']['PV1.42.4.2']; }
				if (pv1Seg['PV1.42']['PV1.42.4']['PV1.42.4.3'].toString() != "") { pid[index].PV1[indexPV1].pendingLocation.facility.universalIdType =  pv1Seg['PV1.42']['PV1.42.4']['PV1.42.4.3']; }
				if (Object.keys(pid[index].PV1[indexPV1].pendingLocation.facility).length == 0) {
					delete pid[index].PV1[indexPV1].pendingLocation.facility;
				}
				if (pv1Seg['PV1.42']['PV1.42.5'].toString() != "") { pid[index].PV1[indexPV1].pendingLocation.locationStatus = pv1Seg['PV1.42']['PV1.42.5']; }
				if (pv1Seg['PV1.42']['PV1.42.6'].toString() != "") { pid[index].PV1[indexPV1].pendingLocation.personLocationType = pv1Seg['PV1.42']['PV1.42.6']; }
				if (pv1Seg['PV1.42']['PV1.42.7'].toString() != "") { pid[index].PV1[indexPV1].pendingLocation.building = pv1Seg['PV1.42']['PV1.42.7']; }
				if (pv1Seg['PV1.42']['PV1.42.8'].toString() != "") { pid[index].PV1[indexPV1].pendingLocation.floor = pv1Seg['PV1.42']['PV1.42.8']; }
				if (pv1Seg['PV1.42']['PV1.42.9'].toString() != "") { pid[index].PV1[indexPV1].pendingLocation.locationDescription = pv1Seg['PV1.42']['PV1.42.9']; }
				if (Object.keys(pid[index].PV1[indexPV1].pendingLocation).length == 0) {
					delete pid[index].PV1[indexPV1].pendingLocation;
				}
		
				// PV1.43, priorTemporaryLocation
				pid[index].PV1[indexPV1].priorTemporaryLocation = {};
				if (pv1Seg['PV1.43']['PV1.43.1'].toString() != "") { pid[index].PV1[indexPV1].priorTemporaryLocation.pointOfCare = pv1Seg['PV1.43']['PV1.43.1']; }
				if (pv1Seg['PV1.43']['PV1.43.2'].toString() != "") { pid[index].PV1[indexPV1].priorTemporaryLocation.room = pv1Seg['PV1.43']['PV1.43.2']; }
				if (pv1Seg['PV1.43']['PV1.43.3'].toString() != "") { pid[index].PV1[indexPV1].priorTemporaryLocation.bed = pv1Seg['PV1.43']['PV1.43.3']; }
				pid[index].PV1[indexPV1].priorTemporaryLocation.facility = {};
				if (pv1Seg['PV1.43']['PV1.43.4']['PV1.43.4.1'].toString() != "") { pid[index].PV1[indexPV1].priorTemporaryLocation.facility.nameSpaceId =  pv1Seg['PV1.43']['PV1.43.4']['PV1.43.4.1']; }
				if (pv1Seg['PV1.43']['PV1.43.4']['PV1.43.4.2'].toString() != "") { pid[index].PV1[indexPV1].priorTemporaryLocation.facility.universalId =  pv1Seg['PV1.43']['PV1.43.4']['PV1.43.4.2']; }
				if (pv1Seg['PV1.43']['PV1.43.4']['PV1.43.4.3'].toString() != "") { pid[index].PV1[indexPV1].priorTemporaryLocation.facility.universalIdType =  pv1Seg['PV1.43']['PV1.43.4']['PV1.43.4.3']; }
				if (Object.keys(pid[index].PV1[indexPV1].priorTemporaryLocation.facility).length == 0) {
					delete pid[index].PV1[indexPV1].priorTemporaryLocation.facility;
				}
				if (pv1Seg['PV1.43']['PV1.43.5'].toString() != "") { pid[index].PV1[indexPV1].priorTemporaryLocation.locationStatus = pv1Seg['PV1.43']['PV1.43.5']; }
				if (pv1Seg['PV1.43']['PV1.43.6'].toString() != "") { pid[index].PV1[indexPV1].priorTemporaryLocation.personLocationType = pv1Seg['PV1.43']['PV1.43.6']; }
				if (pv1Seg['PV1.43']['PV1.43.7'].toString() != "") { pid[index].PV1[indexPV1].priorTemporaryLocation.building = pv1Seg['PV1.43']['PV1.43.7']; }
				if (pv1Seg['PV1.43']['PV1.43.8'].toString() != "") { pid[index].PV1[indexPV1].priorTemporaryLocation.floor = pv1Seg['PV1.43']['PV1.43.8']; }
				if (pv1Seg['PV1.43']['PV1.43.9'].toString() != "") { pid[index].PV1[indexPV1].priorTemporaryLocation.locationDescription = pv1Seg['PV1.43']['PV1.43.9']; }
				if (Object.keys(pid[index].PV1[indexPV1].priorTemporaryLocation).length == 0) {
					delete pid[index].PV1[indexPV1].priorTemporaryLocation;
				}
		
				// PV1.44, admitDateTime
				if (pv1Seg['PV1.44']['PV1.44.1'].toString() != "") { pid[index].PV1[indexPV1].admitDateTime = pv1Seg['PV1.44']['PV1.44.1']; }
		
				// PV1.45, dischargeDateTime
				if (pv1Seg['PV1.45']['PV1.45.1'].toString() != "") { pid[index].PV1[indexPV1].dischargeDateTime = pv1Seg['PV1.45']['PV1.45.1']; }
		
				// PV1.46, currentPatientBalance
				if (pv1Seg['PV1.46']['PV1.46.1'].toString() != "") { pid[index].PV1[indexPV1].currentPatientBalance = pv1Seg['PV1.46']['PV1.46.1']; }
		
				// PV1.47, totalCharges
				if (pv1Seg['PV1.47']['PV1.47.1'].toString() != "") { pid[index].PV1[indexPV1].totalCharges = pv1Seg['PV1.47']['PV1.47.1']; }
		
				// PV1.48, totalAdjustments
				if (pv1Seg['PV1.48']['PV1.48.1'].toString() != "") { pid[index].PV1[indexPV1].totalAdjustments = pv1Seg['PV1.48']['PV1.48.1']; }
		
				// PV1.49, totalPayments
				if (pv1Seg['PV1.49']['PV1.49.1'].toString() != "") { pid[index].PV1[indexPV1].totalPayments = pv1Seg['PV1.49']['PV1.49.1']; }
		
				// PV1.50, alternateVisitID
				pid[index].PV1[indexPV1].alternateVisitID = {};
				if (pv1Seg['PV1.50']['PV1.50.1'].toString() != "") { pid[index].PV1[indexPV1].alternateVisitID.id = pv1Seg['PV1.50']['PV1.50.1']; }
				if (pv1Seg['PV1.50']['PV1.50.2'].toString() != "") { pid[index].PV1[indexPV1].alternateVisitID.identifierCheckDigit = pv1Seg['PV1.50']['PV1.50.2']; }
				if (pv1Seg['PV1.50']['PV1.50.3'].toString() != "") { pid[index].PV1[indexPV1].alternateVisitID.codeIdentifyingCheckDigitScheme = pv1Seg['PV1.50']['PV1.50.3']; }
				pid[index].PV1[indexPV1].alternateVisitID.assigningAuthority = {};
				if (pv1Seg['PV1.50']['PV1.50.4']['PV1.50.4.1'].toString() != "") { pid[index].PV1[indexPV1].alternateVisitID.assigningAuthority.namespaceId = pv1Seg['PV1.50']['PV1.50.4']['PV1.50.4.1']; }
				if (pv1Seg['PV1.50']['PV1.50.4']['PV1.50.4.2'].toString() != "") { pid[index].PV1[indexPV1].alternateVisitID.assigningAuthority.universalId = pv1Seg['PV1.50']['PV1.50.4']['PV1.50.4.2']; }
				if (pv1Seg['PV1.50']['PV1.50.4']['PV1.50.4.3'].toString() != "") { pid[index].PV1[indexPV1].alternateVisitID.assigningAuthority.universalIdType = pv1Seg['PV1.50']['PV1.50.4']['PV1.50.4.3']; }
				if (Object.keys(pid[index].PV1[indexPV1].alternateVisitID.assigningAuthority).length == 0) {
					delete pid[index].PV1[indexPV1].alternateVisitID.assigningAuthority;
				}
				if (pv1Seg['PV1.50']['PV1.50.5'].toString() != "") { pid[index].PV1[indexPV1].alternateVisitID.idTypeCode = pv1Seg['PV1.50']['PV1.50.5']; }
				pid[index].PV1[indexPV1].alternateVisitID.assigningFacility = {};
				if (pv1Seg['PV1.50']['PV1.50.6']['PV1.50.6.1'].toString() != "") { pid[index].PV1[indexPV1].alternateVisitID.assigningFacility.namespaceId = pv1Seg['PV1.50']['PV1.50.6']['PV1.50.6.1']; }
				if (pv1Seg['PV1.50']['PV1.50.6']['PV1.50.6.2'].toString() != "") { pid[index].PV1[indexPV1].alternateVisitID.assigningFacility.universalId = pv1Seg['PV1.50']['PV1.50.6']['PV1.50.6.2']; }
				if (pv1Seg['PV1.50']['PV1.50.6']['PV1.50.6.3'].toString() != "") { pid[index].PV1[indexPV1].alternateVisitID.assigningFacility.universalIdType = pv1Seg['PV1.50']['PV1.50.6']['PV1.50.6.3']; }
				if (Object.keys(pid[index].PV1[indexPV1].alternateVisitID.assigningFacility).length == 0) {
					delete pid[index].PV1[indexPV1].alternateVisitID.assigningFacility;
				}
				if (Object.keys(pid[index].PV1[indexPV1].alternateVisitID).length == 0) {
					delete pid[index].PV1[indexPV1].alternateVisitID;
				}
		
				// PV1.51, visitIndicator
				if (pv1Seg['PV1.51']['PV1.51.1'].toString() != "") { pid[index].PV1[indexPV1].visitIndicator = pv1Seg['PV1.51']['PV1.51.1']; }
		
				// PV1.52, otherHealthcareProvider
				pid[index].PV1[indexPV1].otherHealthcareProvider = {};
				if (pv1Seg['PV1.52']['PV1.52.1'].toString() != "") { pid[index].PV1[indexPV1].otherHealthcareProvider.id = pv1Seg['PV1.52']['PV1.52.1']; }
				if (pv1Seg['PV1.52']['PV1.52.2'].toString() != "") { pid[index].PV1[indexPV1].otherHealthcareProvider.lastName = pv1Seg['PV1.52']['PV1.52.2']; }
				if (pv1Seg['PV1.52']['PV1.52.3'].toString() != "") { pid[index].PV1[indexPV1].otherHealthcareProvider.firstName = pv1Seg['PV1.52']['PV1.52.3']; }
				if (pv1Seg['PV1.52']['PV1.52.4'].toString() != "") { pid[index].PV1[indexPV1].otherHealthcareProvider.middleInitOrName = pv1Seg['PV1.52']['PV1.52.4']; }
				if (pv1Seg['PV1.52']['PV1.52.5'].toString() != "") { pid[index].PV1[indexPV1].otherHealthcareProvider.suffix = pv1Seg['PV1.52']['PV1.52.5']; }
				if (pv1Seg['PV1.52']['PV1.52.6'].toString() != "") { pid[index].PV1[indexPV1].otherHealthcareProvider.prefix = pv1Seg['PV1.52']['PV1.52.6']; }
				if (pv1Seg['PV1.52']['PV1.52.7'].toString() != "") { pid[index].PV1[indexPV1].otherHealthcareProvider.degree = pv1Seg['PV1.52']['PV1.52.7']; }
				if (pv1Seg['PV1.52']['PV1.52.8'].toString() != "") { pid[index].PV1[indexPV1].otherHealthcareProvider.sourceTable = pv1Seg['PV1.52']['PV1.52.8']; }
				pid[index].PV1[indexPV1].otherHealthcareProvider.assigningAuthority = {};
				if (pv1Seg['PV1.52']['PV1.52.9']['PV1.52.9.1'].toString() != "") { pid[index].PV1[indexPV1].otherHealthcareProvider.assigningAuthority.id = pv1Seg['PV1.52']['PV1.52.9']['PV1.52.9.1']; }
				if (pv1Seg['PV1.52']['PV1.52.9']['PV1.52.9.2'].toString() != "") { pid[index].PV1[indexPV1].otherHealthcareProvider.assigningAuthority.universalId = pv1Seg['PV1.52']['PV1.52.9']['PV1.52.9.2']; }
				if (pv1Seg['PV1.52']['PV1.52.9']['PV1.52.9.3'].toString() != "") { pid[index].PV1[indexPV1].otherHealthcareProvider.assigningAuthority.universalIdType = pv1Seg['PV1.52']['PV1.52.9']['PV1.52.9.3']; }
				if (Object.keys(pid[index].PV1[indexPV1].otherHealthcareProvider.assigningAuthority).length == 0) {
					delete pid[index].PV1[indexPV1].otherHealthcareProvider.assigningAuthority;
				}
				if (pv1Seg['PV1.52']['PV1.52.10'].toString() != "") { pid[index].PV1[indexPV1].otherHealthcareProvider.nameTypeCode = pv1Seg['PV1.52']['PV1.52.10']; }
				if (pv1Seg['PV1.52']['PV1.52.11'].toString() != "") { pid[index].PV1[indexPV1].otherHealthcareProvider.identifierCheckDigit = pv1Seg['PV1.52']['PV1.52.11']; }
				if (pv1Seg['PV1.52']['PV1.52.12'].toString() != "") { pid[index].PV1[indexPV1].otherHealthcareProvider.codeIdentifyingCheckDigitScheme = pv1Seg['PV1.52']['PV1.52.12']; }
				if (pv1Seg['PV1.52']['PV1.52.13'].toString() != "") { pid[index].PV1[indexPV1].otherHealthcareProvider.identifierTypeCode = pv1Seg['PV1.52']['PV1.52.13']; }
				pid[index].PV1[indexPV1].otherHealthcareProvider.assigningFacility = {};
				if (pv1Seg['PV1.52']['PV1.52.14']['PV1.52.14.1'].toString() != "") { pid[index].PV1[indexPV1].otherHealthcareProvider.assigningFacility.id = pv1Seg['PV1.52']['PV1.52.14']['PV1.52.14.1']; }
				if (pv1Seg['PV1.52']['PV1.52.14']['PV1.52.14.2'].toString() != "") { pid[index].PV1[indexPV1].otherHealthcareProvider.assigningFacility.universalId = pv1Seg['PV1.52']['PV1.52.14']['PV1.52.14.2']; }
				if (pv1Seg['PV1.52']['PV1.52.14']['PV1.52.14.3'].toString() != "") { pid[index].PV1[indexPV1].otherHealthcareProvider.assigningFacility.universalIdType = pv1Seg['PV1.52']['PV1.52.14']['PV1.52.14.3']; }
				if (Object.keys(pid[index].PV1[indexPV1].otherHealthcareProvider.assigningFacility).length == 0) {
					delete pid[index].PV1[indexPV1].otherHealthcareProvider.assigningFacility;
				}
				if (Object.keys(pid[index].PV1[indexPV1].otherHealthcareProvider).length == 0) {
					delete pid[index].PV1[indexPV1].otherHealthcareProvider;
				}

				// PV2 (PV1)
				var pv2Group = getSegmentsAfter(msg,pv1Seg,'PV2',true);
				if (pv2Group.length > 0 && pid[index].PV1) {
					pid[index].PV1[indexPV1].PV2 = [];
					var indexPV2 = 0;
					for each (pv2Seg in pv2Group) {
						pid[index].PV1[indexPV1].PV2[indexPV2] = {};
		
						// PV2.1, priorPendingLocation
						pid[index].PV1[indexPV1].PV2[indexPV2].priorPendingLocation = {};
						if (pv2Seg['PV2.1']['PV2.1.1'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].priorPendingLocation.pointOfCare = pv2Seg['PV2.1']['PV2.1.1']; }
						if (pv2Seg['PV2.1']['PV2.1.2'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].priorPendingLocation.room = pv2Seg['PV2.1']['PV2.1.2']; }
						if (pv2Seg['PV2.1']['PV2.1.3'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].priorPendingLocation.bed = pv2Seg['PV2.1']['PV2.1.3']; }
						pid[index].PV1[indexPV1].PV2[indexPV2].priorPendingLocation.facility = {};
						if (pv2Seg['PV2.1']['PV2.1.4']['PV2.1.4.1'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].priorPendingLocation.facility.nameSpaceId =  pv2Seg['PV2.1']['PV2.1.4']['PV2.1.4.1']; }
						if (pv2Seg['PV2.1']['PV2.1.4']['PV2.1.4.2'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].priorPendingLocation.facility.universalId =  pv2Seg['PV2.1']['PV2.1.4']['PV2.1.4.2']; }
						if (pv2Seg['PV2.1']['PV2.1.4']['PV2.1.4.3'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].priorPendingLocation.facility.universalIdType =  pv2Seg['PV2.1']['PV2.1.4']['PV2.1.4.3']; }
						if (Object.keys(pid[index].PV1[indexPV1].PV2[indexPV2].priorPendingLocation.facility).length == 0) {
							delete pid[index].PV1[indexPV1].PV2[indexPV2].priorPendingLocation.facility;
						}
						if (pv2Seg['PV2.1']['PV2.1.5'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].priorPendingLocation.locationStatus = pv2Seg['PV2.1']['PV2.1.5']; }
						if (pv2Seg['PV2.1']['PV2.1.6'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].priorPendingLocation.personLocationType = pv2Seg['PV2.1']['PV2.1.6']; }
						if (pv2Seg['PV2.1']['PV2.1.7'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].priorPendingLocation.building = pv2Seg['PV2.1']['PV2.1.7']; }
						if (pv2Seg['PV2.1']['PV2.1.8'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].priorPendingLocation.floor = pv2Seg['PV2.1']['PV2.1.8']; }
						if (pv2Seg['PV2.1']['PV2.1.9'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].priorPendingLocation.locationDescription = pv2Seg['PV2.1']['PV2.1.9']; }
						if (Object.keys(pid[index].PV1[indexPV1].PV2[indexPV2].priorPendingLocation).length == 0) {
							delete pid[index].PV1[indexPV1].PV2[indexPV2].priorPendingLocation;
						}
		
						// PV2.2, accommodationCode
						pid[index].PV1[indexPV1].PV2[indexPV2].accommodationCode = {};
						if (pv2Seg['PV2.2']['PV2.2.1'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].accommodationCode.id = pv2Seg['PV2.2']['PV2.2.1']; }
						if (pv2Seg['PV2.2']['PV2.2.2'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].accommodationCode.text = pv2Seg['PV2.2']['PV2.2.2']; }
						if (pv2Seg['PV2.2']['PV2.2.3'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].accommodationCode.codingSystem = pv2Seg['PV2.2']['PV2.2.3']; }
						if (pv2Seg['PV2.2']['PV2.2.4'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].accommodationCode.altId = pv2Seg['PV2.2']['PV2.2.4']; }
						if (pv2Seg['PV2.2']['PV2.2.5'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].accommodationCode.altText = pv2Seg['PV2.2']['PV2.2.5']; }
						if (pv2Seg['PV2.2']['PV2.2.6'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].accommodationCode.altCodingSystem = pv2Seg['PV2.2']['PV2.2.6']; }
						if (Object.keys(pid[index].PV1[indexPV1].PV2[indexPV2].accommodationCode).length == 0) {
							delete pid[index].PV1[indexPV1].PV2[indexPV2].accommodationCode;
						}
		
						// PV2.3, admitReason
						pid[index].PV1[indexPV1].PV2[indexPV2].admitReason = {};
						if (pv2Seg['PV2.3']['PV2.3.1'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].admitReason.id = pv2Seg['PV2.3']['PV2.3.1']; }
						if (pv2Seg['PV2.3']['PV2.3.2'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].admitReason.text = pv2Seg['PV2.3']['PV2.3.2']; }
						if (pv2Seg['PV2.3']['PV2.3.3'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].admitReason.codingSystem = pv2Seg['PV2.3']['PV2.3.3']; }
						if (pv2Seg['PV2.3']['PV2.3.4'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].admitReason.altId = pv2Seg['PV2.3']['PV2.3.4']; }
						if (pv2Seg['PV2.3']['PV2.3.5'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].admitReason.altText = pv2Seg['PV2.3']['PV2.3.5']; }
						if (pv2Seg['PV2.3']['PV2.3.6'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].admitReason.altCodingSystem = pv2Seg['PV2.3']['PV2.3.6']; }
						if (Object.keys(pid[index].PV1[indexPV1].PV2[indexPV2].admitReason).length == 0) {
							delete pid[index].PV1[indexPV1].PV2[indexPV2].admitReason;
						}
		
						// PV2.4, transferReason
						pid[index].PV1[indexPV1].PV2[indexPV2].transferReason = {};
						if (pv2Seg['PV2.4']['PV2.4.1'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].transferReason.id = pv2Seg['PV2.4']['PV2.4.1']; }
						if (pv2Seg['PV2.4']['PV2.4.2'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].transferReason.text = pv2Seg['PV2.4']['PV2.4.2']; }
						if (pv2Seg['PV2.4']['PV2.4.3'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].transferReason.codingSystem = pv2Seg['PV2.4']['PV2.4.3']; }
						if (pv2Seg['PV2.4']['PV2.4.4'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].transferReason.altId = pv2Seg['PV2.4']['PV2.4.4']; }
						if (pv2Seg['PV2.4']['PV2.4.5'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].transferReason.altText = pv2Seg['PV2.4']['PV2.4.5']; }
						if (pv2Seg['PV2.4']['PV2.4.6'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].transferReason.altCodingSystem = pv2Seg['PV2.4']['PV2.4.6']; }
						if (Object.keys(pid[index].PV1[indexPV1].PV2[indexPV2].transferReason).length == 0) {
							delete pid[index].PV1[indexPV1].PV2[indexPV2].transferReason;
						}
		
						// PV2.5, patientValuables
						pid[index].PV1[indexPV1].PV2[indexPV2].patientValuables = [];
						for each (field in pv2Seg['PV2.5']) {
							if (field['PV2.5.1'].toString() != "") {
								pid[index].PV1[indexPV1].PV2[indexPV2].patientValuables.push(field['PV2.5.1']);
							}
						}
						if (pid[index].PV1[indexPV1].PV2[indexPV2].patientValuables.length == 0) {
							delete pid[index].PV1[indexPV1].PV2[indexPV2].patientValuables;
						}

						// PV2.6, patientValuablesLocation
						if (pv2Seg['PV2.6.1']['PV2.6.1.1'].toString() != "") { pid[index].pv1[indexPV1].pv2[indexPV2].patientValuablesLocation = pv2Seg['PV2.6.1']['PV2.6.1.1']; }

						// PV2.7, visitUserCode
						if (pv2Seg['PV2.7']['PV2.7.1'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].visitUserCode = pv2Seg['PV2.7']['PV2.7.1']; }
						
						// PV2.8, expectedAdmitDateTime
						if (pv2Seg['PV2.8']['PV2.8.1'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].expectedAdmitDateTime = pv2Seg['PV2.8']['PV2.8.1']; }
						
						// PV2.9, expectedDischargeDateTime
						if (pv2Seg['PV2.9']['PV2.9.1'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].expectedDischargeDateTime = pv2Seg['PV2.9']['PV2.9.1']; }
						
						// PV2.10, estimatedLengthInpatientStay
						if (pv2Seg['PV2.10']['PV2.10.1'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].estimatedLengthInpatientStay = pv2Seg['PV2.10']['PV2.10.1']; }
						
						// PV2.11, actualLengthInpatientStay
						if (pv2Seg['PV2.11']['PV2.11.1'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].actualLengthInpatientStay = pv2Seg['PV2.11']['PV2.11.1']; }
						
						// PV2.12, visitDescription
						if (pv2Seg['PV2.12']['PV2.12.1'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].visitDescription = pv2Seg['PV2.12']['PV2.12.1']; }
						
						// PV2.13, referralSourceCode
						pid[index].PV1[indexPV1].PV2[indexPV2].referralSourceCode = {};
						if (pv2Seg['PV2.13']['PV2.13.1'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].referralSourceCode.id = pv2Seg['PV2.13']['PV2.13.1']; }
						if (pv2Seg['PV2.13']['PV2.13.2'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].referralSourceCode.lastName = pv2Seg['PV2.13']['PV2.13.2']; }
						if (pv2Seg['PV2.13']['PV2.13.3'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].referralSourceCode.firstName = pv2Seg['PV2.13']['PV2.13.3']; }
						if (pv2Seg['PV2.13']['PV2.13.4'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].referralSourceCode.middleInitOrName = pv2Seg['PV2.13']['PV2.13.4']; }
						if (pv2Seg['PV2.13']['PV2.13.5'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].referralSourceCode.suffix = pv2Seg['PV2.13']['PV2.13.5']; }
						if (pv2Seg['PV2.13']['PV2.13.6'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].referralSourceCode.prefix = pv2Seg['PV2.13']['PV2.13.6']; }
						if (pv2Seg['PV2.13']['PV2.13.7'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].referralSourceCode.degree = pv2Seg['PV2.13']['PV2.13.7']; }
						if (pv2Seg['PV2.13']['PV2.13.8'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].referralSourceCode.sourceTable = pv2Seg['PV2.13']['PV2.13.8']; }
						pid[index].PV1[indexPV1].PV2[indexPV2].referralSourceCode.assigningAuthority = {};
						if (pv2Seg['PV2.13']['PV2.13.9']['PV2.13.9.1'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].referralSourceCode.assigningAuthority.id = pv2Seg['PV2.13']['PV2.13.9']['PV2.13.9.1']; }
						if (pv2Seg['PV2.13']['PV2.13.9']['PV2.13.9.2'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].referralSourceCode.assigningAuthority.universalId = pv2Seg['PV2.13']['PV2.13.9']['PV2.13.9.2']; }
						if (pv2Seg['PV2.13']['PV2.13.9']['PV2.13.9.3'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].referralSourceCode.assigningAuthority.universalIdType = pv2Seg['PV2.13']['PV2.13.9']['PV2.13.9.3']; }
						if (Object.keys(pid[index].PV1[indexPV1].PV2[indexPV2].referralSourceCode.assigningAuthority).length == 0) {
							delete pid[index].PV1[indexPV1].PV2[indexPV2].referralSourceCode.assigningAuthority;
						}
						if (pv2Seg['PV2.13']['PV2.13.10'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].referralSourceCode.nameTypeCode = pv2Seg['PV2.13']['PV2.13.10']; }
						if (pv2Seg['PV2.13']['PV2.13.11'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].referralSourceCode.identifierCheckDigit = pv2Seg['PV2.13']['PV2.13.11']; }
						if (pv2Seg['PV2.13']['PV2.13.12'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].referralSourceCode.codeIdentifyingCheckDigitScheme = pv2Seg['PV2.13']['PV2.13.12']; }
						if (pv2Seg['PV2.13']['PV2.13.13'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].referralSourceCode.identifierTypeCode = pv2Seg['PV2.13']['PV2.13.13']; }
						pid[index].PV1[indexPV1].PV2[indexPV2].referralSourceCode.assigningFacility = {};
						if (pv2Seg['PV2.13']['PV2.13.14']['PV2.13.14.1'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].referralSourceCode.assigningFacility.id = pv2Seg['PV2.13']['PV2.13.14']['PV2.13.14.1']; }
						if (pv2Seg['PV2.13']['PV2.13.14']['PV2.13.14.2'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].referralSourceCode.assigningFacility.universalId = pv2Seg['PV2.13']['PV2.13.14']['PV2.13.14.2']; }
						if (pv2Seg['PV2.13']['PV2.13.14']['PV2.13.14.3'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].referralSourceCode.assigningFacility.universalIdType = pv2Seg['PV2.13']['PV2.13.14']['PV2.13.14.3']; }
						if (Object.keys(pid[index].PV1[indexPV1].PV2[indexPV2].referralSourceCode.assigningFacility).length == 0) {
							delete pid[index].PV1[indexPV1].PV2[indexPV2].referralSourceCode.assigningFacility;
						}
						if (Object.keys(pid[index].PV1[indexPV1].PV2[indexPV2].referralSourceCode).length == 0) {
							delete pid[index].PV1[indexPV1].PV2[indexPV2].referralSourceCode;
						}
		
						// PV2.14, previousServiceDate
						if (pv2Seg['PV2.14']['PV2.14.1'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].previousServiceDate = pv2Seg['PV2.14']['PV2.14.1']; }
						
						// PV2.15, employmentIllnessRelatedIndicator
						if (pv2Seg['PV2.15']['PV2.15.1'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].employmentIllnessRelatedIndicator = pv2Seg['PV2.15']['PV2.15.1']; }
						
						// PV2.16, purgeStatusCode
						if (pv2Seg['PV2.16']['PV2.16.1'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].purgeStatusCode = pv2Seg['PV2.16']['PV2.16.1']; }
						
						// PV2.17, purgeStatusDate
						if (pv2Seg['PV2.17']['PV2.17.1'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].purgeStatusDate = pv2Seg['PV2.17']['PV2.17.1']; }
						
						// PV2.18, specialProgramCode
						if (pv2Seg['PV2.18']['PV2.18.1'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].specialProgramCode = pv2Seg['PV2.18']['PV2.18.1']; }
						
						// PV2.19, retentionIndicator
						if (pv2Seg['PV2.19']['PV2.19.1'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].retentionIndicator = pv2Seg['PV2.19']['PV2.19.1']; }
						
						// PV2.20, expectedNumInsurancePlans
						if (pv2Seg['PV2.20']['PV2.20.1'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].expectedNumInsurancePlans = pv2Seg['PV2.20']['PV2.20.1']; }
						
						// PV2.21, visitPublicityCode
						if (pv2Seg['PV2.21']['PV2.21.1'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].visitPublicityCode = pv2Seg['PV2.21']['PV2.21.1']; }
						
						// PV2.22, visitProtectionIndicator
						if (pv2Seg['PV2.22']['PV2.22.1'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].visitProtectionIndicator = pv2Seg['PV2.22']['PV2.22.1']; }
						
						// PV2.23, clinicOrganizationName
						pid[index].PV1[indexPV1].PV2[indexPV2].clinicOrganizationName = [];
						for each (field in pv2Seg['PV2.23']) {
							var block = {};
							if (field['PV2.23.1'].toString() != "") { block.organizationName = field['PV2.23.1']; }
							if (field['PV2.23.2'].toString() != "") { block.organizationNameTypeCode = field['PV2.23.2']; }
							if (field['PV2.23.3'].toString() != "") { block.idNumber = field['PV2.23.3']; }
							if (field['PV2.23.4'].toString() != "") { block.identifierCheckDigit = field['PV2.23.4']; }
							if (field['PV2.23.5'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['PV2.23.5']; }
							block.assigningAuthority = {};
							if (field['PV2.23.6']['PV2.23.6.1'].toString() != "") { block.assigningAuthority.namespaceId = field['PV2.23.6']['PV2.23.6.1']; }
							if (field['PV2.23.6']['PV2.23.6.2'].toString() != "") { block.assigningAuthority.universalId = field['PV2.23.6']['PV2.23.6.2']; }
							if (field['PV2.23.6']['PV2.23.6.3'].toString() != "") { block.assigningAuthority.universalIdType = field['PV2.23.6']['PV2.23.6.3']; }
							if (Object.keys(block.assigningAuthority).length == 0) {
								delete block.assigningAuthority;
							}
							if (field['PV2.23.7'].toString() != "") { block.idTypeCode = field['PV2.23.7']; }
							block.assigningFacility = {};
							if (field['PV2.23.8']['PV2.23.8.1'].toString() != "") { block.assigningFacility.namespaceId = field['PV2.23.8']['PV2.23.8.1']; }
							if (field['PV2.23.8']['PV2.23.8.2'].toString() != "") { block.assigningFacility.universalId = field['PV2.23.8']['PV2.23.8.2']; }
							if (field['PV2.23.8']['PV2.23.8.3'].toString() != "") { block.assigningFacility.universalIdType = field['PV2.23.8']['PV2.23.8.3']; }
							if (Object.keys(block.assigningFacility).length == 0) {
								delete block.assigningFacility;
							}
							if (Object.keys(block).length > 0) {
								pid[index].PV1[indexPV1].PV2[indexPV2].clinicOrganizationName.push(block);
							}
						}
						if (pid[index].PV1[indexPV1].PV2[indexPV2].clinicOrganizationName.length == 0) {
							delete pid[index].PV1[indexPV1].PV2[indexPV2].clinicOrganizationName;
						}
		
						// PV2.24, patientStatusCode
						if (pv2Seg['PV2.24']['PV2.24.1'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].patientStatusCode = pv2Seg['PV2.24']['PV2.24.1']; }
						
						// PV2.25, visitPriorityCode
						if (pv2Seg['PV2.25']['PV2.25.1'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].visitPriorityCode = pv2Seg['PV2.25']['PV2.25.1']; }
						
						// PV2.26, previousTreatmentDate
						if (pv2Seg['PV2.26']['PV2.26.1'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].previousTreatmentDate = pv2Seg['PV2.26']['PV2.26.1']; }
						
						// PV2.27, expectedDischargeDisposition
						if (pv2Seg['PV2.27']['PV2.27.1'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].expectedDischargeDisposition = pv2Seg['PV2.27']['PV2.27.1']; }
						
						// PV2.28, signatureOnFileDate
						if (pv2Seg['PV2.28']['PV2.28.1'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].signatureOnFileDate = pv2Seg['PV2.28']['PV2.28.1']; }
						
						// PV2.29, firstSimilarIllnessDate
						if (pv2Seg['PV2.29']['PV2.29.1'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].firstSimilarIllnessDate = pv2Seg['PV2.29']['PV2.29.1']; }
						
						// PV2.30, patientChargeAdjustmentCode
						if (pv2Seg['PV2.30']['PV2.30.1'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].patientChargeAdjustmentCode = pv2Seg['PV2.30']['PV2.30.1']; }
						
						// PV2.31, recurringServiceCode
						if (pv2Seg['PV2.31']['PV2.31.1'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].recurringServiceCode = pv2Seg['PV2.31']['PV2.31.1']; }
						
						// PV2.32, billingMediaCode
						if (pv2Seg['PV2.32']['PV2.32.1'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].billingMediaCode = pv2Seg['PV2.32']['PV2.32.1']; }
						
						// PV2.33, expectedSurgeryDateTime
						if (pv2Seg['PV2.33']['PV2.33.1'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].expectedSurgeryDateTime = pv2Seg['PV2.33']['PV2.33.1']; }
						
						// PV2.34, militaryPartnershipCode
						if (pv2Seg['PV2.34']['PV2.34.1'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].militaryPartnershipCode = pv2Seg['PV2.34']['PV2.34.1']; }
						
						// PV2.35, militaryNonAvailabilityCode
						if (pv2Seg['PV2.35']['PV2.35.1'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].militaryNonAvailabilityCode = pv2Seg['PV2.35']['PV2.35.1']; }
						
						// PV2.36, newbornBabyIndicator
						if (pv2Seg['PV2.36']['PV2.36.1'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].newbornBabyIndicator = pv2Seg['PV2.36']['PV2.36.1']; }
						
						// PV2.37, babyDetainedIndicator
						if (pv2Seg['PV2.37']['PV2.37.1'].toString() != "") { pid[index].PV1[indexPV1].PV2[indexPV2].babyDetainedIndicator = pv2Seg['PV2.37']['PV2.37.1']; }
						
						// clean up PV2 and increment index
						if (Object.keys(pid[index].PV1[indexPV1].PV2[indexPV2]).length == 0) {
							delete pid[index].PV1[indexPV1].PV2[indexPV2];
						} else {
							indexPV2++;
						}
					}
		
					// Clean up the PV2 object if it's empty
					if (pid[index].PV1[indexPV1].PV2[0] == null){
						delete pid[index].PV1[indexPV1].PV2;
				} else {
					indexPV1++;
				}
			}
		}

		// OBX (PID for SIU and SRM)
		var obxGroup = getSegmentsAfter(msg,seg,'OBX',true);
		if (obxGroup.length > 0) {
			pid[index].obx = [];
			var indexOBX = 0;
			for each (obxSeg in obxGroup) {
				pid[index].pv1[indexOBX] = {};

				// OBX.1, setId
				if (obxSeg['OBX.1']['OBX.1.1'].toString() != "") { pid[index].obx[indexOBX].setId = obxSeg['OBX.1']['OBX.1.1']; }

				// OBX.2, valueType
				if (obxSeg['OBX.2']['OBX.2.1'].toString() != "") { pid[index].obx[indexOBX].setId = obxSeg['OBX.2']['OBX.2.1']; }
				
				// OBX.3, identifier
				pid[index].obx[indexOBX].identifier = {};
				if (obxSeg['OBX.3']['OBX.3.1'].toString() != "") { pid[index].obx[indexOBX].identifier.id = obxSeg['OBX.3']['OBX.3.1']; }
				if (obxSeg['OBX.3']['OBX.3.2'].toString() != "") { pid[index].obx[indexOBX].identifier.text = obxSeg['OBX.3']['OBX.3.2']; }
				if (obxSeg['OBX.3']['OBX.3.3'].toString() != "") { pid[index].obx[indexOBX].identifier.codingSystem = obxSeg['OBX.3']['OBX.3.3']; }
				if (obxSeg['OBX.3']['OBX.3.4'].toString() != "") { pid[index].obx[indexOBX].identifier.altId = obxSeg['OBX.3']['OBX.3.4']; }
				if (obxSeg['OBX.3']['OBX.3.5'].toString() != "") { pid[index].obx[indexOBX].identifier.altText = obxSeg['OBX.3']['OBX.3.5']; }
				if (obxSeg['OBX.3']['OBX.3.6'].toString() != "") { pid[index].obx[indexOBX].identifier.altCodingSystem = obxSeg['OBX.3']['OBX.3.6']; }
				if (Object.keys(pid[index].obx[indexOBX].identifier).length == 0) {
					delete pid[index].obx[indexOBX].identifier;
				}

				// OBX.4, subId
				if (obxSeg['OBX.4']['OBX.4.1'].toString() != "") { pid[index].obx[indexOBX].setId = obxSeg['OBX.4']['OBX.4.1']; }
				
				// OBX.5, observationValue
				pid[index].obx[indexOBX].observationValue = [];
				for each (field in obxSeg['OBX.5']) {
					if (field['OBX.5.1'].toString() != "") { 
						pid[index].obx[indexOBX].observationValue.push(field['OBX.5.1']); 
					}
				}

				// OBX.6, units
				pid[index].obx[indexOBX].units = {};
				if (obxSeg['OBX.6']['OBX.6.1'].toString() != "") { pid[index].obx[indexOBX].units.id = obxSeg['OBX.6']['OBX.6.1']; }
				if (obxSeg['OBX.6']['OBX.6.2'].toString() != "") { pid[index].obx[indexOBX].units.text = obxSeg['OBX.6']['OBX.6.2']; }
				if (obxSeg['OBX.6']['OBX.6.3'].toString() != "") { pid[index].obx[indexOBX].units.codingSystem = obxSeg['OBX.6']['OBX.6.3']; }
				if (obxSeg['OBX.6']['OBX.6.4'].toString() != "") { pid[index].obx[indexOBX].units.altId = obxSeg['OBX.6']['OBX.6.4']; }
				if (obxSeg['OBX.6']['OBX.6.5'].toString() != "") { pid[index].obx[indexOBX].units.altText = obxSeg['OBX.6']['OBX.6.5']; }
				if (obxSeg['OBX.6']['OBX.6.6'].toString() != "") { pid[index].obx[indexOBX].units.altCodingSystem = obxSeg['OBX.6']['OBX.6.6']; }
				if (Object.keys(pid[index].obx[indexOBX].units).length == 0) {
					delete pid[index].obx[indexOBX].units;
				}

				// OBX.7, referenceRange
				if (obxSeg['OBX.7']['OBX.7.1'].toString() != "") { pid[index].obx[indexOBX].setId = obxSeg['OBX.7']['OBX.7.1']; }
				
				// OBX.8, abnormalFlag
				pid[index].obx[indexOBX].abnormalFlag = [];
				for each (field in obxSeg['OBX.9']) {
					if (field['OBX.9.1'].toString() != "") { 
						pid[index].obx[indexOBX].abnormalFlag.push(field['OBX.9.1']); 
					}
				}

				// OBX.9, probability
				if (obxSeg['OBX.9']['OBX.9.1'].toString() != "") { pid[index].obx[indexOBX].setId = obxSeg['OBX.9']['OBX.9.1']; }
				
				// OBX.10, natureOfAbnormal
				pid[index].obx[indexOBX].natureOfAbnormal = [];
				for each (field in obxSeg['OBX.10']) {
					if (field['OBX.10.1'].toString() != "") { 
						pid[index].obx[indexOBX].natureOfAbnormal.push(field['OBX.10.1']); 
					}
				}

				// OBX.11, observeResultStatus
				if (obxSeg['OBX.11']['OBX.11.1'].toString() != "") { pid[index].obx[indexOBX].setId = obxSeg['OBX.11']['OBX.11.1']; }
				
				// OBX.12, effectiveDateLastNormalValue
				if (obxSeg['OBX.12']['OBX.12.1'].toString() != "") { pid[index].obx[indexOBX].setId = obxSeg['OBX.12']['OBX.12.1']; }
				
				// OBX.13, definedAccessChecks
				if (obxSeg['OBX.13']['OBX.13.1'].toString() != "") { pid[index].obx[indexOBX].setId = obxSeg['OBX.13']['OBX.13.1']; }
				
				// OBX.14, observationDateTime
				if (obxSeg['OBX.14']['OBX.14.1'].toString() != "") { pid[index].obx[indexOBX].setId = obxSeg['OBX.14']['OBX.14.1']; }
				
				// OBX.15, producersId
				pid[index].obx[indexOBX].producersId = {};
				if (obxSeg['OBX.15']['OBX.15.1'].toString() != "") { pid[index].obx[indexOBX].producersId.id = obxSeg['OBX.15']['OBX.15.1']; }
				if (obxSeg['OBX.15']['OBX.15.2'].toString() != "") { pid[index].obx[indexOBX].producersId.text = obxSeg['OBX.15']['OBX.15.2']; }
				if (obxSeg['OBX.15']['OBX.15.3'].toString() != "") { pid[index].obx[indexOBX].producersId.codingSystem = obxSeg['OBX.15']['OBX.15.3']; }
				if (obxSeg['OBX.15']['OBX.15.4'].toString() != "") { pid[index].obx[indexOBX].producersId.altId = obxSeg['OBX.15']['OBX.15.4']; }
				if (obxSeg['OBX.15']['OBX.15.5'].toString() != "") { pid[index].obx[indexOBX].producersId.altText = obxSeg['OBX.15']['OBX.15.5']; }
				if (obxSeg['OBX.15']['OBX.15.6'].toString() != "") { pid[index].obx[indexOBX].producersId.altCodingSystem = obxSeg['OBX.15']['OBX.15.6']; }
				if (Object.keys(pid[index].obx[indexOBX].producersId).length == 0) {
					delete pid[index].obx[indexOBX].producersId;
				}

				// OBX.16, responsibleObserver
				pid[index].obx[indexOBX].responsibleObserver = {};
				if (obxSeg['OBX.16']['OBX.16.1'].toString() != "") { pid[index].obx[indexOBX].responsibleObserver.id = obxSeg['OBX.16']['OBX.16.1']; }
				if (obxSeg['OBX.16']['OBX.16.2'].toString() != "") { pid[index].obx[indexOBX].responsibleObserver.lastName = obxSeg['OBX.16']['OBX.16.2']; }
				if (obxSeg['OBX.16']['OBX.16.3'].toString() != "") { pid[index].obx[indexOBX].responsibleObserver.firstName = obxSeg['OBX.16']['OBX.16.3']; }
				if (obxSeg['OBX.16']['OBX.16.4'].toString() != "") { pid[index].obx[indexOBX].responsibleObserver.middleInitOrName = obxSeg['OBX.16']['OBX.16.4']; }
				if (obxSeg['OBX.16']['OBX.16.5'].toString() != "") { pid[index].obx[indexOBX].responsibleObserver.suffix = obxSeg['OBX.16']['OBX.16.5']; }
				if (obxSeg['OBX.16']['OBX.16.6'].toString() != "") { pid[index].obx[indexOBX].responsibleObserver.prefix = obxSeg['OBX.16']['OBX.16.6']; }
				if (obxSeg['OBX.16']['OBX.16.7'].toString() != "") { pid[index].obx[indexOBX].responsibleObserver.degree = obxSeg['OBX.16']['OBX.16.7']; }
				if (obxSeg['OBX.16']['OBX.16.8'].toString() != "") { pid[index].obx[indexOBX].responsibleObserver.sourceTable = obxSeg['OBX.16']['OBX.16.8']; }
				pid[index].obx[indexOBX].responsibleObserver.assigningAuthority = {};
				if (obxSeg['OBX.16']['OBX.16.9']['OBX.16.9.1'].toString() != "") { pid[index].obx[indexOBX].responsibleObserver.assigningAuthority.id = obxSeg['OBX.16']['OBX.16.9']['OBX.16.9.1']; }
				if (obxSeg['OBX.16']['OBX.16.9']['OBX.16.9.2'].toString() != "") { pid[index].obx[indexOBX].responsibleObserver.assigningAuthority.universalId = obxSeg['OBX.16']['OBX.16.9']['OBX.16.9.2']; }
				if (obxSeg['OBX.16']['OBX.16.9']['OBX.16.9.3'].toString() != "") { pid[index].obx[indexOBX].responsibleObserver.assigningAuthority.universalIdType = obxSeg['OBX.16']['OBX.16.9']['OBX.16.9.3']; }
				if (Object.keys(pid[index].obx[indexOBX].responsibleObserver.assigningAuthority).length == 0) {
					delete pid[index].obx[indexOBX].responsibleObserver.assigningAuthority;
				}
				if (obxSeg['OBX.16']['OBX.16.10'].toString() != "") { pid[index].obx[indexOBX].responsibleObserver.nameTypeCode = obxSeg['OBX.16']['OBX.16.10']; }
				if (obxSeg['OBX.16']['OBX.16.11'].toString() != "") { pid[index].obx[indexOBX].responsibleObserver.identifierCheckDigit = obxSeg['OBX.16']['OBX.16.11']; }
				if (obxSeg['OBX.16']['OBX.16.12'].toString() != "") { pid[index].obx[indexOBX].responsibleObserver.codeIdentifyingCheckDigitScheme = obxSeg['OBX.16']['OBX.16.12']; }
				if (obxSeg['OBX.16']['OBX.16.13'].toString() != "") { pid[index].obx[indexOBX].responsibleObserver.identifierTypeCode = obxSeg['OBX.16']['OBX.16.13']; }
				pid[index].obx[indexOBX].responsibleObserver.assigningFacility = {};
				if (obxSeg['OBX.16']['OBX.16.14']['OBX.16.14.1'].toString() != "") { pid[index].obx[indexOBX].responsibleObserver.assigningFacility.id = obxSeg['OBX.16']['OBX.16.14']['OBX.16.14.1']; }
				if (obxSeg['OBX.16']['OBX.16.14']['OBX.16.14.2'].toString() != "") { pid[index].obx[indexOBX].responsibleObserver.assigningFacility.universalId = obxSeg['OBX.16']['OBX.16.14']['OBX.16.14.2']; }
				if (obxSeg['OBX.16']['OBX.16.14']['OBX.16.14.3'].toString() != "") { pid[index].obx[indexOBX].responsibleObserver.assigningFacility.universalIdType = obxSeg['OBX.16']['OBX.16.14']['OBX.16.14.3']; }
				if (Object.keys(pid[index].obx[indexOBX].responsibleObserver.assigningFacility).length == 0) {
					delete pid[index].obx[indexOBX].responsibleObserver.assigningFacility;
				}
				if (Object.keys(pid[index].obx[indexOBX].responsibleObserver).length == 0) {
					delete pid[index].obx[indexOBX].responsibleObserver;
				}

				// OBX.17, observationMethod
				pid[index].obx[indexOBX].observationMethod = [];
				for each (field in obxSeg['OBX.17']) {
					var block = {};
					if (field['OBX.17.1'].toString() != "") { block.id = field['OBX.17.1']; }
					if (field['OBX.17.2'].toString() != "") { block.text = field['OBX.17.2']; }
					if (field['OBX.17.3'].toString() != "") { block.codingSystem = field['OBX.17.3']; }
					if (field['OBX.17.4'].toString() != "") { block.altId = field['OBX.17.4']; }
					if (field['OBX.17.5'].toString() != "") { block.altText = field['OBX.17.5']; }
					if (field['OBX.17.6'].toString() != "") { block.altCodingSystem = field['OBX.17.6']; }
					if (Object.keys(block).length > 0) {
						pid[index].obx[indexOBX].observationMethod.push(block);
					}
				}
				if (pid[index].obx[indexOBX].observationMethod.length == 0) {
					delete pid[index].obx[indexOBX].observationMethod;
				}

				// NTE (OBX)
				var nteGroup = getSegmentsAfter(msg,obxSeg,'NTE',true);
				if (nteGroup.length > 0) {
					pid[index].obx[indexOBX].nte = [];
					var indexNTE = 0;
					for each (nteSeg in nteGroup) {
						pid[index].obx[indexOBX].nte[indexNTE] = {};

						// NTE.1, setId
						if (nteSeg['NTE.1']['NTE.1.1'].toString() != "") { pid[index].obx[indexOBX].nte[indexNTE].setId = nteSeg['NTE.1']['NTE.1.1']; }

						// NTE.2, sourceOfComment
						if (nteSeg['NTE.2']['NTE.2.1'].toString() != "") { pid[index].obx[indexOBX].nte[indexNTE].sourceOfComment = nteSeg['NTE.2']['NTE.2.1']; }

						// NTE.3, comment
						pid[index].obx[indexOBX].nte[indexNTE].comment = [];
						for each (field in nteSeg['NTE.3']) {
							var block = {};
							if (field['NTE.3.1'].toString() != "") { 
								pid[index].obx[indexOBX].nte[indexNTE].comment.push(field['NTE.3.1']);
							}
						}

						// clean up NTE and increment index
						if (Object.keys(nte[indexNTE]).length == 0) {
							delete nte[indexNTE];
						} else {
							indexNTE++;
						}
					}
				}

				// clean up OBX and increment index
				if (Object.keys(pid[index].obx[indexOBX]).length == 0) {
					delete pid[index].obx[indexOBX];
				} else {
					indexOBX++;
				}
			}
		}

		// DG1 (PID for SIU and SRM)
		var dg1Group = getSegmentsAfter(msg,seg,'DG1',true);
		if (dg1Group.length > 0) {
			pid[index].dg1 = [];
			var indexDG1 = 0;
			for each (dg1Seg in dg1Group) {
				pid[index].dg1[indexDG1] = {};

				// DG1.1, setId
				if (dg1Seg['DG1.1']['DG1.1.1'].toString() != "") { pid[index].dg1[indexDG1].setId = dg1Seg['DG1.1']['DG1.1.1']; }

				// DG1.2, diagnosisCodingMethod
				if (dg1Seg['DG1.2']['DG1.2.1'].toString() != "") { pid[index].dg1[indexDG1].diagnosisCodingMethod = dg1Seg['DG1.2']['DG1.2.1']; }
				
				// DG1.3, diagnosisCode
				pid[index].dg1[indexDG1].diagnosisCode = {};
				if (dg1Seg['DG1.3']['DG1.3.1'].toString() != "") { pid[index].dg1[indexDG1].diagnosisCode.id = dg1Seg['DG1.3']['DG1.3.1']; }
				if (dg1Seg['DG1.3']['DG1.3.2'].toString() != "") { pid[index].dg1[indexDG1].diagnosisCode.text = dg1Seg['DG1.3']['DG1.3.2']; }
				if (dg1Seg['DG1.3']['DG1.3.3'].toString() != "") { pid[index].dg1[indexDG1].diagnosisCode.codingSystem = dg1Seg['DG1.3']['DG1.3.3']; }
				if (dg1Seg['DG1.3']['DG1.3.4'].toString() != "") { pid[index].dg1[indexDG1].diagnosisCode.altId = dg1Seg['DG1.3']['DG1.3.4']; }
				if (dg1Seg['DG1.3']['DG1.3.5'].toString() != "") { pid[index].dg1[indexDG1].diagnosisCode.altText = dg1Seg['DG1.3']['DG1.3.5']; }
				if (dg1Seg['DG1.3']['DG1.3.6'].toString() != "") { pid[index].dg1[indexDG1].diagnosisCode.altCodingSystem = dg1Seg['DG1.3']['DG1.3.6']; }
				if (Object.keys(pid[index].dg1[indexDG1].diagnosisCode).length == 0) {
					delete pid[index].dg1[indexDG1].diagnosisCode;
				}
				
				// DG1.4, diagnosisDescription
				if (dg1Seg['DG1.4']['DG1.4.1'].toString() != "") { pid[index].dg1[indexDG1].diagnosisDescription = dg1Seg['DG1.4']['DG1.4.1']; }
						
				// DG1.5, diagnosisDateTime
				if (dg1Seg['DG1.5']['DG1.5.1'].toString() != "") { pid[index].dg1[indexDG1].diagnosisDateTime = dg1Seg['DG1.5']['DG1.5.1']; }
						
				// DG1.6, diagnosisType
				if (dg1Seg['DG1.6']['DG1.6.1'].toString() != "") { pid[index].dg1[indexDG1].diagnosisType = dg1Seg['DG1.6']['DG1.6.1']; }
						
				// DG1.7, majorDiagnosticCategory
				pid[index].dg1[indexDG1].majorDiagnosticCategory = {};
				if (dg1Seg['DG1.7']['DG1.7.1'].toString() != "") { pid[index].dg1[indexDG1].majorDiagnosticCategory.id = dg1Seg['DG1.7']['DG1.7.1']; }
				if (dg1Seg['DG1.7']['DG1.7.2'].toString() != "") { pid[index].dg1[indexDG1].majorDiagnosticCategory.text = dg1Seg['DG1.7']['DG1.7.2']; }
				if (dg1Seg['DG1.7']['DG1.7.3'].toString() != "") { pid[index].dg1[indexDG1].majorDiagnosticCategory.codingSystem = dg1Seg['DG1.7']['DG1.7.3']; }
				if (dg1Seg['DG1.7']['DG1.7.4'].toString() != "") { pid[index].dg1[indexDG1].majorDiagnosticCategory.altId = dg1Seg['DG1.7']['DG1.7.4']; }
				if (dg1Seg['DG1.7']['DG1.7.5'].toString() != "") { pid[index].dg1[indexDG1].majorDiagnosticCategory.altText = dg1Seg['DG1.7']['DG1.7.5']; }
				if (dg1Seg['DG1.7']['DG1.7.6'].toString() != "") { pid[index].dg1[indexDG1].majorDiagnosticCategory.altCodingSystem = dg1Seg['DG1.7']['DG1.7.6']; }
				if (Object.keys(pid[index].dg1[indexDG1].majorDiagnosticCategory).length == 0) {
					delete pid[index].dg1[indexDG1].majorDiagnosticCategory;
				}

				// DG1.8, diagnosticRelatedGroup
				pid[index].dg1[indexDG1].diagnosticRelatedGroup = {};
				if (dg1Seg['DG1.8']['DG1.8.1'].toString() != "") { pid[index].dg1[indexDG1].diagnosticRelatedGroup.id = dg1Seg['DG1.8']['DG1.8.1']; }
				if (dg1Seg['DG1.8']['DG1.8.2'].toString() != "") { pid[index].dg1[indexDG1].diagnosticRelatedGroup.text = dg1Seg['DG1.8']['DG1.8.2']; }
				if (dg1Seg['DG1.8']['DG1.8.3'].toString() != "") { pid[index].dg1[indexDG1].diagnosticRelatedGroup.codingSystem = dg1Seg['DG1.8']['DG1.8.3']; }
				if (dg1Seg['DG1.8']['DG1.8.4'].toString() != "") { pid[index].dg1[indexDG1].diagnosticRelatedGroup.altId = dg1Seg['DG1.8']['DG1.8.4']; }
				if (dg1Seg['DG1.8']['DG1.8.5'].toString() != "") { pid[index].dg1[indexDG1].diagnosticRelatedGroup.altText = dg1Seg['DG1.8']['DG1.8.5']; }
				if (dg1Seg['DG1.8']['DG1.8.6'].toString() != "") { pid[index].dg1[indexDG1].diagnosticRelatedGroup.altCodingSystem = dg1Seg['DG1.8']['DG1.8.6']; }
				if (Object.keys(pid[index].dg1[indexDG1].diagnosticRelatedGroup).length == 0) {
					delete pid[index].dg1[indexDG1].diagnosticRelatedGroup;
				}

				// DG1.9, drgApprovalIndicator
				if (dg1Seg['DG1.9']['DG1.9.1'].toString() != "") { pid[index].dg1[indexDG1].drgApprovalIndicator = dg1Seg['DG1.9']['DG1.9.1']; }
						
				// DG1.10, drgGrouperReviewCode
				if (dg1Seg['DG1.10']['DG1.10.1'].toString() != "") { pid[index].dg1[indexDG1].drgGrouperReviewCode = dg1Seg['DG1.10']['DG1.10.1']; }
						
				// DG1.11, outlierType
				pid[index].dg1[indexDG1].outlierType = {};
				if (dg1Seg['DG1.11']['DG1.11.1'].toString() != "") { pid[index].dg1[indexDG1].outlierType.id = dg1Seg['DG1.11']['DG1.11.1']; }
				if (dg1Seg['DG1.11']['DG1.11.2'].toString() != "") { pid[index].dg1[indexDG1].outlierType.text = dg1Seg['DG1.11']['DG1.11.2']; }
				if (dg1Seg['DG1.11']['DG1.11.3'].toString() != "") { pid[index].dg1[indexDG1].outlierType.codingSystem = dg1Seg['DG1.11']['DG1.11.3']; }
				if (dg1Seg['DG1.11']['DG1.11.4'].toString() != "") { pid[index].dg1[indexDG1].outlierType.altId = dg1Seg['DG1.11']['DG1.11.4']; }
				if (dg1Seg['DG1.11']['DG1.11.5'].toString() != "") { pid[index].dg1[indexDG1].outlierType.altText = dg1Seg['DG1.11']['DG1.11.5']; }
				if (dg1Seg['DG1.11']['DG1.11.6'].toString() != "") { pid[index].dg1[indexDG1].outlierType.altCodingSystem = dg1Seg['DG1.11']['DG1.11.6']; }
				if (Object.keys(pid[index].dg1[indexDG1].outlierType).length == 0) {
					delete pid[index].dg1[indexDG1].outlierType;
				}
				// DG1.12, outlierDays
				if (dg1Seg['DG1.12']['DG1.12.1'].toString() != "") { pid[index].dg1[indexDG1].outlierDays = dg1Seg['DG1.12']['DG1.12.1']; }
						
				// DG1.13, outlierCost
				pid[index].dg1[indexDG1].outlierCost = {};
				pid[index].dg1[indexDG1].outlierCost.price = {};
				if (dg1Seg['DG1.13']['DG1.13.1']['DG1.13.1.1'].toString() != "") { pid[index].dg1[indexDG1].outlierCost.price.quantity = dg1Seg['DG1.13']['DG1.13.1']['DG1.13.1.1']; }
				if (dg1Seg['DG1.13']['DG1.13.1']['DG1.13.1.2'].toString() != "") { pid[index].dg1[indexDG1].outlierCost.price.denomination = dg1Seg['DG1.13']['DG1.13.1']['DG1.13.1.2']; }
				if (Object.keys(pid[index].dg1[indexDG1].outlierCost.price).length == 0) {
					delete pid[index].dg1[indexDG1].outlierCost.price;
				}
				if (dg1Seg['DG1.13']['DG1.13.2'].toString() != "") { pid[index].dg1[indexDG1].outlierCost.priceType = dg1Seg['DG1.13']['DG1.13.2']; }
				if (dg1Seg['DG1.13']['DG1.13.3'].toString() != "") { pid[index].dg1[indexDG1].outlierCost.fromValue = dg1Seg['DG1.13']['DG1.13.3']; }
				if (dg1Seg['DG1.13']['DG1.13.4'].toString() != "") { pid[index].dg1[indexDG1].outlierCost.toValue = dg1Seg['DG1.13']['DG1.13.4']; }
				if (dg1Seg['DG1.13']['DG1.13.5'].toString() != "") { pid[index].dg1[indexDG1].outlierCost.rangeUnits = dg1Seg['DG1.13']['DG1.13.5']; }
				pid[index].dg1[indexDG1].outlierCost.rangeType = {};
				if (dg1Seg['DG1.13']['DG1.13.6']['DG1.13.6.1'].toString() != "") { pid[index].dg1[indexDG1].outlierCost.rangeType.id = dg1Seg['DG1.13']['DG1.13.6']['DG1.13.6.1']; }
				if (dg1Seg['DG1.13']['DG1.13.6']['DG1.13.6.2'].toString() != "") { pid[index].dg1[indexDG1].outlierCost.rangeType.text = dg1Seg['DG1.13']['DG1.13.6']['DG1.13.6.2']; }
				if (dg1Seg['DG1.13']['DG1.13.6']['DG1.13.6.3'].toString() != "") { pid[index].dg1[indexDG1].outlierCost.rangeType.codingSystem = dg1Seg['DG1.13']['DG1.13.6']['DG1.13.6.3']; }
				if (dg1Seg['DG1.13']['DG1.13.6']['DG1.13.6.4'].toString() != "") { pid[index].dg1[indexDG1].outlierCost.rangeType.altId = dg1Seg['DG1.13']['DG1.13.6']['DG1.13.6.4']; }
				if (dg1Seg['DG1.13']['DG1.13.6']['DG1.13.6.5'].toString() != "") { pid[index].dg1[indexDG1].outlierCost.rangeType.altText = dg1Seg['DG1.13']['DG1.13.6']['DG1.13.6.5']; }
				if (dg1Seg['DG1.13']['DG1.13.6']['DG1.13.6.6'].toString() != "") { pid[index].dg1[indexDG1].outlierCost.rangeType.altCodingSystem = dg1Seg['DG1.13']['DG1.13.6']['DG1.13.6.6']; }
				if (Object.keys(pid[index].dg1[indexDG1].outlierCost.rangeType).length == 0) {
					delete pid[index].dg1[indexDG1].outlierCost.rangeType;
				}
				if (Object.keys(pid[index].dg1[indexDG1].outlierCost).length == 0) {
					delete pid[index].dg1[indexDG1].outlierCost;
				}

				// DG1.14, grouperVersionAndType
				if (dg1Seg['DG1.14']['DG1.14.1'].toString() != "") { pid[index].dg1[indexDG1].grouperVersionAndType = dg1Seg['DG1.14']['DG1.14.1']; }
						
				// DG1.15, diagnosisPriority
				if (dg1Seg['DG1.15']['DG1.15.1'].toString() != "") { pid[index].dg1[indexDG1].diagnosisPriority = dg1Seg['DG1.15']['DG1.15.1']; }
						
				// DG1.16, diagnosingClinician
				pid[index].dg1[indexDG1].diagnosingClinician = [];
				for each (field in dg1Seg['DG1.16']) {
					var block = {};
					if (field['DG1.16.1'].toString() != "") { block.id = field['DG1.16.1']; }
					if (field['DG1.16.2'].toString() != "") { block.lastName = field['DG1.16.2']; }
					if (field['DG1.16.3'].toString() != "") { block.firstName = field['DG1.16.3']; }
					if (field['DG1.16.4'].toString() != "") { block.middleInitOrName = field['DG1.16.4']; }
					if (field['DG1.16.5'].toString() != "") { block.suffix = field['DG1.16.5']; }
					if (field['DG1.16.6'].toString() != "") { block.prefix = field['DG1.16.6']; }
					if (field['DG1.16.7'].toString() != "") { block.degree = field['DG1.16.7']; }
					if (field['DG1.16.8'].toString() != "") { block.sourceTable = field['DG1.16.8']; }
					block.assigningAuthority = {};
					if (field['DG1.16.9']['DG1.16.9.1'].toString() != "") { block.assigningAuthority.id = field['DG1.16.9']['DG1.16.9.1']; }
					if (field['DG1.16.9']['DG1.16.9.2'].toString() != "") { block.assigningAuthority.universalId = field['DG1.16.9']['DG1.16.9.2']; }
					if (field['DG1.16.9']['DG1.16.9.3'].toString() != "") { block.assigningAuthority.universalIdType = field['DG1.16.9']['DG1.16.9.3']; }
					if (Object.keys(block.assigningAuthority).length == 0) {
						delete block.assigningAuthority;
					}
					if (field['DG1.16.10'].toString() != "") { block.nameTypeCode = field['DG1.16.10']; }
					if (field['DG1.16.11'].toString() != "") { block.identifierCheckDigit = field['DG1.16.11']; }
					if (field['DG1.16.12'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['DG1.16.12']; }
					if (field['DG1.16.13'].toString() != "") { block.identifierTypeCode = field['DG1.16.13']; }
					block.assigningFacility = {};
					if (field['DG1.16.14']['DG1.16.14.1'].toString() != "") { block.assigningFacility.id = field['DG1.16.14']['DG1.16.14.1']; }
					if (field['DG1.16.14']['DG1.16.14.2'].toString() != "") { block.assigningFacility.universalId = field['DG1.16.14']['DG1.16.14.2']; }
					if (field['DG1.16.14']['DG1.16.14.3'].toString() != "") { block.assigningFacility.universalIdType = field['DG1.16.14']['DG1.16.14.3']; }
					if (Object.keys(block.assigningFacility).length == 0) {
						delete block.assigningFacility;
					}
					if (Object.keys(block).length > 0) {
						pid[index].dg1[indexDG1].diagnosingClinician.push(block);
					}
				}
				if (pid[index].dg1[indexDG1].diagnosingClinician.length == 0) {
					delete pid[index].dg1[indexDG1].diagnosingClinician;
				}

				// DG1.17, diagnosisClassification
				if (dg1Seg['DG1.17']['DG1.17.1'].toString() != "") { pid[index].dg1[indexDG1].diagnosisClassification = dg1Seg['DG1.17']['DG1.17.1']; }
						
				// DG1.18, confidentialIndicator
				if (dg1Seg['DG1.18']['DG1.18.1'].toString() != "") { pid[index].dg1[indexDG1].confidentialIndicator = dg1Seg['DG1.18']['DG1.18.1']; }
						
				// DG1.19, attestationDateTime
				if (dg1Seg['DG1.19']['DG1.19.1'].toString() != "") { pid[index].dg1[indexDG1].attestationDateTime = dg1Seg['DG1.19']['DG1.19.1']; }

				// clean up DG1 and increment index
				if (Object.keys(pid[index].dg1[indexDG1]).length == 0) {
					delete pid[index].dg1[indexDG1];
				} else {
					indexDG1++;
				}
			}
		}

		// NTE (PID for SIU and SRM)
		var nteGroup = getSegmentsAfter(msg,seg,'NTE',true);
		if (nteGroup.length > 0) {
			pid[index].nte = [];
			var indexNTE = 0;
			for each (nteSeg in nteGroup) {
				pid[index].nte[indexNTE] = {};

				// NTE.1, setId
				if (nteSeg['NTE.1']['NTE.1.1'].toString() != "") { pid[index].nte[indexNTE].setId = nteSeg['NTE.1']['NTE.1.1']; }

				// NTE.2, sourceOfComment
				if (nteSeg['NTE.2']['NTE.2.1'].toString() != "") { pid[index].nte[indexNTE].sourceOfComment = nteSeg['NTE.2']['NTE.2.1']; }

				// NTE.3, comment
				pid[index].nte[indexNTE].comment = [];
				for each (field in nteSeg['NTE.3']) {
					var block = {};
					if (field['NTE.3.1'].toString() != "") { 
						pid[index].nte[indexNTE].comment.push(field['NTE.3.1']);
					}
				}

				// clean up NTE and increment index
				if (Object.keys(pid[index].nte[indexNTE]).length == 0) {
					delete pid[index].nte[indexNTE];
				} else {
					indexNTE++;
				}
			}
		}

		// clean up PID and increment index
		if (Object.keys(pid[index]).length == 0) {
			delete pid[index];
		} else {
			index++;
		}
	}
}