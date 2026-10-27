// Global Market Status Calculator
// Supports multiple international stock exchanges

class GlobalMarketStatus {
    constructor() {
        this.currentExchange = 'nasdaq';
        this.exchanges = {
            nasdaq: {
                name: 'NASDAQ',
                fullName: 'NASDAQ Stock Market',
                flag: '🇺🇸',
                timezone: 'America/New_York',
                currency: 'USD',
                preMarket: { hour: 4, minute: 0 },
                open: { hour: 9, minute: 30 },
                close: { hour: 16, minute: 0 },
                afterHours: { hour: 20, minute: 0 },
                weekends: [0, 6], // Sunday, Saturday
                holidays2025: [
                    { month: 1, day: 1, name: "New Year's Day" },
                    { month: 1, day: 20, name: "Martin Luther King Jr. Day" },
                    { month: 2, day: 17, name: "Presidents' Day" },
                    { month: 4, day: 18, name: "Good Friday" },
                    { month: 5, day: 26, name: "Memorial Day" },
                    { month: 6, day: 19, name: "Juneteenth" },
                    { month: 7, day: 4, name: "Independence Day" },
                    { month: 9, day: 1, name: "Labor Day" },
                    { month: 11, day: 27, name: "Thanksgiving" },
                    { month: 12, day: 25, name: "Christmas Day" }
                ]
            },
            nyse: {
                name: 'NYSE',
                fullName: 'New York Stock Exchange',
                flag: '🇺🇸',
                timezone: 'America/New_York',
                currency: 'USD',
                preMarket: { hour: 4, minute: 0 },
                open: { hour: 9, minute: 30 },
                close: { hour: 16, minute: 0 },
                afterHours: { hour: 20, minute: 0 },
                weekends: [0, 6],
                holidays2025: [
                    { month: 1, day: 1, name: "New Year's Day" },
                    { month: 1, day: 20, name: "Martin Luther King Jr. Day" },
                    { month: 2, day: 17, name: "Presidents' Day" },
                    { month: 4, day: 18, name: "Good Friday" },
                    { month: 5, day: 26, name: "Memorial Day" },
                    { month: 6, day: 19, name: "Juneteenth" },
                    { month: 7, day: 4, name: "Independence Day" },
                    { month: 9, day: 1, name: "Labor Day" },
                    { month: 11, day: 27, name: "Thanksgiving" },
                    { month: 12, day: 25, name: "Christmas Day" }
                ]
            },
            lse: {
                name: 'LSE',
                fullName: 'London Stock Exchange',
                flag: '🇬🇧',
                timezone: 'Europe/London',
                currency: 'GBP',
                preMarket: null,
                open: { hour: 8, minute: 0 },
                close: { hour: 16, minute: 30 },
                afterHours: null,
                weekends: [0, 6],
                holidays2025: [
                    { month: 1, day: 1, name: "New Year's Day" },
                    { month: 4, day: 18, name: "Good Friday" },
                    { month: 4, day: 21, name: "Easter Monday" },
                    { month: 5, day: 5, name: "Early May Bank Holiday" },
                    { month: 5, day: 26, name: "Spring Bank Holiday" },
                    { month: 8, day: 25, name: "Summer Bank Holiday" },
                    { month: 12, day: 25, name: "Christmas Day" },
                    { month: 12, day: 26, name: "Boxing Day" }
                ]
            },
            euronext: {
                name: 'Euronext',
                fullName: 'Euronext Exchange',
                flag: '🇪🇺',
                timezone: 'Europe/Paris',
                currency: 'EUR',
                preMarket: null,
                open: { hour: 9, minute: 0 },
                close: { hour: 17, minute: 30 },
                afterHours: null,
                weekends: [0, 6],
                holidays2025: [
                    { month: 1, day: 1, name: "New Year's Day" },
                    { month: 4, day: 18, name: "Good Friday" },
                    { month: 4, day: 21, name: "Easter Monday" },
                    { month: 12, day: 25, name: "Christmas Day" },
                    { month: 12, day: 26, name: "Boxing Day" }
                ]
            },
            tsx: {
                name: 'TSX',
                fullName: 'Toronto Stock Exchange',
                flag: '🇨🇦',
                timezone: 'America/Toronto',
                currency: 'CAD',
                preMarket: null,
                open: { hour: 9, minute: 30 },
                close: { hour: 16, minute: 0 },
                afterHours: null,
                weekends: [0, 6],
                holidays2025: [
                    { month: 1, day: 1, name: "New Year's Day" },
                    { month: 2, day: 17, name: "Family Day" },
                    { month: 4, day: 18, name: "Good Friday" },
                    { month: 5, day: 19, name: "Victoria Day" },
                    { month: 7, day: 1, name: "Canada Day" },
                    { month: 8, day: 4, name: "Civic Holiday" },
                    { month: 9, day: 1, name: "Labour Day" },
                    { month: 10, day: 13, name: "Thanksgiving" },
                    { month: 12, day: 25, name: "Christmas Day" },
                    { month: 12, day: 26, name: "Boxing Day" }
                ]
            },
            tse: {
                name: 'TSE',
                fullName: 'Tokyo Stock Exchange',
                flag: '🇯🇵',
                timezone: 'Asia/Tokyo',
                currency: 'JPY',
                preMarket: null,
                open: { hour: 9, minute: 0 },
                close: { hour: 15, minute: 0 }, // With lunch break 11:30-12:30
                afterHours: null,
                weekends: [0, 6],
                holidays2025: [
                    { month: 1, day: 1, name: "New Year's Day" },
                    { month: 1, day: 13, name: "Coming of Age Day" },
                    { month: 2, day: 11, name: "National Foundation Day" },
                    { month: 2, day: 23, name: "Emperor's Birthday" },
                    { month: 3, day: 20, name: "Vernal Equinox" },
                    { month: 4, day: 29, name: "Showa Day" },
                    { month: 5, day: 3, name: "Constitution Day" },
                    { month: 5, day: 5, name: "Children's Day" },
                    { month: 7, day: 21, name: "Marine Day" },
                    { month: 9, day: 15, name: "Respect for the Aged Day" },
                    { month: 9, day: 23, name: "Autumnal Equinox" },
                    { month: 10, day: 13, name: "Health and Sports Day" },
                    { month: 11, day: 3, name: "Culture Day" },
                    { month: 11, day: 23, name: "Labor Thanksgiving Day" },
                    { month: 12, day: 31, name: "New Year's Eve" }
                ]
            },
            sse: {
                name: 'SSE',
                fullName: 'Shanghai Stock Exchange',
                flag: '🇨🇳',
                timezone: 'Asia/Shanghai',
                currency: 'CNY',
                preMarket: null,
                open: { hour: 9, minute: 30 },
                close: { hour: 15, minute: 0 }, // With lunch break 11:30-13:00
                afterHours: null,
                weekends: [0, 6],
                holidays2025: [
                    { month: 1, day: 1, name: "New Year's Day" },
                    { month: 1, day: 29, name: "Chinese New Year" },
                    { month: 1, day: 30, name: "Chinese New Year" },
                    { month: 1, day: 31, name: "Chinese New Year" },
                    { month: 4, day: 4, name: "Qingming Festival" },
                    { month: 5, day: 1, name: "Labour Day" },
                    { month: 6, day: 10, name: "Dragon Boat Festival" },
                    { month: 10, day: 1, name: "National Day" },
                    { month: 10, day: 6, name: "Mid-Autumn Festival" }
                ]
            },
            hkex: {
                name: 'HKEX',
                fullName: 'Hong Kong Stock Exchange',
                flag: '🇭🇰',
                timezone: 'Asia/Hong_Kong',
                currency: 'HKD',
                preMarket: null,
                open: { hour: 9, minute: 30 },
                close: { hour: 16, minute: 0 }, // With lunch break 12:00-13:00
                afterHours: null,
                weekends: [0, 6],
                holidays2025: [
                    { month: 1, day: 1, name: "New Year's Day" },
                    { month: 1, day: 29, name: "Chinese New Year" },
                    { month: 1, day: 30, name: "Chinese New Year" },
                    { month: 1, day: 31, name: "Chinese New Year" },
                    { month: 4, day: 4, name: "Ching Ming Festival" },
                    { month: 4, day: 18, name: "Good Friday" },
                    { month: 5, day: 1, name: "Labour Day" },
                    { month: 6, day: 10, name: "Tuen Ng Festival" },
                    { month: 7, day: 1, name: "HKSAR Establishment Day" },
                    { month: 10, day: 1, name: "National Day" },
                    { month: 10, day: 6, name: "Mid-Autumn Festival" },
                    { month: 12, day: 25, name: "Christmas Day" },
                    { month: 12, day: 26, name: "Boxing Day" }
                ]
            },
            asx: {
                name: 'ASX',
                fullName: 'Australian Securities Exchange',
                flag: '🇦🇺',
                timezone: 'Australia/Sydney',
                currency: 'AUD',
                preMarket: { hour: 7, minute: 0 },
                open: { hour: 10, minute: 0 },
                close: { hour: 16, minute: 0 },
                afterHours: null,
                weekends: [0, 6],
                holidays2025: [
                    { month: 1, day: 1, name: "New Year's Day" },
                    { month: 1, day: 27, name: "Australia Day" },
                    { month: 4, day: 18, name: "Good Friday" },
                    { month: 4, day: 21, name: "Easter Monday" },
                    { month: 4, day: 25, name: "ANZAC Day" },
                    { month: 6, day: 9, name: "Queen's Birthday" },
                    { month: 12, day: 25, name: "Christmas Day" },
                    { month: 12, day: 26, name: "Boxing Day" }
                ]
            },
            bse: {
                name: 'BSE',
                fullName: 'Bombay Stock Exchange',
                flag: '🇮🇳',
                timezone: 'Asia/Kolkata',
                currency: 'INR',
                preMarket: null,
                open: { hour: 9, minute: 15 },
                close: { hour: 15, minute: 30 },
                afterHours: null,
                weekends: [0, 6],
                holidays2025: [
                    { month: 1, day: 26, name: "Republic Day" },
                    { month: 3, day: 14, name: "Holi" },
                    { month: 3, day: 29, name: "Good Friday" },
                    { month: 4, day: 10, name: "Mahavir Jayanti" },
                    { month: 5, day: 1, name: "Maharashtra Day" },
                    { month: 8, day: 15, name: "Independence Day" },
                    { month: 10, day: 2, name: "Mahatma Gandhi Jayanti" },
                    { month: 10, day: 24, name: "Diwali" },
                    { month: 11, day: 5, name: "Guru Nanak Jayanti" },
                    { month: 12, day: 25, name: "Christmas Day" }
                ]
            }
        };
    }

