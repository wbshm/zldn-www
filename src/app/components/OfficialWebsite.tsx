import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Slider from 'react-slick';
import '@/styles/carousel.css';
import { 
  Apple, 
  Brain, 
  Shield, 
  Clock, 
  Smartphone, 
  ShieldAlert, 
  LayoutGrid, 
  BarChart3,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Star,
  Zap,
  AlertTriangle,
  TrendingDown,
  CheckCircle2,
  Target,
  Download,
  PlayCircle,
  Users,
  TrendingUp,
  ChevronLeft,
  Move,
  Globe
} from 'lucide-react';
import { BrainStateDisplay } from '@/app/components/BrainStateDisplay';
import { translations, getSystemLanguage, Language } from '@/i18n/translations';
import appIcon from '@/assets/11fa8f40db6b4929d00004a226fc73d404086f8e.png';
import brainCharacter from '@/assets/c6ef3866da890da58cf4d6578ed5e82916a529cb.png';
import heroImageZh from '@/assets/d3400d6f6fd0f7a248ce79c820c17f0ad61cf771.png';
import heroImageEn from '@/assets/22fcc4ecd27c4bbfebcb81786276c6473eaafd37.png';
import featureBrain from '@/assets/32954fcaddc61a4934fb51f1e7b306a3f2057c6a.png';
import featureWidget from '@/assets/e5bec986c432c496ed242e7f483b462cc815b1ca.png';
import featureStats from '@/assets/88fe9480ea11b01d93e2633b810ccd48cd3c07fb.png';
import featureRules from '@/assets/d4cb658baca3cc10de5afb71716e404a391dd081.png';
import featureBlocking from '@/assets/8976ce700397bf9f999b943e96190f96c42a40e8.png';

// English screenshots
import featureBrainEn from '@/assets/1e56f4873201566100d0bb483351a9e68d3de83a.png';
import featureBlockingEn from '@/assets/464ac262cf16e5f171ed5c7fcf7c8ce4ce64fd10.png';
import featureStatsEn from '@/assets/945a726b20dfaa357a9385a428d4d0ed6a5ad396.png';
import featureRulesEn from '@/assets/b20299754347bffc6accf24351cf3d2279730f80.png';
import featureWidgetEn from '@/assets/a1ef07d62e63173f0a8808a70a1e001f00e5142f.png';

// Brain states
import brainPerfect from '@/assets/883c1495c4447175ee609438939ec32446c745e2.png';
import brainHealthy from '@/assets/41fce5169a983d7686f607809c9999931e464d15.png';
import brainNormal from '@/assets/85620262cc2facbdccacb8b61e5bf108129c0703.png';
import brainTired from '@/assets/ff41882cf6bf817e72536feb0b740d353997550d.png';
import brainDanger from '@/assets/e83a8078c8bb878f2645cab1e9b20e2158cec459.png';
import brainCollapsed from '@/assets/a593e26e1aebbb006db24a5daf023d9e7915f46b.png';

