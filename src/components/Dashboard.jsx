
import React, { useState } from "react";
import {
    LayoutDashboard, Compass, Plane, Hotel, MapPinned, Heart,
    CalendarDays, Wallet, UserRound, Settings, Headphones,
    Search, Bell, ChevronDown, ChevronRight, ArrowUpRight,
    ArrowRight, MapPin, Star, Clock, Plus, Menu, X,
    SlidersHorizontal, Sparkles, Globe2, Luggage, LogOut
} from "lucide-react";

const destinations = [
    {
        name: "Bali",
        country: "Indonesia",
        price: "₹24,999",
        rating: "4.9",
        tag: "MOST LOVED",
        image:
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900",
    },
    {
        name: "Swiss Alps",
        country: "Switzerland",
        price: "₹68,499",
        rating: "4.9",
        tag: "SCENIC ESCAPE",
        image:
            "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=900",
    },
    {
        name: "Kyoto",
        country: "Japan",
        price: "₹42,999",
        rating: "4.8",
        tag: "CULTURE & HERITAGE",
        image:
            "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=900",
    },
];

const menuGroups = [
    {
        heading: "WORKSPACE",
        items: [
            { label: "Dashboard", icon: LayoutDashboard },
            { label: "Explore", icon: Compass },
        ],
    },
    {
        heading: "YOUR JOURNEYS",
        items: [
            { label: "Flights", icon: Plane },
            { label: "Hotels & stays", icon: Hotel },
            { label: "Tour packages", icon: MapPinned },
            { label: "My trips", icon: Luggage },
            { label: "Saved places", icon: Heart },
            { label: "Trip planner", icon: CalendarDays },
        ],
    },
    {
        heading: "ACCOUNT",
        items: [
            { label: "Payments", icon: Wallet },
            { label: "My profile", icon: UserRound },
            { label: "Help & support", icon: Headphones },
        ],
    },
];

const upcomingTrips = [
    {
        name: "Bali Island Escape",
        location: "Ubud, Indonesia",
        date: "12 Nov — 18 Nov, 2026",
        status: "UPCOMING",
        image:
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400",
    },
    {
        name: "Winter in Switzerland",
        location: "Interlaken, Switzerland",
        date: "05 Dec — 12 Dec, 2026",
        status: "PLANNING",
        image:
            "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400",
    },
];