    getExchangeTime(exchangeId) {
        const exchange = this.exchanges[exchangeId];
        const now = new Date();
        return new Date(now.toLocaleString("en-US", { timeZone: exchange.timezone }));
    }

    isMarketHoliday(exchangeId) {
        const exchange = this.exchanges[exchangeId];
        const localTime = this.getExchangeTime(exchangeId);
        const month = localTime.getMonth() + 1;
        const day = localTime.getDate();

        const holiday = exchange.holidays2025.find(h => h.month === month && h.day === day);
        return holiday ? { isHoliday: true, name: holiday.name } : { isHoliday: false, name: null };
    }

    getCurrentStatus(exchangeId) {
        const exchange = this.exchanges[exchangeId];
        const localTime = this.getExchangeTime(exchangeId);
        const day = localTime.getDay();
        const hour = localTime.getHours();
        const minute = localTime.getMinutes();

        // Check for holiday
        const holidayCheck = this.isMarketHoliday(exchangeId);
        if (holidayCheck.isHoliday) {
            return {
                status: 'market-closed',
                emoji: '🔴',
                text: 'Market Closed',
                detail: holidayCheck.name,
                phase: 'Holiday'
            };
        }

        // Check for weekend
        if (exchange.weekends.includes(day)) {
            return {
                status: 'market-closed',
                emoji: '🔴',
                text: 'Market Closed',
                detail: 'Weekend',
                phase: 'Weekend'
            };
        }

        const currentMinutes = hour * 60 + minute;
        const openMinutes = exchange.open.hour * 60 + exchange.open.minute;
        const closeMinutes = exchange.close.hour * 60 + exchange.close.minute;

        // Check pre-market
        if (exchange.preMarket) {
            const preMarketMinutes = exchange.preMarket.hour * 60 + exchange.preMarket.minute;
            if (currentMinutes >= preMarketMinutes && currentMinutes < openMinutes) {
                return {
                    status: 'pre-market',
                    emoji: '🟡',
                    text: 'Pre-Market',
                    detail: `${this.formatTime(exchange.preMarket)} - ${this.formatTime(exchange.open)}`,
                    phase: 'Pre-Market'
                };
            }
        }

        // Check after-hours
        if (exchange.afterHours) {
            const afterHoursMinutes = exchange.afterHours.hour * 60 + exchange.afterHours.minute;
            if (currentMinutes >= closeMinutes && currentMinutes < afterHoursMinutes) {
                return {
                    status: 'after-market',
                    emoji: '🟠',
                    text: 'After-Hours',
                    detail: `${this.formatTime(exchange.close)} - ${this.formatTime(exchange.afterHours)}`,
                    phase: 'After-Hours'
                };
            }
        }

        // Check market open
        if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
            return {
                status: 'market-open',
                emoji: '🟢',
                text: 'Market Open',
                detail: `${this.formatTime(exchange.open)} - ${this.formatTime(exchange.close)}`,
                phase: 'Trading'
            };
        }

