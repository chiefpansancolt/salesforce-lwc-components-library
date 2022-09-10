import { LightningElement, api } from "lwc";

export default class LightningAlertBanner extends LightningElement {
  @api alertText;
  @api variant;
  @api iconAlternativeText;
  @api showCloseButton = false;
  @api hideIcon = false;

  /**
   * Dispatch an event to close the Alert when triggered
   */
  closeAlert() {
    this.dispatchEvent(new CustomEvent("alertclosed", {}));
  }

  /**
   * get the value of the icon text based on if the alt test is set or not.
   * @return  `string`
   */
  get iconText() {
    return this.iconAlternativeText ? this.iconAlternativeText : this.defaultAlternativeText;
  }

  /**
   * Set the default text based on the variant defined, supports, warning, error, offline and info
   * @return  `string`
   */
  get defaultAlternativeText() {
    if (this.variant === "warning") {
      return "warning";
    } else if (this.variant === "error") {
      return "error";
    } else if (this.variant === "offline") {
      return "offline";
    }

    return "info";
  }

  /**
   * Set the default icon name based on the variant defined, supports, warning, error, offline and info.
   * @return  `string`
   */
  get iconName() {
    if (this.variant === "warning") {
      return "utility:warning";
    } else if (this.variant === "error") {
      return "utility:error";
    } else if (this.variant === "offline") {
      return "utility:offline";
    }

    return "utility:info";
  }

  /**
   * Set the alert classes based on the variant defined, supports, warning, error, offline and info
   * @return  `get`
   */
  get alertClasses() {
    let klasses = "slds-notify slds-notify_alert";
    if (this.variant === "warning") {
      return klasses + " slds-alert_warning";
    } else if (this.variant === "error") {
      return klasses + " slds-alert_error";
    } else if (this.variant === "offline") {
      return klasses + " slds-alert_offline";
    }

    return klasses;
  }
}
