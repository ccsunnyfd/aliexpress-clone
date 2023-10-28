const Footer = () => {
  return (
    <>
      <div id="FooterMain" className="mb-2 mt-10 w-full bg-[#E8E8E8]">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="w-full justify-between gap-4 md:flex">
            <div className="pt-4 md:w-[50%]">
              <div className="text-lg font-semibold text-[#282828]">Help</div>
              <div className="text-sm text-[#999999]">
                Help Center, Disputes & Reports, Buyer Protection, Report IPR
                infringement, Regulated Information
              </div>
            </div>
            <div className="pt-4 md:w-[50%]">
              <div className="text-lg font-semibold text-[#282828]">
                AliExpress Multi-Language Sites
              </div>
              <div className="text-sm text-[#999999]">
                Russian, Portuguese, Spanish, French, German, Italian, Dutch,
                Turkish, Japanese, Korean, Thai, Vietnamese, Arabic, Hebrew,
                Polish
              </div>
            </div>
          </div>

          <div className="w-full justify-between gap-4 md:flex">
            <div className="pt-4 md:w-[50%]">
              <div className="text-lg font-semibold text-[#282828]">
                Browse by Category
              </div>
              <div className="text-sm text-[#999999]">
                All Popular, Product, Promotion, Low Price, Great Value,
                Reviews, Blog, Seller Portal, BLACK FRIDAY, AliExpress Assistant
              </div>
            </div>
            <div className="pt-4 md:w-[50%]">
              <div className="text-lg font-semibold text-[#282828]">
                Alibaba Group
              </div>
              <div className="text-sm text-[#999999]">
                Alibaba Group Website, AliExpress, Alimama, Alipay, Fliggy,
                Alibaba Cloud, Alibaba International, AliTelecom, DingTalk,
                Juhuasuan, Taobao Marketplace, Tmall, Taobao Global, AliOS, 1688
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="FooterSub" className="w-full bg-[#333333] text-sm text-gray-400">
        <div className="mx-auto max-w-[1200px] p-4">
          Intellectual Property Protection - Privacy Policy - Sitemap - Terms of
          Use - Information for EU consumers - Transaction Services Agreement
          for non-EU/UK Consumers - Terms and Conditions for EU/EEA/UK Consumers
          (Transactions) - User Information Legal Enquiry Guide ©️2010-2022
          AliExpress.com. All rights reserved. 增值电信业务经营许可证
          浙B2-20120091-8 浙公网安备 33010802002248号
        </div>
      </div>
    </>
  )
}

export default Footer
