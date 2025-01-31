package org.openelisglobal.organization.service;

import java.io.IOException;
import org.openelisglobal.dataexchange.fhir.exception.FhirGeneralException;
import org.openelisglobal.dataexchange.fhir.exception.FhirLocalPersistingException;
import org.openelisglobal.provider.service.ImportService;

public interface OrganizationImportService extends ImportService {

    void importList() throws FhirLocalPersistingException, FhirGeneralException, IOException;
}
