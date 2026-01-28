// 中英文翻译
export type Language = 'zh' | 'en';

export const translations = {
  zh: {
    // 导航
    nav: {
      appName: '自律大脑',
      tagline: '手机使用时间管理工具',
      features: '核心功能',
      screenshots: '应用截图',
      brainHealth: '大脑健康',
      howToUse: '如何使用',
      faq: '常见问题',
      download: '免费下载',
      downloadShort: '下载',
    },
    
    // Hero区域
    hero: {
      painPoint: '每天8小时沉迷手机，却感觉一事无成？',
      mainTitle: '你的"大脑"',
      mainTitleHighlight: '正在被手机一点点吞噬！',
      subtitle: '可视化大脑健康值，智能限制成瘾应用',
      description: '用科学的方法重新掌控你的注意力和时间',
      downloadNow: '立即下载',
      learnMore: '了解更多',
      statsUsers: '活跃用户',
      statsTime: '平均每日节省',
      statsRating: '用户评分',
      supportInfo: '支持 iOS 14.0+ · 完全免费 · 无内购 · 无广告',
    },
    
    // 功能介绍
    features: {
      title: '核心功能',
      subtitle: '全方位帮你建立健康的手机使用习惯',
      list: [
        {
          title: '实时大脑健康状态',
          desc: '像查看手机电量一样简单，随时了解使用状况',
          benefit: '让自律可视化，时刻知道自己的状态',
        },
        {
          title: '桌面智能小组件',
          desc: '无需打开APP，一眼掌握今日进度',
          benefit: '主屏提醒，让自律成为习惯',
        },
        {
          title: '深度数据分析',
          desc: '全方位了解你的使用习惯和变化趋势',
          benefit: '数据驱动，科学改善使用习惯',
        },
        {
          title: '智能应用拦截',
          desc: '自动阻断成瘾应用，保护专注时间',
          benefit: '强制自律，避免意志力消耗',
        },
        {
          title: '个性化规则引擎',
          desc: '灵活设置限制方案，适配你的生活节奏',
          benefit: '因人而异，打造专属自律方案',
        },
      ],
    },
    
    // 应用截图
    screenshots: {
      title: '应用截图',
      subtitle: '简洁优雅的界面设计，专注提升你的使用体验',
    },
    
    // 大脑健康系统
    brainHealth: {
      title: '大脑健康系统',
      subtitle: '6种状态，实时反映你的手机使用健康度',
      interactive: '拖动滑块体验不同状态',
      autoPlay: '自动演示',
      stop: '停止',
      currentHealth: '当前健康值',
      states: [
        { name: '完美', desc: '保持优秀！' },
        { name: '健康', desc: '状态良好' },
        { name: '普通', desc: '注意控制' },
        { name: '疲劳', desc: '需要休息' },
        { name: '危险', desc: '严重警告' },
        { name: '崩溃', desc: '立即行动' },
      ],
    },
    
    // 使用步骤
    howItWorks: {
      title: '如何使用',
      subtitle: '4个简单步骤，开启你的自律之旅',
      steps: [
        {
          title: '下载并设置',
          description: '从App Store免费下载，2分钟完成初始设置',
        },
        {
          title: '智能监测',
          description: '自动追踪应用使用，实时更新大脑健康值',
        },
        {
          title: '主动干预',
          description: '达到限制时智能拦截，保护你的专注时间',
        },
        {
          title: '持续改善',
          description: '查看数据报告，逐步建立健康使用习惯',
        },
      ],
    },
    
    // FAQ
    faq: {
      title: '常见问题',
      subtitle: '我们整理了用户最关心的问题',
      list: [
        {
          q: 'Android用户可以使用吗？',
          a: '目前仅支持iOS系统，我们正在开发Android版本，预计将在未来几个月内上线。您可以留下邮箱，我们会在Android版本发布时第一时间通知您。',
        },
        {
          q: '如何开始使用自律大脑？',
          a: '下载APP后，首次打开会有简单的3步引导：选择需要限制的应用、设定每日使用时长、开启大脑健康监测。整个过程不超过2分钟，之后系统会自动帮助您建立健康的使用习惯。',
        },
        {
          q: '会影响手机性能或耗电吗？',
          a: '完全不会。自律大脑采用轻量级设计，后台运行占用的系统资源极少（<5MB内存），电池消耗可忽略不计（<1%/天），不会对手机性能产生任何影响。',
        },
        {
          q: '可以临时关闭限制吗？',
          a: '可以。在紧急情况下，您可以选择临时解除限制（5分钟、15分钟或1小时）。系统会记录这次行为并在统计中显示，帮助您更好地了解自己的使用模式。',
        },
        {
          q: '大脑健康值是如何计算的？',
          a: '大脑健康值基于您的应用使用时长、使用频率、使用时段等多维度数据综合计算。系统会学习您的习惯，并根据设定的目标动态调整，让数值更符合您的实际情况。',
        },
        {
          q: '免费版和Pro版有什么区别？',
          a: '目前所有核心功能完全免费，包括大脑健康监测、应用拦截、数据统计等。我们承诺核心功能永久免费，未来可能会推出Pro版提供高级分析和定制化功能。',
        },
      ],
    },
    
    // Footer
    footer: {
      privacyPolicy: '隐私政策',
      termsOfService: '用户协议',
      copyright: '© 2025 自律大脑. All rights reserved.',
    },
  },
  
  en: {
    // Navigation
    nav: {
      appName: 'LessScreen',
      tagline: 'Screen Time Management Tool',
      features: 'Features',
      screenshots: 'Screenshots',
      brainHealth: 'Brain Health',
      howToUse: 'How It Works',
      faq: 'FAQ',
      download: 'Download Free',
      downloadShort: 'Download',
    },
    
    // Hero Section
    hero: {
      painPoint: 'Spending 8 hours on your phone daily but feeling unproductive?',
      mainTitle: 'Your Brain Is Being',
      mainTitleHighlight: 'Devoured by Your Phone!',
      subtitle: 'Visualize Brain Health, Intelligently Limit Addictive Apps',
      description: 'Scientifically regain control of your attention and time',
      downloadNow: 'Download Now',
      learnMore: 'Learn More',
      statsUsers: 'Active Users',
      statsTime: 'Average Daily Savings',
      statsRating: 'User Rating',
      supportInfo: 'iOS 14.0+ · Completely Free · No In-App Purchase · No Ads',
    },
    
    // Features
    features: {
      title: 'Core Features',
      subtitle: 'Build healthy phone habits with comprehensive tools',
      list: [
        {
          title: 'Real-Time Brain Health',
          desc: 'As simple as checking battery life, monitor your usage anytime',
          benefit: 'Visualize self-discipline, stay aware of your state',
        },
        {
          title: 'Smart Home Widgets',
          desc: "Track today's progress at a glance, no need to open the app",
          benefit: 'Home screen reminders turn discipline into habit',
        },
        {
          title: 'Deep Data Analytics',
          desc: 'Comprehensive insights into your usage patterns and trends',
          benefit: 'Data-driven approach to improve habits scientifically',
        },
        {
          title: 'Smart App Blocking',
          desc: 'Automatically block addictive apps to protect focus time',
          benefit: 'Enforce discipline without draining willpower',
        },
        {
          title: 'Personalized Rules Engine',
          desc: 'Flexibly set limits that adapt to your lifestyle rhythm',
          benefit: 'Tailored solutions for your unique discipline journey',
        },
      ],
    },
    
    // Screenshots
    screenshots: {
      title: 'App Screenshots',
      subtitle: 'Clean and elegant interface design focused on your experience',
    },
    
    // Brain Health System
    brainHealth: {
      title: 'Brain Health System',
      subtitle: '6 states that reflect your phone usage health in real-time',
      interactive: 'Drag the slider to experience different states',
      autoPlay: 'Auto Demo',
      stop: 'Stop',
      currentHealth: 'Current Health',
      states: [
        { name: 'Perfect', desc: 'Keep it up!' },
        { name: 'Healthy', desc: 'Doing great' },
        { name: 'Normal', desc: 'Stay mindful' },
        { name: 'Tired', desc: 'Need rest' },
        { name: 'Danger', desc: 'Serious warning' },
        { name: 'Collapsed', desc: 'Act now' },
      ],
    },
    
    // How It Works
    howItWorks: {
      title: 'How It Works',
      subtitle: '4 simple steps to begin your discipline journey',
      steps: [
        {
          title: 'Download & Setup',
          description: 'Free download from App Store, 2-minute initial setup',
        },
        {
          title: 'Smart Monitoring',
          description: 'Auto-track app usage, update brain health in real-time',
        },
        {
          title: 'Active Intervention',
          description: 'Smart blocking when limits reached, protect focus time',
        },
        {
          title: 'Continuous Improvement',
          description: 'View data reports, gradually build healthy habits',
        },
      ],
    },
    
    // FAQ
    faq: {
      title: 'FAQ',
      subtitle: "We've compiled the most common questions from users",
      list: [
        {
          q: 'Is it available for Android users?',
          a: "Currently only iOS is supported. We are developing the Android version, expected to launch in the coming months. Leave your email and we'll notify you when the Android version is released.",
        },
        {
          q: 'How do I start using LessScreen?',
          a: 'After downloading, first launch includes a simple 3-step guide: select apps to limit, set daily usage time, enable brain health monitoring. The entire process takes less than 2 minutes, then the system automatically helps you build healthy habits.',
        },
        {
          q: 'Will it affect phone performance or battery?',
          a: 'Not at all. LessScreen uses lightweight design, minimal system resources in background (<5MB memory), negligible battery consumption (<1%/day), with no impact on phone performance.',
        },
        {
          q: 'Can I temporarily disable limits?',
          a: 'Yes. In emergencies, you can temporarily lift restrictions (5, 15, or 60 minutes). The system records this behavior and displays it in statistics, helping you better understand your usage patterns.',
        },
        {
          q: 'How is brain health value calculated?',
          a: 'Brain health value is calculated based on multi-dimensional data including app usage duration, frequency, and time periods. The system learns your habits and dynamically adjusts according to set goals for more accurate values.',
        },
        {
          q: "What's the difference between free and Pro versions?",
          a: 'Currently all core features are completely free, including brain health monitoring, app blocking, and data statistics. We promise core features remain free forever. A Pro version with advanced analytics and customization may launch in the future.',
        },
      ],
    },
    
    // Footer
    footer: {
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      copyright: '© 2025 LessScreen. All rights reserved.',
    },
  },
};

// 获取系统语言
export const getSystemLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';
  
  const browserLang = navigator.language.toLowerCase();
  
  // 如果是中文（简体/繁体），返回中文
  if (browserLang.startsWith('zh')) {
    return 'zh';
  }
  
  // 其他所有语言默认返回英文
  return 'en';
};