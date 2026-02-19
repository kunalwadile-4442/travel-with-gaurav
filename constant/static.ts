export const App_url = {
  image: {
    logo: "/logo_long.png",
    home: "/hero.jpg",
    expertise: "/assets/images/expertise.svg",
    building: "/assets/images/building.png",
    footer: "/assets/images/footer.svg",
    chat_logo: "/favicon_bg.png",
    sign_up_image: "/assets/images/signup-image.png",
    email: "/assets/images/email.svg",
    edit: "/assets/images/edit.svg",
    contact_us: "/assets/images/contact-us.jpg",
    about_us_1: '/assets/images/about-us-1.jpg',
    about_us_2: '/assets/images/about-us-2.jpg',
    local: '/assets/images/local.svg',
    ai_search: '/assets/images/ai-search.svg',
    modular: '/assets/images/modular.svg',
    ai_expert: '/assets/images/dev-1/ai-expert.png',
    building_icon: '/assets/images/building.svg',
    away_icon: '/assets/images/away.svg',
    cap: '/assets/images/cap.svg',
    user_cap: '/assets/images/user-cap.svg',
    whatspp: '/what.svg',


    // dev images
    profile: '/assets/images/dev/profile.png',
    cds_marbella: '/assets/images/dev/cds-marbella-1.png',
    cds_malaga: '/assets/images/dev/cds-malanga.png',
    cds_fuengirola: '/assets/images/dev/cds-fuengirola.png',
    cds_Benalmádena: '/assets/images/dev/cds-Benalmádena.png',
    cds_Mijas: '/assets/images/dev/cds-Mijas.png',
    cds_Estepona: '/assets/images/dev/cds-Estepona.png',
    cds_Benahavís: '/assets/images/dev/cds-Benahavís.png',
    cds_Coín: '/assets/images/dev/cds-Coín.png',
    cds_Casares: '/assets/images/dev/cds-Casares.png',

    marbella: "/assets/images/dev/marbella.png",
    malaga: "/assets/images/dev/malaga.png",
    costa_del_sol: "/assets/images/dev/costa-del-sol.png",

    image_1: "/assets/images/car/sd1.jpeg",
    image_2: "/assets/images/car/sd2.jpeg",
    image_3: "/assets/images/car/e.jpeg",
    image_4: "/assets/images/car/e2.jpeg",
    image_5: "/assets/images/car/e3.jpeg",


    plan: "/assets/images/dev/plan.jpg",
    plan_3d: "/assets/images/dev-1/3d-plan.png",
    video: '/assets/images/dev/detail-video.mp4',

    blog_image_1: "/assets/images/dev/blog-image-1.png",
    blog_image_2: "/assets/images/dev/blog-image-2.png",
    blog_image_3: "/assets/images/dev/blog-image-3.png",

    your_search: "/assets/images/dev-1/manage-search.jpg",
  },
  link: {
    INITIAL_URL: "/",
    PACKAGE: '/packages',
    CAR_RENTAL: "/car-rental",
    GALLERY: '/gallery',
    ABOUT: '/about',
    CONTACT_US: '/contact-us',
  },
};

export const initialState = {
  items: [],
  totalCount: 0,
  optionList: [],
};

export const initialUserData = {
  status: "",
  user: {
    id: "",
    email: "",
    active: false,
    password: "",
    is_admin: false,
    role_permissions: "",
    api_permissions: "",
    name: "",
    emp_id: "",
    user_type: "",
    role: "",
  },
  access_token: "",
};
