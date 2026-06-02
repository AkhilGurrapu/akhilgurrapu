class ProjectUtils {
  final String banners;
  final String icons;
  final String titles;
  final String description;
  final String links;
  ProjectUtils({
    required this.banners,
    required this.icons,
    required this.titles,
    required this.description,
    required this.links,
  });
}

List<ProjectUtils> projectUtils = [
  ProjectUtils(
    banners: 'assets/imgs/textAI.png',
    icons: 'assets/imgs/replit.png',
    titles: 'Capital Asset Pricing Model',
    description:
        'AI Text Summarizer App! This app leverages the power of Artificial Intelligence APIs to provide concise summaries of long texts. Whether you have a lengthy article, research paper, or any other text document that you want to summarize quickly, this app can assist you.',
    links: 'https://akhilgurrapu.github.io/AI-Text-Summarizer-App/',
  ),
  ProjectUtils(
    banners: 'assets/imgs/02.png',
    icons: 'assets/imgs/streamlit.png',
    titles: 'Capital Asset Pricing Model',
    description:
        'The CAPM Calculator is a powerful financial tool developed using Streamlit and Python that enables users to quickly and intuitively calculate expected returns for their investment portfolios ',
    links: 'https://capitalassestpricingmodel.streamlit.app/',
  ),
  ProjectUtils(
     banners: 'assets/imgs/Tableau1.png',
    icons: 'assets/imgs/Tableau.jpg',
    titles: 'IBM Electronics Sales Report',
    description:
        'Interactive visualization to provide a comprehensive view of IBMs electronic product sales landscape. Within the vibrant visualizations lies a treasure  of valuable business insights that redefine the approach in the electronics industry.',
    links: 'https://akhilgurrapu.github.io/IBM-Electroni-Sales-Report-Tableau/index.html/',
  ),
  ProjectUtils(
    banners: 'assets/imgs/DA2.png',
    icons: 'assets/imgs/jupyter.png',
    titles: 'Marketing Analytics',
    description:
        'Statistical Analysis and Visualization for Marketing Analytics using Python and Pandas',
    links: 'https://akhilgurrapu.github.io/Marketing_Analytics-DataScience-Project/',
  ),
  ProjectUtils(
    banners: 'assets/imgs/bamboofresh.png',
    icons: 'assets/imgs/BambooFreshLogo.png',
    titles: 'BambooFresh App',
    description:
        'BambooFresh: Your ultimate green grocery Flutter app. Shop fresh, locally sourced produce while enjoying seamless operations, all driven by the innovative spirit of community-focused development.',
    links: 'https://play.google.com/store/apps/details?id=in.bamboofresh.bamboofresh&pli=1',
  ),
  // ProjectUtils(
  //   banners: 'assets/imgs/bamboofresh.png',
  //   icons: 'assets/imgs/BambooFreshLogo.png',
  //   titles: 'BambooFresh App',
  //   description:
  //       'BambooFresh: Your ultimate green grocery Flutter app. Shop fresh, locally sourced produce while enjoying seamless operations, all driven by the innovative spirit of community-focused development.',
  //   links: 'https://play.google.com/store/apps/details?id=in.bamboofresh.bamboofresh&pli=1',
  // ),
];
