import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    ClockIcon,
    MapPinIcon,
    UsersIcon,
    ChevronLeftIcon,
    StarIcon,
    CalendarIcon,
} from "lucide-react";
const GraduationDetails = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [activeSection, setActiveSection] = useState(null);
    const { state } = useLocation();
    const name = state?.name || "Bạn";
    useEffect(() => {
        setIsLoaded(true);
        const timer = setTimeout(() => {
            setActiveSection(0);
        }, 800);
        return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        if (activeSection === null) return;
        const timer = setTimeout(() => {
            if (activeSection < 2) {
                setActiveSection(activeSection + 1);
            }
        }, 300);
        return () => clearTimeout(timer);
    }, [activeSection]);
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 text-white overflow-hidden">
            {/* Decorative elements */}
            {/* Floating bubbles background */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white/10 border border-white/30 animate-bubble shadow-md"
                        style={{
                            width: `${Math.random() * 20 + 20}px`,
                            height: `${Math.random() * 20 + 20}px`,
                            left: `${Math.random() * 100}%`,
                            bottom: `-${Math.random() * 20 + 10}px`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${6 + Math.random() * 6}s`,
                            opacity: Math.random() * 0.5 + 0.3,
                        }}
                    />
                ))}
            </div>

            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-pink-500/10 animate-pulse"></div>
                <div className="absolute bottom-1/3 right-10 w-32 h-32 rounded-full bg-blue-500/10 animate-pulse delay-700"></div>
            </div>
            {/* Header */}
            <div
                className={`bg-blue-900/70 p-6 text-center relative border-b border-blue-700/50 backdrop-blur-sm transition-all duration-700 transform ${
                    isLoaded
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-10 opacity-0"
                }`}
            >
                <Link
                    to="/"
                    className="absolute left-4 top-6 bg-blue-700/80 p-2 rounded-full hover:bg-blue-600 transition-colors duration-300 shadow-lg hover:shadow-blue-500/30"
                >
                    <ChevronLeftIcon size={24} />
                </Link>
                <div className="mt-2">
                    <span className="text-sm text-blue-200 uppercase tracking-wider">
                        Chào mừng {name} đến với
                    </span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold mt-1">
                    Lễ Tốt Nghiệp của{" "}
                    <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                        Tui
                    </span>
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mt-2"></div>
            </div>
            {/* Profile Card */}
            <div
                className={`bg-blue-700/70 mx-4 md:mx-auto md:max-w-2xl rounded-xl -mt-2 p-5 relative shadow-xl border border-blue-600/50 backdrop-blur-sm transition-all duration-700 delay-300 transform ${
                    isLoaded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                }`}
            >
                <div className="flex items-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden border-4 border-white/80 shadow-lg relative group">
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <img
                            src="https://file1.hutech.edu.vn/file/news/tot_nghiep_2-1561445014.png"
                            alt="Graduate"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute bottom-0 left-0 w-full p-1 text-xs text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            2025
                        </div>
                    </div>
                    <div className="ml-4 flex-1">
                        <p className="text-blue-200 flex items-center">
                            <StarIcon
                                size={14}
                                className="mr-1 text-yellow-400"
                            />{" "}
                            Cử nhân khoa CNTT
                        </p>
                        <div className="mt-2 flex items-center">
                            <CalendarIcon
                                size={14}
                                className="mr-1 text-blue-300"
                            />
                            <span className="text-sm text-blue-300">
                                Khóa 2021-2025
                            </span>
                        </div>
                    </div>
                </div>
                <div className="absolute -right-2 -top-2 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg animate-pulse">
                    <span className="text-white font-bold text-lg">✓</span>
                </div>
            </div>
            {/* Event Details */}
            <div className="flex-1 px-4 md:px-0 md:max-w-2xl mx-auto w-full mt-6 space-y-4">
                <div
                    className={`bg-blue-700/30 rounded-xl p-5 border border-blue-600/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-700/20 transform ${
                        activeSection >= 0
                            ? "translate-y-0 opacity-100"
                            : "translate-y-5 opacity-0"
                    }`}
                >
                    <h3 className="flex items-center text-lg font-bold">
                        <span className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-lg mr-3 inline-flex shadow-inner">
                            <ClockIcon size={18} className="text-blue-100" />
                        </span>
                        Thời Gian
                    </h3>
                    <div className="text-blue-100 ml-12 space-y-1">
                        <p className="text-blue-300">
                            7:00 Sáng, Thứ Bảy, 05/07/2025
                        </p>
                    </div>
                </div>
                <div
                    className={`bg-blue-700/30 rounded-xl p-5 border border-blue-600/30 hover:border-blue-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-blue-700/20 transform ${
                        activeSection >= 1
                            ? "translate-y-0 opacity-100"
                            : "translate-y-5 opacity-0"
                    }`}
                >
                    <h3 className="flex items-center text-lg font-bold">
                        <span className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-lg mr-3 inline-flex shadow-inner">
                            <MapPinIcon size={18} className="text-blue-100" />
                        </span>
                        Địa Điểm
                    </h3>
                    <div className="text-blue-100 ml-12 space-y-1">
                        <p className="text-blue-300">
                            Hội trường số 1, Điện Biên Phủ, Thành phố Huế
                        </p>
                    </div>
                </div>
                <div
                    className={`bg-blue-700/30 rounded-xl p-5 border border-blue-600/30 hover:border-blue-500/50 transition-all duration-700 hover:shadow-lg hover:shadow-blue-700/20 transform ${
                        activeSection >= 2
                            ? "translate-y-0 opacity-100"
                            : "translate-y-5 opacity-0"
                    }`}
                >
                    <h3 className="flex items-center text-lg font-bold">
                        <span className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-lg mr-3 inline-flex shadow-inner">
                            <UsersIcon size={18} className="text-blue-100" />
                        </span>
                        Người ra chuồng
                    </h3>
                    <div className="text-blue-100 ml-12 space-y-1">
                        <p className="text-blue-300">Lê Văn Minh Toàn</p>
                    </div>
                </div>
            </div>
            {/* Footer Quote */}
            <div
                className={`text-center p-6 bg-blue-900/50 mt-8 border-t border-blue-700/50 backdrop-blur-sm transition-all duration-700 delay-1000 transform ${
                    isLoaded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                }`}
            >
                <p className="text-sm text-blue-300 mb-2 italic">
                    "Sự hiện diện của {name} là niềm vinh hạnh lớn của tui."
                </p>
                <p className="text-pink-400 font-medium">
                    Hẹn gặp bạn vào ngày hôm đó nhé! <br /> (lo mà tới)
                </p>
            </div>
        </div>
    );
};
export default GraduationDetails;