        // Market closed (outside hours)
        return {
            status: 'market-closed',
            emoji: '🔴',
            text: 'Market Closed',
            detail: 'Outside trading hours',
            phase: 'Closed'
        };
    }

    formatTime(timeObj) {
        const hour = timeObj.hour > 12 ? timeObj.hour - 12 : (timeObj.hour === 0 ? 12 : timeObj.hour);
        const minute = timeObj.minute.toString().padStart(2, '0');
        const ampm = timeObj.hour >= 12 ? 'PM' : 'AM';
        return `${hour}:${minute} ${ampm}`;
    }

    getTimeUntilNextEvent(exchangeId) {
        const exchange = this.exchanges[exchangeId];
        const localTime = this.getExchangeTime(exchangeId);
        const day = localTime.getDay();
        const hour = localTime.getHours();
        const minute = localTime.getMinutes();

        // Check holiday
        const holidayCheck = this.isMarketHoliday(exchangeId);
        if (holidayCheck.isHoliday) {
            return `Market closed for ${holidayCheck.name}`;
        }

        // Check weekend
        if (exchange.weekends.includes(day)) {
            return day === 6 ? "Market opens Monday" : "Market opens Monday";
        }

        const currentMinutes = hour * 60 + minute;
        const openMinutes = exchange.open.hour * 60 + exchange.open.minute;
        const closeMinutes = exchange.close.hour * 60 + exchange.close.minute;

        if (exchange.preMarket) {
            const preMarketMinutes = exchange.preMarket.hour * 60 + exchange.preMarket.minute;
            if (currentMinutes < preMarketMinutes) {
                const diff = preMarketMinutes - currentMinutes;
                return this.formatTimeMessage(diff, "Pre-market opens");
            }
        }

        if (currentMinutes < openMinutes) {
            const diff = openMinutes - currentMinutes;
            return this.formatTimeMessage(diff, "Market opens");
        }

        if (currentMinutes < closeMinutes) {
            const diff = closeMinutes - currentMinutes;
            return this.formatTimeMessage(diff, "Market closes");
        }

        if (exchange.afterHours) {
            const afterHoursMinutes = exchange.afterHours.hour * 60 + exchange.afterHours.minute;
            if (currentMinutes < afterHoursMinutes) {
                const diff = afterHoursMinutes - currentMinutes;
                return this.formatTimeMessage(diff, "After-hours closes");
            }
        }

        return exchange.weekends.includes(day + 1) ? "Market opens Monday" : "Market opens tomorrow";
    }

    formatTimeMessage(minutes, event) {
        if (minutes >= 60) {
            const hours = Math.floor(minutes / 60);
            const mins = minutes % 60;
            if (mins === 0) {
                return `${event} in ${hours} hour${hours === 1 ? '' : 's'}`;
            }
            return `${event} in ${hours}h ${mins}m`;
        }
        return `${event} in ${minutes} minute${minutes === 1 ? '' : 's'}`;
    }

    getLocalMarketTime(exchangeId) {
        const localTime = this.getExchangeTime(exchangeId);
        return localTime.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    }

    getUserLocalTime() {
        return new Date().toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    }
}

