export const conditionHooks = (data) => {

    return {
        "activationCodeTypeEnable": data.activationCode !== '35131' && data.step === 9,
        "activationNameEnable": data.activationCode !== '35131' && data.activationCodeType === "K",
    }

}