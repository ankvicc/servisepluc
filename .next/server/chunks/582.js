exports.id = 582;
exports.ids = [582];
exports.modules = {

/***/ 9007:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9604))

/***/ }),

/***/ 1737:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23))

/***/ }),

/***/ 7755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ LoginForm)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./app/context/AuthContext.tsx
var AuthContext = __webpack_require__(5312);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
;// CONCATENATED MODULE: ./app/components/RegisterForm.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

function RegisterForm({ onSuccess, onBack }) {
    const [formData, setFormData] = (0,react_.useState)({
        name: "",
        email: "",
        password: ""
    });
    const [message, setMessage] = (0,react_.useState)("");
    const [isLoading, setIsLoading] = (0,react_.useState)(false);
    const [showPassword, setShowPassword] = (0,react_.useState)(false);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsLoading(true);
        setMessage("");
        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            const result = await res.json();
            if (!res.ok) {
                throw new Error(result.error || "Ошибка при регистрации");
            }
            setMessage("Регистрация успешна!");
            if (onSuccess) onSuccess();
        } catch (err) {
            setMessage(err instanceof Error ? err.message : "Ошибка при регистрации");
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "max-w-md mx-auto p-6 bg-white rounded-lg shadow-md",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-between items-center mb-4",
                children: [
                    onBack && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: onBack,
                        className: "text-gray-600 hover:text-gray-800",
                        children: "← Назад"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "text-2xl font-bold text-center flex-grow",
                        children: "Регистрация"
                    })
                ]
            }),
            message && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `mb-4 p-3 rounded text-sm ${message.includes("успешна") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`,
                children: message
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: handleSubmit,
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "name",
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Имя"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                id: "name",
                                name: "name",
                                value: formData.name,
                                onChange: handleChange,
                                className: "w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                placeholder: "Ваше имя",
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "email",
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Email"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "email",
                                id: "email",
                                name: "email",
                                value: formData.email,
                                onChange: handleChange,
                                className: "w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                placeholder: "example@mail.com",
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "password",
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Пароль"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: showPassword ? "text" : "password",
                                id: "password",
                                name: "password",
                                value: formData.password,
                                onChange: handleChange,
                                className: "w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                placeholder: "••••••••",
                                required: true
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                onClick: ()=>setShowPassword(!showPassword),
                                className: "absolute right-2 top-8 text-gray-500 hover:text-gray-700",
                                children: showPassword ? "\uD83D\uDE48" : "\uD83D\uDC41️"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "pt-2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "submit",
                            disabled: isLoading,
                            className: `w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`,
                            children: isLoading ? "Регистрация..." : "Зарегистрироваться"
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./app/components/LoginForm.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function LoginForm({ onSuccess }) {
    const { login } = (0,AuthContext/* useAuth */.a)();
    const router = (0,navigation.useRouter)();
    const [formData, setFormData] = (0,react_.useState)({
        email: "",
        password: ""
    });
    const [error, setError] = (0,react_.useState)("");
    const [isLoading, setIsLoading] = (0,react_.useState)(false);
    const [showPassword, setShowPassword] = (0,react_.useState)(false);
    const [showRegisterForm, setShowRegisterForm] = (0,react_.useState)(false);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsLoading(true);
        setError("");
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "Ошибка авторизации");
            }
            const { token } = await res.json();
            login(token);
            router.refresh();
            router.push("/profile");
            if (onSuccess) onSuccess();
        } catch (err) {
            setError(err instanceof Error ? err.message : "Ошибка авторизации");
        } finally{
            setIsLoading(false);
        }
    };
    if (showRegisterForm) {
        return /*#__PURE__*/ jsx_runtime_.jsx(RegisterForm, {
            onSuccess: ()=>{
                setShowRegisterForm(false);
                if (onSuccess) onSuccess();
            },
            onBack: ()=>setShowRegisterForm(false)
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "max-w-md mx-auto p-6 bg-white rounded-lg shadow-md",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "text-2xl font-bold text-center mb-6",
                children: "Вход в аккаунт"
            }),
            error && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-4 p-3 bg-red-100 text-red-700 rounded text-sm",
                children: error
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: handleSubmit,
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "email",
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Email"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "email",
                                id: "email",
                                name: "email",
                                value: formData.email,
                                onChange: handleChange,
                                className: "w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                placeholder: "example@mail.com",
                                required: true,
                                autoComplete: "username"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "password",
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Пароль"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: showPassword ? "text" : "password",
                                id: "password",
                                name: "password",
                                value: formData.password,
                                onChange: handleChange,
                                className: "w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                placeholder: "••••••••",
                                required: true,
                                autoComplete: "current-password"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                onClick: ()=>setShowPassword(!showPassword),
                                className: "absolute right-2 top-8 text-gray-500 hover:text-gray-700",
                                children: showPassword ? "\uD83D\uDE48" : "\uD83D\uDC41️"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "pt-2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "submit",
                            disabled: isLoading,
                            className: `w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`,
                            children: isLoading ? "Вход..." : "Войти"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "text-sm text-gray-600 mt-4 text-center",
                children: [
                    "Нет аккаунта?",
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>setShowRegisterForm(true),
                        className: "font-medium text-blue-600 hover:text-blue-500 hover:underline focus:outline-none",
                        children: "Зарегистрироваться"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 5312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ AuthProvider),
/* harmony export */   a: () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(678);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ AuthProvider,useAuth auto */ 



const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    isAuthenticated: false,
    user: null,
    login: ()=>{},
    logout: ()=>{},
    updateUser: ()=>{}
});
const AuthProvider = ({ children })=>{
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().decode(token);
                if (decoded) {
                    // Здесь можно добавить загрузку полных данных пользователя
                    setUser({
                        id: decoded.userId
                    });
                }
            } catch  {
                logout();
            }
        }
    }, []);
    const login = (token)=>{
        const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().decode(token);
        localStorage.setItem("token", token);
        setUser({
            id: decoded.userId
        });
    };
    const logout = ()=>{
        localStorage.removeItem("token");
        setUser(null);
        router.push("/");
    };
    const updateUser = (newUserData)=>{
        setUser((prev)=>prev ? {
                ...prev,
                ...newUserData
            } : null);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            isAuthenticated: !!user,
            user,
            login,
            logout,
            updateUser
        },
        children: children
    });
};
const useAuth = ()=>{
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};


