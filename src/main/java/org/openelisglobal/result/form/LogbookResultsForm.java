package org.openelisglobal.result.form;

import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.openelisglobal.common.form.BaseForm;
import org.openelisglobal.common.paging.PagingBean;
import org.openelisglobal.common.util.IdValuePair;
import org.openelisglobal.common.util.validator.CustomDateValidator.DateRelation;
import org.openelisglobal.common.validator.ValidationHelper;
import org.openelisglobal.inventory.form.InventoryKitItem;
import org.openelisglobal.test.beanItems.TestResultItem;
import org.openelisglobal.validation.annotations.ValidDate;

public class LogbookResultsForm extends BaseForm implements ResultsPagingForm {

    public interface LogbookResults {
    }

    // for display
    private PagingBean paging;

    @NotNull(groups = { LogbookResults.class })
    private Boolean singlePatient = false;

    @ValidDate(relative = DateRelation.TODAY, groups = { LogbookResults.class })
    private String currentDate = "";

    @NotNull(groups = { LogbookResults.class })
    private Boolean displayTestMethod = true;

    @NotNull(groups = { LogbookResults.class })
    private Boolean displayTestKit = true;

    @Valid
    private List<TestResultItem> testResult;

    // for display
    private List<InventoryKitItem> inventoryItems;

    // for display
    private List<String> hivKits;

    // for display
    private List<String> syphilisKits;

    @Pattern(regexp = "^[a-zA-Z, -]*$", groups = { LogbookResults.class })
    private String type = "";

    // for display
    private List<IdValuePair> referralReasons;

    // for display
    private List<IdValuePair> rejectReasons;

    // for display
    private List<IdValuePair> testSections;

    // for display
    private List<IdValuePair> testSectionsByName;

    @Pattern(regexp = ValidationHelper.ID_REGEX, groups = { LogbookResults.class })
    private String testSectionId;

    @NotNull(groups = { LogbookResults.class })
    private Boolean displayTestSections = true;

    public LogbookResultsForm() {
        setFormName("LogbookResultsForm");
    }

    @Override
    public PagingBean getPaging() {
        return paging;
    }

    @Override
    public void setPaging(PagingBean paging) {
        this.paging = paging;
    }

    public Boolean getSinglePatient() {
        return singlePatient;
    }

    public void setSinglePatient(Boolean singlePatient) {
        this.singlePatient = singlePatient;
    }

    public String getCurrentDate() {
        return currentDate;
    }

    public void setCurrentDate(String currentDate) {
        this.currentDate = currentDate;
    }

    public Boolean getDisplayTestMethod() {
        return displayTestMethod;
    }

    public void setDisplayTestMethod(Boolean displayTestMethod) {
        this.displayTestMethod = displayTestMethod;
    }

    public Boolean getDisplayTestKit() {
        return displayTestKit;
    }

    public void setDisplayTestKit(Boolean displayTestKit) {
        this.displayTestKit = displayTestKit;
    }

    @Override
    public List<TestResultItem> getTestResult() {
        return testResult;
    }

    @Override
    public void setTestResult(List<TestResultItem> testResult) {
        this.testResult = testResult;
    }

    public List<InventoryKitItem> getInventoryItems() {
        return inventoryItems;
    }

    public void setInventoryItems(List<InventoryKitItem> inventoryItems) {
        this.inventoryItems = inventoryItems;
    }

    public List<String> getHivKits() {
        return hivKits;
    }

    public void setHivKits(List<String> hivKits) {
        this.hivKits = hivKits;
    }

    public List<String> getSyphilisKits() {
        return syphilisKits;
    }

    public void setSyphilisKits(List<String> syphilisKits) {
        this.syphilisKits = syphilisKits;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public List<IdValuePair> getReferralReasons() {
        return referralReasons;
    }

    public void setReferralReasons(List<IdValuePair> referralReasons) {
        this.referralReasons = referralReasons;
    }

    public List<IdValuePair> getRejectReasons() {
        return rejectReasons;
    }

    public void setRejectReasons(List<IdValuePair> rejectReasons) {
        this.rejectReasons = rejectReasons;
    }

    public List<IdValuePair> getTestSections() {
        return testSections;
    }

    public void setTestSections(List<IdValuePair> testSections) {
        this.testSections = testSections;
    }

    public List<IdValuePair> getTestSectionsByName() {
        return testSectionsByName;
    }

    public void setTestSectionsByName(List<IdValuePair> testSectionsByName) {
        this.testSectionsByName = testSectionsByName;
    }

    @Override
    public String getTestSectionId() {
        return testSectionId;
    }

    @Override
    public void setTestSectionId(String testSectionId) {
        this.testSectionId = testSectionId;
    }

    public Boolean getDisplayTestSections() {
        return displayTestSections;
    }

    public void setDisplayTestSections(Boolean displayTestSections) {
        this.displayTestSections = displayTestSections;
    }

}
