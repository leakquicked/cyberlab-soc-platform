"use strict";

const iconPaths = {
  grid: '<rect x="3.5" y="3.5" width="7" height="7" rx="1.3"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.3"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.3"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.3"/>',
  alert: '<path d="M12 3 2.8 20h18.4L12 3Z"/><path d="M12 9v4m0 3h.01"/>',
  scan: '<path d="M4 7V4h3m10 0h3v3m0 10v3h-3m-10 0H4v-3"/><path d="M7 12h10m-5-5v10"/>',
  list: '<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6h.01M4 12h.01M4 18h.01"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 2v6m10 4h-6"/>',
  server: '<rect x="3" y="3" width="18" height="8" rx="2"/><rect x="3" y="13" width="18" height="8" rx="2"/><path d="M7 7h.01M7 17h.01M11 7h6m-6 10h6"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1 1.2 1.9-1.9 3.2-2.2-.5a8 8 0 0 1-1.6.9l-.5 2.2h-3.7l-.5-2.2a8 8 0 0 1-1.6-.9l-2.2.5-1.9-3.2 1.2-1.9a8 8 0 0 1 0-1.8l-1.2-1.9 1.9-3.2 2.2.5a8 8 0 0 1 1.6-.9l.5-2.2h3.7l.5 2.2a8 8 0 0 1 1.6.9l2.2-.5 1.9 3.2-1.2 1.9a8 8 0 0 1-.1 1.8Z" transform="translate(-.7 -.6) scale(.96)"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  bell: '<path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9m-8 12h4"/>',
  chevron: '<path d="m7 10 5 5 5-5"/>',
  refresh: '<path d="M20 7v5h-5M4 17v-5h5"/><path d="M5.5 9a7 7 0 0 1 11.7-2L20 12M4 12l2.8 5a7 7 0 0 0 11.7-2"/>',
  plus: '<path d="M12 5v14m-7-7h14"/>',
  trend: '<path d="m3 17 6-6 4 4 8-9"/><path d="M15 6h6v6"/>',
  arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  search: '<circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.5 4.5"/>',
  upload: '<path d="M12 16V4m-5 5 5-5 5 5"/><path d="M4 16v4h16v-4"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2"/>',
  terminal: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3m6 0h4"/>',
  key: '<circle cx="8" cy="15" r="4"/><path d="m11 12 8-8m-3 3 3 3m-6 0 2 2"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5m0-8h.01"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  shield: '<path d="M12 3 20 6v5.4c0 5-3.4 8.3-8 9.9-4.6-1.6-8-4.9-8-9.9V6l8-3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/>',
  dots: '<circle cx="5" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1" fill="currentColor" stroke="none"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  activity: '<path d="M3 12h4l3-8 4 16 3-8h4"/>',
  timer: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6m-3 0v3"/>',
  database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  chevronRight: '<path d="m9 18 6-6-6-6"/>',
  copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
  download: '<path d="M12 3v12m-5-5 5 5 5-5"/><path d="M4 19v2h16v-2"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  laptop: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M2 21h20m-9-4v4m-2-4v4"/>',
  network: '<circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="12" cy="18" r="2.5"/><path d="m8.2 7.3 2.6 8.2m5-8.2-2.6 8.2M8.5 6h7"/>'
};
const icon = (name, cls = "") => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name] || ""}</svg>`;
document.querySelectorAll("[data-icon]").forEach((node) => { node.innerHTML = icon(node.dataset.icon); });

const pageMeta = {
  overview: ["Обзор SOC", "Центр операций безопасности", "Сводка телеметрии, инцидентов и состояния защитных контуров."],
  incidents: ["Инциденты", "Очередь расследований", "Проверяйте сигналы, назначайте статус и изучайте связанные события."],
  analysis: ["Анализ журналов", "Лаборатория анализа журналов", "Нормализуйте учебные записи и проверьте базовые правила обнаружения."],
  events: ["Журнал событий", "Журнал событий", "Нормализованная телеметрия учебной среды за текущую смену."],
  mitre: ["MITRE ATT&CK", "Матрица MITRE ATT&CK", "Тактики и техники, сопоставленные с сигналами лабораторной среды."],
  assets: ["Активы", "Инвентаризация активов", "Состояние сенсоров и риск узлов в изолированном учебном контуре."],
  settings: ["Настройки", "Настройки лаборатории", "Локальные параметры отображения и учебной среды."]
};
const baseIncidents = [
  { id: "INC-2025-0842", title: "Подбор учётных данных по SSH", severity: "Критический", host: "SRV-AD-01", time: "09:42:18", status: "Расследуется", source: "10.24.8.19", technique: "T1110.001", tactic: "Доступ с использованием учётных данных", description: "Зафиксировано 184 неудачные попытки аутентификации SSH с одного адреса за 6 минут. После серии ошибок зарегистрирован успешный вход под учётной записью svc_backup.", recommendation: "Сопоставьте журнал входов с расписанием работ учётной записи. При подтверждении аномалии завершите активные сеансы, смените пароль и проверьте команды после входа.", timeline: [["09:36:02", "Начало серии неудачных попыток входа"], ["09:42:18", "Успешная аутентификация svc_backup"], ["09:42:25", "Правило AUTH-BRUTE-01 создало сигнал"]] },
  { id: "INC-2025-0841", title: "Подозрительный запуск PowerShell", severity: "Высокий", host: "WS-FIN-042", time: "09:26:53", status: "Назначен", source: "10.24.8.42", technique: "T1059.001", tactic: "Выполнение", description: "PowerShell запущен со скрытым окном и закодированным параметром. Родительский процесс — приложение для просмотра документов.", recommendation: "Соберите дерево процессов и командную строку, проверьте происхождение документа, подпись файла и исходящие соединения рабочей станции.", timeline: [["09:26:51", "Приложение просмотра документов запустило PowerShell"], ["09:26:53", "Сенсор зафиксировал скрытый параметр запуска"]] },
  { id: "INC-2025-0839", title: "Изменение привилегированной группы", severity: "Высокий", host: "SRV-AD-01", time: "09:03:11", status: "Расследуется", source: "10.24.3.77", technique: "T1098", tactic: "Закрепление в системе", description: "Участник добавлен в группу Domain Admins вне планового окна изменений. Операция выполнена с рабочей станции отдела кадров.", recommendation: "Сверьте изменение с заявкой на доступ, проверьте инициатора и историю входов. Если изменение не согласовано, отмените его по внутреннему регламенту и сохраните аудит каталога.", timeline: [["09:03:11", "Изменён состав группы Domain Admins"], ["09:04:02", "Создано правило корреляции IDENTITY-PRIV-03"]] },
  { id: "INC-2025-0837", title: "Соединение с редким доменом", severity: "Средний", host: "WS-ENG-017", time: "08:51:40", status: "Назначен", source: "10.24.6.17", technique: "T1071.001", tactic: "Управление и контроль", description: "Рабочая станция установила повторяющееся HTTPS-соединение с доменом, которого нет в списке часто посещаемых ресурсов. Интервал запросов составил около минуты.", recommendation: "Проверьте домен по корпоративной телеметрии DNS, выясните процесс-инициатор и сопоставьте назначения с рабочими задачами владельца узла.", timeline: [["08:51:40", "Обнаружено исходящее HTTPS-соединение"], ["08:52:40", "Повтор запроса через 60 секунд"]] },
  { id: "INC-2025-0835", title: "Доступ к памяти процесса LSASS", severity: "Высокий", host: "WS-OPS-009", time: "08:31:22", status: "Расследуется", source: "10.24.5.9", technique: "T1003.001", tactic: "Получение учётных данных", description: "Процесс с неизвестной подписью попытался получить доступ к памяти LSASS. Операция заблокирована политикой защиты конечной точки.", recommendation: "Проверьте путь к исполняемому файлу, хэш, подпись и цепочку процессов. Убедитесь, что блокировка записана в журнале сенсора.", timeline: [["08:31:22", "Запрос на чтение памяти LSASS"], ["08:31:22", "Попытка заблокирована сенсором"]] },
  { id: "INC-2025-0832", title: "Фишинговое вложение в почте", severity: "Средний", host: "MAIL-USER-124", time: "08:14:06", status: "Закрыт", source: "172.20.4.24", technique: "T1566.001", tactic: "Начальный доступ", description: "Почтовый шлюз поместил вложение из письма с темой «Обновление счёта» в карантин до открытия пользователем.", recommendation: "Проверьте, что карантин подтверждён, выполните поиск похожих писем и уведомите владельца учётной записи по внутреннему сценарию.", timeline: [["08:14:06", "Вложение остановлено почтовым шлюзом"], ["08:20:44", "Аналитик подтвердил помещение в карантин"]] }
];
const signals = [
  { severity: "red", title: "Подбор учётных данных", detail: "Много неудачных входов · 10.24.8.19", time: "2 мин", incident: "INC-2025-0842" },
  { severity: "amber", title: "Нетипичный запуск PowerShell", detail: "Скрытый параметр запуска · WS-FIN-042", time: "18 мин", incident: "INC-2025-0841" },
  { severity: "amber", title: "Изменение прав доступа", detail: "Добавление в привилегированную группу", time: "41 мин", incident: "INC-2025-0839" }
];
const events = [
  { time: "09:42:25", type: "auth", label: "Правило обнаружения сработало", user: "svc_backup", host: "SRV-AD-01", source: "10.24.8.19", result: "Сигнал" },
  { time: "09:42:18", type: "auth", label: "Успешный вход SSH", user: "svc_backup", host: "SRV-AD-01", source: "10.24.8.19", result: "Успешно" },
  { time: "09:41:52", type: "auth", label: "Неудачный вход SSH", user: "svc_backup", host: "SRV-AD-01", source: "10.24.8.19", result: "Отказано" },
  { time: "09:26:53", type: "process", label: "Запуск PowerShell с параметрами", user: "a.ivanova", host: "WS-FIN-042", source: "10.24.8.42", result: "Сигнал" },
  { time: "09:03:11", type: "identity", label: "Изменён состав группы доступа", user: "hr.admin", host: "SRV-AD-01", source: "10.24.3.77", result: "Успешно" },
  { time: "08:51:40", type: "network", label: "Исходящее HTTPS-соединение", user: "m.smirnov", host: "WS-ENG-017", source: "10.24.6.17", result: "Установлено" },
  { time: "08:31:22", type: "process", label: "Запрос доступа к памяти LSASS", user: "SYSTEM", host: "WS-OPS-009", source: "10.24.5.9", result: "Заблокировано" },
  { time: "08:14:06", type: "network", label: "Вложение помещено в карантин", user: "e.karimov", host: "MAIL-USER-124", source: "172.20.4.24", result: "Заблокировано" },
  { time: "07:58:49", type: "auth", label: "Успешный вход в VPN", user: "n.sadykova", host: "VPN-GW-01", source: "10.24.0.1", result: "Успешно" },
  { time: "07:45:03", type: "auth", label: "Смена пароля учётной записи", user: "d.kim", host: "SRV-AD-01", source: "10.24.2.15", result: "Успешно" },
  { time: "07:31:26", type: "network", label: "Запрос к внутреннему DNS", user: "SYSTEM", host: "WS-ENG-017", source: "10.24.6.17", result: "Успешно" }
];
const assets = [
  { host: "SRV-AD-01", type: "Контроллер домена", address: "10.24.1.10", importance: "Критическая", risk: 92, sensor: "Активен" },
  { host: "WS-FIN-042", type: "Рабочая станция", address: "10.24.8.42", importance: "Высокая", risk: 74, sensor: "Активен" },
  { host: "VPN-GW-01", type: "Шлюз удалённого доступа", address: "10.24.0.1", importance: "Высокая", risk: 68, sensor: "Активен" },
  { host: "WS-OPS-009", type: "Рабочая станция", address: "10.24.5.9", importance: "Средняя", risk: 61, sensor: "Активен" },
  { host: "WS-ENG-017", type: "Рабочая станция", address: "10.24.6.17", importance: "Средняя", risk: 48, sensor: "Активен" },
  { host: "MAIL-USER-124", type: "Почтовый клиент", address: "172.20.4.24", importance: "Средняя", risk: 21, sensor: "Активен" }
];
const tactics = [
  { id: "TA0001", name: "Начальный доступ", techniques: [["T1566", "Фишинг"], ["T1190", "Эксплуатация общедоступного приложения"]] },
  { id: "TA0002", name: "Выполнение", techniques: [["T1059.001", "PowerShell"], ["T1204", "Действие пользователя"]] },
  { id: "TA0003", name: "Закрепление", techniques: [["T1098", "Изменение учётной записи"], ["T1078", "Допустимые учётные записи"]] },
  { id: "TA0004", name: "Повышение привилегий", techniques: [["T1098.007", "Дополнительные локальные или доменные группы"], ["T1068", "Эксплуатация для повышения привилегий"]] },
  { id: "TA0005", name: "Обход защиты", techniques: [["T1562", "Ослабление защитных механизмов"], ["T1036", "Маскировка"]] },
  { id: "TA0006", name: "Получение учётных данных", techniques: [["T1110.001", "Перебор паролей"], ["T1003.001", "Дамп памяти LSASS"]] },
  { id: "TA0007", name: "Обнаружение", techniques: [["T1087", "Обнаружение учётных записей"], ["T1046", "Обнаружение сетевых служб"]] },
  { id: "TA0008", name: "Перемещение", techniques: [["T1021", "Удалённые службы"], ["T1550", "Использование альтернативных материалов аутентификации"]] },
  { id: "TA0009", name: "Сбор данных", techniques: [["T1005", "Данные из локальной системы"], ["T1114", "Сбор электронной почты"]] },
  { id: "TA0011", name: "Управление и контроль", techniques: [["T1071.001", "Веб-протоколы"], ["T1105", "Передача инструментария"]] },
  { id: "TA0010", name: "Эксфильтрация", techniques: [["T1041", "Эксфильтрация по каналу управления"], ["T1567", "Эксфильтрация через веб-службу"]] },
  { id: "TA0040", name: "Воздействие", techniques: [["T1486", "Шифрование данных для воздействия"], ["T1490", "Отключение восстановления"]] }
];

const storageKey = "cyberlab-soc-incidents-v1";
const preferenceKey = "cyberlab-soc-preferences-v1";
function readStoredIncidents() {
  try {
    const stored = JSON.parse(localStorage.getItem(storageKey) || "[]");
    return Array.isArray(stored) ? stored.filter((item) => item && typeof item.id === "string" && typeof item.title === "string") : [];
  } catch { return []; }
}
function readPreferences() {
  try { return JSON.parse(localStorage.getItem(preferenceKey) || "{}"); } catch { return {}; }
}
const storedIncidents = readStoredIncidents();
let incidents = [
  ...baseIncidents.map((base) => ({ ...base, ...(storedIncidents.find((stored) => stored.id === base.id) || {}) })),
  ...storedIncidents.filter((stored) => !baseIncidents.some((base) => base.id === stored.id))
];
let preferences = readPreferences();
let toastTimer;
let lastFocusedElement = null;
let currentAnalysisRows = [];

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}
function persistIncidents() {
  try { localStorage.setItem(storageKey, JSON.stringify(incidents)); }
  catch { notify("Не удалось сохранить изменения в этом браузере"); }
}
function notify(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}
function formatNumber(number) { return new Intl.NumberFormat("ru-RU").format(number); }
function severityClass(severity) {
  return severity === "Критический" ? "severity-critical" : severity === "Высокий" ? "severity-high" : severity === "Средний" ? "severity-medium" : "severity-low";
}
function statusClass(status) { return status === "Закрыт" ? "status-closed" : status === "Новый" ? "status-new" : ""; }
function riskClass(score) { return score >= 80 ? "high" : score >= 60 ? "medium" : ""; }
function renderMetrics() {
  const openCount = incidents.filter((item) => item.status !== "Закрыт").length;
  const criticalCount = incidents.filter((item) => item.severity === "Критический" && item.status !== "Закрыт").length;
  const metrics = [
    { label: "Открытые инциденты", value: String(openCount).padStart(2, "0"), note: `${criticalCount} требуют немедленного внимания`, delta: "+2 за смену", icon: "alert", valueClass: "value-red" },
    { label: "События за 24 часа", value: "24 891", note: "Поток: 1 036 событий в час", delta: "В НОРМЕ", icon: "activity" },
    { label: "Среднее время реакции", value: "04м 32с", note: "Целевой показатель: менее 10 минут", delta: "−12%", deltaClass: "negative", icon: "timer" },
    { label: "Активы под наблюдением", value: "142", note: "Сенсоры доступны: 142 из 142", delta: "СТАБИЛЬНО", icon: "database" }
  ];
  document.getElementById("metricGrid").innerHTML = metrics.map((metric) => `<article class="metric-card"><div class="metric-top"><span>${metric.label}</span><span class="metric-icon">${icon(metric.icon)}</span></div><div class="metric-value"><strong class="${metric.valueClass || ""}">${metric.value}</strong><em class="${metric.deltaClass || ""}">${metric.delta}</em></div><div class="metric-foot">${metric.note}</div></article>`).join("");
  document.getElementById("navIncidentCount").textContent = String(criticalCount).padStart(2, "0");
}
function renderChart(period = "24") {
  const svg = document.getElementById("trafficChart");
  const points = period === "7"
    ? [84, 72, 91, 63, 76, 45, 57, 37, 68, 53, 75, 41, 61, 31, 48, 25, 42, 34, 56, 29]
    : period === "30"
      ? [93, 84, 99, 76, 70, 78, 60, 69, 54, 75, 49, 66, 43, 52, 67, 38, 55, 35, 59, 27]
      : [98, 82, 88, 59, 68, 55, 65, 41, 51, 34, 62, 49, 73, 58, 65, 36, 45, 25, 40, 29];
  const auxiliary = points.map((y, index) => Math.min(116, Math.round(112 - (110 - y) * .34 + Math.sin(index * 1.7) * 3)));
  const xAt = (index) => 45 + index * (680 / (points.length - 1));
  const curve = (values) => values.map((value, index) => `${index ? "L" : "M"}${xAt(index).toFixed(1)} ${value}`).join(" ");
  const mainPath = curve(points);
  const areaPath = `${mainPath} L725 160 L45 160 Z`;
  const labels = period === "24" ? ["00:00", "06:00", "12:00", "18:00", "СЕЙЧАС"] : period === "7" ? ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"] : ["01", "05", "10", "15", "20", "25", "30"];
  const labelMarkup = labels.map((label, index) => {
    const x = 45 + index * (680 / (labels.length - 1));
    return `<text class="chart-label" x="${x}" y="194" text-anchor="${index === 0 ? "start" : index === labels.length - 1 ? "end" : "middle"}">${label}</text>`;
  }).join("");
  const dots = [6, 11, 16, 19].map((index) => `<circle class="chart-point" cx="${xAt(index)}" cy="${points[index]}" r="3.3"/>`).join("");
  svg.innerHTML = `<defs><linearGradient id="trafficFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#b7ff3c" stop-opacity=".19"/><stop offset="1" stop-color="#b7ff3c" stop-opacity="0"/></linearGradient></defs><path class="chart-grid-line" d="M45 36H725M45 76H725M45 116H725M45 156H725"/><text class="chart-label" x="3" y="39">1,2k</text><text class="chart-label" x="11" y="79">800</text><text class="chart-label" x="11" y="119">400</text><text class="chart-label" x="25" y="159">0</text><path class="chart-area" d="${areaPath}"/><path class="chart-aux-line" d="${curve(auxiliary)}"/><path class="chart-main-line" d="${mainPath}"/>${dots}${labelMarkup}`;
  svg.setAttribute("aria-label", `График потока событий: ${period === "24" ? "последние 24 часа" : period === "7" ? "последние 7 дней" : "последние 30 дней"}`);
  document.getElementById("chartTotal").textContent = period === "24" ? "24 891" : period === "7" ? "168 420" : "712 804";
}
function renderSignals() {
  document.getElementById("signalList").innerHTML = signals.map((signal) => `<button class="signal-row" data-open-incident="${signal.incident}"><i class="signal-mark ${signal.severity === "amber" ? "amber" : signal.severity === "teal" ? "teal" : ""}"></i><span class="signal-copy"><strong>${signal.title}</strong><small>${signal.detail}</small></span><time class="signal-time">${signal.time}</time></button>`).join("");
}
function renderIncidentRows(target, list, compact = false) {
  const emptyColumns = compact ? 7 : 8;
  target.innerHTML = list.length ? list.map((incident) => `<tr data-incident-id="${escapeHTML(incident.id)}" tabindex="0" aria-label="Открыть инцидент ${escapeHTML(incident.id)}"><td class="incident-id">${escapeHTML(incident.id)}</td><td class="incident-name">${escapeHTML(incident.title)}</td><td><span class="severity-pill ${severityClass(incident.severity)}">${escapeHTML(incident.severity)}</span></td><td class="incident-host">${escapeHTML(incident.host || "—")}</td>${compact ? "" : `<td class="incident-host">${escapeHTML(incident.source || "—")}</td>`}<td class="mono muted">${escapeHTML(incident.time || "—")}</td><td><span class="status-pill ${statusClass(incident.status)}">${escapeHTML(incident.status)}</span></td><td><button class="row-action" data-row-open="${escapeHTML(incident.id)}" aria-label="Открыть карточку">${icon("chevronRight")}</button></td></tr>`).join("") : `<tr><td colspan="${emptyColumns}" class="empty-cell">По заданным условиям инциденты не найдены.</td></tr>`;
  target.querySelectorAll("[data-incident-id]").forEach((row) => {
    const open = () => openIncident(incidents.find((item) => item.id === row.dataset.incidentId));
    row.addEventListener("click", (event) => { if (!event.target.closest("button")) open(); });
    row.addEventListener("keydown", (event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); open(); } });
  });
  target.querySelectorAll("[data-row-open]").forEach((button) => button.addEventListener("click", (event) => { event.stopPropagation(); openIncident(incidents.find((item) => item.id === button.dataset.rowOpen)); }));
}
function filterIncidents(searchValue = "", severity = "", status = "") {
  const query = searchValue.trim().toLocaleLowerCase("ru");
  return incidents.filter((item) => (!severity || item.severity === severity) && (!status || item.status === status) && (!query || [item.id, item.title, item.host, item.source, item.status, item.description].join(" ").toLocaleLowerCase("ru").includes(query)));
}
function renderOverviewIncidents() {
  const list = filterIncidents(document.getElementById("overviewSearch").value, document.getElementById("overviewSeverity").value).slice(0, 5);
  renderIncidentRows(document.getElementById("overviewIncidentRows"), list, true);
  document.getElementById("overviewRowCount").textContent = `Показано ${list.length} из ${incidents.length} инцидентов`;
}
function renderIncidentQueue() {
  const list = filterIncidents(document.getElementById("incidentSearch").value, document.getElementById("incidentSeverity").value, document.getElementById("incidentStatus").value);
  renderIncidentRows(document.getElementById("incidentRows"), list, false);
  document.getElementById("incidentRowCount").textContent = `Найдено ${list.length} из ${incidents.length} инцидентов`;
  const open = incidents.filter((item) => item.status !== "Закрыт").length;
  const critical = incidents.filter((item) => item.severity === "Критический" && item.status !== "Закрыт").length;
  const assigned = incidents.filter((item) => item.status === "Назначен").length;
  document.getElementById("queueSummary").innerHTML = `<span class="summary-chip red"><strong>${critical}</strong>критических</span><span class="summary-chip amber"><strong>${open}</strong>открытых</span><span class="summary-chip"><strong>${assigned}</strong>назначено</span>`;
}
function renderRiskAssets() {
  document.getElementById("riskAssets").innerHTML = assets.slice(0, 3).map((asset) => `<div class="risk-asset"><div class="risk-asset-name"><strong>${asset.host}</strong><small>${asset.type} · ${asset.address}</small></div><div class="risk-bar"><i class="risk-${riskClass(asset.risk)}" style="width:${asset.risk}%"></i></div><span class="risk-score ${riskClass(asset.risk)}">${asset.risk}</span></div>`).join("");
}
function renderTechniqueStrip() {
  const detected = new Set(incidents.map((item) => item.technique).filter(Boolean));
  const visible = ["T1566", "T1110.001", "T1059.001", "T1078", "T1003.001", "T1098"];
  document.getElementById("techniqueStrip").innerHTML = visible.map((id) => `<button class="technique-chip ${[...detected].some((technique) => technique.startsWith(id) || id.startsWith(technique)) ? "detected" : ""}" data-technique="${id}">${id}</button>`).join("");
}
function renderEvents(search = "", type = "") {
  const q = search.trim().toLocaleLowerCase("ru");
  const filtered = events.filter((event) => (!type || event.type === type) && (!q || Object.values(event).join(" ").toLocaleLowerCase("ru").includes(q)));
  document.getElementById("eventRows").innerHTML = filtered.length ? filtered.map((event) => `<tr><td class="incident-host">${event.time}</td><td><span class="event-type ${event.type}"><i></i>${eventTypeLabel(event.type)}</span></td><td class="incident-name">${escapeHTML(event.label)}</td><td>${escapeHTML(event.user)}</td><td class="incident-host">${escapeHTML(event.host)}</td><td class="incident-host">${escapeHTML(event.source)}</td><td><span class="event-result ${event.result === "Заблокировано" ? "blocked" : event.result === "Отказано" ? "denied" : ""}">${event.result}</span></td></tr>`).join("") : '<tr><td colspan="7" class="empty-cell">События не найдены.</td></tr>';
  document.getElementById("eventRowCount").textContent = `Записей: ${filtered.length} из ${events.length}`;
}
function eventTypeLabel(type) { return ({ auth: "Вход", process: "Процесс", network: "Сеть", identity: "Доступ" })[type] || type; }
function renderMitre() {
  const detected = new Set(incidents.map((item) => item.technique));
  document.getElementById("mitreMatrix").innerHTML = tactics.map((tactic) => `<section class="tactic-column"><div class="tactic-heading"><small>${tactic.id}</small><strong>${tactic.name}</strong></div><div class="tactic-techniques">${tactic.techniques.map(([id, name]) => `<button class="mitre-tech ${[...detected].some((technique) => technique && (technique.startsWith(id) || id.startsWith(technique))) ? "detected" : ""}" data-technique="${id}"><strong>${id}</strong>${name}</button>`).join("")}</div></section>`).join("");
}
function renderAssets(search = "") {
  const query = search.trim().toLocaleLowerCase("ru");
  const list = assets.filter((asset) => !query || Object.values(asset).join(" ").toLocaleLowerCase("ru").includes(query));
  document.getElementById("assetRows").innerHTML = list.length ? list.map((asset) => `<tr><td class="incident-host">${asset.host}</td><td>${asset.type}</td><td class="incident-host">${asset.address}</td><td>${asset.importance}</td><td><span class="risk-score ${riskClass(asset.risk)}">${asset.risk} / 100</span></td><td><span class="status-pill">${asset.sensor}</span></td></tr>`).join("") : '<tr><td colspan="6" class="empty-cell">Активы не найдены.</td></tr>';
}
function initializeAssets() {
  const critical = assets.filter((asset) => asset.importance === "Критическая").length;
  const highRisk = assets.filter((asset) => asset.risk >= 60).length;
  document.getElementById("assetSummaryGrid").innerHTML = `<article class="asset-summary-card"><span>Под наблюдением</span><strong class="teal-text">142</strong><small>Сенсоры доступны: 100%</small></article><article class="asset-summary-card"><span>Узлы высокого риска</span><strong class="red-text">${highRisk}</strong><small>Оценка риска от 60 баллов</small></article><article class="asset-summary-card"><span>Критичные системы</span><strong class="amber-text">${critical}</strong><small>Контроллеры и важные службы</small></article>`;
  renderAssets();
}
function openIncident(incident) {
  if (!incident) return;
  lastFocusedElement = document.activeElement;
  const drawer = document.getElementById("detailDrawer");
  const content = document.getElementById("drawerContent");
  content.innerHTML = `<h2 class="drawer-title">${escapeHTML(incident.title)}</h2><p class="drawer-description">${escapeHTML(incident.description || "Описание не добавлено.")}</p><div class="drawer-meta"><div class="meta-box"><small>Идентификатор</small><strong>${escapeHTML(incident.id)}</strong></div><div class="meta-box"><small>Критичность</small><strong class="${severityClass(incident.severity)}">${escapeHTML(incident.severity)}</strong></div><div class="meta-box"><small>Затронутый узел</small><strong>${escapeHTML(incident.host || "—")}</strong></div><div class="meta-box"><small>Источник события</small><strong>${escapeHTML(incident.source || "—")}</strong></div><div class="meta-box"><small>Обнаружен</small><strong>${escapeHTML(incident.time || "—")}</strong></div><div class="meta-box"><small>Статус</small><strong>${escapeHTML(incident.status)}</strong></div></div><div class="drawer-section"><h3>КЛАССИФИКАЦИЯ MITRE ATT&amp;CK</h3><span class="tag">${escapeHTML(incident.technique || "Не указана")}</span><span class="tag">${escapeHTML(incident.tactic || "Требует проверки")}</span></div><div class="drawer-section recommendation-section"><h3>РЕКОМЕНДАЦИЯ АНАЛИТИКА</h3><p>${escapeHTML(incident.recommendation || "Проверьте временную шкалу и сопоставьте это событие с журналами соседних узлов.")}</p></div><div class="drawer-section"><h3>ВРЕМЕННАЯ ШКАЛА</h3><div class="timeline">${(incident.timeline || [[incident.time || "—", "Инцидент зарегистрирован в учебной среде"]]).map(([time, label]) => `<div class="timeline-item"><time>${escapeHTML(time)}</time><i></i><span>${escapeHTML(label)}</span></div>`).join("")}</div></div><div class="drawer-section"><h3>ДЕЙСТВИЯ</h3><p>Все действия выполняются только в локальной демонстрационной среде.</p><div class="drawer-actions"><button class="button button-primary" id="changeStatusButton">${incident.status === "Закрыт" ? "Открыть инцидент" : incident.status === "Расследуется" ? "Закрыть инцидент" : "Взять в работу"}</button><button class="button button-secondary" id="copyIncidentButton">${icon("copy")}Копировать ID</button></div></div>`;
  drawer.dataset.incidentId = incident.id;
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  document.getElementById("overlay").classList.add("open");
  document.getElementById("changeStatusButton").addEventListener("click", () => changeIncidentStatus(incident));
  document.getElementById("copyIncidentButton").addEventListener("click", () => copyText(incident.id));
  document.getElementById("closeDrawer").focus();
}
function closeIncidentDrawer() {
  const drawer = document.getElementById("detailDrawer");
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  document.getElementById("overlay").classList.remove("open");
  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") lastFocusedElement.focus();
}
function changeIncidentStatus(incident) {
  incident.status = incident.status === "Закрыт" ? "Расследуется" : incident.status === "Расследуется" ? "Закрыт" : "Расследуется";
  persistIncidents();
  renderAll();
  openIncident(incident);
  notify(`Статус ${incident.id} изменён: ${incident.status.toLocaleLowerCase("ru")}`);
}
async function copyText(value) {
  try { await navigator.clipboard.writeText(value); notify("Идентификатор скопирован"); }
  catch { notify(`Идентификатор: ${value}`); }
}
function setRoute(route) {
  if (!pageMeta[route]) return;
  document.querySelectorAll(".route-view").forEach((view) => view.classList.toggle("active", view.dataset.view === route));
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.route === route));
  const [crumb, title, description] = pageMeta[route];
  document.getElementById("breadcrumbCurrent").textContent = crumb;
  document.getElementById("pageTitle").textContent = title;
  document.getElementById("pageDescription").textContent = description;
  document.getElementById("pageEyebrow").textContent = route === "overview" ? "ПАНЕЛЬ МОНИТОРИНГА · СРЕДА 01" : `РАБОЧЕЕ ПРОСТРАНСТВО · ${crumb.toLocaleUpperCase("ru")}`;
  document.getElementById("sidebar").classList.remove("open");
  if (route === "incidents") renderIncidentQueue();
  if (route === "events") renderEvents(document.getElementById("eventSearch").value, document.getElementById("eventTypeFilter").value);
  if (route === "mitre") renderMitre();
  if (route === "assets") renderAssets(document.getElementById("assetSearch").value);
  history.replaceState(null, "", `#${route}`);
}
function renderAll() {
  renderMetrics(); renderOverviewIncidents(); renderIncidentQueue(); renderTechniqueStrip(); renderRiskAssets(); renderMitre();
}
function tickClock() {
  const time = new Intl.DateTimeFormat("ru-RU", { timeZone: "Asia/Qyzylorda", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).format(new Date());
  document.getElementById("clock").textContent = `${time} UTC+5`;
}

function parseCSV(text) {
  const rows = [];
  let row = []; let cell = ""; let quoted = false;
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    if (char === '"') {
      if (quoted && text[index + 1] === '"') { cell += '"'; index += 1; }
      else quoted = !quoted;
    } else if ((char === "," || char === ";" || char === "\t") && !quoted) {
      row.push(cell); cell = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && text[index + 1] === "\n") index += 1;
      row.push(cell); cell = "";
      if (row.some((value) => value.trim())) rows.push(row);
      row = [];
    } else cell += char;
  }
  row.push(cell);
  if (row.some((value) => value.trim())) rows.push(row);
  if (!rows.length) return [];
  const headers = rows.shift().map((value, index) => value.trim() || `field_${index + 1}`);
  return rows.map((values) => Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ""])));
}
function normalizeLogRecords(input) {
  const trimmed = input.trim();
  if (!trimmed) throw new Error("Добавьте журнал или выберите файл для анализа.");
  let records;
  if (trimmed.startsWith("[") || trimmed.startsWith("{")) {
    try {
      const parsed = JSON.parse(trimmed);
      records = Array.isArray(parsed) ? parsed : Array.isArray(parsed.events) ? parsed.events : [parsed];
    } catch {
      try { records = trimmed.split(/\r?\n/).filter(Boolean).map((line) => JSON.parse(line)); }
      catch { throw new Error("Не удалось прочитать JSON. Проверьте синтаксис и попробуйте снова."); }
    }
  } else if (/\.csv$/i.test(document.getElementById("logFile").files[0]?.name || "") || /,|;/.test(trimmed.split(/\r?\n/, 1)[0])) {
    records = parseCSV(trimmed);
  } else {
    records = trimmed.split(/\r?\n/).filter(Boolean).map((line, index) => ({ timestamp: "", message: line, event: "text_log", source: `строка ${index + 1}` }));
  }
  if (!Array.isArray(records) || !records.length) throw new Error("В журнале нет записей для анализа.");
  if (records.length > 5000) throw new Error("Лимит демонстрационной лаборатории — 5 000 записей за один анализ.");
  return records.map((record, index) => normalizeRecord(record, index));
}
function findField(record, names) {
  const keys = Object.keys(record || {});
  const normalized = names.map((name) => name.toLocaleLowerCase("ru"));
  const key = keys.find((candidate) => normalized.includes(candidate.toLocaleLowerCase("ru")));
  return key ? record[key] : "";
}
function normalizeRecord(record, index) {
  if (!record || typeof record !== "object" || Array.isArray(record)) record = { message: String(record) };
  const timestamp = findField(record, ["timestamp", "time", "@timestamp", "datetime", "date"]);
  const event = findField(record, ["event", "event_type", "action", "type", "message", "description", "msg"]);
  const user = findField(record, ["user", "username", "account", "principal", "user_name"]);
  const source = findField(record, ["source_ip", "src_ip", "ip", "ip_address", "client_ip", "source"]);
  const host = findField(record, ["host", "hostname", "computer", "device", "endpoint"]);
  const result = findField(record, ["result", "status", "outcome", "action_result"]);
  return { timestamp: String(timestamp || "—"), event: String(event || "Запись журнала"), user: String(user || "—"), source: String(source || "—"), host: String(host || "—"), result: String(result || ""), index, raw: record };
}
function detectFindings(records) {
  const failedBySource = new Map();
  records.forEach((record) => {
    const content = `${record.event} ${record.result}`.toLocaleLowerCase("ru");
    if (/fail|denied|invalid|неудач|отказ|ошибк|failure/.test(content)) {
      const source = record.source === "—" ? "источник не указан" : record.source;
      failedBySource.set(source, (failedBySource.get(source) || 0) + 1);
    }
  });
  const bruteForceSources = [...failedBySource.entries()].filter(([, count]) => count >= 5);
  const suspiciousPowerShell = records.filter((record) => /powershell|pwsh/i.test(record.event) && /hidden|encodedcommand|\s-e(nc)?\s|скрыт|закодир/i.test(record.event));
  const privilegeChanges = records.filter((record) => /domain admins|privileged|administrator group|администратор|привилегир/i.test(record.event));
  const flaggedIndexes = new Map();
  bruteForceSources.forEach(([source, count]) => records.filter((record) => record.source === source && /fail|denied|invalid|неудач|отказ|ошибк|failure/i.test(`${record.event} ${record.result}`)).forEach((record) => flaggedIndexes.set(record.index, { score: "Высокий", reason: `Серия отказов входа: ${count}` })));
  suspiciousPowerShell.forEach((record) => flaggedIndexes.set(record.index, { score: "Высокий", reason: "Нетипичные параметры PowerShell" }));
  privilegeChanges.forEach((record) => flaggedIndexes.set(record.index, { score: "Средний", reason: "Изменение привилегий" }));
  return { bruteForceSources, suspiciousPowerShell, privilegeChanges, flaggedIndexes };
}
function renderAnalysis(records) {
  const findings = detectFindings(records);
  const flagged = findings.flaggedIndexes;
  const cards = [
    { title: "Записей обработано", value: records.length, className: "" },
    { title: "Сигналов высокого риска", value: findings.bruteForceSources.length + findings.suspiciousPowerShell.length, className: "alert-finding" },
    { title: "Изменений доступа", value: findings.privilegeChanges.length, className: "warning-finding" }
  ];
  const findingsMarkup = cards.map((card) => `<div class="finding-card ${card.className}"><span>${card.title}</span><strong>${card.value}</strong></div>`).join("");
  const messages = [];
  findings.bruteForceSources.forEach(([source, count]) => messages.push(`Обнаружена серия неудачных входов с адреса ${source}: ${count} записей.`));
  if (findings.suspiciousPowerShell.length) messages.push(`Найдено записей с нетипичными параметрами PowerShell: ${findings.suspiciousPowerShell.length}.`);
  if (findings.privilegeChanges.length) messages.push(`Найдено записей об изменении привилегий: ${findings.privilegeChanges.length}.`);
  const summary = messages.length ? messages.join(" ") : "Учебные правила не обнаружили совпадений. Проверьте записи вручную.";
  document.getElementById("findingsGrid").innerHTML = `${findingsMarkup}${messages.length ? `<div class="empty-findings">${escapeHTML(summary)}</div>` : ""}`;
  document.getElementById("analysisSummary").textContent = summary;
  document.getElementById("logRows").innerHTML = records.slice(0, 200).map((record) => {
    const finding = flagged.get(record.index);
    return `<tr><td class="incident-host">${escapeHTML(record.timestamp)}</td><td>${escapeHTML(record.event)}</td><td>${escapeHTML(record.user)}</td><td class="incident-host">${escapeHTML(record.source)}</td><td class="incident-host">${escapeHTML(record.host)}</td><td>${finding ? `<span class="severity-pill ${finding.score === "Высокий" ? "severity-high" : "severity-medium"}">${finding.reason}</span>` : '<span class="event-result">Без совпадений</span>'}</td></tr>`;
  }).join("");
  if (records.length > 200) notify(`Показаны первые 200 записей из ${records.length}.`);
  const results = document.getElementById("analysisResults");
  results.hidden = false;
  results.scrollIntoView({ behavior: "smooth", block: "start" });
}
function runAnalysis() {
  try {
    currentAnalysisRows = normalizeLogRecords(document.getElementById("logInput").value);
    renderAnalysis(currentAnalysisRows);
    notify(`Анализ завершён: ${currentAnalysisRows.length} записей`);
  } catch (error) { notify(error.message || "Не удалось проанализировать журнал."); }
}
function loadSampleLogs() {
  const sample = [
    { timestamp: "2025-04-18T09:41:52Z", event: "login_failed", source_ip: "10.24.8.19", user: "svc_backup", host: "SRV-AD-01", result: "failure" },
    { timestamp: "2025-04-18T09:41:58Z", event: "login_failed", source_ip: "10.24.8.19", user: "svc_backup", host: "SRV-AD-01", result: "failure" },
    { timestamp: "2025-04-18T09:42:03Z", event: "login_failed", source_ip: "10.24.8.19", user: "svc_backup", host: "SRV-AD-01", result: "failure" },
    { timestamp: "2025-04-18T09:42:07Z", event: "login_failed", source_ip: "10.24.8.19", user: "svc_backup", host: "SRV-AD-01", result: "failure" },
    { timestamp: "2025-04-18T09:42:12Z", event: "login_failed", source_ip: "10.24.8.19", user: "svc_backup", host: "SRV-AD-01", result: "failure" },
    { timestamp: "2025-04-18T09:42:18Z", event: "login_success", source_ip: "10.24.8.19", user: "svc_backup", host: "SRV-AD-01", result: "success" },
    { timestamp: "2025-04-18T09:26:53Z", event: "powershell.exe -WindowStyle Hidden -EncodedCommand", source_ip: "10.24.8.42", user: "a.ivanova", host: "WS-FIN-042", result: "started" },
    { timestamp: "2025-04-18T09:03:11Z", event: "User added to Domain Admins", source_ip: "10.24.3.77", user: "hr.admin", host: "SRV-AD-01", result: "success" }
  ];
  document.getElementById("logInput").value = JSON.stringify(sample, null, 2);
  notify("Пример журнала загружен. Запустите анализ.");
}
function parseImportedFile(file) {
  if (!file) return;
  if (file.size > 2 * 1024 * 1024) { notify("Размер файла превышает допустимые 2 МБ."); return; }
  const name = file.name.toLocaleLowerCase("ru");
  if (![".json", ".csv", ".log", ".txt"].some((suffix) => name.endsWith(suffix))) { notify("Поддерживаются файлы JSON, CSV, LOG и TXT."); return; }
  const reader = new FileReader();
  reader.onload = () => { document.getElementById("logInput").value = String(reader.result || ""); notify(`Файл «${file.name}» загружен локально.`); };
  reader.onerror = () => notify("Не удалось прочитать файл. Попробуйте другой файл.");
  reader.readAsText(file);
}
function exportReport() {
  const header = ["Идентификатор", "Инцидент", "Критичность", "Узел", "Источник", "Время", "Статус"];
  const rows = incidents.map((item) => [item.id, item.title, item.severity, item.host, item.source, item.time, item.status]);
  const csvCell = (value) => {
    let text = String(value ?? "");
    if (/^[\u0000-\u0020]*[=+\-@]/.test(text)) text = `'${text}`;
    return `"${text.replaceAll('"', '""')}"`;
  };
  const csv = "\uFEFF" + [header, ...rows].map((row) => row.map(csvCell).join(";")).join("\r\n");
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url; link.download = "cyberlab-отчёт-инциденты.csv"; link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  notify("Отчёт выгружен в формате CSV.");
}
function savePreferences() {
  try { localStorage.setItem(preferenceKey, JSON.stringify(preferences)); } catch { notify("Настройки не удалось сохранить."); }
}
function initializePreferences() {
  const compact = document.getElementById("compactToggle");
  const recommendation = document.getElementById("recommendationToggle");
  compact.checked = Boolean(preferences.compactTables);
  recommendation.checked = preferences.recommendations !== false;
  document.body.classList.toggle("compact-tables", compact.checked);
  document.body.classList.toggle("hide-recommendations", !recommendation.checked);
  compact.addEventListener("change", () => { preferences.compactTables = compact.checked; document.body.classList.toggle("compact-tables", compact.checked); savePreferences(); notify(compact.checked ? "Компактный вид включён." : "Компактный вид выключен."); });
  recommendation.addEventListener("change", () => { preferences.recommendations = recommendation.checked; document.body.classList.toggle("hide-recommendations", !recommendation.checked); savePreferences(); notify(recommendation.checked ? "Подсказки аналитика включены." : "Подсказки аналитика скрыты."); });
}
function createIncident(formData) {
  const now = new Date();
  const time = new Intl.DateTimeFormat("ru-RU", { timeZone: "Asia/Qyzylorda", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).format(now);
  const nextNumber = Math.max(850, ...incidents.map((item) => Number(item.id.match(/(\d+)$/)?.[1] || 0))) + 1;
  const incident = {
    id: `INC-2025-${nextNumber}`,
    title: String(formData.get("title") || "Новое расследование").trim(), severity: String(formData.get("severity") || "Средний"),
    host: String(formData.get("host") || "Не указан").trim() || "Не указан", source: "—", time,
    status: "Новый", technique: "Не определена", tactic: "Требует классификации",
    description: String(formData.get("description") || "Учебное расследование создано аналитиком.").trim() || "Учебное расследование создано аналитиком.",
    recommendation: "Проверьте исходные события, определите затронутые активы и зафиксируйте выводы аналитика.",
    timeline: [[time, "Карточка создана аналитиком в учебной среде"]]
  };
  incidents.unshift(incident);
  persistIncidents(); renderAll();
  document.getElementById("caseDialog").close();
  setRoute("incidents");
  openIncident(incident);
  notify(`Создано расследование ${incident.id}`);
}

document.querySelectorAll(".nav-item").forEach((item) => item.addEventListener("click", () => setRoute(item.dataset.route)));
document.querySelectorAll("[data-route-link]").forEach((button) => button.addEventListener("click", () => setRoute(button.dataset.routeLink)));
document.getElementById("overviewSearch").addEventListener("input", renderOverviewIncidents);
document.getElementById("overviewSeverity").addEventListener("change", renderOverviewIncidents);
document.getElementById("incidentSearch").addEventListener("input", renderIncidentQueue);
document.getElementById("incidentSeverity").addEventListener("change", renderIncidentQueue);
document.getElementById("incidentStatus").addEventListener("change", renderIncidentQueue);
document.getElementById("eventSearch").addEventListener("input", (event) => renderEvents(event.target.value, document.getElementById("eventTypeFilter").value));
document.getElementById("eventTypeFilter").addEventListener("change", (event) => renderEvents(document.getElementById("eventSearch").value, event.target.value));
document.getElementById("assetSearch").addEventListener("input", (event) => renderAssets(event.target.value));
document.getElementById("chartPeriod").addEventListener("change", (event) => renderChart(event.target.value));
document.getElementById("refreshButton").addEventListener("click", () => { renderAll(); renderChart(document.getElementById("chartPeriod").value); notify("Данные лабораторной среды обновлены."); });
document.getElementById("notificationButton").addEventListener("click", () => notify("Новых уведомлений нет."));
document.getElementById("newCaseButton").addEventListener("click", () => { document.getElementById("caseForm").reset(); document.getElementById("caseDialog").showModal(); });
document.getElementById("caseForm").addEventListener("submit", (event) => { event.preventDefault(); const form = event.currentTarget; if (!form.reportValidity()) return; createIncident(new FormData(form)); });
document.getElementById("closeDrawer").addEventListener("click", closeIncidentDrawer);
document.getElementById("overlay").addEventListener("click", closeIncidentDrawer);
document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeIncidentDrawer(); });
document.getElementById("menuButton").addEventListener("click", () => document.getElementById("sidebar").classList.toggle("open"));
document.addEventListener("click", (event) => {
  const signal = event.target.closest("[data-open-incident]");
  if (signal) openIncident(incidents.find((item) => item.id === signal.dataset.openIncident));
  const technique = event.target.closest("[data-technique]");
  if (technique) notify(`MITRE ATT&CK · ${technique.dataset.technique}: справка доступна в официальной матрице.`);
});
document.getElementById("exportReportButton").addEventListener("click", exportReport);
document.getElementById("sampleLogsButton").addEventListener("click", loadSampleLogs);
document.getElementById("analyzeButton").addEventListener("click", runAnalysis);
document.getElementById("clearAnalysisButton").addEventListener("click", () => { document.getElementById("analysisResults").hidden = true; currentAnalysisRows = []; notify("Результаты анализа очищены."); });
document.getElementById("logFile").addEventListener("change", (event) => parseImportedFile(event.target.files[0]));
document.getElementById("dropZone").addEventListener("dragover", (event) => { event.preventDefault(); event.currentTarget.classList.add("dragging"); });
document.getElementById("dropZone").addEventListener("dragleave", (event) => event.currentTarget.classList.remove("dragging"));
document.getElementById("dropZone").addEventListener("drop", (event) => { event.preventDefault(); event.currentTarget.classList.remove("dragging"); parseImportedFile(event.dataTransfer.files[0]); });
document.querySelector(".user-profile").addEventListener("click", () => notify("Смена активна · Аналитик SOC, уровень 1."));
initializePreferences(); initializeAssets(); renderAll(); renderSignals(); renderChart(); renderEvents(); tickClock();
setInterval(tickClock, 1000);
const initialRoute = location.hash.slice(1);
if (pageMeta[initialRoute]) setRoute(initialRoute);