export function OfficialWebsite() {
  // 语言状态管理
  const [language, setLanguage] = useState<Language>('zh');
  const t = translations[language];
  
  // 初始化时根据localStorage或系统语言设置
  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'zh' || savedLang === 'en')) {
      setLanguage(savedLang);
    } else {
      const systemLang = getSystemLanguage();
      setLanguage(systemLang);
      localStorage.setItem('language', systemLang);
    }
  }, []);
  
  // 切换语言时保存到localStorage
  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };
  
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);
  const [brainHealth, setBrainHealth] = useState(100);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [interactiveBrainHealth, setInteractiveBrainHealth] = useState(100);
  const [autoPlayBrain, setAutoPlayBrain] = useState(false);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  // Custom arrow components that properly handle react-slick props
  const CustomPrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <button 
        className={className}
        style={{ ...style }}
        onClick={onClick}
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
    );
  };

  const CustomNextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <button 
        className={className}
        style={{ ...style }}
        onClick={onClick}
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    );
  };

  // P1: 自动演示大脑健康系统
  useEffect(() => {
    if (autoPlayBrain) {
      const interval = setInterval(() => {
        setInteractiveBrainHealth((prev) => {
          if (prev <= 0) {
            setAutoPlayBrain(false);
            return 100;
          }
          return prev - 2;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [autoPlayBrain]);

  // P1: 平滑滚动到锚点
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // 导航栏高度
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const productFeatures = [
    { 
      src: featureBrain, 
      title: t.features.list[0].title, 
      desc: t.features.list[0].desc,
      benefit: t.features.list[0].benefit,
      icon: Brain,
      color: "blue"
    },
    { 
      src: featureWidget, 
      title: t.features.list[1].title, 
      desc: t.features.list[1].desc,
      benefit: t.features.list[1].benefit,
      icon: LayoutGrid,
      color: "indigo"
    },
    { 
      src: featureStats, 
      title: t.features.list[2].title, 
      desc: t.features.list[2].desc,
      benefit: t.features.list[2].benefit,
      icon: BarChart3,
      color: "emerald"
    },
    { 
      src: featureBlocking, 
      title: t.features.list[3].title, 
      desc: t.features.list[3].desc,
      benefit: t.features.list[3].benefit,
      icon: ShieldAlert,
      color: "red"
    },
    { 
      src: featureRules, 
      title: t.features.list[4].title, 
      desc: t.features.list[4].desc,
      benefit: t.features.list[4].benefit,
      icon: Clock,
      color: "purple"
    }
  ];

  const brainStates = [
    { image: brainPerfect, name: t.brainHealth.states[0].name, health: 100, color: "emerald" },
    { image: brainHealthy, name: t.brainHealth.states[1].name, health: 80, color: "green" },
    { image: brainNormal, name: t.brainHealth.states[2].name, health: 60, color: "blue" },
    { image: brainTired, name: t.brainHealth.states[3].name, health: 40, color: "yellow" },
    { image: brainDanger, name: t.brainHealth.states[4].name, health: 20, color: "orange" },
    { image: brainCollapsed, name: t.brainHealth.states[5].name, health: 0, color: "red" }
  ];

  const faqs = t.faq.list;

  // P1: 工作原理步骤
  const howItWorksSteps = [
    {
      step: "01",
      title: t.howItWorks.steps[0].title,
      description: t.howItWorks.steps[0].description,
      icon: Download
    },
    {
      step: "02",
      title: t.howItWorks.steps[1].title,
      description: t.howItWorks.steps[1].description,
      icon: Brain
    },
    {
      step: "03",
      title: t.howItWorks.steps[2].title,
      description: t.howItWorks.steps[2].description,
      icon: Shield
    },
    {
      step: "04",
      title: t.howItWorks.steps[3].title,
      description: t.howItWorks.steps[3].description,
      icon: TrendingUp
    }
  ];

  return (
    <motion.div 
      key={language}
      initial={{ opacity: 0.95 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="relative min-h-screen w-full bg-white text-slate-900 font-sans overflow-x-hidden"
    >
      
      {/* Fixed Navigation Bar - P1: 添加锚点导航 */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/50"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Left: Logo + Name */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity"
            >
              <img 
                src={appIcon} 
                alt={t.nav.appName} 
                className="w-10 h-10 md:w-12 md:h-12 rounded-xl shadow-sm" 
              />
              <div className="flex flex-col items-start">
                <span className="text-base md:text-lg font-black text-slate-900 tracking-tight">
                  {t.nav.appName}
                </span>
                <p className="text-xs text-slate-500 font-medium hidden sm:block">
                  {t.nav.tagline}
                </p>
              </div>
            </button>

            {/* Center: Navigation Links - 桌面端显示 */}
            <div className="hidden lg:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-sm font-semibold text-slate-600 hover:text-amber-600 transition-colors"
              >
                {t.nav.features}
              </button>
              <button 
                onClick={() => scrollToSection('screenshots')} 
                className="text-sm font-semibold text-slate-600 hover:text-amber-600 transition-colors"
              >
                {t.nav.screenshots}
              </button>
              <button 
                onClick={() => scrollToSection('brain-system')} 
                className="text-sm font-semibold text-slate-600 hover:text-amber-600 transition-colors"
              >
                {t.nav.brainHealth}
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')} 
                className="text-sm font-semibold text-slate-600 hover:text-amber-600 transition-colors"
              >
                {t.nav.howToUse}
              </button>
              <button 
                onClick={() => scrollToSection('faq')} 
                className="text-sm font-semibold text-slate-600 hover:text-amber-600 transition-colors"
              >
                {t.nav.faq}
              </button>
            </div>

            {/* Right: Language Toggle + CTA Button */}
            <div className="flex items-center gap-3">
              {/* Language Toggle Button */}
              <motion.button
                onClick={() => handleLanguageChange(language === 'zh' ? 'en' : 'zh')}
                className="h-10 md:h-12 px-3 md:px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-sm flex items-center gap-2 transition-all"
                title={language === 'zh' ? 'Switch to English' : '切换到中文'}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="w-4 h-4" />
                <span className="text-xs">{language === 'zh' ? 'EN' : '中文'}</span>
              </motion.button>
            </div>

          </div>
        </div>
      </motion.nav>

      {/* P0: 简化背景元素 - 只保留一个简单的渐变 */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[900px] bg-gradient-to-b from-amber-50/50 via-yellow-50/30 to-transparent blur-3xl" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col">
        
        {/* 1. Hero Section - P0: 添加清晰的价值主张，P1: 痛点唤醒 */}
        <section className="w-full relative overflow-visible md:pt-20 md:pb-8 min-h-[800px] md:min-h-[900px] bg-gradient-to-b from-white to-slate-50/50 order-1 pt-[80px] pr-[0px] pb-[0px] pl-[0px]">
          
          {/* 装饰性浮动元素 - 克制且优雅 */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            
            {/* 浮动元素1: 大脑图标 - 左上角 */}
            <motion.div
              className="absolute top-32 left-[5%] lg:left-[8%] w-16 h-16 opacity-20"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-200 to-yellow-200 blur-xl" />
            </motion.div>

            {/* 浮动元素2: 时钟图标 - 右上角 */}
            <motion.div
              className="absolute top-40 right-[8%] lg:right-[12%] w-12 h-12 opacity-15"
              animate={{
                y: [0, 15, 0],
                rotate: [0, -8, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-300 to-yellow-400 blur-lg" />
            </motion.div>

            {/* 浮动元素3: 盾牌 - 左下角 */}
            <motion.div
              className="absolute bottom-32 left-[10%] lg:left-[15%] w-20 h-20 opacity-10"
              animate={{
                y: [0, -25, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300 blur-xl rotate-12" />
            </motion.div>

            {/* 浮动元素4: 星星 - 右中 */}
            <motion.div
              className="absolute top-[60%] right-[5%] lg:right-[10%] w-8 h-8 opacity-25"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-full h-full text-amber-400" />
            </motion.div>

            {/* 浮�����素5: 圆形 - 左中 */}
            <motion.div
              className="absolute top-[45%] left-[3%] hidden lg:block w-14 h-14 opacity-12"
              animate={{
                y: [0, 20, 0],
                scale: [1, 1.15, 1]
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-100 to-yellow-100 blur-lg" />
            </motion.div>

            {/* 浮动元素6: 小脑图标 - 右下角 */}
            <motion.div
              className="absolute bottom-40 right-[15%] hidden lg:block opacity-15"
              animate={{
                y: [0, -18, 0],
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 11,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Brain className="w-10 h-10 text-slate-400" />
            </motion.div>

            {/* 新增元素7: 目标图标 - 左上中 */}
            <motion.div
              className="absolute top-[25%] left-[18%] hidden lg:block opacity-20"
              animate={{
                y: [0, -12, 0],
                scale: [1, 1.15, 1],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Target className="w-7 h-7 text-slate-400" />
            </motion.div>

            {/* 新增元素8: 闪电图标 - 右上中 */}
            <motion.div
              className="absolute top-[30%] right-[18%] hidden lg:block opacity-18"
              animate={{
                y: [0, 18, 0],
                rotate: [0, -15, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 13,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Zap className="w-6 h-6 text-yellow-400" />
            </motion.div>

            {/* 新增元素9: 小光点1 - 顶部中间 */}
            <motion.div
              className="absolute top-24 left-[45%] w-2 h-2 opacity-30"
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-full h-full rounded-full bg-amber-400 blur-sm" />
            </motion.div>

            {/* 新增元素10: 小光点2 - 底部中间 */}
            <motion.div
              className="absolute bottom-28 left-[55%] w-2.5 h-2.5 opacity-25"
              animate={{
                y: [0, 15, 0],
                scale: [1, 1.4, 1],
                opacity: [0.25, 0.5, 0.25]
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-full h-full rounded-full bg-amber-300 blur-sm" />
            </motion.div>

            {/* 新增元素11: 勾选图标 - 左下中 */}
            <motion.div
              className="absolute bottom-[55%] left-[12%] hidden lg:block opacity-16"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 10, 0],
                scale: [1, 1.12, 1]
              }}
              transition={{
                duration: 11,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <CheckCircle2 className="w-6 h-6 text-amber-400" />
            </motion.div>

            {/* 新增元素12: 趋势图标 - 右下中 */}
            <motion.div
              className="absolute bottom-[58%] right-[20%] hidden lg:block opacity-14"
              animate={{
                y: [0, 12, 0],
                x: [0, -5, 0],
                rotate: [0, -8, 0]
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <TrendingUp className="w-7 h-7 text-slate-400" />
            </motion.div>

            {/* 新增元素13: 微小粒子1 */}
            <motion.div
              className="absolute top-[35%] right-[25%] w-1.5 h-1.5 opacity-20"
              animate={{
                y: [0, -25, 0],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-full h-full rounded-full bg-amber-200" />
            </motion.div>

            {/* 新增元素14: 微小粒子2 */}
            <motion.div
              className="absolute top-[70%] left-[25%] w-1.5 h-1.5 opacity-18"
              animate={{
                y: [0, 20, 0],
                x: [0, 8, 0],
                opacity: [0.18, 0.35, 0.18]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-full h-full rounded-full bg-slate-300" />
            </motion.div>

            {/* 新增元素15: 光晕效果 - 左侧 */}
            <motion.div
              className="absolute top-[40%] -left-20 w-64 h-64 opacity-5"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.05, 0.08, 0.05]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-200 to-slate-300 blur-3xl" />
            </motion.div>

            {/* 新增元素16: 光晕效果 - 右侧 */}
            <motion.div
              className="absolute top-[55%] -right-20 w-56 h-56 opacity-4"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.04, 0.07, 0.04]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-300 to-yellow-300 blur-3xl" />
            </motion.div>

          </div>

          {/* 桌面端布局 */}
          <div className="hidden lg:block w-full max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center px-[0px] pt-[100px] pb-[20px]">
              
              {/* 左侧：文字内容 */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4"
              >
                {/* P1: 痛点唤醒 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-3"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full">
                    <AlertTriangle className="w-4 h-4 text-amber-700" />
                    <span className="text-sm font-bold text-amber-700">{t.hero.painPoint}</span>
                  </div>
                </motion.div>

                {/* P0: 三层价值主张 */}
                <div className="space-y-6">
                  {/* 主标题 - What */}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]"
                  >
                    {t.hero.mainTitle}
                    <br />
                    <span className="text-blue-600 text-3xl lg:text-5xl">{t.hero.mainTitleHighlight}</span>
                  </motion.h1>

                  {/* 副标题 - How */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-xl lg:text-2xl text-slate-600 font-medium leading-relaxed"
                  >
                    {t.hero.subtitle}
                  </motion.p>
                </div>

                {/* P0: CTA按钮层级 - 主CTA + 次CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-wrap gap-4 pt-4"
                >
                  {/* 主CTA */}
                  <button 
                    onClick={() => window.open('https://apps.apple.com/us/app/%E8%87%AA%E5%BE%8B%E5%A4%A7%E8%84%91-%E6%8E%A7%E5%88%B6%E5%88%B7%E6%89%8B%E6%9C%BA-%E5%B1%8F%E5%B9%95%E6%97%B6%E9%97%B4%E4%B8%8E%E5%BA%94%E7%94%A8%E9%99%90%E5%88%B6/id6753039898', '_blank')}
                    className="group h-14 px-8 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-base flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
                  >
                    <Download className="w-5 h-5" />
                    <span>{t.hero.downloadNow}</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="text-sm text-slate-500 font-medium"
                >
                  {t.hero.supportInfo}
                </motion.p>

              </motion.div>

              {/* 右侧：产品图片 */}
              <motion.div
                initial={{ opacity: 0, x: 40, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="relative">
                  {/* 主图片 - 添加悬浮和呼吸动画 */}
                  <motion.img 
                    src={language === 'zh' ? heroImageZh : heroImageEn} 
                    alt={`${t.nav.appName} ${language === 'zh' ? 'App界面' : 'App Interface'}`} 
                    className="w-full max-w-[700px] mx-auto drop-shadow-2xl"
                    animate={{ 
                      y: [0, -20, 0],
                      rotate: [0, 2, 0, -2, 0],
                      scale: [1, 1.02, 1]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>

            </div>
          </div>

          {/* 移动端布局 */}
          <div className="lg:hidden w-full px-4 pt-6 pb-2 space-y-4">
            
            {/* 痛点标签 - 最上方单独展示 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex justify-center mt-3"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-full">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
                <span className="text-xs font-bold text-amber-700">{t.hero.painPoint.substring(0, 20)}...</span>
              </div>
            </motion.div>

            {/* 产品图片 - 缩小尺寸，减少上下间距，添加微动效 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <motion.img 
                src={language === 'zh' ? heroImageZh : heroImageEn} 
                alt={`${t.nav.appName} ${language === 'zh' ? 'App界面' : 'App Interface'}`} 
                className="w-full max-w-[400px] mx-auto drop-shadow-2xl"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 1.5, 0, -1.5, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* 文字内容 - 紧凑布局 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-2 text-center"
            >
              {/* 主标题 - 减小字号 */}
              <h1 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">
                {t.hero.mainTitle}
                <br />
                <span className="text-blue-600 text-xl">{t.hero.mainTitleHighlight}</span>
              </h1>

              {/* 副标题 - 缩短文案 */}
              <p className="text-sm text-slate-600 font-medium leading-relaxed max-w-xs mx-auto">
                {t.hero.subtitle}
              </p>

              {/* CTA按钮 - 更大更醒目 */}
              <div className="flex flex-col gap-2.5 pt-2">
                <button 
                  onClick={() => window.open('https://apps.apple.com/us/app/%E8%87%AA%E5%BE%8B%E5%A4%A7%E8%84%91-%E6%8E%A7%E5%88%B6%E5%88%B7%E6%89%8B%E6%9C%BA-%E5%B1%8F%E5%B9%95%E6%97%B6%E9%97%B4%E4%B8%8E%E5%BA%94%E7%94%A8%E9%99%90%E5%88%B6/id6753039898', '_blank')}
                  className="w-full h-14 px-6 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold text-base flex items-center justify-center gap-2 shadow-xl transition-all active:scale-95"
                >
                  <Download className="w-5 h-5" />
                  <span>{t.hero.downloadNow}</span>
                </button>
              </div>

              <p className="text-xs text-slate-500 font-medium pt-1">
                {t.hero.supportInfo}
              </p>

            </motion.div>

          </div>

        </section>

        {/* P1: 新增"工���原理"模块 */}
        <section id="how-it-works" className="w-full py-20 md:py-32 px-4 bg-white relative overflow-hidden order-5">
          
          {/* 装饰性背景元素 */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* 网格背景 */}
            <div className="absolute inset-0 opacity-[0.015]" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(251 191 36) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            
            {/* 标题 - 移动端更��凑 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-3 md:space-y-4 mb-12 md:mb-20"
            >
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-amber-50 border border-amber-200 rounded-full mb-2 md:mb-4">
                <Zap className="w-3.5 md:w-4 h-3.5 md:h-4 text-amber-600" />
                <span className="text-xs md:text-sm font-bold text-amber-600">{language === 'zh' ? '极简流程' : 'Simple Process'}</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-black text-slate-900 leading-tight">
                {t.howItWorks.title}
              </h2>
              <p className="text-sm md:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
                {t.howItWorks.subtitle}
              </p>
            </motion.div>

            {/* 步骤卡片 */}
            <div className="relative">

              {/* 桌面端：4列布局 | 移动端：2x2网格 */}
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 relative z-10">
                {howItWorksSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="relative group"
                  >
                    {/* 卡片主体 - 移动端保持舒适尺寸 */}
                    <div className="relative bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 border border-slate-100 md:border-2 hover:border-amber-300 transition-all duration-300 shadow-sm hover:shadow-2xl h-full">
                      
                      {/* 悬浮时的背景渐变 */}
                      <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-amber-50/0 via-yellow-50/0 to-amber-50/0 group-hover:from-amber-50/50 group-hover:via-yellow-50/30 group-hover:to-amber-50/50 transition-all duration-300" />

                      {/* 步骤编号 - 极简深色徽章 */}
                      <div className="absolute -top-3 md:-top-3.5 left-4 md:left-6 w-10 h-10 md:w-11 md:h-11 bg-slate-900 text-white rounded-lg md:rounded-xl flex items-center justify-center font-bold text-sm md:text-base shadow-sm group-hover:shadow-md transition-all duration-300">
                        {step.step}
                      </div>

                      <div className="space-y-3 md:space-y-5 pt-7 md:pt-8 relative z-10">
                        {/* 图标 - 移动端保持合适尺寸 */}
                        <motion.div 
                          className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto group-hover:from-amber-200 group-hover:to-yellow-200 transition-all duration-300"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <step.icon className="w-6 h-6 md:w-8 md:h-8 text-amber-600" />
                        </motion.div>

                        {/* 标题 - 移动端可读尺寸 */}
                        <h3 className="text-base md:text-xl font-black text-slate-900 text-center leading-tight">
                          {step.title}
                        </h3>

                        {/* 描述 - 移动端显示但缩小 */}
                        <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed text-center">
                          {step.description}
                        </p>
                      </div>

                      {/* 底部装饰线 */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent group-hover:w-3/4 transition-all duration-500 rounded-full" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* 底部提示 - 移动端简化 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="text-center mt-8 md:mt-16"
              >
                <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-full">
                  <CheckCircle2 className="w-4 md:w-5 h-4 md:h-5 text-amber-600" />
                  <span className="text-xs md:text-sm font-bold text-slate-700">
                    {language === 'zh' ? '平均设置时间：' : 'Average setup time: '}<span className="text-amber-600">{language === 'zh' ? '2分钟' : '2 minutes'}</span>
                  </span>
                </div>
              </motion.div>

            </div>

          </div>
        </section>

        {/* 2. 应用截图展示区 - 横向轮播 */}
        <section id="screenshots" className="w-full py-20 md:py-32 px-4 order-3 bg-white">
          <div className="max-w-7xl mx-auto">
            
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-4 mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-black text-slate-900">
                {t.screenshots.title}
              </h2>
              <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
                {t.screenshots.subtitle}
              </p>
            </motion.div>

            {/* React Slick 轮播 */}
            <div className="relative px-0 sm:px-2 md:px-12 pb-16 md:pb-20">
              <Slider
                dots={true}
                infinite={true}
                speed={500}
                slidesToShow={3}
                slidesToScroll={1}
                autoplay={true}
                autoplaySpeed={3000}
                pauseOnHover={true}
                arrows={true}
                responsive={[
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                    }
                  },
                  {
                    breakpoint: 640,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      arrows: false,
                      centerMode: true,
                      centerPadding: '20px',
                    }
                  }
                ]}
                prevArrow={<CustomPrevArrow />}
                nextArrow={<CustomNextArrow />}
              >
                {(language === 'zh' ? [
                  featureBrain,
                  featureWidget,
                  featureStats,
                  featureBlocking,
                  featureRules
                ] : [
                  featureBrainEn,
                  featureWidgetEn,
                  featureStatsEn,
                  featureBlockingEn,
                  featureRulesEn
                ]).map((screenshot, index) => (
                  <div key={index} className="px-1 sm:px-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: index * 0.1 }}
                      className="w-full max-w-2xl md:max-w-none mx-auto p-1 sm:p-2 md:p-3"
                    >
                      {/* 截图 - 纯净展示 + 边框 */}
                      <div className="relative rounded-xl md:rounded-2xl border-[1.5px] md:border-2 border-slate-200/80 shadow-lg">
                        <img
                          src={screenshot}
                          alt={`${language === 'zh' ? '应用截图' : 'App Screenshot'} ${index + 1}`}
                          className="w-full h-auto rounded-xl md:rounded-2xl"
                        />
                      </div>
                    </motion.div>
                  </div>
                ))}
              </Slider>
            </div>

          </div>
        </section>

        {/* 3. 功能介绍区 - 独立区域 */}
        <section id="features" className="w-full py-8 md:py-32 px-4 order-2 bg-slate-50 relative">
          
          <div className="max-w-7xl mx-auto relative z-10">
            
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-1 md:space-y-4 mb-6 md:mb-20"
            >
              <h2 className="text-2xl md:text-5xl font-black text-slate-900">
                {t.features.title}
              </h2>
              <p className="text-base md:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
                {t.features.subtitle}
              </p>
            </motion.div>

            {/* 功能卡片 - 桌面端网格，移动端横向滑动 */}
            
            {/* 桌面端：网格布局 */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-6 lg:gap-8">
              {productFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group relative"
                >
                  {/* 卡片容器 */}
                  <div className="relative bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100/50 h-full">
                    
                    {/* 背景渐变 - Hover效果 */}
                    <div 
                      className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                      style={{
                        background: `linear-gradient(135deg, ${
                          feature.color === 'blue' ? '#fef3c7' :
                          feature.color === 'indigo' ? '#fef3c7' :
                          feature.color === 'emerald' ? '#fef3c7' :
                          feature.color === 'red' ? '#fed7aa' :
                          '#fef3c7'
                        } 0%, transparent 100%)`
                      }}
                    />

                    <div className="relative space-y-2 sm:space-y-6">
                      
                      {/* 图标 */}
                      <div 
                        className="w-8 h-8 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{
                          backgroundColor: 
                            feature.color === 'blue' ? '#fef3c7' :
                            feature.color === 'indigo' ? '#fef3c7' :
                            feature.color === 'emerald' ? '#fef3c7' :
                            feature.color === 'red' ? '#fed7aa' :
                            '#fef3c7'
                        }}
                      >
                        <feature.icon 
                          className="w-4 h-4 sm:w-7 sm:h-7"
                          style={{
                            color: 
                              feature.color === 'blue' ? '#d97706' :
                              feature.color === 'indigo' ? '#d97706' :
                              feature.color === 'emerald' ? '#d97706' :
                              feature.color === 'red' ? '#ea580c' :
                              '#d97706'
                          }}
                        />
                      </div>

                      {/* 标题 - 允许换行 */}
                      <h3 className="text-base sm:text-xl font-black text-slate-900 leading-tight">
                        {feature.title}
                      </h3>

                      {/* 描述 - 允许换行 */}
                      <p className="text-xs sm:text-sm text-slate-600 font-medium leading-snug sm:leading-relaxed">
                        {feature.desc}
                      </p>

                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 移动端：精简紧凑的全部展示 */}
            <div className="sm:hidden grid grid-cols-2 gap-4 px-1">
              {productFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={index === productFeatures.length - 1 ? 'col-span-2' : ''}
                >
                  {/* 现代化卡片 */}
                  <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 border border-slate-200/60 hover:border-slate-300/80 transition-all duration-300">
                    <div className="flex flex-col items-center text-center space-y-3">
                      {/* 图标 */}
                      <div 
                        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 hover:scale-105"
                        style={{
                          backgroundColor: 
                            feature.color === 'blue' ? '#fef3c7' :
                            feature.color === 'indigo' ? '#fef3c7' :
                            feature.color === 'emerald' ? '#fef3c7' :
                            feature.color === 'red' ? '#fed7aa' :
                            '#fef3c7'
                        }}
                      >
                        <feature.icon 
                          className="w-7 h-7"
                          style={{
                            color: 
                              feature.color === 'blue' ? '#d97706' :
                              feature.color === 'indigo' ? '#d97706' :
                              feature.color === 'emerald' ? '#d97706' :
                              feature.color === 'red' ? '#ea580c' :
                              '#d97706'
                          }}
                        />
                      </div>

                      {/* 标题 */}
                      <h3 className="text-base font-black text-slate-900 leading-tight">
                        {feature.title}
                      </h3>

                      {/* 描述 */}
                      <p className="text-sm text-slate-600 font-medium leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* 4. Brain Health System - P1: 添加引导和自动演示 */}
        <section id="brain-system" className="w-full py-20 md:py-32 px-4 bg-slate-50 order-4">
          <div className="max-w-5xl mx-auto">
            
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-4 mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-black text-slate-900">
                {t.brainHealth.title}
              </h2>
              <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
                {t.brainHealth.subtitle}
              </p>
              
              {/* P1: 引导文案 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mt-4"
              >
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-bold text-amber-700">
                  {autoPlayBrain ? (language === 'zh' ? '正在自动演示...' : 'Auto demo in progress...') : t.brainHealth.interactive}
                </span>
              </motion.div>
            </motion.div>

            {/* Interactive Brain Evolution Display */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-slate-50/30 rounded-[32px] md:rounded-[40px] p-6 md:p-12"
            >
              <div className="grid md:grid-cols-[1fr_1.8fr] gap-8 md:gap-12 items-center">
                
                {/* Left: Large Brain Display Card */}
                <div className="relative">
                  
                  {/* 白色卡片背景 */}
                  <motion.div 
                    className="relative bg-white rounded-[28px] p-8 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Percentage Badge - Top Left */}
                    <motion.div
                      key={interactiveBrainHealth}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ 
                        scale: 1, 
                        rotate: 0,
                      }}
                      transition={{
                        type: "spring",
                        bounce: 0.6,
                        duration: 0.8
                      }}
                      className="absolute -top-4 -left-4 md:-top-5 md:-left-5 z-20"
                    >
                      <motion.div 
                        animate={{ 
                          scale: [1, 1.05, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.15)] border-4 border-white font-black text-xl md:text-2xl transition-colors duration-500"
                        style={{
                          backgroundColor:
                            interactiveBrainHealth >= 85 ? '#10b981' :
                            interactiveBrainHealth >= 68 ? '#22c55e' :
                            interactiveBrainHealth >= 51 ? '#3b82f6' :
                            interactiveBrainHealth >= 34 ? '#f59e0b' :
                            interactiveBrainHealth >= 17 ? '#f97316' :
                            '#ef4444',
                          color: 'white'
                        }}
                      >
                        {interactiveBrainHealth}%
                      </motion.div>
                    </motion.div>

                    {/* Brain Image */}
                    <div className="relative w-full max-w-[200px] mx-auto aspect-square mb-6">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={
                            interactiveBrainHealth >= 85 ? 'perfect' :
                            interactiveBrainHealth >= 68 ? 'healthy' :
                            interactiveBrainHealth >= 51 ? 'normal' :
                            interactiveBrainHealth >= 34 ? 'tired' :
                            interactiveBrainHealth >= 17 ? 'danger' :
                            'collapsed'
                          }
                          src={
                            interactiveBrainHealth >= 85 ? brainPerfect :
                            interactiveBrainHealth >= 68 ? brainHealthy :
                            interactiveBrainHealth >= 51 ? brainNormal :
                            interactiveBrainHealth >= 34 ? brainTired :
                            interactiveBrainHealth >= 17 ? brainDanger :
                            brainCollapsed
                          }
                          alt="大脑状态"
                          className="w-full h-full object-contain drop-shadow-xl"
                          initial={{ opacity: 0, scale: 0.85, y: 10 }}
                          animate={{ 
                            opacity: 1, 
                            scale: 1,
                            y: 0
                          }}
                          exit={{ opacity: 0, scale: 0.85, y: -10 }}
                          transition={{ 
                            duration: 0.4,
                            type: "spring",
                            bounce: 0.3
                          }}
                        />
                      </AnimatePresence>
                    </div>

                    {/* State Name and Description */}
                    <motion.div
                      key={
                        interactiveBrainHealth >= 85 ? 'perfect' :
                        interactiveBrainHealth >= 68 ? 'healthy' :
                        interactiveBrainHealth >= 51 ? 'normal' :
                        interactiveBrainHealth >= 34 ? 'tired' :
                        interactiveBrainHealth >= 17 ? 'danger' :
                        'collapsed'
                      }
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center space-y-2"
                    >
                      <h3 className="text-2xl md:text-3xl font-black text-slate-900">
                        {
                          interactiveBrainHealth >= 85 ? (language === 'zh' ? '完美状态' : 'Perfect State') :
                          interactiveBrainHealth >= 68 ? (language === 'zh' ? '健康状态' : 'Healthy State') :
                          interactiveBrainHealth >= 51 ? (language === 'zh' ? '普通状态' : 'Normal State') :
                          interactiveBrainHealth >= 34 ? (language === 'zh' ? '疲劳状态' : 'Tired State') :
                          interactiveBrainHealth >= 17 ? (language === 'zh' ? '危险状态' : 'Danger State') :
                          (language === 'zh' ? '崩溃状态' : 'Collapsed')
                        }
                      </h3>
                      <p className="text-sm text-slate-600 font-medium">
                        {
                          interactiveBrainHealth >= 85 ? (language === 'zh' ? '精力充沛，专注力满格' : 'Energized, Full Focus') :
                          interactiveBrainHealth >= 68 ? (language === 'zh' ? '保持良好的使用习惯' : 'Maintaining Good Habits') :
                          interactiveBrainHealth >= 51 ? (language === 'zh' ? '需要注意控制时间' : 'Need to Control Time') :
                          interactiveBrainHealth >= 34 ? (language === 'zh' ? '大脑开始感到疲惫' : 'Brain Starting to Tire') :
                          interactiveBrainHealth >= 17 ? (language === 'zh' ? '注意力涣散，需要休息' : 'Distracted, Need Rest') :
                          (language === 'zh' ? '大脑功能严重受损，立即放下手机' : 'Brain Severely Damaged, Put Down Phone Now')
                        }
                      </p>
                    </motion.div>

                  </motion.div>

                </div>

                {/* Right: Control Panel */}
                <div className="space-y-8">
                  
                  {/* 控制面板白色卡片 */}
                  <div className="bg-white rounded-[24px] p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border-2 border-slate-100">
                    
                    {/* Timeline Labels */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm font-bold text-slate-400">{language === 'zh' ? '0 小时' : '0 Hours'}</span>
                      <motion.button
                        onClick={() => {
                          setAutoPlayBrain(!autoPlayBrain);
                          if (!autoPlayBrain) setInteractiveBrainHealth(100);
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-full text-xs font-bold transition-colors shadow-md"
                      >
                        {autoPlayBrain ? t.brainHealth.stop : t.brainHealth.autoPlay}
                      </motion.button>
                      <span className="text-sm font-bold text-slate-400">{language === 'zh' ? '8+ 小时' : '8+ Hours'}</span>
                    </div>

                    {/* Progress Bar with Gradient + Slider */}
                    <div className="relative mb-6 h-3">
                      {/* Progress Bar Background */}
                      <div className="absolute inset-0 h-3 bg-slate-100 rounded-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-400 via-yellow-400 via-orange-400 to-red-500" />
                      </div>

                      {/* Slider Input with Enhanced Thumb - Positioned on top */}
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={interactiveBrainHealth}
                        onChange={(e) => {
                          setAutoPlayBrain(false);
                          setInteractiveBrainHealth(Number(e.target.value));
                        }}
                        className="absolute inset-0 w-full h-3 rounded-full appearance-none cursor-grab active:cursor-grabbing bg-transparent z-10 slider-enhanced"
                        style={{
                          WebkitAppearance: 'none',
                        }}
                      />
                    </div>

                    {/* Interaction Hint */}
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex items-center justify-center gap-2 mb-6 text-slate-500"
                    >
                      <motion.div
                        animate={{ x: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Move className="w-4 h-4" />
                      </motion.div>
                      <span className="text-xs font-semibold">{language === 'zh' ? '拖动滑块体验不同状态' : 'Drag Slider to Experience Different States'}</span>
                    </motion.div>

                    {/* State Markers - 6 Icons in Row - 移动端隐藏 */}
                    <div className="hidden md:grid grid-cols-6 gap-2 md:gap-3">
                      {brainStates.map((state, index) => {
                        const isActive = Math.abs(interactiveBrainHealth - state.health) < 20;
                        return (
                          <motion.button
                            key={index}
                            onClick={() => {
                              setAutoPlayBrain(false);
                              setInteractiveBrainHealth(state.health);
                            }}
                            whileHover={{ scale: 1.08, y: -4 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex flex-col items-center gap-1.5 p-2 md:p-3 rounded-2xl transition-all duration-300 ${
                              isActive
                                ? 'bg-amber-50 ring-2 ring-amber-300 shadow-md'
                                : 'bg-slate-50 hover:bg-slate-100 hover:shadow-sm'
                            }`}
                          >
                            <div className="relative">
                              <motion.img 
                                src={state.image} 
                                alt={state.name}
                                className="w-10 h-10 md:w-12 md:h-12 object-contain"
                                animate={{
                                  scale: isActive ? [1, 1.1, 1] : 1,
                                }}
                                transition={{
                                  duration: 0.5,
                                  repeat: isActive ? Infinity : 0,
                                  repeatDelay: 1
                                }}
                                style={{
                                  opacity: isActive ? 1 : 0.6
                                }}
                              />
                            </div>
                            <span className={`text-[10px] md:text-xs font-bold transition-colors ${
                              isActive ? 'text-blue-600' : 'text-slate-500'
                            }`}>
                              {state.health}%
                            </span>
                          </motion.button>
                        );
                      })}
                    </div>

                  </div>

                </div>

              </div>
            </motion.div>

          </div>
        </section>

        {/* 5. FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-20 px-4 bg-slate-50 order-6">
          <div className="max-w-3xl mx-auto">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-4 mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-black text-slate-900">
                {t.faq.title}
              </h2>
              <p className="text-lg text-slate-600 font-medium">
                {t.faq.subtitle}
              </p>
            </motion.div>

            {/* FAQ Accordion - P1: 默认全部收起 */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                >
                  <button
                    onClick={() => setFaqOpenIndex(faqOpenIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-base md:text-lg font-bold text-slate-900 pr-4">
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: faqOpenIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {faqOpenIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 md:px-8 pb-6 text-sm md:text-base text-slate-600 font-medium leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* 6. Final CTA Section */}
        <section className="w-full py-20 md:py-32 px-4 order-7">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[48px] overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, #1c1410 0%, #2d2419 30%, #3d3020 60%, #2d2419 100%)',
                boxShadow: 'inset 0 2px 0 rgba(255, 255, 255, 0.05), 0 20px 60px rgba(0, 0, 0, 0.4)'
              }}
            >
              {/* 交叉编织纹路 */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(
                      45deg,
                      transparent,
                      transparent 3px,
                      rgba(139, 92, 46, 0.1) 3px,
                      rgba(139, 92, 46, 0.1) 6px
                    ),
                    repeating-linear-gradient(
                      -45deg,
                      transparent,
                      transparent 3px,
                      rgba(139, 92, 46, 0.1) 3px,
                      rgba(139, 92, 46, 0.1) 6px
                    )
                  `,
                  backgroundSize: '30px 30px'
                }}
              />

              {/* 皮革质感颗粒 */}
              <div 
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255, 200, 100, 0.02) 0%, transparent 50%),
                                    radial-gradient(circle at 80% 70%, rgba(120, 80, 50, 0.03) 0%, transparent 50%)`,
                  filter: 'blur(1px)'
                }}
              />

              {/* 顶部光泽带 */}
              <div 
                className="absolute inset-x-0 top-0 h-48"
                style={{
                  background: 'radial-gradient(ellipse at 50% 0%, rgba(255, 220, 150, 0.12) 0%, transparent 70%)'
                }}
              />

              {/* 悬停光效 */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(255, 200, 100, 0.08) 0%, transparent 60%)'
                }}
              />

              <div className="relative p-12 lg:p-20 text-center space-y-8">
                <div className="flex justify-center">
                  <img src={appIcon} alt="App Icon" className="w-24 h-24 rounded-[28px] shadow-2xl ring-2 ring-amber-900/30" />
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-amber-50 tracking-tight leading-tight drop-shadow-lg">
                  {language === 'zh' ? '开始你的自律之旅' : 'Start Your Self-Discipline Journey'}
                </h2>

                <p className="text-lg text-amber-200/90 font-medium max-w-2xl mx-auto">
                  {language === 'zh' ? '让时间管理变得简单自然' : 'Make Time Management Simple and Natural'}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <button 
                    onClick={() => window.open('https://apps.apple.com/us/app/%E8%87%AA%E5%BE%8B%E5%A4%A7%E8%84%91-%E6%8E%A7%E5%88%B6%E5%88%B7%E6%89%8B%E6%9C%BA-%E5%B1%8F%E5%B9%95%E6%97%B6%E9%97%B4%E4%B8%8E%E5%BA%94%E7%94%A8%E9%99%90%E5%88%B6/id6753039898', '_blank')}
                    className="group/btn h-16 px-10 bg-gradient-to-b from-amber-50 to-amber-100 hover:from-amber-100 hover:to-amber-200 text-amber-950 rounded-2xl font-bold text-base flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 border border-amber-200/50"
                  >
                    <Download className="w-6 h-6" />
                    <span>{language === 'zh' ? '免费下载' : 'Free Download'}</span>
                    <ChevronRight className="w-5 h-5 opacity-60 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

                <p className="text-sm text-amber-300/80 font-medium">
                  {language === 'zh' ? 'iOS 14.0+ · 完全免费' : 'iOS 14.0+ · Completely Free'}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full py-12 px-4 border-t border-slate-200/50 order-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              
              <div className="flex items-center gap-3">
                <img src={appIcon} alt="App Icon" className="w-10 h-10 rounded-xl" />
                <div>
                  <p className="text-sm font-bold text-slate-900">{t.nav.appName}</p>
                  <p className="text-xs text-slate-500">{t.nav.tagline}</p>
                </div>
              </div>

              <p className="text-xs text-slate-400 font-medium">
                {t.footer.copyright}
              </p>

            </div>
          </div>
        </footer>

      </div>
    </motion.div>
  );
}