/***/ }),

/***/ 9604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./app/context/AuthContext.tsx
var AuthContext = __webpack_require__(5312);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./app/components/LoginForm.tsx + 1 modules
var LoginForm = __webpack_require__(7755);
;// CONCATENATED MODULE: ./app/components/Modal.tsx
// app/components/Modal.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

const Modal = ({ isOpen, onClose, children })=>{
    if (!isOpen) return null;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "fixed inset-0 z-50 overflow-y-auto",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "fixed inset-0 transition-opacity",
                    onClick: onClose,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute inset-0 bg-gray-500 opacity-75"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "hidden sm:inline-block sm:align-middle sm:h-screen",
                    children: "​"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
                        children: children
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Modal = (Modal);

;// CONCATENATED MODULE: ./app/components/header.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






const Header = ()=>{
    const { isAuthenticated, logout } = (0,AuthContext/* useAuth */.a)();
    const [isLoginOpen, setIsLoginOpen] = (0,react_.useState)(false);
    const router = (0,navigation.useRouter)();
    const navLinks = [
        {
            href: "/services",
            text: "Услуги"
        },
        {
            href: "/prices",
            text: "Цены"
        },
        {
            href: "/sales",
            text: "Акции"
        },
        {
            href: "/contacts",
            text: "Контакты"
        },
        {
            href: "/about",
            text: "О компании"
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "bg-white shadow-sm sticky top-0 z-50",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "max-w-7xl mx-auto px-6 py-3 flex items-center justify-between relative",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: "/",
                        className: "text-[20px] font-semibold text-gray-800 hover:text-green-700 transition",
                        children: [
                            "Сервис",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-green-700",
                                children: "Плюс"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: "absolute left-1/2 transform -translate-x-1/2 space-x-6 text-[17px] text-gray-800 hidden md:flex",
                        children: navLinks.map((link, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: link.href,
                                className: "hover:text-blue-600 transition",
                                children: link.text
                            }, index))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex items-center space-x-4",
                        children: isAuthenticated ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/profile",
                                    className: "text-gray-800 hover:text-blue-600 transition",
                                    children: "Профиль"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    onClick: logout,
                                    className: "bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition",
                                    children: "Выйти"
                                })
                            ]
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: ()=>setIsLoginOpen(true),
                            className: "bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition",
                            children: "Войти"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Modal, {
                isOpen: isLoginOpen,
                onClose: ()=>setIsLoginOpen(false),
                children: /*#__PURE__*/ jsx_runtime_.jsx(LoginForm/* default */.Z, {
                    onSuccess: ()=>setIsLoginOpen(false)
                })
            })
        ]
    });
};
/* harmony default export */ const header = (Header);

;// CONCATENATED MODULE: ./app/components/footer.tsx


const Footer = ()=>{
    const footerLinks = [
        {
            href: "/about",
            text: "О компании"
        },
        {
            href: "/contacts",
            text: "Контакты"
        },
        {
            href: "/privacy",
            text: "Политика конфиденциальности"
        }
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "bg-gray-800 text-white py-8",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "max-w-4xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "text-lg font-semibold mb-4",
                                    children: "СервисПлюс"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-sm text-gray-400",
                                    children: "Профессиональный ремонт и обслуживание техники с 2010 года"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "text-lg font-semibold mb-4",
                                    children: "Навигация"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    className: "space-y-2",
                                    children: footerLinks.map((link, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: link.href,
                                                className: "text-gray-400 hover:text-white text-sm transition",
                                                children: link.text
                                            })
                                        }, index))
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "text-lg font-semibold mb-4",
                                    children: "Контакты"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("address", {
                                    className: "text-sm text-gray-400 not-italic",
                                    children: [
                                        "г. Москва, ул. Примерная, д. 10",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        "+7 (999) 123-45-67",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        "info@serviceplus.ru"
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400",
                    children: [
                        "\xa9 ",
                        new Date().getFullYear(),
                        " СервисПлюс. Все права защищены."
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const footer = (Footer);

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(2307);
;// CONCATENATED MODULE: ./app/layout.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "ru",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: "flex flex-col min-h-screen bg-gray-50",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(AuthContext/* AuthProvider */.H, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(header, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        className: "flex-grow",
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
                ]
            })
        })
    });
}


/***/ }),

/***/ 1921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Twert\Desktop\service-plus\app\layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 2307:
/***/ (() => {



/***/ })

};
;