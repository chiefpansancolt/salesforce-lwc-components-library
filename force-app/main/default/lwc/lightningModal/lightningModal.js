import { LightningElement, api } from "lwc";

export default class LightningModal extends LightningElement {
  @api showCloseButton;
  @api isLoading = false;
  @api loadingAlternativeText;
  @api removePadding = false;
  @api headless = false;
  @api footless = false;
  @api directionalFooter = false;
  @api size;

  labels = {
    Close: "Close",
    LoadingAlternativeText: "Loading"
  };

  /**
   * Dispatch an event to close the Modal when triggered
   */
  closeModal() {
    this.dispatchEvent(new CustomEvent("modalclosed", {}));
  }

  /**
   * Sets the loading text based on if alt test was set or uses default text
   * @return  `string`
   */
  get loadingText() {
    return this.loadingAlternativeText ? this.loadingAlternativeText : this.labels.LoadingAlternativeText;
  }

  /**
   * removes the Padding class if told to not include
   * @return  `string`
   */
  get paddingClass() {
    if (this.removePadding) {
      return "";
    }
    return "slds-p-around_medium";
  }

  /**
   * Set the base modal classes based on if size is defined otherwise uses defaults
   * @return `string`
   */
  // eslint-disable-next-line consistent-return, getter-return
  get modalClass() {
    const baseClass = "slds-modal slds-fade-in-open";
    if (!this.size) {
      return baseClass;
    }
    // eslint-disable-next-line default-case
    switch (this.size) {
      case "small":
        return baseClass + " slds-modal_small";
      case "medium":
        return baseClass + " slds-modal_medium";
      case "large":
        return baseClass + " slds-modal_large";
    }
  }

  /**
   * Set Modal Content classes based on if headless and/or footless is marked true
   * @return  `string`
   */
  get modalContentClass() {
    let contentClass = "slds-modal__content slds-is-relative";
    if (this.headless) {
      contentClass += " slds-modal__content_headless";
    }
    if (this.footless) {
      contentClass += " slds-modal__content_footless";
    }

    return contentClass;
  }

  /**
   * Set the footer class based on if directionalFooter is true
   * @return  `string`
   */
  get modalFooterClass() {
    let footerClass = "slds-modal__footer";

    if (this.directionalFooter) {
      footerClass += " slds-modal__footer_directional";
    }

    return footerClass;
  }
}
