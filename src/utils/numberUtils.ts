export const numberUtils = {
  formatNumber: (
    number: number | null | undefined,
    locale: string = navigator.language,
    options: Intl.NumberFormatOptions = {}
  ) => {
    if (!number) return ""
    return number?.toLocaleString(locale, options)
  },
  formatCustomAmount(
    amount: number | null | undefined,
    prefix: string
  ): string {
    if (!amount) return ""
    const formattedAmount = numberUtils.formatNumber(amount, "en-ng")
    return `${prefix} ${formattedAmount}`
  },
}