const css = `
  * { box-sizing: border-box; }

  .travelly {
    --forest: #214D3B;
    --forest-dark: #183C2D;
    --sage: #EAF0E8;
    --cream: #F8F8F4;
    --ink: #23352C;
    --muted: #89948B;
    --line: #E9ECE6;
    min-height: 100vh;
    background: var(--cream);
    color: var(--ink);
    font-family: Inter, "Segoe UI", Arial, sans-serif;
    font-size: 14px;
  }

  .travelly button, .travelly input, .travelly select {
    font: inherit;
  }

  .travelly button { cursor: pointer; }
  .travelly button:focus-visible,
  .travelly input:focus-visible,
  .travelly select:focus-visible {
    outline: 2px solid #5A8B70;
    outline-offset: 3px;
  }

  .travelly-layout {
    display: grid;
    grid-template-columns: 244px minmax(0, 1fr);
    min-height: 100vh;
  }

  .travelly-sidebar {
    background: #FFF;
    border-right: 1px solid var(--line);
    padding: 28px 17px;
    display: flex;
    flex-direction: column;
    gap: 31px;
  }

  .travelly-brand {
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 0 9px;
  }

  .travelly-brand-icon {
    width: 43px;
    height: 43px;
    background: var(--forest);
    color: white;
    border-radius: 14px;
    display: grid;
    place-items: center;
  }

  .travelly-brand-name {
    font-family: Georgia, serif;
    font-size: 25px;
    letter-spacing: -.8px;
    font-weight: bold;
  }

  .travelly-brand-sub {
    color: var(--muted);
    font-size: 9px;
    letter-spacing: 2px;
    margin-top: 4px;
  }

  .travelly-nav-group { margin-bottom: 25px; }

  .travelly-nav-heading {
    color: #9BA49D;
    font-size: 10px;
    letter-spacing: 1.5px;
    font-weight: 750;
    padding: 0 11px;
    margin-bottom: 10px;
  }

  .travelly-nav-item {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 12px 12px;
    margin: 3px 0;
    border: none;
    background: transparent;
    border-radius: 10px;
    color: #718076;
    text-align: left;
    transition: background .18s, color .18s;
  }

  .travelly-nav-item:hover { background: #F4F6F1; color: var(--forest); }

  .travelly-nav-item.active {
    color: var(--forest);
    background: #EAF1E9;
    font-weight: 700;
  }

  .travelly-nav-item.active svg { stroke-width: 2.2; }

  .travelly-sidebar-bottom { margin-top: auto; }

  .travelly-support {
    padding: 17px;
    background: #F5F5EF;
    border-radius: 14px;
    margin: 0 3px 19px;
  }

  .travelly-support h4 { margin: 10px 0 5px; font-size: 13px; }
  .travelly-support p { margin: 0; color: var(--muted); font-size: 11px; line-height: 1.7; }
  .travelly-support button {
    margin-top: 13px;
    border: 1px solid #DCE4D9;
    background: white;
    color: var(--forest);
    border-radius: 8px;
    padding: 9px 12px;
    font-size: 11px;
    font-weight: 700;
  }

  .travelly-profile-mini {
    border-top: 1px solid var(--line);
    padding: 18px 5px 0;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .travelly-avatar {
    width: 39px;
    height: 39px;
    border-radius: 50%;
    object-fit: cover;
    background: #DDE8D9;
  }

  .travelly-profile-name { font-size: 12px; font-weight: 750; }
  .travelly-profile-role { font-size: 10px; color: var(--muted); margin-top: 4px; }

  .travelly-main { min-width: 0; }

  .travelly-topbar {
    height: 79px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    padding: 0 34px;
    background: rgba(255,255,255,.88);
    border-bottom: 1px solid var(--line);
  }

  .travelly-breadcrumb { color: var(--muted); font-size: 12px; }
  .travelly-breadcrumb strong { color: var(--ink); font-weight: 700; }

  .travelly-top-actions { display: flex; align-items: center; gap: 19px; }

  .travelly-icon-btn {
    position: relative;
    display: grid;
    place-items: center;
    border: 1px solid var(--line);
    border-radius: 11px;
    width: 39px;
    height: 39px;
    color: #52675A;
    background: white;
  }

  .travelly-notification-dot {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #D58B58;
    border: 1px solid white;
  }

  .travelly-top-profile { display: flex; align-items: center; gap: 10px; }
  .travelly-top-profile img { width: 37px; height: 37px; border-radius: 50%; object-fit: cover; }
  .travelly-top-profile strong { font-size: 12px; display: block; }
  .travelly-top-profile span { font-size: 10px; color: var(--muted); display: block; margin-top: 4px; }

  .travelly-content {
    max-width: 1600px;
    padding: 31px 34px 25px;
    margin: 0 auto;
  }

  .travelly-welcome {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 20px;
    margin-bottom: 24px;
    flex-wrap: wrap;
  }

  .travelly-eyebrow {
    color: #64816C;
    letter-spacing: 2px;
    font-size: 10px;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .travelly-page-title {
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(27px, 3vw, 38px);
    font-weight: 500;
    letter-spacing: -1px;
    line-height: 1.2;
    margin: 0;
  }

  .travelly-welcome p {
    color: var(--muted);
    font-size: 12px;
    margin: 10px 0 0;
    line-height: 1.7;
  }

  .travelly-primary-btn {
    border: none;
    background: var(--forest);
    color: white;
    padding: 13px 17px;
    border-radius: 10px;
    font-size: 12px;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    transition: background .2s, transform .2s;
  }

  .travelly-primary-btn:hover { background: var(--forest-dark); transform: translateY(-1px); }

  .travelly-hero {
    min-height: 295px;
    display: grid;
    grid-template-columns: 1.05fr .95fr;
    background: var(--forest-dark);
    border-radius: 18px;
    overflow: hidden;
    margin-bottom: 23px;
    color: white;
  }

  .travelly-hero-content {
    padding: clamp(24px, 3.2vw, 40px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .travelly-hero-label {
    display: flex;
    align-items: center;
    gap: 7px;
    color: #D4E3D5;
    font-size: 9px;
    letter-spacing: 1.7px;
    font-weight: 800;
  }

  .travelly-hero h2 {
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(29px, 3.4vw, 43px);
    font-weight: 400;
    line-height: 1.14;
    letter-spacing: -.9px;
    margin: 19px 0 12px;
  }

  .travelly-hero p {
    color: #D0DDD2;
    line-height: 1.8;
    font-size: 12px;
    max-width: 365px;
    margin: 0;
  }

  .travelly-hero-image {
    width: 100%;
    height: 100%;
    min-height: 295px;
    object-fit: cover;
    display: block;
  }

  .travelly-search-panel {
    margin-top: 22px;
    padding: 9px;
    background: white;
    border-radius: 12px;
    width: 100%;
    max-width: 460px;
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .travelly-search-panel input {
    border: none;
    outline: none;
    min-width: 0;
    flex: 1;
    padding: 8px 4px;
    color: var(--ink);
    font-size: 12px;
  }

  .travelly-search-panel button {
    border: none;
    border-radius: 8px;
    background: #DCE9D9;
    color: var(--forest);
    padding: 11px 13px;
    font-weight: 750;
    font-size: 11px;
    white-space: nowrap;
  }

  .travelly-stats {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 14px;
    margin-bottom: 29px;
  }

  .travelly-stat {
    padding: 18px;
    background: white;
    border: 1px solid var(--line);
    border-radius: 13px;
    display: flex;
    align-items: center;
    gap: 13px;
    min-width: 0;
  }

  .travelly-stat-icon {
    flex-shrink: 0;
    width: 43px;
    height: 43px;
    border-radius: 12px;
    display: grid;
    place-items: center;
    background: #ECF2E9;
    color: var(--forest);
  }

  .travelly-stat-label { font-size: 10px; color: var(--muted); }
  .travelly-stat-value { font-size: 23px; font-weight: 750; margin-top: 5px; letter-spacing: -.7px; }
  .travelly-stat-note { font-size: 9px; color: #66846B; margin-top: 4px; }

  .travelly-section { margin-bottom: 31px; }

  .travelly-section-heading {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 15px;
    margin-bottom: 17px;
  }

  .travelly-section-title {
    font-family: Georgia, "Times New Roman", serif;
    font-weight: 500;
    font-size: 23px;
    letter-spacing: -.4px;
    margin: 0;
  }

  .travelly-section-subtitle { color: var(--muted); font-size: 11px; margin: 7px 0 0; }
  .travelly-text-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--forest);
    border: none;
    background: transparent;
    font-size: 11px;
    font-weight: 750;
    padding: 8px 0;
  }

  .travelly-destinations {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 17px;
  }

  .travelly-destination {
    min-width: 0;
    background: white;
    border: 1px solid var(--line);
    border-radius: 14px;
    overflow: hidden;
    transition: transform .2s, box-shadow .2s;
  }

  .travelly-destination:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(29, 61, 43, .08);
  }

  .travelly-destination-image-wrap { position: relative; }

  .travelly-destination-image {
    width: 100%;
    height: 166px;
    display: block;
    object-fit: cover;
  }

  .travelly-tag {
    position: absolute;
    left: 12px;
    top: 12px;
    border-radius: 5px;
    background: rgba(255,255,255,.94);
    color: var(--forest);
    padding: 7px 8px;
    font-size: 8px;
    font-weight: 850;
    letter-spacing: .8px;
  }

  .travelly-save {
    position: absolute;
    top: 11px;
    right: 11px;
    width: 33px;
    height: 33px;
    border: none;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: rgba(255,255,255,.95);
    color: var(--forest);
  }

  .travelly-save.saved { color: #C35C65; }

  .travelly-destination-body { padding: 15px; }
  .travelly-destination-title { font-size: 16px; margin: 0; font-weight: 750; }
  .travelly-destination-location { display: flex; gap: 5px; align-items: center; color: var(--muted); font-size: 10px; margin-top: 7px; }
  .travelly-destination-bottom { display: flex; justify-content: space-between; align-items: flex-end; gap: 8px; margin-top: 17px; }
  .travelly-price-caption { color: var(--muted); font-size: 9px; }
  .travelly-price { color: var(--forest); font-size: 16px; font-weight: 800; margin-top: 5px; }
  .travelly-rating { display: flex; align-items: center; gap: 4px; font-size: 10px; color: #B27C35; margin-top: 9px; }

  .travelly-lower-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.35fr) minmax(245px, .75fr);
    gap: 20px;
    align-items: start;
  }

  .travelly-trip-list { display: grid; gap: 11px; }

  .travelly-trip {
    background: white;
    border: 1px solid var(--line);
    border-radius: 12px;
    padding: 12px;
    display: flex;
    gap: 13px;
    align-items: center;
    min-width: 0;
  }

  .travelly-trip-image { width: 76px; height: 76px; object-fit: cover; border-radius: 9px; flex-shrink: 0; }
  .travelly-trip-info { flex: 1; min-width: 0; }
  .travelly-trip-info h4 { margin: 0; font-size: 12px; }
  .travelly-trip-info p { color: var(--muted); font-size: 10px; margin: 7px 0 0; display: flex; align-items: center; gap: 5px; }
  .travelly-status { display: inline-block; background: #EDF3E9; color: #47724E; padding: 6px 8px; border-radius: 5px; font-size: 8px; font-weight: 800; letter-spacing: .5px; white-space: nowrap; }

  .travelly-inspiration {
    background: #E8EEE3;
    border-radius: 15px;
    padding: 21px;
    overflow: hidden;
    position: relative;
  }

  .travelly-inspiration h3 {
    font-family: Georgia, "Times New Roman", serif;
    font-weight: 500;
    font-size: 25px;
    line-height: 1.2;
    margin: 14px 0 10px;
  }

  .travelly-inspiration p { color: #687B6B; font-size: 11px; line-height: 1.8; }
  .travelly-inspiration-art { font-size: 46px; text-align: right; margin-top: 12px; }

  .travelly-footer {
    border-top: 1px solid var(--line);
    padding-top: 19px;
    margin-top: 28px;
    display: flex;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
    color: var(--muted);
    font-size: 10px;
  }

  .travelly-mobile-menu { display: none; }

  .travelly-notice {
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 100;
    max-width: calc(100vw - 32px);
    padding: 15px 18px;
    border-radius: 12px;
    background: #214D3B;
    color: white;
    box-shadow: 0 12px 35px #0002;
    font-size: 12px;
  }

  @media (max-width: 1120px) {
    .travelly-layout { grid-template-columns: 210px minmax(0,1fr); }
    .travelly-sidebar { padding: 24px 12px; }
    .travelly-content { padding: 26px 22px; }
    .travelly-topbar { padding: 0 22px; }
    .travelly-stats { grid-template-columns: repeat(2, minmax(0,1fr)); }
    .travelly-destinations { gap: 11px; }
    .travelly-destination-image { height: 140px; }
  }

  @media (max-width: 760px) {
    .travelly-layout { grid-template-columns: minmax(0,1fr); }
    .travelly-sidebar {
      position: fixed;
      z-index: 50;
      top: 0;
      bottom: 0;
      left: 0;
      width: 270px;
      overflow-y: auto;
      box-shadow: 10px 0 30px #0001;
      transform: translateX(-110%);
      transition: transform .25s ease;
    }
    .travelly-sidebar.open { transform: translateX(0); }
    .travelly-mobile-menu { display: grid; }
    .travelly-topbar { height: 68px; padding: 0 16px; }
    .travelly-content { padding: 24px 16px; }
    .travelly-top-actions { gap: 9px; }
    .travelly-top-profile .travelly-profile-text { display: none; }
    .travelly-hero { grid-template-columns: 1fr; }
    .travelly-hero-image { min-height: 190px; max-height: 220px; grid-row: 1; }
    .travelly-hero-content { padding: 25px; }
    .travelly-stats { gap: 10px; }
    .travelly-stat { padding: 13px; gap: 9px; }
    .travelly-stat-icon { width: 36px; height: 36px; }
    .travelly-stat-value { font-size: 20px; }
    .travelly-destinations { grid-template-columns: 1fr; }
    .travelly-destination { display: grid; grid-template-columns: 42% 1fr; }
    .travelly-destination-image { height: 100%; min-height: 190px; }
    .travelly-destination-body { padding: 13px; }
    .travelly-destination-bottom { align-items: flex-start; flex-direction: column; }
    .travelly-lower-grid { grid-template-columns: 1fr; }
  }

  @media (max-width: 390px) {
    .travelly-stats { grid-template-columns: 1fr 1fr; }
    .travelly-stat { align-items: flex-start; flex-direction: column; }
    .travelly-page-title { font-size: 27px; }
    .travelly-destination { grid-template-columns: 1fr; }
    .travelly-destination-image { height: 180px; min-height: 0; }
    .travelly-trip-image { width: 60px; height: 65px; }
    .travelly-status { display: none; }
  }
`;

