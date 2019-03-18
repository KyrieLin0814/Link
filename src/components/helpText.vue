<template>
	<div class="body-container">
		<div v-if="helpFlag == 1">
			
			<!--关于我们-->
			<div v-if="langCn">
				<h4>关于我们</h4>
				<div class="textContent">
					领科wx.linksfield.net是全球领先的 SoftSIM提供商，我们与主流的电信商合作，并提供整合性的全球连网服务、RSP (SM/SR)平台、以及CMP(Connectivity Management Platform)平台。我们能将带有IMSI的SoftSIM于设备制造过程中内嵌于设备内。我们的一站式SIM解决方案，让设备供货商无论在任何地点或各式的应用服务，都可以启用连网服务，并且根据使用情形以及网络可用性，最佳化的选出最合适的网络。领科的RSP平台在必要时可更改设定文档。同时，CMP平台提供图像化仪表板以及API，使得设备商可以时时对SIM和其数据使用做到管理、监测、和控制。除了SoftSIM和CMP平台之外，领科在不同的IOT硬件平台上提供丰富的固件开发经验。我们已经在主流的2G/3G/4G的通讯芯片和模块集成了SoftSIM/DUAL SIM/ESIM。藉由提供turnkey解决方案，让合作伙伴可在短时间内集成并启动全球连网。
				</div>			
			</div>
			<div v-else>
				<h4>ABOUT US</h4>
				<div class="textContent">
					Links Field Networks（wx.linksfield.net）, a global leading SoftSIM provider, cooperates with mainstream carries to offer global connectivity , RSP (SM/SR) platform and CMP (Connectivity Management Platform) in one solution. SoftSIM with IMSI is embedded to the device during manufacturing. 
					</br>
					This one-stop SIM solution can enable connectivity for devices vendors to deploy devices regardless of location or application. Selection for the most appropriate network is optimised based on usage and availability. 
					</br>
					Links Field's RSP platform enables change of profiles when necessary. While CMP platform provides graphical dashboard and APIs. Device vendors can manage , monitor, control SIM and data usage in real time.
					</br>
					Links Field Networks offers rich firmware development experience in different IoT hardware platform besides SoftSIM/DUAL SIM/ESIM and CMP platform. We have integrated SoftSIM into mainstream 2G/3G/4G cellular chipset and modules. It is a turnkey solution and we can offer partners short deployment time for global connectivity.
				</div>
			</div>
		</div>
		
		<!--联系我们-->
		<div v-if="helpFlag == 2">
			<div v-if="langCn">
				<h4>联系我们</h4>
				<div class="textContent">
					如果您有任何问题或疑虑，请随时联系我们。
					</br>我们很高兴收到您的来信，请联系我们：
					</br>邮箱：sales@linksfield.net
				</div>
			</div>
			<div v-else>
				<h4>CONTACT US</h4>
				<div class="textContent">
					If you have any questions or concerns, please do not hesitate to contact us. 
					</br>We would love to hear from you, contact us on: 
					</br>Email: sales@linksfield.net
				</div>

			</div>
		</div>
		
		<!--知识产权-->
		<div v-if="helpFlag == 3">
			<div v-if="langCn">
				<h4>知识产权</h4>
				<div class="textContent">
					如果您对可能存在侵犯知识产权的行为有任何的疑虑或投诉，请发邮件至Legal@whosebilling.com ，特别指出被指控违反权利和被控诉的产品
					<br />（此电子邮箱仅用于知识产权和法律问题，其他请求可能无法获得响应）
				</div>
			</div>
			<div v-else>
				<h4>INTELLECTUAL PROPERTY RIGHTS</h4>
				<div class="textContent">
					In the event of any concerns or complaints about possible violation of intellectual property rights, please send us an email at Legal@whosebilling.com , identifying with specificity the rights alleged to be violated and the accused product(s).
					</br>（This email address is just for intellectual property rights and legal issues. Other requests may not get response.）
					
				</div>
			</div>
		</div>
		
		<!--隐私政策-->
		<div v-if="helpFlag == 4">
			<div v-if="langCn">
				<h4>隐私政策</h4>
				<div class="textContent">
					<h5>隐私声明</h5>
					<p>
						我们严肃对待您的隐私，本隐私声明解释了http://wx.linksfield.net（统称“我们”，“我们”或“我们的”）如何收集，使用，共享和处理您的信息。
					</p>
					<h5>个人资料的收集和使用</h5>
					<p>
						个人数据是可用于直接或间接识别您身份的信息。个人数据还包括与可用于直接或间接识别您的信息相关联的匿名数据。个人数据不包括已被不可逆转地匿名或汇总的数据，因此无论是与其他信息相结合还是其他信息，它都无法使我们识别您的身份。
					</p>
					<h5>促进安全和保障</h5>
					<p>
						我们遵守合法性，合法性和透明度原则，在有限的目的范围内使用和处理最少的数据，并采取技术和管理措施来保护数据的安全性。我们使用个人数据来帮助验证帐户和用户活动，以及促进安全性，例如监控欺诈行为，调查可疑或潜在的非法活动或违反我们的条款或政策。此类处理基于我们在确保产品和服务安全方面的合法利益。
						</br>以下是我们可能收集的个人数据类型以及我们如何使用它的说明。
					</p>
					<h5>我们收集了哪些个人数据</h5>
					<p>
						1、您提供的数据：
						</br>我们收集您在使用我们的产品和服务或与我们互动时提供的个人数据，例如您创建帐户，联系我们，参与在线调查，使用我们的在线帮助或在线聊天工具。如果您进行购买，我们会收集与购买相关的个人数据。此数据包括您的付款数据，例如您的信用卡或借记卡号码和其他卡信息，以及其他帐户和身份验证信息，以及结算，运送和联系详细信息。
						</br>2、有关我们的服务和产品使用的数据：
						</br>当您访问我们的网站时，我们可能会收集有关您使用的设备类型，设备的唯一标识符，设备的IP地址，操作系统，您使用的Internet浏览器类型，使用信息，诊断信息以及来自或关于您安装或访问我们的产品或服务的计算机，电话或其他设备的位置信息。如果可用，我们的服务可能会使用GPS，您的IP地址和其他技术来确定设备的大致位置，以便我们改进我们的产品和服务。
					</p>
					<h5>我们如何使用您的个人数据</h5>
					<p>
						一般而言，我们使用个人数据来提供，改进和开发我们的产品和服务，与您沟通，为您提供有针对性的广告和服务，以及保护我们和我们的客户。
						</br>1、提供，改进和开发我们的产品和服务：
						我们使用个人数据来帮助我们提供，改进和开发我们的产品，服务和广告。这包括将个人数据用于数据分析，研究和审计等目的。此类处理基于我们为您提供产品和服务以及业务连续性的合法利益。如果您参加比赛或其他促销活动，我们可能会使用您提供的个人数据来管理这些计划。其中一些活动有其他规则，可能包含有关我们如何使用个人数据的更多数据，因此我们建议您在参与之前仔细阅读这些规则。
						</br>2、与您沟通：
						</br>在事先明确同意的前提下，我们可能会使用个人数据向您发送与我们自己的产品和服务相关的营销信息，与您就您的帐户或交易进行沟通，并告知您我们的政策和条款。如果您不再希望收到用于营销目的的电子邮件通信，请联系我们以选择退出。当您联系我们时，我们也可能会使用您的数据来处理和回复您的请求。在事先明确同意的情况下，我们可能会与第三方合作伙伴共享您的个人数据，第三方合作伙伴可能向您发送与其产品和服务相关的营销信息。在事先明确同意的情况下，我们可能会使用个人数据来个性化您对我们的产品和服务以及第三方网站和应用程序的体验，并确定我们的促销活动的有效性。
						注意：对于需要事先明确同意的上述数据的任何使用，请注意您可以通过联系我们撤销您的同意。
					</p>
					<h5>“Cookies”的定义</h5>
					<p>
						Cookie是用于在Web浏览器上存储信息的小块文本。 Cookie广泛用于在计算机，电话和其他设备上存储和接收标识符和其他信息。我们还使用其他技术，包括我们存储在您的网络浏览器或设备上的数据，与您的设备相关联的标识符以及其他软件，用于类似目的。在本Cookie声明中，我们将所有这些技术称为“Cookie”。
					</p>
					<h5>使用Cookies</h5>
					<p>
						我们使用cookie来提供，保护和改进我们的产品和服务，例如通过个性化内容，提供和测量广告，了解用户行为以及提供更安全的体验。请注意，我们可能使用的特定cookie会根据您使用的特定网站和服务而有所不同。
					</p>
					<h5>披露个人资料</h5>
					<p>
						我们向与我们合作的战略合作伙伴提供某些个人数据，以提供我们的产品和服务，或帮助我们向客户推销。个人数据仅由我们与这些公司共享，以提供或改进我们的产品，服务和广告;未经您事先明确同意，不得将其与第三方共享用于其营销目的。 
					</p>
					<h5>数据披露或存储，传输和处理</h5>
					<p>
						1、履行法律义务：
						</br>由于欧洲经济区的强制性法律或用户所在的国家/地区，存在或已经发生某些法律行为，并且需要履行某些法律义务。处理欧洲经济区居民的个人数据---如下所述，如果您居住在欧洲经济区（EEA），我们对您个人数据的处理将合法化：每当我们要求您同意处理您的个人数据时，此类处理根据“一般数据保护条例”（EU）第6（1）条（“GDPR”），将证明其合理性。
						</br>2、为了合理实施或应用本文：
						</br>我们可能会与所有关联公司共享个人数据。如果合并，重组，收购，合资，转让，分拆，转让，出售或处置我们业务的全部或任何部分，包括与任何破产或类似程序有关，我们可以转让任何和所有个人数据发送给相关第三方。如果我们真诚地确定披露是合理必要的，以保护我们的权利并寻求可用的补救措施，执行我们的条款和条件，调查欺诈或保护我们的运营或用户，我们也可能会披露个人数据。
						</br>3、法律合规与安全或保护其他权利
						</br>根据法律，法律程序，诉讼和/或您所在国家/地区内外的公共和政府机构的要求，我们可能需要披露个人数据。如果我们确定出于国家安全，执法或其他具有公共重要性的问题，我们也可能会披露个人数据，因此披露是必要或适当的。
					</p>
					<h5>孩子</h5>
					<p>
						我们的产品和服务面向成年人。因此，我们不会有意收集，使用或披露16岁以下儿童的数据。如果我们得知我们已经收集了16岁以下儿童的个人数据，或者根据司法管辖区的相应最低年龄，我们将采取措施删除数据尽快。如果您发现16岁以下的儿童向我们提供了个人数据，请立即联系我们。
					</p>
					<h5>你的权利</h5>
					<p>
						我们采取合理措施确保您的个人数据准确，完整和最新。您有权访问，更正或删除我们收集的个人数据。您还有权随时限制或反对进一步处理您的个人数据。您有权以结构化和标准格式接收您的个人数据。您可以向主管数据保护机构提出有关处理您的个人数据的投诉。为了保护您的个人数据的隐私和安全，我们可能会要求您提供数据，以便我们确认您的身份和访问此类数据的权利，以及搜索并向您提供我们维护的个人数据。在某些情况下，适用的法律或法规要求允许或要求我们拒绝提供或删除我们维护的部分或全部个人数据。您可以联系我们行使您的权利。我们将在合理的时间范围内回复您的请求，无论如何不到30天。
					</p>
					<h5>第三方网站和服务</h5>
					<p>
						当客户操作指向与我们有关系的第三方网站的链接时，由于第三方的隐私政策，我们不对此类政策承担任何义务或责任。我们的网站，产品和服务可能包含您访问第三方网站，产品和服务的链接或能力。我们不对这些第三方使用的隐私惯例负责，也不对其产品和服务包含的信息或内容负责。本隐私声明仅适用于我们通过我们的产品和服务收集的数据。我们建议您在继续使用其网站，产品或服务之前阅读任何第三方的隐私政策。
					</p>
					<h5>数据安全性，完整性和保留</h5>
					<p>
						我们使用合理的技术，管理和物理安全措施来保护和帮助防止未经授权访问您的数据，并正确使用我们收集的数据。除非法律要求或允许更长的保留期限，否则我们将保留您的个人数据，只要有必要实现本隐私声明中列出的目的。
					</p>
					<h5>本隐私声明的变更</h5>
					<p>
						我们可能会定期更改本隐私声明，以跟上新技术，行业惯例和监管要求等原因。您在隐私声明生效后继续使用我们的产品和服务意味着您接受修订后的隐私声明。如果您不同意修订后的隐私声明，请不要使用我们的产品或服务并联系我们关闭您可能创建的任何帐户。
					</p>
					<h5>联系我们</h5>
					<p>
						如果您对本隐私声明或其实施有任何疑问，请联系我们：
						</br>support@linksfield.net
					</p>
				</div>	
			</div>
			<div v-else>
				<h4>PRIVACY POLICY</h4>
				<div class="textContent">
					<h5>PRIVACY STATEMENT</h5>
					<p>
						We take your privacy seriously and this privacy statement explains how http://wx.linksfield.net (collectively, “we,” “us,” or “our”) collect, use, share and process your information.
					</p>
					<h5>Collection and Use of Personal Data</h5>
					<p>
						Personal data is information that can be used to directly or indirectly identify you. Personal data also includes anonymous data that is linked to information that can be used to directly or indirectly identify you. Personal data does not include data that has been irreversibly anonymized or aggregated so that it can no longer enable us, whether in combination with other information or otherwise, to identify you.
					</p>
					<h5>Promoting safety and security</h5>
					<p>
						We abide by the principles of legality, legitimacy, and transparency, use, and process the least data within a limited scope of purpose, and take technical and administrative measures to protect the security of the data. We use personal data to help verify accounts and user activity, as well as to promote safety and security, such as by monitoring fraud and investigating suspicious or potentially illegal activity or violations of our terms or policies. Such processing is based on our legitimate interest in helping ensure the safety of our products and services.
						</br>Here is a description of the types of personal data we may collect and how we may use it:
					</p>
					<h5>What Personal Data We Collect</h5>
					<p>
						ⅰ. Data you provide: 
						</br>We collect the personal data you provide when you use our products and services or otherwise interact with us, such as when you create an account, contact us, participate in an online survey, use our online help or online chat tool. If you make a purchase, we collect personal data in connection with the purchase. This data includes your payment data, such as your credit or debit card number and other card information, and other account and authentication information, as well as billing, shipping, and contact details.
						</br>ⅱ. Data about use of our services and products:
						</br>When you visit our websites, we may collect data about the type of device you use, your device's unique identifier, the IP address of your device, your operating system, the type of Internet browser that you use, usage information, diagnostic information, and location information from or about the computers, phones, or other devices on which you install or access our products or services. Where available, our services may use GPS, your IP address, and other technologies to determine a device's approximate location to allow us to improve our products and services.
					</p>
					<h5>How We Use Your Personal Data</h5>
					<p>
						Generally speaking, we use personal data to provide, improve, and develop our products and services, to communicate with you, to offer you targeted advertisements and services, and to protect us and our customers.
						</br>ⅰ. Providing, improving, and developing our products and services:
						</br> use personal data to help us provide, improve, and develop our products, services, and advertising. This includes using personal data for purposes such as data analysis, research, and audits. Such processing is based on our legitimate interest in offering you products and services and for business continuity. If you enter a contest, or other promotion, we may use the personal data you provide to administer those programs. Some of these activities have additional rules, which may contain further data about how we use personal data, so we encourage you to read those rules carefully before participating.
						</br>ⅱ. Communicating with you:
						</br>Subject to your prior express consent, we may use personal data to send you marketing communications in relation to our own products and services, communicate with you about your account or transactions, and inform you about our policies and terms. If you no longer wish to receive email communications for marketing purposes, please Contact Us  to opt-out. We also may use your data to process and respond to your requests when you Contact Us . Subject to your prior express consent, we may share your personal data with third party partners who may send you marketing communications in relation to their products and services. Subject to your prior express consent, we may use personal data to personalize your experience with our products and services and on third-party websites and applications and to determine the effectiveness of our promotional campaigns.
						</br>NOTE: For any of the uses of your data described above that require your prior express consent, note that you may withdraw your consent by contacting us.
					</p>
					<h5>Definition of "Cookies"</h5>
					<p>
						Cookies are small pieces of text used to store information on web browsers. Cookies are widely used to store and receive identifiers and other information on computers, phones, and other devices. We also use other technologies, including data we store on your web browser or device, identifiers associated with your device, and other software, for similar purposes. In this Cookie Statement, we refer to all of these technologies as "cookies."
					</p>
					<h5>Use of Cookies</h5>
					<p>
						We use cookies to provide, protect, and improve our products and services, such as by personalizing content, offering and measuring advertisements, understanding user behavior, and providing a safer experience. Please note that the specific cookies we may use vary depending on the specific websites and services you use.
					</p>
					<h5>Disclosure of Personal Data</h5>
					<p>
						We make certain personal data available to strategic partners that work with us to provide our products and services or help us market to customers. Personal data will only be shared by us with these companies in order to provide or improve our products, services, and advertising; it will not be shared with third parties for their own marketing purposes without your prior express consent.
					</p>
					<h5>Data Disclosure or Storage, Transfer, and Processing</h5>
					<p>
						ⅰ. Fulfilment of legal obligations:
						</br>Due to the mandatory laws of the European Economic Area or the country in which the user lives, certain legal acts exist or have occurred and certain legal obligations need to be fulfilled. Treatment of personal data of EEA residents ---As described below, if you reside within the European Economic Area (EEA), our processing of your personal data will be legitimized: Whenever we require your consent for the processing of your personal data such processing will be justified pursuant to Article 6(1) of the General Data Protection Regulation (EU) ("GDPR").
						</br>ⅱ. For the purpose of reasonable implementation or application of this article:
						</br>We may share personal data with all our-affiliated companies. In the event of a merger, reorganization, acquisition, joint venture, assignment, spin-off, transfer, or sale or disposition of all or any portion of our business, including in connection with any bankruptcy or similar proceedings, we may transfer any and all personal data to the relevant third party.  We may also disclose personal data if we determine in good faith that disclosure is reasonably necessary to protect our rights and pursue available remedies, enforce our terms and conditions, investigate fraud, or protect our operations or users.
						</br>ⅲ. Legal Compliance and Security or Protect Other Rights
						</br>It may be necessary—by law, legal process, litigation, and/or requests from public and governmental authorities within or outside your country of residence—for us to disclose personal data. We may also disclose personal data if we determine that for purposes of national security, law enforcement, or other issues of public importance, disclosure is necessary or appropriate.
					</p>
					<h5>Children</h5>
					<p>
						Our products and services are intended for adults. Accordingly, we do not knowingly collect, use, or disclose data from children under 16. If we learn that we have collected the personal data of a child under 16, or the equivalent minimum age depending on the jurisdiction, we will take steps to delete the data as soon as possible. Please immediately Contact Us  if you become aware that a child under 16 has provided us with personal data.
					</p>
					<h5>Your Rights</h5>
					<p>
						We take reasonable steps to ensure that your personal data is accurate, complete, and up to date. You have the right to access, correct, or delete the personal data that we collect. You are also entitled to restrict or object, at any time, to the further processing of your personal data. You have the right to receive your personal data in a structured and standard format. You may lodge a complaint with the competent data protection authority regarding the processing of your personal data.  To protect the privacy and the security of your personal data, we may request data from you to enable us to confirm your identity and right to access such data, as well as to search for and provide you with the personal data we maintain. There are instances where applicable laws or regulatory requirements allow or require us to refuse to provide or delete some or all of the personal data that we maintain. You may Contact Us to exercise your rights. We will respond to your request in a reasonable timeframe, and in any event in less than 30 days.
					</p>
					<h5>Third-Party Websites and Services</h5>
					<p>
						When a customer operates a link to a third-party website that has a relationship with us, we do not assume any obligation or responsibility for such policy because of the third party's privacy policy. Our websites, products, and services may contain links to or the ability for you to access third-party websites, products, and services. We are not responsible for the privacy practices employed by those third parties, nor are we responsible for the information or content their products and services contain. This Privacy Statement applies solely to data collected by us through our products and services. We encourage you to read the privacy policies of any third party before proceeding to use their websites, products, or services.
					</p>
					<h5>Data Security, Integrity, and Retention</h5>
					<p>
						We use reasonable technical, administrative, and physical security measures designed to safeguard and help prevent unauthorized access to your data, and to correctly use the data we collect. We will retain your personal data for as long as it is necessary to fulfill the purposes outlined in this Privacy Statement, unless a longer retention period is required or permitted by law.
					</p>
					<h5>Changes to this Privacy Statement</h5>
					<p>
						We may periodically change this Privacy Statement to keep pace with new technologies, industry practices, and regulatory requirements, among other reasons.  Your continued use of our products and services after the effective date of the Privacy Statement means that you accept the revised Privacy Statement. If you do not agree to the revised Privacy Statement, please refrain from using our products or services and Contact Us to close any account you may have created.
					</p>
					<h5>Contact Us</h5>
					<p>
						If you have any questions regarding this Privacy Statement or its implementation, here is how you can reach us:
						</br>support@linksfield.net
					</p>
				</div>
			</div>
		</div>
		
		
		<!--退货政策-->
		<div v-if="helpFlag == 5">
			<div v-if="langCn">
				<h4>退货政策</h4>
				<div class="textContent">
					<h5>退款说明</h5>
					<p>
						 我们接受在产品发货或生产之前取消订单。如果订单被取消，您将获得全额退款。如果产品已经发货，我们无法取消订单。
					</p>
					<h5>退货（如适用）</h5>
					<p>
						我们接受产品退货。客户有权在收到后14天内申请退货。
						</br>要有资格获得退货，您的商品必须未使用且条件与您收到的相同。它也必须是原始包装。要完成退货，我们需要收据或购买凭证。请不要将您的购买交还给制造商。
						</br>客户最多只需支付一次运费（包括退货）;不退还产品需要向消费者收取费用。
					</p>
					<h5>退款（如适用）</h5>
					<p>
						收到并检查您的退货后，我们会向您发送一封电子邮件，通知您我们已收到您退回的物品。我们还会通知您批准或拒绝退款。如果您获得批准，那么您的退款将被处理，并且信用卡将在一定天数内自动应用于您的信用卡或原始付款方式。
					</p>
					<h5>逾期或遗失退款（如适用）</h5>
					<p>
						如果您尚未收到退款，请先检查您的银行帐户。
						</br>然后联系您的信用卡公司，可能需要一些时间才能正式发布退款。接下来联系您的银行。在退款发布之前，通常会有一些处理时间。如果您已经完成了所有这些并且仍未收到退款，请通过sales@linksfield.net与我们联系
						</br>请联系我们的客户服务sales@linksfield.net获取返回的地址。
					</p>
				</div>
			</div>
			<div v-else>
				<h4>Return Policy</h4>
				<div class="textContent">
					<h5>Cancellation</h5>
					<p>
						We accept order cancellation before the product is shipped or produced. If the order is cancelled you will get full refund. We cannot cancel the order if the product is already shipped out. 
					</p>
					<h5>Returns (if applicable)</h5>
					<p>
						We accept return on products. Customers  has the right to apply for return within 14 days after the receipt. 
						</br>To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging. To complete your return, we require a receipt or proof of purchase. Please do not send your purchase back to the manufacturer. 
						</br>Customers will only be charged once at most for shipping costs (this includes returns); No-restocking to be charged to the consumers for the return of the product.
					</p>
					<h5>Refunds (if applicable)</h5>
					<p>
						Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.
					</p>
					<h5>Late or missing refunds (if applicable)</h5>
					<p>
						If you haven’t received a refund yet, first check your bank account again.
						</br>Then contact your credit card company, it may take some time before your refund is officially posted. Next contact your bank. There is often some processing time before a refund is posted. If you’ve done all of this and you still have not received your refund yet, please contact us at sales@linksfield.net 
						</br>Please contact our Customer service at  sales@linksfield.net  to get the returned address.
					</p>
				</div>
			</div>
		</div>


		<!--航运政策-->
		<div v-if="helpFlag == 6">
			<div v-if="langCn">
				<h4>航运政策</h4>
				<div class="textContent">我们的目标是为您提供最佳的送货方式，无论您住在哪里。 每天，我们都会向全球数百家客户提供服务，确保我们始终为您提供最高水平的响应能力。</br>
					</br>订单交付的时间范围分为两部分：
					</br>处理时间：3天
					</br>运输时间：无
				</div>
			</div>
			<div v-else>
				<h4>SHIPPING INFORMATION</h4>
				<div class="textContent">Our goal is to offer you the best shipping options, no matter where you live. Every day, we deliver to hundreds of customers across the world, ensuring that we provide the highest levels of responsiveness to you at all times.</br>
					</br>The time frame for order delivery is divided into two parts:
					</br>Processing time: 3DAYS
					</br>Shipping time: NONE
				</div>
			</div>
		</div>
		
		<!--服务条款-->
		<div v-if="helpFlag == 7">
			<div v-if="langCn">
				<h4>服务条款</h4>
				<div class="textContent">
					<h5>欢迎。</h5>
					<p>
						这些服务条款（“TOS”）适用于您和http://wx.linksfield.net。在整个网站中，术语“我们”，“我们”和“我们的”是指http://wx.linksfield.net.服务的使用也受我们的隐私政策的约束。
						<br />作为使用服务的先决条件，您必须同意这些服务条款。如果您接受这些服务条款，则表示您年满13岁。如果您的年龄在13岁至17岁之间，或者无权签订此类服务条款等协议，则表示您的法定监护人或父母责任人已经审核并同意本服务条款。
						<br />使用或以其他方式访问服务，即表示您同意这些服务条款。如果您不同意这些服务条款，则不得使用或以其他方式访问服务。
						<br />除非适用服务的组件另有规定，否则服务可以免费使用或下载，但可能包含可能允许您在服务中购买的功能。
						<br />如果您从社交网站（“SNS”）（如Facebook）访问服务，则表示您同意遵守其服务条款以及这些服务条款。
					</p>
					
					<h5>1.使用服务的权利</h5>
					<p>
						在遵守本服务条款的前提下，我们特此授予您非独占，不可转让，不可再授权的有限权利和许可，以便将您的服务用于个人非商业用途。授予您的权利取决于您是否遵守本服务条款。
						<br />除非事先说明，否则您不会收到任何其他许可。我们保留对服务的所有权利，所有权和利益，包括但不限于所有版权，商标，商业秘密，商品名称，所有权，专利，标题，计算机代码，视听效果，主题，字符，字符名称，故事，对话，设置，艺术品，音效，音乐作品，使用服务制作的游戏记录，精神权利，无论是否注册及其所有应用。除非经法律明确授权，否则未经我们事先书面同意，不得以任何方式或媒介，全部或部分复制，复制或分发服务。我们保留未在此明确授予您的所有权利。
						<br />服务及其内容是许可的，不是出售的。您同意您对本服务中出现的任何内容没有任何权利或所有权，包括但不限于出现在服务中或源自服务的虚拟物品或货币，无论是在服务中获得还是从我们购买或第三方。
					</p>
					
					<h5>2.服务中的购买</h5>
					<p>
						我们可能会向您许可在服务中使用的某些虚拟商品，您可以使用“真实世界”的钱购买，或者您可以通过游戏玩法获得或兑换（“虚拟商品”）。虚拟物品是以有限的，个人的，不可转让的，不可再授权的，可撤销的方式许可给您的，仅用于非商业用途。
						<br />我们可以随时管理，控制，修改或消除虚拟物品，无论是否通知。
						<br />除非服务中明确授权，否则禁止转移虚拟物品（如适用）。
						<br />虚拟物品在现实世界中没有相应的价值，也不能代替现实世界的货币。我们或任何其他人或实体都没有义务为任何有价值的东西交换虚拟物品。我们对您的虚拟物品的黑客入侵或丢失不承担任何责任。
						<br />虚拟物品的价格和供应情况如有变更，恕不另行通知。
						<br />根据法律规定，通过服务进行的虚拟物品的所有购买和赎回都是最终的，不可退款。您承认并同意，在服务中使用的虚拟物品的提供是一个在购买后立即开始的过程，并且一旦该过程开始您就丧失了取消的权利。
						<br />因此，您同意我们无需出于任何原因为虚拟物品提供退款。您进一步承认，无论您在本服务条款下的许可证是自愿还是非自愿，您都不会收到未使用虚拟物品的金钱或其他补偿。
						<br />如果您要求按照我们的隐私政策中的说明删除您的个人数据，您将永久丧失所有虚拟物品而无权退款，因为我们将无法再将此类虚拟物品与您关联。
					</p>
					
					<h5>3.行为准则</h5>
					<p>
						您同意在任何情况下您都不会：
						<br />•	直接或间接使用任何作弊，漏洞利用，自动化软件，僵尸程序，黑客，mod或任何旨在修改或干扰服务的未经授权的第三方软件。
						<br />•	违反任何适用法律或法规使用服务。
						<br />•	将服务用于商业目的，包括但不限于广告，招揽或传播任何商业广告，如垃圾邮件，连锁信，金字塔或其他快速致富计划。
						<br />•	将服务用于欺诈或滥用目的，包括但不限于使用服务冒充任何个人或实体，或以其他方式歪曲您与个人，实体或服务的关系;
						<br />•	扰乱，干扰或以其他方式对服务的正常流动产生不利影响，或以其他方式对其他用户使用服务时的体验产生负面影响。
						<br />•	破坏，负担过重或协助或协助用于提供或支持服务的任何计算机或服务器的中断或负担过重。
						<br />•	尝试通过除我们提供的用户界面之外的任何方式（包括但不限于通过规避或修改）来未经授权访问服务，注册到他人的帐户或连接到服务的计算机，服务器或网络，试图绕过或修改，或鼓励或协助任何其他人规避或修改作为服务一部分的任何安全，技术，设备，加密或软件。
						<br />•	发布任何包含裸露，过度暴力或辱骂，威胁，淫秽，诽谤，诽谤或种族，性，宗教攻击或其他令人反感的信息，内容或其他材料（或任何信息或内容的链接）。
						<br />•	参与持续的毒性行为，例如在未经请求的基础上反复发布信息。
						<br />•	尝试或骚扰，滥用或伤害，或提倡或煽动他人，团体（包括我们的员工，董事，高级职员和客户服务代表）的骚扰，虐待或伤害。
						<br />•	通过服务提供侵犯任何个人或实体的任何版权，商标，专利，商业秘密，隐私权，公开权或其他权利，或冒充任何其他人的任何材料或信息，包括但不限于我们的员工，董事或高级职员。
						<br />•	除非法律特别授权，否则尝试反编译，反向工程，反汇编或破解任何服务，或者破坏或克服我们传输，处理或存储的任何加密技术或安全措施或数据，或从中获取任何信息服务使用我们未明确允许的任何方法。
						<br />•	请求或尝试从服务的其他用户索取登录信息或任何其他登录凭据或个人信息。
						<br />•	收集，搜集或收集有关使用服务的其他人的任何信息，包括但不限于使用像素标签，Cookie，GIF或类似项目（有时也称为间谍软件）。
						<br />•	通过服务发布任何人的私人信息，包括个人身份信息/个人数据（无论是文本，图像还是视频形式），身份证明文件或财务信息。
						<br />•	从事任何我们认为与服务的精神或意图相冲突或不当使用我们的支持服务的行为。
					</p>
					
					<h5>4.第三方服务</h5>
					<p>
						服务可能包括第三方服务的链接（包括但不限于第三方显示的广告）和/或第三方服务可能通过服务提供给您。这些服务可以包括但不限于游戏记录和共享，社交媒体连接和广告。这些服务受相应的第三方条款和条件的约束。请仔细阅读这些第三方条款和条件，因为它们构成您与我们未加入的相关第三方服务提供商之间的协议。
					</p>
					
					<h5>5.帐户和登录信息</h5>
					<p>
						服务的某些元素可能使您能够创建帐户或以其他方式注册服务（“帐户”）。您可能需要为您的帐户选择密码，或者您也可以使用其他凭据访问帐户（“登录信息”）。您同意不会将您的登录信息提供给任何其他人或允许其他人使用您的登录信息或帐户。您自行负责维护登录信息的机密性，并且您对其所有用途（包括购买）负责。我们可能会假设使用您的登录信息登录您帐户的任何人都是您或在您许可的情况下登录的人。
						<br />如果我们发现您在180天或更长时间内未对该帐户进行任何活动，我们保留删除您的帐户的权利。在这种情况下，您可能无法再访问和/或使用与该帐户关联的任何虚拟物品，也不会向您提供退款。
					</p>
					
					<h5>6.用户贡献</h5>
					<p>
						服务可能允许您创建内容，包括但不限于游戏玩法地图，角色，屏幕截图或游戏视频（统称为“用户贡献”）。
						<br />作为对服务的使用的交换，您特此授予我们非独家，免版税，永久，不可撤销，完全可转让和可再次授权的全球权利和许可，以任何方式和任何目的使用您的用户贡献，包括但不限于以任何现有或未来方式复制，复制，改编，修改，执行，展示，出版，广播，传播或以其他方式向公众传播的权利，并且无需另行通知或补偿即可分发您的用户贡献。你是谁。
						<br />在法律未明确禁止的情况下，您在此放弃任何关于我们和其他玩家根据适用法律使用和享受与服务及相关商品和服务有关的用户贡献的父权，出版，声誉或归属的精神权利. .我们向我们授予许可，以及上述对任何适用的精神权利的放弃，在本服务条款终止后仍然有效。
						<br />我们，其董事，高级职员和员工不接受或考虑任何形式的任何形式的未经请求的想法或产品提交（例如游戏或其他产品创意，故事，剧本，艺术品，音乐或视听作品，概念或任何其他创作材料），通过任何传播（“未经请求的内容”）。请勿向我们或其董事，高级职员或员工提交任何未经请求的内容。但是，如果您向我们提交未经请求的内容，您同意此类未经请求的内容不会被视为机密内容，无论您在随附的消息中另有说明。您进一步同意，我们可以使用和利用此类未经请求的内容，而无需向您或任何第三方提供任何补偿，并且您授予我们永久，非独占，不可撤销，全额付费，免版税，可分许可和可转让的内容（全部或部分）全球许可在任何目的下在所有当前或未来媒体中使用，利用，复制，传播，修改，展示和展示未经请求的内容，并根据未经请求的内容创建衍生作品。
					</p>
					
					<h5>7.服务用户之间的通信</h5>
					<p>
						我们对服务的其他用户的行为不承担任何责任，并且对于监控服务的不当内容或行为不承担任何责任。我们不会，也不能预先筛选或监控用户的所有内容或行为。您使用服务的风险由您自行承担。
						<br />使用服务时，您可能会接触到令人反感，不雅或不符合您的价值观的内容或行为。当您使用服务时，我们可能会利用技术来监控和/或记录您与服务或通信（包括但不限于聊天文本）的交互。您不可撤销地同意进行此类监控和录制。因此，您同意您对服务中任何内容的传输没有任何隐私期望，包括但不限于聊天文本或语音通信。
						<br />我们保留自行决定审查，监控，禁止，编辑，删除，禁止访问或以其他方式使本服务用户提供的任何内容不可用的权利，恕不另行通知，无任何理由。如果我们在任何时候选择自行决定监控服务，我们对服务用户提供的内容不承担任何责任，我们不承担修改或删除任何不当内容的义务。
					</p>
					
					<h5>8.违反暂停和终止</h5>
					<p>
						在不限制我们可用的任何其他补救措施的情况下，如果我们认为您违反了本服务条款，我们保留采取以下任何行动的权利，无论是单独还是组合，无论是否通知您：（i ）删除，暂停和/或修改您的帐户或部分帐户;（ii）限制，暂停和/或终止您对服务的访问;（iii）修改和/或删除任何虚拟物品;（iv）重置和/或修改与您相关的任何游戏进程或权益和特权，例如您在服务中达到的任何级别或分数。
					</p>
					
					<h5>9.服务的可用性</h5>
					<p>
						我们可以限制，暂停或终止服务或其中的部分内容，并采取技术和法律措施，以防止用户在我们认为他们造成风险或可能的法律责任，侵犯第三方知识产权或不采取行动时访问服务按照这些服务条款的字母或精神。
						<br />我们保留随时停止提供和/或支持服务或其中一部分（例如游戏或游戏功能）的权利，此时您将自动终止使用服务或其中一部分的许可。在这种情况下，除非适用法律另有要求，否则我们无需为虚拟物品或与此类已终止服务相关的其他物品提供退款。
					</p>
					
					<h5>10.免责声明</h5>
					<p>
						在适用法律允许的最大范围内，服务按“原样”提供给您，不提供任何形式的保证，保证或担保。它可能有缺陷，您的使用完全由您自己承担风险。我们不作出任何及所有明示，暗示或法定保证，包括暗示的条件保证，不间断使用，数据准确性（包括但不限于位置数据），适销性，令人满意的质量，适用于特殊目的，不侵犯第三方权利，以及在交易，使用或交易过程中产生的保证（如果有）。我们不保证不会干扰您享受服务;服务将满足您的要求;服务的运作不会中断或没有错误;服务将与任何其他服务互操作或兼容;或者，服务中的任何错误都将得到纠正。我们，其员工或其他代表提供的口头或书面建议不构成保证。
						<br />某些司法管辖区不允许上述免责声明;因此，上述条款可能对您不适用。相反，在此类司法管辖区内，上述免责声明仅适用于此类司法管辖区的法律所允许的范围。此外，您可能在您的司法管辖区拥有其他合法权利，本服务条款中的任何内容均不得侵犯您作为服务消费者的法定权利
					</p>
					
					<h5>11.责任限制</h5>
					<p>
						对于因访问，使用或故障服务而导致的特殊，偶然或间接损失，我们不承担任何责任，包括但不限于财产损失，商誉损失，设备故障或故障，并且在允许的范围内法律，人身伤害赔偿，财产损失，利润损失或由于本服务条款或服务引起的或与之相关的任何诉讼原因造成的惩罚性赔偿，无论是因侵权行为（包括疏忽），合同，严格责任还是其他原因以及是否或我们并没有被告知这种损害的可能性。就第11条“责任限制”而言，我们的许可人和其他合作伙伴是本协议规定的责任限制的第三方受益人，并可能对您强制执行这些服务条款。
						<br />某些司法管辖区不允许某些责任限制，例如上述规定;因此，上述条款可能对您不适用。相反，在这些司法管辖区，上述责任限制仅适用于此类司法管辖区的法律所允许的范围。此外，您可能在您的司法管辖区拥有其他合法权利，并且这些服务条款中的任何内容都不会侵犯您作为服务消费者的任何法定权利。
					</p>
					
					<h5>12.知识产权</h5>
					<p>
						如果对可能存在侵犯知识产权的行为有任何疑虑或投诉，请发送电子邮件至Legal@whosebilling.com，明确说明被指控违反的权利和被控产品。
					</p>
					
					<h5>13.与第三方产品和服务的链接</h5>
					<p>
						我们可能会从服务链接到第三方网站或服务。您理解我们不对此类第三方提供的任何内容，商品或服务作出任何承诺，并且您理解我们不认可它们。对于此类第三方造成的任何损失或伤害，我们也不对您负责。您对这些第三方的任何指控都是您的责任。您了解当您向第三方提供数据时，您根据其隐私政策（如果有）提供数据，并且您了解我们的隐私政策不适用于此类数据。
					</p>
					
					<h5>14.这些服务条款的变更</h5>
					<p>
						尽管有第8条“具有约束力的仲裁/类别豁免”，我们可能会不时更新这些服务条款，以应对不断变化的法律，技术或业务发展。当我们更新这些服务条款时，我们将根据我们所做的更改的重要性，采取适当措施通过服务或其他方式通知您。
						<br />在更新生效后继续访问或使用服务，即表示您同意受更新的服务条款的约束。
					</p>
					
					<h5>15.适用法律</h5>
					<p>这些服务条款以及我们为您提供服务的任何单独协议均受英国法律管辖并按其解释。</p>
					
					<h5>16.转让，可分割性和完整协议</h5>
					<p>
						我们可以在未经您同意的情况下随时将这些服务条款全部或部分转让给任何个人或实体。未经我们事先书面同意，您不得转让或委托本服务条款或隐私政策下的任何权利或义务，任何未经授权的转让和授权均属无效。
						<br />如果这些服务条款的任何条款被认定无效或无法执行，则此类条款将在必要的最小范围内受到限制或消除，并且这些服务条款的其余条款将保持完全有效。我们未能执行本服务条款的任何权利或规定将不被视为放弃此类权利或规定。
						<br />本服务条款和隐私政策规定了您和我们之间关于服务的完整协议，并取代您和我们之间之前的所有协议和谅解。
						<br />如果您对这些服务条款有任何疑问，请联系support@linksfield.net;
					</p>
					
					<p class="bottomTxt">
						<img src="../assets/common/TXT.png"/>
					</p>
					
					
				</div>
			</div>
			<div v-else>
				<h4>TERMS OF SERVICE ("TOS")</h4>
				<div class="textContent">
					<h5>Welcome.</h5>
					<P>
						These terms of service (“TOS”) apply to you andhttp://wx.linksfield.net. Throughout the site, the terms “we”, “us” and “our” refer to http://wx.linksfield.net. Use of the Services is also governed by our PRIVACY POLICY.
						<br />As a precondition for using the Services, you must agree to these TOS. If you accept these TOS, you represent that you are age 13 or older. If you are between the ages of 13 and 17 or otherwise do not have the authority to enter into agreements such as these TOS, you represent that your legal guardian, or a holder of parental responsibility, has reviewed and agreed to these TOS.
						<br />By using or otherwise accessing the Services, you agree to these TOS. If you do not agree to these TOS, you may not use or otherwise access the Services.
						<br />Unless otherwise specified by a component of an applicable Service, the Services are free to use or download but may contain features that may allow you to make purchases within the Services.
						<br />If you access the Services from a social networking site ("SNS"), such as Facebook, you agree to comply with its terms of service as well as these TOS.
					</P>
					
					<h5>1. Right to Use the Services</h5>
					<P>
						Subject to these TOS, we hereby grant you a non-exclusive, non-transferable, non-sublicensable, limited right and license to use the Services for your personal, non-commercial use. The rights granted to you are subject to your compliance with these TOS.
						<br />Except as previously set forth, you do not receive any other license. We retain all right, title and interest in and to the Services, including, but not limited to, all copyrights, trademarks, trade secrets, trade names, proprietary rights, patents, titles, computer codes, audiovisual effects, themes, characters, character names, stories, dialog, settings, artwork, sound effects, musical works, gameplay recordings made using the Services, moral rights, whether registered or not and all applications thereof. Unless expressly authorized by law, the Services may not be copied, reproduced or distributed in any manner or medium, in whole or in part, without Our prior written consent. We reserve all rights not expressly granted to you herein.
						<br />The Services and its contents are licensed, not sold. You agree that you have no right or title in or to any content that appears in the Service, including, but not limited to, the Virtual Items or currency appearing in or originating from the Services, whether earned in the Services or purchased from us or third parties.
					</P>
					
					<h5>2. Purchases in the Services</h5>
					<P>
						We may license to you certain virtual goods to be used within the Service and which you may purchase with "real world" money or which you may earn or redeem via gameplay ("Virtual Items"). Virtual Items are licensed to you on a limited, personal, non-transferable, non-sublicensable, revocable basis and are intended solely for non-commercial use.
						<br />We may manage, control, modify or eliminate Virtual Items at any time, with or without notice.
						<br />The transfer of Virtual Items is prohibited except where expressly authorized in the Services, as applicable.
						<br />Virtual Items do not have an equivalent value in real world money and are not a substitute for real world money. Neither we nor any other person or entity has any obligation to exchange Virtual Items for anything of value. We are not liable for hacking or loss of your Virtual Items.
						<br />Price and availability of Virtual Items are subject to change without notice.
						<br />By law, all purchases and redemptions of Virtual Items made through the Services are final and non-refundable. You acknowledge and consent that the provision of Virtual Items for use in the Services is a process that commences immediately upon purchase and that you forfeit your right of cancelation once the process has commenced.
						<br />Accordingly, you agree that we are not required to provide a refund for Virtual Items for any reason. You further acknowledge that you will not receive money or other compensation for unused Virtual Items, regardless of whether your loss of license under these TOS was voluntary or involuntary.
						<br />If you ask for your personal data to be deleted as described in Our Privacy Policy, you will be permanently forfeit all of your Virtual Items without the right to refund, as we will no longer be able associate such Virtual Items with you.
					</P>
					
					<h5>3. Code of Conduct</h5>
					<P>
						You agree that you will not, under any circumstances:
						<br />•	Use, either directly or indirectly, any cheats, exploits, automation software, bots, hacks, mods or any unauthorized third-party software designed to modify or interfere with the Services.
						<br />•	Use the Services in violation of any applicable law or regulation.
						<br />•	Use the Services for commercial purposes, including, but not limited to, to advertising, or solicitation, or transmission of any commercial advertisements such as spam emails, chain letters, pyramid or other get-rich-quick schemes.
						<br />•	Use the Services for fraudulent or abusive purposes including, but not limited to, using the Services to impersonate any person or entity, or otherwise misrepresent your affiliation with a person, entity or the Services;
						<br />•	Disrupt, interfere with or otherwise adversely affect the normal flow of the Services or otherwise act in a manner that may negatively affect other users' experience when using the Services.
						<br />•	Disrupt, overburden, or aid or assist in the disruption or overburdening of any computer or servers used to offer or support the Services.
						<br />•	Attempt to gain unauthorized access to the Services, to accounts registered to others or to the computers, servers, or networks connected to the Services by any means other than the user interface provided by us, including, but not limited to, by circumventing or modifying, attempting to circumvent or modify, or encouraging or assisting any other person to circumvent or modify, any security, technology, device, encryption, or software that is part of the Services.
						<br />•	Post any information, content or other material (or post links to any information or content) that contains nudity, excessive violence or is abusive, threatening, obscene, defamatory, libelous, or racially, sexually, religiously offensive or otherwise objectionable.
						<br />•	Engage in ongoing toxic behavior, such as repeatedly posting information on an unsolicited basis.
						<br />•	Attempt to, or harass, abuse, or harm, or advocate or incite harassment, abuse, or harm of another person, group, including our employees, directors, officers, and customer service representatives.
						<br />•	Make available through the Services any material or information that infringes any copyright, trademark, patent, trade secret, right of privacy, right of publicity, or other right of any person or entity, or which impersonates any other person, including, but not limited to, an our employee, director or officer.
						<br />•	Unless specifically authorized by law, attempt to decompile, reverse engineer, disassemble or hack any of the Services, or to defeat or overcome any of the encryption technologies or security measures or data transmitted, processed or stored by us, or to obtain any information from the Services using any method not expressly permitted by us.
						<br />•	Solicit or attempt to solicit login information or any other login credentials or personal information from other users of the Services.
						<br />•	Harvest, scrape or collect any information about or regarding other people that use the Services, including, but not limited to, through use of pixel tags, cookies, GIFs or similar items that are sometimes also referred to as spyware.
						<br />•	Post anyone's private information, including personally identifiable information/personal data (whether in text, image or video form), identification documents, or financial information through the Services.
						<br />•	Engage in any act that we deem to conflict with the spirit or intent of the Services or make improper use of Our support services.
					</P>
					
					<h5>4. Third-Party Services</h5>
					<P>
						Services may include links to third-party services (including, but not limited to, advertisements displayed by third parties) and/or the third-party services may be made available to you via Services. These services may include, but are not limited to gameplay recording and sharing, social media connectivity and advertisements. These services are subject to respective third party terms and conditions. Please read these third-party terms and conditions, carefully as they constitute an agreement between you and the relevant third-party service provider to which we are not a party.
					</P>
					
					<h5>5. Accounts and Login Informatio</h5>
					<P>
						Certain elements of the Services may enable you to create an account or otherwise register with the Services (“Account”). You may be required to select a password for your Account or you may also use other credentials to access the Account ("Login Information"). You agree that you will not give your Login Information to anyone else or allow anyone else to use your Login Information or Account. You are solely responsible for maintaining the confidentiality of the Login Information, and you are responsible for all uses thereof, including purchases. We may assume that anyone logging into your Account using your Login Information is either you or someone logging in with your permission.
						<br />We reserve the right to delete your Account if we observe no activity by you in relation to the Account for 180 days or more. In such event, you may no longer be able to access and/or use any Virtual Items associated with that Account and no refund will be offered to you.
					</P>
					
					<h5>6. User Contributions</h5>
					<P>
						The Services may allow you to create content, including, but not limited to, gameplay maps, characters, screenshots or videos of your gameplay (collectively “User Contributions”).
						<br />In exchange for use of the Services, you hereby grant us a non-exclusive, royalty-free, perpetual, irrevocable, fully transferable and sub-licensable worldwide right and license to use your User Contributions in any way and for any purposes including, but not limited to, the right to reproduce, copy, adapt, modify, perform, display, publish, broadcast, transmit, or otherwise communicate to the public by any current or future means and to distribute your User Contributions without any further notice or compensation to you of any kind.
						<br />Where not expressly prohibited by law, you hereby waive any moral rights of paternity, publication, reputation, or attribution with respect to our and other players' use and enjoyment of your User Contributions in connection with the Services and related goods and services under applicable law. This grant of license to us, and the foregoing waiver of any applicable moral rights, survives any termination of these TOS.
						<br />We, its directors, officers and employees do not accept or consider unsolicited idea or product submissions of any kind (e.g. game or other product ideas, stories, screenplays, artwork, musical or audiovisual works, concepts or any other creative materials) in any format, by means of any transmission (“Unsolicited Content”). Please do not submit any Unsolicited Content to us or its directors, officers or employees. However, if you submit Unsolicited Content to us, you agree that such Unsolicited Content will not be treated as confidential, regardless of what you otherwise state in your accompanying message. You further agree that such Unsolicited Content may be used and exploited by us without compensation to you or any third party and you grant us a perpetual, non-exclusive, irrevocable, fully paid, royalty free, sub-licensable and transferable (in whole or in part) worldwide license to use, exploit, reproduce, transmit, amend, display and exhibit Unsolicited Content in all current or future media for any purpose and to create derivative works based upon the Unsolicited Content.
					</P>
					
					<h5>7. Communications between Users of the Services</h5>
					<P>
						We assume no responsibility for the conduct of other users of the Services and assumes no responsibility for monitoring the Services for inappropriate content or conduct. We do not, and cannot, pre-screen or monitor all content or conduct of users. Your use of the Services is at your own risk.
						<br />By using the Services, you may be exposed to content or conduct that is offensive, indecent or otherwise not in line with your values. We may utilize technology to monitor and/or record your interactions with the Services or communications (including, but not limited to, chat text) when you are using the Services. You irrevocably consent to such monitoring and recording. Accordingly, you agree that you have no expectation of privacy concerning the transmission of any content within the Services, including, but not limited to, chat text or voice communications.
						<br />We reserve the right at its sole discretion to review, monitor, prohibit, edit, delete, disable access to or otherwise make unavailable any content made available by users of the Service without notice for any reason or for no reason at any time. If at any time we choose, at its sole discretion, to monitor the Services, We nonetheless assume no responsibility for content made available by users of the Services, and we assume no obligation to modify or remove any inappropriate content.
					</P>
					
					<h5>8. Suspension and Termination for your Breach</h5>
					<P>
						Without limiting any other remedies available to us, if we believe that you are in breach of these TOS, we reserve the right to take any of the following actions, whether individually or in combination, and either with or without notice to you: (i) delete, suspend and/or modify your Account or parts of your Account; (ii) limit, suspend and/or terminate your access to the Services; (iii) modify and/or remove any of your Virtual Items; (iv) reset and/or modify any game progression or benefits and privileges associated with you, such as any level or score you have reached in the Services.
					</P>
					
					<h5>9. Availability of the Services</h5>
					<P>
						We may limit, suspend or terminate the Services, or portions thereof, and take technical and legal steps to prevent users from accessing the Services if we believes they are creating risk or possible legal liabilities, infringing intellectual property rights of third parties, or not acting in accordance with the letter or spirit of these TOS.
						<br />We reserve the right to stop offering and/or supporting the Services or a part thereof (e.g. a game or a feature of a game) at any time, at which point your license to use the Services or a part thereof will be terminated automatically. In such an event, unless otherwise required by applicable law, we do not have to provide refunds for Virtual Items or other items in connection with such discontinued Services.
					</P>
					
					<h5>10. Disclaimer</h5>
					<P>
						To the fullest extent permissible under applicable law, the Services are provided to you “AS IS,” without warranty, assurances or guarantees of any kind. It may have defects, and your use is solely at your risk. We do not make, and hereby disclaims any and all express, implied or statutory warranties, including implied warranties of condition, uninterrupted use, accuracy of data (including, but not limited to, location data), merchantability, satisfactory quality, fitness for a particular purpose, non-infringement of third-party rights, and warranties (if any) arising in the course of dealing, usage, or trade practices. We do not warrant against interference with your enjoyment of the Services; that the Services will meet your requirements; that operation of the Services will be uninterrupted or error-free; that the Services will interoperate or be compatible with any other services; or, that any errors in the Services will be corrected. No oral or written advice provided by us, its employees or other representatives constitute a warranty.
						<br />Some jurisdictions do not allow disclaimers such as those set forth above; thus, the above terms may not apply to you. Instead, in such jurisdictions, the foregoing disclaimers shall only apply to the extent permitted by the laws of such jurisdictions. Moreover, you may have additional legal rights in your jurisdiction, and nothing in these TOS shall infringe upon the statutory rights that you may have as a consumer of the Services.
					</P>
					
					<h5>11. Limitations of Liability</h5>
					<P>
						In no way will we be liable for special, incidental or consequential damages resulting from access, use or malfunction of the Services, including but not limited to, damages to property, loss of goodwill, device failure or malfunction and, to the extent permitted by law, damages for personal injuries, property damage, lost profits or punitive damages from any causes of action arising out of or related to these TOS or the Services, whether arising in tort (including negligence), contract, strict liability or otherwise and whether or not we have been advised of the possibility of such damages. For purposes of Article 11 “Limitations of Liability,” Our licensors and other partners are third-party beneficiaries to the limitations of liability specified herein and may enforce these TOS against you.
						<br />Some jurisdictions do not allow certain limitations of liability such as these stated above; thus, the above terms may not apply to you. Instead, in such jurisdictions, the foregoing limitations of liability shall apply only to the extent permitted by the laws of such jurisdictions. Moreover, you may have additional legal rights in your jurisdiction, and nothing in these TOS will infringe upon any statutory rights you may have as a consumer of the Services.
					</P>
					
					<h5>12. INTELLECTUAL PROPERTY RIGHTS</h5>
					<P>
						In the event of any concerns or complaints about possible violation of intellectual property rights, please send us an email at Legal@whosebilling.com, identifying with specificity the rights alleged to be violated and the accused product(s).
					</P>
					
					<h5>13. Links to Third-party Products and Services</h5>
					<P>
						We may link to third-party websites or services from the Services. You understand that we make no promises regarding any content, goods or services provided by such third parties and, you understand we do not endorse them. We are also not responsible to you in relation to any losses or harm caused by such third parties. Any charges you incur in relation to these third parties are your responsibility. You understand that when you provide data to such third parties you are providing it in accordance with their privacy policy (if any) and you understand our Privacy Policy does not apply in relation to such data
					</P>
					
					<h5>14. Changes to these TOS</h5>
					<P>
						Notwithstanding Article 8 “Binding arbitration / Class Waiver,” we may update these TOS from time to time in response to changing legal, technical or business developments. When we update these TOS, we will take appropriate measures to inform you via the Services or otherwise, in accordance with the significance of the changes we make.
						<br />By continuing to access or use the Services after updates become effective, you agree to be bound by the updated TOS.
					</P>
					
					<h5>15. Governing Law</h5>
					<P>
						These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of UK
					</P>
					<h5>16. Assignment, Severability and Entire Agreement</h5>
					<P>
						We may assign these TOS, in whole or in part, to any person or entity at any time with or without your consent. You may not assign or delegate any rights or obligations under these TOS or the Privacy Policy without Our prior written consent, and any unauthorized assignment and delegation by you is void.
						<br />If any provision of these TOS is held to be invalid or unenforceable, such provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions of these TOS will remain in full force and effect. Our failure to enforce any right or provision of these TOS will not be deemed a waiver of such right or provision.
						<br />This TOS and Privacy Policy set out the entire agreement between you and us regarding the Services and supersede all earlier agreements and understandings between you and us.
						<br />If you have any questions about these TOS, please contact at support@linksfield.net;
					</P>
					
					<p class="bottomTxt">
						<img src="../assets/common/TXT.png"/>
					</p>
				</div>
			</div>
		</div>

		<div class="btns">
			<a class="done" @click="back">{{$t("message.back")}}</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'helpText',
		data() {
			return {
				langCn: this.$store.state.langType == 'cn' ? true : false,
			}
		},
		props: {
			helpFlag: {
				type: Number,
				default: 1
			},
			backRouoter: {
				type:String,
				default:''
			}
		},
		methods:{
			back(){
				history.go(-1)
			}
		}
	}
</script>

<style scoped>
	h4 {
		margin: 30px 0 20px;
		font-size: 0.8rem;
		text-align: center;
	}
	
	.textContent {
		font-size: 0.7rem;
		color: #3E3A39;
		line-height: 24px;
		padding: 0 1.2rem 82px;
	}
	
	.textContent h5{
		font-weight: bold;
		margin:8px 0 3px;
	}
	
	.btns {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 15px;
		text-align: center;
		background: #fff;
	}
	.bottomTxt{
		margin-top:20px;
	}
	.bottomTxt img{
		width:100%;
		max-width: 360px;
	}
</style>