// Initialize
const globalMarket = new GlobalMarketStatus();
let currentExchange = 'nasdaq';

function updateStatus() {
    const exchange = globalMarket.exchanges[currentExchange];
    const status = globalMarket.getCurrentStatus(currentExchange);
    const countdown = globalMarket.getTimeUntilNextEvent(currentExchange);
    const localMarketTime = globalMarket.getLocalMarketTime(currentExchange);
    const userTime = globalMarket.getUserLocalTime();

    // Update UI
    document.getElementById('exchange-flag').textContent = exchange.flag;
    document.getElementById('exchange-name').textContent = exchange.fullName;
    document.getElementById('status-emoji').textContent = status.emoji;
    document.getElementById('status-text').textContent = status.text;
    document.getElementById('status-detail').textContent = status.detail;
    document.getElementById('countdown').textContent = countdown;

    // Update times
    const localMarketTimeEl = document.getElementById('local-market-time');
    const yourTimeEl = document.getElementById('your-time');

    if (localMarketTimeEl) localMarketTimeEl.textContent = localMarketTime;
    if (yourTimeEl) yourTimeEl.textContent = userTime;

    // Update indicator class
    const indicator = document.getElementById('status-indicator');
    indicator.className = `status-indicator ${status.status}`;

    // Update page title
    document.title = `${status.emoji} ${exchange.name} ${status.text} - Open or Not?`;

    // Update favicon
    updateFavicon(status.emoji);
}

function changeExchange() {
    currentExchange = document.getElementById('exchange-select').value;
    updateStatus();
}

function updateFavicon(emoji) {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    ctx.font = '48px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(emoji, 32, 32);

    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'icon';
    link.href = canvas.toDataURL();
    document.getElementsByTagName('head')[0].appendChild(link);
}

// Initialize
updateStatus();
setInterval(updateStatus, 60000); // Update full status every minute

// Update times and countdown every second for real-time feel
setInterval(() => {
    // Update clocks
    const localMarketTimeEl = document.getElementById('local-market-time');
    const yourTimeEl = document.getElementById('your-time');

    if (localMarketTimeEl) {
        localMarketTimeEl.textContent = globalMarket.getLocalMarketTime(currentExchange);
    }
    if (yourTimeEl) {
        yourTimeEl.textContent = globalMarket.getUserLocalTime();
    }

    // Update countdown in real-time
    const countdownEl = document.getElementById('countdown');
    if (countdownEl) {
        const countdown = globalMarket.getTimeUntilNextEvent(currentExchange);
        countdownEl.textContent = countdown;
    }
}, 1000); // Update every second