export default function Dashboard() {
    const [activePage, setActivePage] = useState("Dashboard");
    const [search, setSearch] = useState("");
    const [saved, setSaved] = useState([]);
    const [menuOpen, setMenuOpen] = useState(false);
    const [notice, setNotice] = useState("");

    const visibleDestinations = destinations.filter((destination) =>
        `${destination.name} ${destination.country}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    function notify(message) {
        setNotice(message);
        window.setTimeout(() => setNotice(""), 3000);
    }

    function navigate(label) {
        setActivePage(label);
        setMenuOpen(false);

        if (label !== "Dashboard") {
            notify(`${label} selected. We'll build this module next.`);
        }
    }

    function toggleSaved(name) {
        const alreadySaved = saved.includes(name);

        setSaved((previous) =>
            alreadySaved
                ? previous.filter((item) => item !== name)
                : [...previous, name]
        );

        notify(alreadySaved ? `${name} removed from saved places.` : `${name} added to saved places.`);
    }

    return (
        <div className="travelly">
            <style>{css}</style>

            <div className="travelly-layout">
                <aside className={`travelly-sidebar ${menuOpen ? "open" : ""}`}>
                    <div className="travelly-brand">
                        <div className="travelly-brand-icon">
                            <Compass size={25} />
                        </div>
                        <div>
                            <div className="travelly-brand-name">travelly</div>
                            <div className="travelly-brand-sub">FIND YOUR ELSEWHERE</div>
                        </div>
                        <button
                            className="travelly-icon-btn travelly-mobile-menu"
                            style={{ marginLeft: "auto" }}
                            onClick={() => setMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    <nav aria-label="Main navigation">
                        {menuGroups.map((group) => (
                            <div className="travelly-nav-group" key={group.heading}>
                                <div className="travelly-nav-heading">{group.heading}</div>
                                {group.items.map(({ label, icon: Icon }) => (
                                    <button
                                        key={label}
                                        className={`travelly-nav-item ${activePage === label ? "active" : ""}`}
                                        onClick={() => navigate(label)}
                                        aria-current={activePage === label ? "page" : undefined}
                                    >
                                        <Icon size={17} />
                                        <span style={{ flex: 1 }}>{label}</span>
                                        {label === "Saved places" && saved.length > 0 && (
                                            <span style={{ fontSize: 10 }}>{saved.length}</span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        ))}
                    </nav>

                    <div className="travelly-sidebar-bottom">
                        <div className="travelly-support">
                            <Sparkles size={19} color="#42694E" />
                            <h4>Your next story awaits.</h4>
                            <p>Need a little inspiration? Discover a place you've never been.</p>
                            <button onClick={() => navigate("Explore")}>
                                Explore destinations <ArrowRight size={13} style={{ verticalAlign: "middle" }} />
                            </button>
                        </div>

                        <div className="travelly-profile-mini">
                            <img
                                className="travelly-avatar"
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120"
                                alt="Traveler profile"
                            />
                            <div style={{ flex: 1 }}>
                                <div className="travelly-profile-name">Traveler</div>
                                <div className="travelly-profile-role">Explorer account</div>
                            </div>
                            <Settings size={16} color="#89948B" />
                        </div>
                    </div>
                </aside>

                <div className="travelly-main">
                    <header className="travelly-topbar">
                        <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
                            <button
                                className="travelly-icon-btn travelly-mobile-menu"
                                onClick={() => setMenuOpen(true)}
                                aria-label="Open navigation"
                            >
                                <Menu size={19} />
                            </button>
                            <div className="travelly-breadcrumb">
                                Workspace&nbsp; / &nbsp;<strong>{activePage}</strong>
                            </div>
                        </div>

                        <div className="travelly-top-actions">
                            <button
                                className="travelly-icon-btn"
                                onClick={() => notify("You're all caught up on notifications.")}
                                aria-label="Notifications"
                            >
                                <Bell size={17} />
                                <span className="travelly-notification-dot" />
                            </button>

                            <div className="travelly-top-profile">
                                <img
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120"
                                    alt=""
                                />
                                <div className="travelly-profile-text">
                                    <strong>Welcome, Traveler</strong>
                                    <span>Your personal travel space</span>
                                </div>
                                <ChevronDown size={15} color="#89948B" />
                            </div>
                        </div>
                    </header>

                    <main className="travelly-content">
                        <div className="travelly-welcome">
                            <div>
                                <div className="travelly-eyebrow">YOUR WORLD, OPEN UP</div>
                                <h1 className="travelly-page-title">
                                    Make room for wonder.
                                </h1>
                                <p>
                                    Find inspiration, discover new places, and bring your next
                                    adventure to life.
                                </p>
                            </div>

                            <button
                                className="travelly-primary-btn"
                                onClick={() => navigate("Trip planner")}
                            >
                                <Plus size={16} /> Create a trip
                            </button>
                        </div>

                        <section className="travelly-hero">
                            <div className="travelly-hero-content">
                                <div className="travelly-hero-label">
                                    <Sparkles size={14} /> YOUR NEXT CHAPTER STARTS HERE
                                </div>
                                <h2>
                                    Somewhere
                                    <br />
                                    wonderful awaits.
                                </h2>
                                <p>
                                    Leave the ordinary behind. Discover meaningful experiences,
                                    remarkable places, and journeys worth remembering.
                                </p>

                                <div className="travelly-search-panel">
                                    <Search size={17} color="#698071" />
                                    <input
                                        aria-label="Search travel destinations"
                                        placeholder="Where would you love to go?"
                                        value={search}
                                        onChange={(event) => setSearch(event.target.value)}
                                        onKeyDown={(event) => {
                                            if (event.key === "Enter") {
                                                document.getElementById("travelly-destinations")?.scrollIntoView({
                                                    behavior: "smooth",
                                                    block: "start",
                                                });
                                            }
                                        }}
                                    />
                                    <button
                                        onClick={() =>
                                            document.getElementById("travelly-destinations")?.scrollIntoView({
                                                behavior: "smooth",
                                                block: "start",
                                            })
                                        }
                                    >
                                        Discover
                                    </button>
                                </div>
                            </div>

                            <img
                                className="travelly-hero-image"
                                src="/hero.png"
                                alt="Beautiful scenic travel destination"
                                onError={(event) => {
                                    event.currentTarget.onerror = null;
                                    event.currentTarget.src =
                                        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200";
                                }}
                            />
                        </section>

                        <section className="travelly-stats" aria-label="Travel overview">
                            {[
                                { label: "PLANNED JOURNEYS", value: "02", note: "Your travel plans", icon: Luggage },
                                { label: "SAVED PLACES", value: String(saved.length).padStart(2, "0"), note: "Places you love", icon: Heart },
                                { label: "DISCOVERED", value: "12", note: "Places to explore", icon: Globe2 },
                                { label: "TRAVEL BUDGET", value: "—", note: "Not set yet", icon: Wallet },
                            ].map(({ label, value, note, icon: Icon }) => (
                                <article className="travelly-stat" key={label}>
                                    <div className="travelly-stat-icon"><Icon size={19} /></div>
                                    <div>
                                        <div className="travelly-stat-label">{label}</div>
                                        <div className="travelly-stat-value">{value}</div>
                                        <div className="travelly-stat-note">{note}</div>
                                    </div>
                                </article>
                            ))}
                        </section>

                        <section className="travelly-section" id="travelly-destinations">
                            <div className="travelly-section-heading">
                                <div>
                                    <div className="travelly-eyebrow">HANDPICKED FOR YOU</div>
                                    <h2 className="travelly-section-title">Places worth the journey</h2>
                                    <p className="travelly-section-subtitle">
                                        Beautiful destinations for your next great escape.
                                    </p>
                                </div>

                                <button
                                    className="travelly-text-btn"
                                    onClick={() => navigate("Explore")}
                                >
                                    Explore all <ArrowUpRight size={15} />
                                </button>
                            </div>

                            <div className="travelly-destinations">
                                {visibleDestinations.map((destination) => (
                                    <article className="travelly-destination" key={destination.name}>
                                        <div className="travelly-destination-image-wrap">
                                            <img
                                                className="travelly-destination-image"
                                                src={destination.image}
                                                alt={`${destination.name}, ${destination.country}`}
                                                loading="lazy"
                                            />
                                            <span className="travelly-tag">{destination.tag}</span>
                                            <button
                                                className={`travelly-save ${saved.includes(destination.name) ? "saved" : ""}`}
                                                onClick={() => toggleSaved(destination.name)}
                                                aria-label={
                                                    saved.includes(destination.name)
                                                        ? `Remove ${destination.name} from saved places`
                                                        : `Save ${destination.name}`
                                                }
                                            >
                                                <Heart
                                                    size={16}
                                                    fill={saved.includes(destination.name) ? "currentColor" : "none"}
                                                />
                                            </button>
                                        </div>

                                        <div className="travelly-destination-body">
                                            <h3 className="travelly-destination-title">{destination.name}</h3>
                                            <div className="travelly-destination-location">
                                                <MapPin size={12} /> {destination.country}
                                            </div>

                                            <div className="travelly-rating">
                                                <Star size={13} fill="currentColor" /> {destination.rating}
                                                <span style={{ color: "#A3AAA3" }}> · Traveller favourite</span>
                                            </div>

                                            <div className="travelly-destination-bottom">
                                                <div>
                                                    <div className="travelly-price-caption">SAMPLE PACKAGE FROM</div>
                                                    <div className="travelly-price">{destination.price}</div>
                                                </div>

                                                <button
                                                    className="travelly-icon-btn"
                                                    onClick={() => navigate("Tour packages")}
                                                    aria-label={`View ${destination.name} packages`}
                                                >
                                                    <ArrowUpRight size={17} />
                                                </button>
                                            </div>
                                        </div>
                                    </article>
                                ))}

                                {visibleDestinations.length === 0 && (
                                    <p style={{ color: "#89948B", padding: 18 }}>
                                        No destinations found. Try a different search.
                                    </p>
                                )}
                            </div>
                        </section>

                        <div className="travelly-lower-grid">
                            <section className="travelly-section">
                                <div className="travelly-section-heading">
                                    <div>
                                        <div className="travelly-eyebrow">YOUR TRAVEL JOURNAL</div>
                                        <h2 className="travelly-section-title">Journeys on your horizon</h2>
                                        <p className="travelly-section-subtitle">
                                            Your upcoming adventures, all in one place.
                                        </p>
                                    </div>
                                    <button className="travelly-text-btn" onClick={() => navigate("My trips")}>
                                        View all <ChevronRight size={15} />
                                    </button>
                                </div>

                                <div className="travelly-trip-list">
                                    {upcomingTrips.map((trip) => (
                                        <article className="travelly-trip" key={trip.name}>
                                            <img className="travelly-trip-image" src={trip.image} alt="" />
                                            <div className="travelly-trip-info">
                                                <h4>{trip.name}</h4>
                                                <p><MapPin size={12} /> {trip.location}</p>
                                                <p><Clock size={12} /> {trip.date}</p>
                                            </div>
                                            <span className="travelly-status">{trip.status}</span>
                                        </article>
                                    ))}
                                </div>
                            </section>

                            <aside className="travelly-inspiration">
                                <div className="travelly-eyebrow">A LITTLE INSPIRATION</div>
                                <Sparkles size={21} color="#527454" />
                                <h3>Take the scenic route.</h3>
                                <p>
                                    The best memories often begin where the plan ends. Make space
                                    for spontaneous discoveries.
                                </p>
                                <button
                                    className="travelly-primary-btn"
                                    style={{ marginTop: 8 }}
                                    onClick={() => navigate("Explore")}
                                >
                                    Find your somewhere <ArrowRight size={15} />
                                </button>
                                <div className="travelly-inspiration-art">✳</div>
                            </aside>
                        </div>

                        <footer className="travelly-footer">
                            <span>© 2026 Travelly. Made for curious souls.</span>
                            <span>Discover thoughtfully · Travel meaningfully</span>
                        </footer>
                    </main>
                </div>
            </div>

            {notice && <div className="travelly-notice" role="status">{notice}</div>}
        </div>
    );
}
