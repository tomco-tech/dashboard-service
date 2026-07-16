const TABLE_DEFS = {
  services: {
    label: "REF_Services Utilisateurs",
    candidates: ["REF_Services_Utilisateurs", "REF_ServicesUtilisateurs", "REF_Services_Utilisateurs1"],
    fuzzy: ["ref", "services", "utilisateurs"],
    fields: {
      name: ["Nom"],
      longName: ["Nom Long", "Nom_Long"],
      nationalCommunity: ["Communauté Nationale", "Communaute_Nationale"],
      department: ["Département", "Departement"],
      deployPriority: ["Priorité Déploiement", "Priorite_Deploiement"],
      deployTarget: ["Date Cible Déploiement", "Date_Cible_Deploiement"],
      matrixProgress: ["Avancement Matrice de déploiement", "Avancement_Matrice_de_deploiement"],
      deploymentLead: ["Chef de Déploiement", "Chef_de_Deploiement"]
    }
  },
  actors: {
    label: "REF_Acteurs",
    candidates: ["REF_Acteurs", "REFActeurs"],
    fuzzy: ["ref", "acteurs"],
    optional: true,
    fields: {
      name: ["Nom complet", "Nom_Complet", "Nom", "Dénomination", "Denomination", "Libellé", "Libelle"],
      firstName: ["Prénom", "Prenom"],
      lastName: ["Nom de famille", "Nom_de_famille"],
      email: ["Email", "Courriel", "Mail"],
      organisation: ["Organisation", "Entité", "Entite", "Service"]
    }
  },
  rtu: {
    label: "A_Suivi RTU",
    candidates: ["A_Suivi_RTU", "A_SuiviRTU", "A_Suivi_RTU1", "SUIVI_RTU", "Suivi_RTU", "A_RTU"],
    fuzzy: ["suivi", "rtu"],
    sourceLabel: "RTU",
    sourceClass: "rtu",
    fields: {
      service: ["Service Utilisateur", "Service_Utilisateur"],
      version: ["Version RTU", "Version_RTU"],
      status: ["Statut"],
      stage: ["Etape", "Étape"],
      raccordements: ["Statut Raccordements", "Statut_Raccordements"],
      wifi: ["Statut Wi-Fi", "Statut_Wi_Fi", "Statut_WiFi"],
      applications: ["Statut Applications", "Statut_Applications"],
      messagerie: ["Statut Messagerie", "Statut_Messagerie"],
      emm: ["Statut EMM", "Statut_EMM"],
      passerellage: ["Statut Passerellage", "Statut_Passerellage"],
      mdg: ["Statut MDG", "Statut_MDG"],
      owner: ["Porteur Prochaine Action", "Porteur_Prochaine_Action"],
      comment: ["Commentaire"]
    }
  },
  infra: {
    label: "B_Infra & Flux",
    candidates: ["B_Infra_Flux", "B_Infra__Flux", "B_Infra_et_Flux", "B_InfraFlux", "SUIVI_Infra_Flux", "SUIVI_Chantiers_infrastructure", "SUIVI_Ouverture_de_flux"],
    fuzzy: ["infra", "flux"],
    sourceLabel: "Infra & Flux",
    sourceClass: "infra",
    fields: {
      service: ["Service Utilisateur", "Service_Utilisateur"],
      title: ["Intitulé", "Intitule"],
      category: ["Catégorie", "Categorie"],
      description: ["Description"],
      requestDate: ["Date Demande", "Date_Demande"],
      priority: ["Priorité DUD", "Priorite_DUD", "Priorité", "Priorite"],
      status: ["Statut"],
      stage: ["Etape", "Étape"],
      nextActions: ["Prochaines Actions", "Prochaines_Actions"],
      owners: ["Porteurs Prochaines Actions", "Porteurs_Prochaines_Actions"],
      comment: ["Commentaire"]
    }
  },
  emm: {
    label: "B_EMM",
    candidates: ["B_EMM", "B_EMM1", "SUIVI_Integration_parametrage_EMM", "SUIVI_Integration_parametrage_EMM1", "SUIVI_Intégration_paramétrage_EMM"],
    fuzzy: ["emm"],
    sourceLabel: "EMM",
    sourceClass: "emm",
    fields: {
      service: ["Service Utilisateur", "Service_Utilisateur"],
      category: ["Catégorie", "Categorie"],
      caseType: ["Cas"],
      description: ["Description"],
      desiredDate: ["Date souhaitée", "Date_souhaitee", "Date souhaitee"],
      priority: ["Prio", "Priorité", "Priorite"],
      modifiedAt: ["Modifée le", "Modifiée le", "Modifee_le", "Modifiee_le"],
      status: ["Statut"],
      assignees: ["Assignée à", "Assignee_a", "Assignee_a_"],
      comment: ["Commentaire"],
      rtu: ["RTU"],
      sprint: ["Sprint"],
      createdBy: ["Créée par", "Creee_par", "Cree_par"],
      createdAt: ["Créé le", "Cree_le", "Creee_le"],
      requester: ["CP/Demandeur", "CP_Demandeur"],
      serviceType: ["Service"]
    }
  },
  conception: {
    label: "B_Chantiers_de_conception",
    candidates: ["B_Chantiers_de_conception", "B_Chantiers_conception", "B_Chantiers_de_Conception", "SUIVI_Chantiers_de_conception", "SUIVI_Chantiers_conception"],
    fuzzy: ["chantiers", "conception"],
    sourceLabel: "Chantier de conception",
    sourceClass: "conception",
    fields: {
      service: ["Service Utilisateur", "Service_Utilisateur"],
      title: ["Intitulé", "Intitule"],
      category: ["Catégorie", "Categorie"],
      owners: ["Porteurs"],
      stage: ["Etape", "Étape"],
      status: ["Statut"],
      stageTimestamp: ["Etape_Timestamp", "Étape_Timestamp"],
      statusTimestamp: ["Statut_Timestamp"],
      description: ["Description"],
      actionsDone: ["Actions réalisées", "Actions_realisees"],
      nextActions: ["Prochaines actions", "Prochaines_actions"],
      mepDate: ["Date cible de MEP", "Date_cible_de_MEP"]
    }
  }
};

const EDIT_LAYOUTS = {
  rtu: [
    { title: "Identification", fields: [
      { key: "service", label: "Service utilisateur", kind: "service" },
      { key: "version", label: "Version RTU" },
      { key: "status", label: "Statut", kind: "choice" },
      { key: "stage", label: "Étape", kind: "choice" },
      { key: "owner", label: "Porteur prochaine action", kind: "actor" }
    ]},
    { title: "Complétude par domaine", fields: [
      { key: "raccordements", label: "Raccordements", kind: "choice" },
      { key: "wifi", label: "Wi-Fi", kind: "choice" },
      { key: "applications", label: "Applications", kind: "choice" },
      { key: "messagerie", label: "Messagerie", kind: "choice" },
      { key: "emm", label: "EMM", kind: "choice" },
      { key: "passerellage", label: "Passerellage", kind: "choice" },
      { key: "mdg", label: "MDG", kind: "choice" }
    ]},
    { title: "Commentaire", fields: [
      { key: "comment", label: "Commentaire", kind: "textarea", full: true }
    ]}
  ],
  infra: [
    { title: "Sujet", fields: [
      { key: "service", label: "Service utilisateur", kind: "service", full: true },
      { key: "title", label: "Intitulé", full: true },
      { key: "category", label: "Catégorie", kind: "choice" },
      { key: "requestDate", label: "Date de la demande", kind: "date" }
    ]},
    { title: "Pilotage", fields: [
      { key: "priority", label: "Priorité DUD", kind: "choice" },
      { key: "status", label: "Statut", kind: "choice" },
      { key: "stage", label: "Étape", kind: "choice" },
      { key: "owners", label: "Porteurs prochaines actions", kind: "actor", full: true }
    ]},
    { title: "Détail et suivi", fields: [
      { key: "description", label: "Description", kind: "textarea", full: true },
      { key: "nextActions", label: "Prochaines actions", kind: "textarea", full: true },
      { key: "comment", label: "Commentaire", kind: "textarea", full: true }
    ]}
  ],
  emm: [
    { title: "Sujet", fields: [
      { key: "service", label: "Service utilisateur", kind: "service" },
      { key: "serviceType", label: "Titre / Service" },
      { key: "category", label: "Catégorie", kind: "choice" },
      { key: "caseType", label: "Cas", kind: "choice" },
      { key: "rtu", label: "RTU", kind: "choice" },
      { key: "sprint", label: "Sprint", kind: "choice" }
    ]},
    { title: "Pilotage", fields: [
      { key: "status", label: "Statut", kind: "choice" },
      { key: "priority", label: "Priorité", kind: "choice" },
      { key: "desiredDate", label: "Date souhaitée", kind: "date" },
      { key: "assignees", label: "Assignée à", kind: "actor", full: true },
      { key: "requester", label: "CP / Demandeur", kind: "actor" },
      { key: "createdBy", label: "Créée par", kind: "actor" },
      { key: "createdAt", label: "Créé le", kind: "date", readonly: true },
      { key: "modifiedAt", label: "Modifiée le", kind: "date", readonly: true }
    ]},
    { title: "Détail et suivi", fields: [
      { key: "description", label: "Description", kind: "textarea", full: true },
      { key: "comment", label: "Commentaire", kind: "textarea", full: true }
    ]}
  ],
  conception: [
    { title: "Sujet", fields: [
      { key: "service", label: "Service utilisateur", kind: "service", full: true },
      { key: "title", label: "Intitulé", full: true },
      { key: "category", label: "Catégorie", kind: "choice" },
      { key: "owners", label: "Porteurs", kind: "actor", full: true }
    ]},
    { title: "Pilotage", fields: [
      { key: "status", label: "Statut", kind: "choice" },
      { key: "stage", label: "Étape", kind: "choice" },
      { key: "mepDate", label: "Date cible de mise en production", kind: "date" },
      { key: "statusTimestamp", label: "Statut modifié le", kind: "date", readonly: true },
      { key: "stageTimestamp", label: "Étape modifiée le", kind: "date", readonly: true }
    ]},
    { title: "Détail et suivi", fields: [
      { key: "description", label: "Description", kind: "textarea", full: true },
      { key: "actionsDone", label: "Actions réalisées", kind: "textarea", full: true },
      { key: "nextActions", label: "Prochaines actions", kind: "textarea", full: true }
    ]}
  ]
};

const CLOSED_STATUS_WORDS = ["deploye", "deployee", "termine", "terminee", "clos", "cloture", "cloturee", "abandonne", "abandonnee", "annule", "annulee", "rejete", "rejetee", "valide", "validee"];
const DOMAIN_LABELS = {
  raccordements: "Raccordements",
  wifi: "Wi-Fi",
  applications: "Applications",
  messagerie: "Messagerie",
  emm: "EMM",
  passerellage: "Passerellage",
  mdg: "MDG"
};
const PRIORITY_RANK = { p0: 0, haute: 0, p1: 1, p2: 2, moyenne: 2, p3: 3, basse: 3 };

const $ = (id) => document.getElementById(id);
let widgetOptions = {};
let allTableIds = [];
let runtimeTables = {};
let metadataByTable = new Map();
let services = [];
let actors = [];
let serviceById = new Map();
let actorById = new Map();
let selectedService = null;
let activeSubject = null;
let loadSequence = 0;
let initialLoadStarted = false;
let optionsReceived = false;
let serviceComboIndex = -1;
let currentAccessLevel = "unknown";
let setupAutoOpened = false;
let lastGlobalError = "";

const filters = { search: "", status: "", priority: "", hideClosed: false };

grist.ready({
  requiredAccess: "full",
  onEditOptions: () => openSettings()
});

grist.onOptions((options, interaction) => {
  optionsReceived = true;
  widgetOptions = options || {};
  currentAccessLevel = interaction?.access_level || interaction?.accessLevel || "unknown";
  if (initialLoadStarted) loadAll();
});

function normalizeKey(value) {
  return asText(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");
}

function asText(value) {
  if (value === null || value === undefined) return "";
  if (Array.isArray(value)) return listValues(value).map(asText).filter(Boolean).join(", ");
  if (value instanceof Date) return value.toISOString();
  return String(value);
}

function listValues(value) {
  if (!Array.isArray(value)) return value === null || value === undefined || value === "" ? [] : [value];
  return value[0] === "L" ? value.slice(1) : value;
}

function tableRows(data) {
  if (!data) return [];
  if (Array.isArray(data)) return data;
  if (Array.isArray(data.id)) {
    return data.id.map((id, index) => {
      const row = { id };
      Object.keys(data).forEach((key) => { row[key] = data[key][index]; });
      return row;
    });
  }
  return [];
}

function dateToISO(value) {
  if (!value) return "";
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === "number" && Number.isFinite(value)) {
    const ms = value > 100000000000 ? value : value * 1000;
    const parsed = new Date(ms);
    return Number.isNaN(parsed.getTime()) ? "" : parsed.toISOString().slice(0, 10);
  }
  const text = String(value).trim();
  const iso = text.match(/\d{4}-\d{2}-\d{2}/);
  if (iso) return iso[0];
  const french = text.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (french) return `${french[3]}-${french[2].padStart(2, "0")}-${french[1].padStart(2, "0")}`;
  const parsed = Date.parse(text);
  return Number.isNaN(parsed) ? "" : new Date(parsed).toISOString().slice(0, 10);
}

function formatDate(value) {
  const iso = dateToISO(value);
  if (!iso) return "";
  const [year, month, day] = iso.split("-");
  return `${day}/${month}/${year}`;
}

function todayISO() { return new Date().toISOString().slice(0, 10); }
function nowISO() { return new Date().toISOString(); }

function makeEl(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function truncate(text, max = 170) {
  const value = asText(text).trim();
  return value.length > max ? `${value.slice(0, max).trim()}…` : value;
}

function normalizeStatus(value) { return normalizeKey(value); }
function isClosedStatus(value) {
  const status = normalizeStatus(value);
  return CLOSED_STATUS_WORDS.some((word) => status === word || status.startsWith(word));
}
function priorityRank(value) { return PRIORITY_RANK[normalizeKey(value)] ?? 99; }
function isUrgent(value) { return priorityRank(value) <= 1; }

function isOverdue(dateValue, status) {
  if (!dateValue || isClosedStatus(status)) return false;
  const iso = dateToISO(dateValue);
  if (!iso) return false;
  const due = new Date(`${iso}T00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return due.getTime() < today.getTime();
}

function statusBadgeClass(value) {
  const key = normalizeStatus(value);
  if (key.includes("incomplet") || key.includes("attente") || key.includes("nouveau") || key.includes("cours") || key.includes("test")) return "badge--incomplete";
  if (key === "complet" || key === "complete" || isClosedStatus(value)) return "badge--complete";
  if (key === "na" || key.includes("nonapplicable")) return "badge--na";
  return "badge--status";
}

function priorityBadgeClass(value) {
  const key = normalizeKey(value);
  if (["p0", "haute"].includes(key)) return "badge--p0";
  if (key === "p1") return "badge--p1";
  if (["p2", "moyenne"].includes(key)) return "badge--p2";
  if (["p3", "basse"].includes(key)) return "badge--p3";
  return "";
}

async function safeFetchTable(tableId) {
  if (!tableId) throw new Error("Identifiant de table vide");
  return grist.docApi.fetchTable(tableId);
}

async function findTableId(def, override) {
  const attempts = [];
  if (override) attempts.push(override);
  attempts.push(...def.candidates);
  for (const tableId of [...new Set(attempts.filter(Boolean))]) {
    try {
      await safeFetchTable(tableId);
      return tableId;
    } catch (_) { /* Essai suivant. */ }
  }

  if (!allTableIds.length) {
    try { allTableIds = await grist.docApi.listTables(); } catch (_) { allTableIds = []; }
  }

  const exact = allTableIds.find((id) => def.candidates.some((candidate) => normalizeKey(candidate) === normalizeKey(id)));
  if (exact) return exact;

  const found = allTableIds.find((id) => def.fuzzy.every((part) => normalizeKey(id).includes(normalizeKey(part))));
  return found || null;
}

async function loadMetadata() {
  metadataByTable = new Map();
  try {
    const tables = tableRows(await grist.docApi.fetchTable("_grist_Tables"));
    const columns = tableRows(await grist.docApi.fetchTable("_grist_Tables_column"));
    const tableNameByMetaId = new Map(tables.map((row) => [Number(row.id), row.tableId]));
    columns.forEach((row) => {
      const tableId = tableNameByMetaId.get(Number(row.parentId));
      if (!tableId) return;
      if (!metadataByTable.has(tableId)) metadataByTable.set(tableId, new Map());
      metadataByTable.get(tableId).set(row.colId, {
        colId: row.colId,
        label: row.label || row.colId,
        type: row.type || "Any",
        isFormula: Boolean(row.isFormula)
      });
    });
  } catch (error) {
    console.warn("Métadonnées de colonnes indisponibles, utilisation du mode de secours.", error);
  }
}

function resolveColumn(rawData, tableId, aliases) {
  const keys = Object.keys(rawData || {}).filter((key) => key !== "id");
  const tableMeta = metadataByTable.get(tableId) || new Map();
  const candidates = keys.map((key) => ({
    key,
    keyNorm: normalizeKey(key),
    labelNorm: normalizeKey(tableMeta.get(key)?.label || key)
  }));
  const aliasNorms = aliases.map(normalizeKey);

  for (const alias of aliasNorms) {
    const exact = candidates.find((item) => item.keyNorm === alias || item.labelNorm === alias);
    if (exact) return exact.key;
  }
  for (const alias of aliasNorms) {
    const partial = candidates.find((item) => item.keyNorm.includes(alias) || item.labelNorm.includes(alias) || alias.includes(item.keyNorm));
    if (partial) return partial.key;
  }
  return null;
}

async function loadOneTable(key) {
  const def = TABLE_DEFS[key];
  const override = widgetOptions.tableIds?.[key];
  const tableId = await findTableId(def, override);
  if (!tableId) {
    if (def.optional) return { key, def, missing: true, optional: true, error: null, rows: [], columns: {}, tableId: null, raw: {} };
    return { key, def, missing: true, optional: false, error: `Table « ${def.label} » introuvable`, rows: [], columns: {}, tableId: null, raw: {} };
  }

  try {
    const raw = await safeFetchTable(tableId);
    const columns = {};
    Object.entries(def.fields).forEach(([fieldKey, aliases]) => {
      columns[fieldKey] = resolveColumn(raw, tableId, aliases);
    });
    return { key, def, tableId, raw, rows: tableRows(raw), columns, missing: false, error: null, meta: metadataByTable.get(tableId) || new Map() };
  } catch (error) {
    return { key, def, tableId, raw: {}, rows: [], columns: {}, missing: true, optional: Boolean(def.optional), error: error.message || String(error), meta: new Map() };
  }
}

function fieldValue(table, row, key) {
  const colId = table?.columns?.[key];
  return colId ? row?.[colId] : "";
}

function buildActorLabel(row, table) {
  const direct = asText(fieldValue(table, row, "name")).trim();
  const first = asText(fieldValue(table, row, "firstName")).trim();
  const last = asText(fieldValue(table, row, "lastName")).trim();
  const email = asText(fieldValue(table, row, "email")).trim();
  const organisation = asText(fieldValue(table, row, "organisation")).trim();
  const name = direct || [first, last].filter(Boolean).join(" ") || email || `Acteur #${row.id}`;
  return { id: Number(row.id), label: name, email, organisation };
}

function loadCatalogs() {
  services = [];
  actors = [];
  serviceById = new Map();
  actorById = new Map();

  const serviceTable = runtimeTables.services;
  if (serviceTable && !serviceTable.missing) {
    services = serviceTable.rows.map((row) => {
      const name = asText(fieldValue(serviceTable, row, "name")).trim();
      const longName = asText(fieldValue(serviceTable, row, "longName")).trim();
      const label = name || longName || `Service #${row.id}`;
      return {
        id: Number(row.id),
        label,
        name,
        longName,
        nationalCommunity: asText(fieldValue(serviceTable, row, "nationalCommunity")),
        department: asText(fieldValue(serviceTable, row, "department")),
        deployPriority: asText(fieldValue(serviceTable, row, "deployPriority")),
        deployTarget: fieldValue(serviceTable, row, "deployTarget"),
        matrixProgress: asText(fieldValue(serviceTable, row, "matrixProgress")),
        deploymentLeadRaw: fieldValue(serviceTable, row, "deploymentLead"),
        rawRow: row
      };
    }).filter((service) => service.id && service.label)
      .sort((a, b) => a.label.localeCompare(b.label, "fr"));
    services.forEach((service) => serviceById.set(service.id, service));
  }

  const actorTable = runtimeTables.actors;
  if (actorTable && !actorTable.missing) {
    actors = actorTable.rows.map((row) => buildActorLabel(row, actorTable))
      .filter((actor) => actor.id && actor.label)
      .sort((a, b) => a.label.localeCompare(b.label, "fr"));
    actors.forEach((actor) => actorById.set(actor.id, actor));
  }
}

function catalogLabel(raw, catalogMap, fallbackPrefix) {
  if (raw === null || raw === undefined || raw === "") return "";
  if (typeof raw === "number") return catalogMap.get(Number(raw))?.label || `${fallbackPrefix} #${raw}`;
  if (Array.isArray(raw)) return listValues(raw).map((item) => catalogLabel(item, catalogMap, fallbackPrefix)).filter(Boolean).join(", ");
  const text = asText(raw).trim();
  const numeric = Number(text);
  if (Number.isInteger(numeric) && catalogMap.has(numeric)) return catalogMap.get(numeric).label;
  return text;
}

function serviceLabel(raw) { return catalogLabel(raw, serviceById, "Service"); }
function actorLabel(raw) { return catalogLabel(raw, actorById, "Acteur"); }

function serviceTokens(raw) {
  if (raw === null || raw === undefined || raw === "") return [];
  if (typeof raw === "number") return [String(raw), normalizeKey(serviceLabel(raw))];
  if (Array.isArray(raw)) return listValues(raw).flatMap(serviceTokens);
  return asText(raw).split(/[,;\n|]+/).map((token) => normalizeKey(token.trim())).filter(Boolean);
}

function rawMatchesSelectedService(raw) {
  if (!selectedService) return true;
  const tokens = serviceTokens(raw);
  if (tokens.some((token) => ["tous", "toutes", "all"].includes(token))) return true;
  const selectedKeys = new Set([
    String(selectedService.id),
    normalizeKey(selectedService.label),
    normalizeKey(selectedService.name),
    normalizeKey(selectedService.longName)
  ].filter(Boolean));
  return tokens.some((token) => selectedKeys.has(token));
}

function rtuDomainState(table, row) {
  const keys = ["raccordements", "wifi", "applications", "messagerie", "emm", "passerellage", "mdg"];
  const values = keys.map((key) => ({ key, value: asText(fieldValue(table, row, key)).trim() }));
  const completed = values.filter(({ value }) => {
    const normalized = normalizeStatus(value);
    return normalized === "complet" || normalized === "complete" || normalized === "na" || normalized.includes("nonapplicable");
  }).length;
  const filled = values.filter(({ value }) => Boolean(value)).length;
  return { values, completed, filled, total: values.length, percent: Math.round((completed / values.length) * 100) };
}

function normalizeSubject(sourceKey, table, row) {
  const serviceRaw = fieldValue(table, row, "service");
  const base = {
    source: sourceKey,
    tableId: table.tableId,
    rowId: Number(row.id),
    rawRow: row,
    table,
    serviceRaw,
    service: serviceLabel(serviceRaw),
    status: asText(fieldValue(table, row, "status")).trim(),
    stage: asText(fieldValue(table, row, "stage")).trim(),
    category: asText(fieldValue(table, row, "category")).trim(),
    priority: asText(fieldValue(table, row, "priority")).trim(),
    description: asText(fieldValue(table, row, "description")).trim(),
    owner: "",
    date: "",
    title: "",
    caseType: ""
  };

  if (sourceKey === "rtu") {
    const version = asText(fieldValue(table, row, "version")).trim();
    base.title = version ? `RTU ${version}` : "RTU sans version";
    base.owner = actorLabel(fieldValue(table, row, "owner"));
    base.description = asText(fieldValue(table, row, "comment")).trim();
    base.rtuState = rtuDomainState(table, row);
  } else if (sourceKey === "infra") {
    base.title = asText(fieldValue(table, row, "title")).trim() || base.category || "Sujet Infra & Flux";
    base.date = fieldValue(table, row, "requestDate");
    base.owner = actorLabel(fieldValue(table, row, "owners"));
    base.description = base.description || asText(fieldValue(table, row, "nextActions")).trim() || asText(fieldValue(table, row, "comment")).trim();
  } else if (sourceKey === "emm") {
    base.caseType = asText(fieldValue(table, row, "caseType")).trim();
    const serviceType = asText(fieldValue(table, row, "serviceType")).trim();
    base.title = serviceType || base.category || truncate(base.description, 65) || "Sujet EMM";
    base.date = fieldValue(table, row, "desiredDate");
    base.owner = actorLabel(fieldValue(table, row, "assignees"));
  } else if (sourceKey === "conception") {
    base.title = asText(fieldValue(table, row, "title")).trim() || base.category || "Chantier de conception";
    base.date = fieldValue(table, row, "mepDate");
    base.owner = actorLabel(fieldValue(table, row, "owners"));
    base.description = base.description || asText(fieldValue(table, row, "nextActions")).trim() || asText(fieldValue(table, row, "actionsDone")).trim();
  }
  return base;
}

function allSubjects() {
  return ["rtu", "infra", "emm", "conception"].flatMap((sourceKey) => {
    const table = runtimeTables[sourceKey];
    if (!table || table.missing) return [];
    return table.rows.map((row) => normalizeSubject(sourceKey, table, row));
  });
}

function subjectMatchesFilters(subject) {
  if (!rawMatchesSelectedService(subject.serviceRaw)) return false;
  if (filters.hideClosed && isClosedStatus(subject.status)) return false;
  if (filters.status && subject.status !== filters.status) return false;
  if (filters.priority && subject.priority !== filters.priority) return false;
  const query = normalizeKey(filters.search);
  if (query) {
    const haystack = normalizeKey([
      subject.title, subject.service, subject.status, subject.stage, subject.category,
      subject.priority, subject.description, subject.owner, subject.caseType
    ].join(" "));
    if (!haystack.includes(query)) return false;
  }
  return true;
}

function sortSubjects(subjects) {
  return [...subjects].sort((a, b) => {
    if (a.source === "rtu" && b.source === "rtu") return b.rowId - a.rowId;
    return priorityRank(a.priority) - priorityRank(b.priority)
      || compareDate(a.date, b.date)
      || a.title.localeCompare(b.title, "fr");
  });
}

function compareDate(a, b) {
  const first = Date.parse(dateToISO(a)) || 8640000000000000;
  const second = Date.parse(dateToISO(b)) || 8640000000000000;
  return first - second;
}

function activeSubjects() { return sortSubjects(allSubjects().filter(subjectMatchesFilters)); }

function uniqueValues(values) {
  return [...new Set(values.map((value) => asText(value).trim()).filter(Boolean))].sort((a, b) => a.localeCompare(b, "fr"));
}

function refreshFilterOptions(subjects) {
  const statuses = uniqueValues(subjects.map((item) => item.status));
  const priorities = uniqueValues(subjects.map((item) => item.priority));
  fillSimpleSelect($("statusFilter"), statuses, "Tous les statuts", filters.status);
  fillSimpleSelect($("priorityFilter"), priorities, "Toutes les priorités", filters.priority);
}

function fillSimpleSelect(select, values, firstLabel, current) {
  select.replaceChildren();
  const first = document.createElement("option");
  first.value = "";
  first.textContent = firstLabel;
  select.appendChild(first);
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
  select.value = values.includes(current) ? current : "";
}

function renderServiceProfile() {
  const profile = $("serviceProfile");
  profile.replaceChildren();
  if (!selectedService) {
    profile.className = "service-profile service-profile--all";
    const block = makeEl("div", "profile-main");
    block.appendChild(makeEl("div", "profile-title", "Tous les services utilisateurs"));
    block.appendChild(makeEl("div", "profile-subtitle", "Vue consolidée des RTU, sujets Infra & Flux, EMM et chantiers de conception."));
    profile.appendChild(block);
    return;
  }

  profile.className = "service-profile";
  const main = makeEl("div", "profile-main");
  main.appendChild(makeEl("div", "profile-title", selectedService.label));
  main.appendChild(makeEl("div", "profile-subtitle", selectedService.longName || selectedService.nationalCommunity || "Service utilisateur"));
  profile.appendChild(main);

  const fields = [
    ["Département", selectedService.department || "—"],
    ["Priorité déploiement", selectedService.deployPriority || "—"],
    ["Date cible", formatDate(selectedService.deployTarget) || asText(selectedService.deployTarget) || "—"],
    ["Matrice de déploiement", selectedService.matrixProgress || "—"],
    ["Chef de déploiement", actorLabel(selectedService.deploymentLeadRaw) || "—"]
  ];
  fields.forEach(([label, value]) => {
    const field = makeEl("div", "profile-field");
    field.appendChild(makeEl("div", "profile-field__label", label));
    field.appendChild(makeEl("div", "profile-field__value", value));
    profile.appendChild(field);
  });
}

function renderKpis(subjects) {
  const work = subjects.filter((item) => item.source !== "rtu");
  const rtu = subjects.filter((item) => item.source === "rtu");
  const items = [
    ["Sujets en cours", work.filter((item) => !isClosedStatus(item.status)).length, "kpi--info"],
    ["Urgents", work.filter((item) => isUrgent(item.priority) && !isClosedStatus(item.status)).length, "kpi--warning"],
    ["En retard", work.filter((item) => isOverdue(item.date, item.status)).length, "kpi--danger"],
    ["RTU à compléter", rtu.filter((item) => item.rtuState?.completed < item.rtuState?.total).length, "kpi--success"]
  ];
  const bar = $("kpiBar");
  bar.replaceChildren();
  items.forEach(([label, value, className]) => {
    const card = makeEl("div", `kpi ${className}`);
    card.appendChild(makeEl("div", "kpi__label", label));
    card.appendChild(makeEl("div", "kpi__value", String(value)));
    bar.appendChild(card);
  });
}

function addBadge(container, value, className = "") {
  if (!value) return;
  container.appendChild(makeEl("span", `badge ${className}`.trim(), value));
}

function renderRtuCard(subject) {
  const card = makeEl("article", "subject-card subject-card--rtu");
  card.addEventListener("click", () => openDrawer(subject));
  const top = makeEl("div", "subject-top");
  const left = makeEl("div");
  left.appendChild(makeEl("div", "subject-title", subject.title));
  left.appendChild(makeEl("div", "subject-service", subject.service || "Service non renseigné"));
  top.appendChild(left);
  addBadge(top, subject.status || "Statut non renseigné", statusBadgeClass(subject.status));
  card.appendChild(top);

  const progress = makeEl("div", "rtu-progress");
  const line = makeEl("div", "rtu-progress__line");
  line.appendChild(makeEl("span", "", `${subject.rtuState.completed}/${subject.rtuState.total} domaines complets ou N.A`));
  line.appendChild(makeEl("span", "", `${subject.rtuState.percent}%`));
  progress.appendChild(line);
  const track = makeEl("div", "progress-track");
  const bar = makeEl("div", "progress-bar");
  bar.style.width = `${subject.rtuState.percent}%`;
  track.appendChild(bar);
  progress.appendChild(track);
  card.appendChild(progress);

  const domains = makeEl("div", "domain-grid");
  subject.rtuState.values.forEach(({ key, value }) => {
    addBadge(domains, `${DOMAIN_LABELS[key]} : ${value || "Non renseigné"}`, statusBadgeClass(value));
  });
  card.appendChild(domains);

  if (subject.description) card.appendChild(makeEl("div", "subject-description", truncate(subject.description, 210)));
  return card;
}

function renderWorkCard(subject) {
  const card = makeEl("article", `subject-card subject-card--${subject.source}`);
  card.addEventListener("click", () => openDrawer(subject));

  const top = makeEl("div", "subject-top");
  const left = makeEl("div");
  left.appendChild(makeEl("div", "subject-title", subject.title));
  left.appendChild(makeEl("div", "subject-service", subject.service || "Service non renseigné"));
  top.appendChild(left);
  addBadge(top, subject.status || "Statut non renseigné", statusBadgeClass(subject.status));
  card.appendChild(top);

  const badges = makeEl("div", "badges");
  addBadge(badges, subject.priority, priorityBadgeClass(subject.priority));
  addBadge(badges, subject.category);
  addBadge(badges, subject.caseType);
  addBadge(badges, subject.stage);
  card.appendChild(badges);

  if (subject.description) card.appendChild(makeEl("div", "subject-description", truncate(subject.description, 220)));

  const meta = makeEl("div", "subject-meta");
  const leftMeta = makeEl("div", "subject-meta__left");
  leftMeta.appendChild(makeEl("span", "subject-owner", subject.owner || "Porteur non renseigné"));
  const rightMeta = makeEl("div", "subject-meta__right");
  const date = formatDate(subject.date) || asText(subject.date);
  const label = subject.source === "conception" ? "MEP" : subject.source === "infra" ? "Demandé le" : "Échéance";
  if (date) rightMeta.appendChild(makeEl("span", isOverdue(subject.date, subject.status) ? "overdue" : "", `${label} ${date}`));
  meta.appendChild(leftMeta);
  meta.appendChild(rightMeta);
  card.appendChild(meta);
  return card;
}

function renderSourceList(sourceKey, subjects) {
  const list = $(`${sourceKey}List`);
  const count = $(`${sourceKey}Count`);
  list.replaceChildren();
  count.textContent = String(subjects.length);
  const table = runtimeTables[sourceKey];
  if (table?.error) {
    const error = makeEl("div", "empty-state error-state", table.error);
    list.appendChild(error);
    return;
  }
  if (!subjects.length) {
    list.appendChild(makeEl("div", "empty-state", "Aucun élément pour les filtres sélectionnés."));
    return;
  }
  subjects.forEach((subject) => list.appendChild(sourceKey === "rtu" ? renderRtuCard(subject) : renderWorkCard(subject)));
}

function renderDashboard() {
  const all = allSubjects();
  refreshFilterOptions(all.filter((subject) => rawMatchesSelectedService(subject.serviceRaw)));
  const subjects = activeSubjects();
  renderServiceProfile();
  renderKpis(subjects);
  ["rtu", "infra", "emm", "conception"].forEach((source) => {
    renderSourceList(source, subjects.filter((subject) => subject.source === source));
  });
}

function renderServiceDropdown(query = "") {
  const dropdown = $("serviceDropdown");
  dropdown.replaceChildren();
  const normalized = normalizeKey(query);
  const matches = services.filter((service) => normalizeKey(`${service.label} ${service.longName} ${service.department}`).includes(normalized)).slice(0, 80);
  if (!matches.length) {
    dropdown.appendChild(makeEl("div", "combo-empty", "Aucun service trouvé"));
    return;
  }
  matches.forEach((service, index) => {
    const button = makeEl("button", `combo-item ${index === serviceComboIndex ? "is-active" : ""}`.trim());
    button.type = "button";
    button.setAttribute("role", "option");
    const main = makeEl("span");
    main.appendChild(makeEl("span", "combo-item__name", service.label));
    if (service.longName) main.appendChild(makeEl("span", "combo-item__meta", service.longName));
    button.appendChild(main);
    button.appendChild(makeEl("span", "combo-item__meta", service.department));
    button.addEventListener("click", () => selectService(service));
    dropdown.appendChild(button);
  });
}

function openServiceDropdown() {
  serviceComboIndex = -1;
  renderServiceDropdown($("serviceSearch").value);
  $("serviceDropdown").classList.remove("hidden");
  $("serviceSearch").setAttribute("aria-expanded", "true");
}

function closeServiceDropdown() {
  $("serviceDropdown").classList.add("hidden");
  $("serviceSearch").setAttribute("aria-expanded", "false");
}

function selectService(service) {
  selectedService = service;
  $("serviceSearch").value = service.label;
  $("clearServiceBtn").classList.remove("hidden");
  closeServiceDropdown();
  renderDashboard();
}

function clearSelectedService() {
  selectedService = null;
  $("serviceSearch").value = "";
  $("clearServiceBtn").classList.add("hidden");
  closeServiceDropdown();
  renderDashboard();
}

function columnMeta(table, colId) {
  return table?.meta?.get(colId) || { colId, label: colId, type: "Any", isFormula: false };
}

function fieldOptions(subject, fieldKey) {
  const table = subject.table;
  const colId = table.columns[fieldKey];
  if (!colId) return [];
  return uniqueValues(table.rows.map((row) => asText(row[colId])));
}

function targetCatalog(kind) {
  return kind === "service" ? services : kind === "actor" ? actors : [];
}

function targetCatalogMap(kind) {
  return kind === "service" ? serviceById : kind === "actor" ? actorById : new Map();
}

function createDatalist(id, values) {
  const list = document.createElement("datalist");
  list.id = id;
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    list.appendChild(option);
  });
  return list;
}

function inferReferenceMode(metaType, raw, kind) {
  if (metaType.startsWith("RefList:")) return "refList";
  if (metaType.startsWith("Ref:")) return "ref";
  if (metaType === "ChoiceList") return "choiceList";
  if (typeof raw === "number" && targetCatalogMap(kind).has(Number(raw))) return "ref";
  if (Array.isArray(raw) && listValues(raw).some((item) => typeof item === "number")) return "refList";
  return "text";
}

function createReferenceControl(kind, raw, metaType, controlId) {
  const mode = inferReferenceMode(metaType, raw, kind);
  const catalog = targetCatalog(kind);
  if ((mode === "ref" || mode === "refList") && catalog.length) {
    const select = document.createElement("select");
    select.id = controlId;
    select.dataset.mode = mode;
    if (mode === "refList") select.multiple = true;
    if (mode === "ref") {
      const empty = document.createElement("option");
      empty.value = "";
      empty.textContent = "";
      select.appendChild(empty);
    }
    catalog.forEach((item) => {
      const option = document.createElement("option");
      option.value = String(item.id);
      option.textContent = item.label;
      select.appendChild(option);
    });
    const selected = new Set(listValues(raw).map((value) => String(value)));
    [...select.options].forEach((option) => { option.selected = selected.has(option.value); });
    return select;
  }

  const input = document.createElement("input");
  input.id = controlId;
  input.type = "text";
  input.dataset.mode = metaType === "ChoiceList" ? "choiceList" : "text";
  input.value = kind === "service" ? serviceLabel(raw) : kind === "actor" ? actorLabel(raw) : asText(raw);
  const datalistId = `${controlId}_list`;
  input.setAttribute("list", datalistId);
  input._datalist = createDatalist(datalistId, catalog.map((item) => item.label));
  return input;
}

function createControl(subject, field, colId, raw, meta) {
  const controlId = `field_${subject.source}_${field.key}`;
  let control;
  const type = meta.type || "Any";

  if (field.kind === "service" || field.kind === "actor") {
    control = createReferenceControl(field.kind, raw, type, controlId);
  } else if (field.kind === "textarea") {
    control = document.createElement("textarea");
    control.id = controlId;
    control.value = asText(raw);
  } else if (field.kind === "date" && (type === "Date" || type === "DateTime" || dateToISO(raw))) {
    control = document.createElement("input");
    control.id = controlId;
    control.type = "date";
    control.value = dateToISO(raw);
    control.dataset.mode = "date";
  } else {
    control = document.createElement("input");
    control.id = controlId;
    control.type = "text";
    control.value = asText(raw);
    if (field.kind === "choice") {
      const listId = `${controlId}_list`;
      control.setAttribute("list", listId);
      control._datalist = createDatalist(listId, fieldOptions(subject, field.key));
    }
  }

  control.dataset.colId = colId;
  control.dataset.fieldKey = field.key;
  control.dataset.metaType = type;
  control.dataset.kind = field.kind || "text";
  control.dataset.original = JSON.stringify(comparableValue(raw, type, field.kind));
  if (field.readonly || meta.isFormula) control.disabled = true;
  return control;
}

function comparableValue(value, type, kind) {
  if (kind === "date" || type === "Date" || type === "DateTime") return dateToISO(value);
  if (type.startsWith("RefList:") || type === "ChoiceList") return listValues(value).map((item) => String(item));
  if (type.startsWith("Ref:")) return value ? Number(value) : 0;
  if (kind === "service") return serviceLabel(value);
  if (kind === "actor") return actorLabel(value);
  return asText(value);
}

function controlValue(control) {
  const type = control.dataset.metaType || "Any";
  const kind = control.dataset.kind || "text";
  const mode = control.dataset.mode || "";
  if (control.tagName === "SELECT" && control.multiple) {
    const values = [...control.selectedOptions].map((option) => Number(option.value));
    return type.startsWith("RefList:") ? ["L", ...values] : type === "ChoiceList" ? ["L", ...values.map(String)] : values;
  }
  if (control.tagName === "SELECT" && (mode === "ref" || type.startsWith("Ref:"))) return control.value ? Number(control.value) : 0;
  if (mode === "choiceList" || type === "ChoiceList") {
    return ["L", ...control.value.split(/[,;\n]+/).map((value) => value.trim()).filter(Boolean)];
  }
  if (control.type === "date" || kind === "date" || type === "Date" || type === "DateTime") return control.value || null;
  if ((kind === "service" || kind === "actor") && type.startsWith("Ref:")) {
    const catalog = targetCatalog(kind);
    const found = catalog.find((item) => normalizeKey(item.label) === normalizeKey(control.value));
    return found ? found.id : 0;
  }
  return control.value;
}

function openDrawer(subject) {
  activeSubject = subject;
  $("drawerSource").textContent = TABLE_DEFS[subject.source].sourceLabel;
  $("drawerTitle").textContent = subject.title;
  $("drawerSubtitle").textContent = [subject.service, subject.category].filter(Boolean).join(" · ");
  $("drawerMeta").textContent = `${TABLE_DEFS[subject.source].label} · ligne ${subject.rowId}`;

  const form = $("editForm");
  form.replaceChildren();
  const layout = EDIT_LAYOUTS[subject.source] || [];
  layout.forEach((group) => {
    const section = makeEl("section", "form-section");
    section.appendChild(makeEl("h3", "", group.title));
    const grid = makeEl("div", "form-grid");
    group.fields.forEach((field) => {
      const colId = subject.table.columns[field.key];
      if (!colId) return;
      const raw = subject.rawRow[colId];
      const meta = columnMeta(subject.table, colId);
      const wrapper = makeEl("div", `form-field ${field.full ? "form-field--full" : ""}`.trim());
      const label = document.createElement("label");
      label.textContent = field.label;
      wrapper.appendChild(label);
      const control = createControl(subject, field, colId, raw, meta);
      label.setAttribute("for", control.id);
      wrapper.appendChild(control);
      if (control._datalist) wrapper.appendChild(control._datalist);
      if (meta.isFormula) wrapper.appendChild(makeEl("small", "", "Colonne calculée dans Grist — consultation uniquement."));
      grid.appendChild(wrapper);
    });
    section.appendChild(grid);
    form.appendChild(section);
  });

  $("drawerBackdrop").classList.remove("hidden");
  $("drawer").classList.add("is-open");
  $("drawer").setAttribute("aria-hidden", "false");
}

function closeDrawer() {
  activeSubject = null;
  $("drawer").classList.remove("is-open");
  $("drawer").setAttribute("aria-hidden", "true");
  $("drawerBackdrop").classList.add("hidden");
}

function currentTimestampForColumn(table, colId) {
  const type = columnMeta(table, colId).type || "";
  return type === "DateTime" ? nowISO() : todayISO();
}

async function saveActiveSubject() {
  if (!activeSubject) return;
  const changed = {};
  $("editForm").querySelectorAll("[data-col-id]").forEach((control) => {
    if (control.disabled) return;
    const original = JSON.parse(control.dataset.original || "null");
    const value = controlValue(control);
    const comparable = comparableValue(value, control.dataset.metaType, control.dataset.kind);
    if (JSON.stringify(original) !== JSON.stringify(comparable)) changed[control.dataset.colId] = value;
  });

  const table = activeSubject.table;
  if (activeSubject.source === "emm" && table.columns.modifiedAt) {
    changed[table.columns.modifiedAt] = currentTimestampForColumn(table, table.columns.modifiedAt);
  }
  if (activeSubject.source === "conception") {
    if (table.columns.status && Object.prototype.hasOwnProperty.call(changed, table.columns.status) && table.columns.statusTimestamp) {
      changed[table.columns.statusTimestamp] = currentTimestampForColumn(table, table.columns.statusTimestamp);
    }
    if (table.columns.stage && Object.prototype.hasOwnProperty.call(changed, table.columns.stage) && table.columns.stageTimestamp) {
      changed[table.columns.stageTimestamp] = currentTimestampForColumn(table, table.columns.stageTimestamp);
    }
  }

  if (!Object.keys(changed).length) {
    showToast("Aucune modification à enregistrer");
    return;
  }

  try {
    await grist.docApi.applyUserActions([
      ["UpdateRecord", activeSubject.tableId, activeSubject.rowId, changed]
    ], { parseStrings: true });
    showToast("Modifications enregistrées");
    closeDrawer();
    await loadAll();
  } catch (error) {
    console.error(error);
    showToast(error.message || "Erreur lors de l’enregistrement");
  }
}

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.remove("hidden");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.add("hidden"), 3200);
}

function requiredTablesMissing() {
  return ["services", "rtu", "infra", "emm", "conception"]
    .filter((key) => runtimeTables[key]?.missing || !runtimeTables[key]?.tableId);
}

function renderSetupBanner() {
  const banner = $("setupBanner");
  const title = $("setupTitle");
  const text = $("setupText");
  const detail = $("setupDetail");
  if (!banner) return;

  const missing = requiredTablesMissing();
  const accessIsInsufficient = currentAccessLevel !== "unknown" && currentAccessLevel !== "full";
  if (!accessIsInsufficient && !missing.length && !lastGlobalError) {
    banner.classList.add("hidden");
    return;
  }

  banner.classList.remove("hidden");
  if (accessIsInsufficient) {
    title.textContent = "Accès complet au document requis";
    text.textContent = "Ce dashboard consolide plusieurs tables. Dans le panneau de création Grist, choisissez « Full document access / Accès complet au document », puis rechargez le widget.";
    detail.textContent = `Niveau d’accès actuel : ${currentAccessLevel || "non détecté"}`;
  } else if (lastGlobalError) {
    title.textContent = "Impossible de charger les données Grist";
    text.textContent = "Le widget est bien affiché, mais l’API Grist a retourné une erreur. Vérifiez l’accès complet, puis ouvrez la configuration des tables.";
    detail.textContent = lastGlobalError;
  } else {
    title.textContent = "Configuration des tables nécessaire";
    text.textContent = "Le mapping natif Grist n’apparaît pas pour ce widget multi-tables : c’est normal. Utilisez le bouton « Configurer les tables » ci-dessous pour associer chaque source à son identifiant technique.";
    detail.textContent = `Tables à configurer : ${missing.map((key) => TABLE_DEFS[key].label).join(", ")}`;
  }
}

function tableDiagnosticText() {
  return Object.entries(TABLE_DEFS).map(([key, def]) => {
    const table = runtimeTables[key];
    if (!table) return `${def.label} : non chargée`;
    if (table.error) return `${def.label} : ${table.error}`;
    if (!table.tableId) return `${def.label} : introuvable`;
    const matched = Object.entries(table.columns || {}).filter(([, colId]) => Boolean(colId)).length;
    const total = Object.keys(def.fields || {}).length;
    return `${def.label} : ${table.tableId} (${table.rows.length} ligne(s), ${matched}/${total} colonnes reconnues)`;
  }).join("\n");
}

async function loadAll() {
  const sequence = ++loadSequence;
  document.body.classList.add("loading");
  lastGlobalError = "";
  try {
    if (currentAccessLevel !== "unknown" && currentAccessLevel !== "full") {
      runtimeTables = {};
      services = [];
      actors = [];
      renderDashboard();
      renderSetupBanner();
      return;
    }
    if (!allTableIds.length) {
      try { allTableIds = await grist.docApi.listTables(); } catch (_) { allTableIds = []; }
    }
    await loadMetadata();
    const keys = Object.keys(TABLE_DEFS);
    const loaded = await Promise.all(keys.map(loadOneTable));
    if (sequence !== loadSequence) return;
    runtimeTables = Object.fromEntries(loaded.map((table) => [table.key, table]));
    loadCatalogs();
    if (selectedService && !serviceById.has(selectedService.id)) selectedService = null;
    $("lastRefresh").textContent = `Actualisé à ${new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}`;
    renderDashboard();
    renderSetupBanner();
    const missing = requiredTablesMissing();
    if (missing.length && !setupAutoOpened) {
      setupAutoOpened = true;
      setTimeout(openSettings, 150);
    }
  } catch (error) {
    console.error(error);
    lastGlobalError = error.message || String(error);
    renderSetupBanner();
    showToast(error.message || "Erreur de chargement du dashboard");
  } finally {
    document.body.classList.remove("loading");
  }
}

function openSettings() {
  populateSettings();
  const diag = $("settingsDiagnostic");
  if (diag) diag.textContent = tableDiagnosticText();
  $("settingsBackdrop").classList.remove("hidden");
  $("settingsModal").classList.remove("hidden");
  $("settingsModal").setAttribute("aria-hidden", "false");
}

function closeSettings() {
  $("settingsBackdrop").classList.add("hidden");
  $("settingsModal").classList.add("hidden");
  $("settingsModal").setAttribute("aria-hidden", "true");
}

function populateSettings() {
  const container = $("settingsFields");
  container.replaceChildren();
  Object.entries(TABLE_DEFS).forEach(([key, def]) => {
    const wrapper = makeEl("div", "settings-field");
    const label = document.createElement("label");
    label.textContent = def.label;
    const current = widgetOptions.tableIds?.[key] || runtimeTables[key]?.tableId || "";
    let control;
    if (allTableIds.length) {
      const select = document.createElement("select");
      select.id = `setting_${key}`;
      const blank = document.createElement("option");
      blank.value = "";
      blank.textContent = "Détection automatique";
      select.appendChild(blank);
      allTableIds.filter((id) => !id.startsWith("_grist_")).forEach((id) => {
        const option = document.createElement("option");
        option.value = id;
        option.textContent = id;
        select.appendChild(option);
      });
      if (current && ![...select.options].some((option) => option.value === current)) {
        const option = document.createElement("option");
        option.value = current;
        option.textContent = current;
        select.appendChild(option);
      }
      select.value = current;
      control = select;
    } else {
      const input = document.createElement("input");
      input.id = `setting_${key}`;
      input.type = "text";
      input.placeholder = "Identifiant technique de la table";
      input.value = current;
      control = input;
    }
    const diagnostic = makeEl("div", "settings-diagnostic");
    const table = runtimeTables[key];
    diagnostic.textContent = table?.error || (table?.tableId ? `${table.rows.length} ligne(s) détectée(s)` : "Non détectée");
    wrapper.appendChild(label);
    wrapper.appendChild(control);
    wrapper.appendChild(diagnostic);
    container.appendChild(wrapper);
  });
}

async function saveSettings() {
  const tableIds = {};
  Object.keys(TABLE_DEFS).forEach((key) => {
    const value = $(`setting_${key}`)?.value;
    if (value) tableIds[key] = value;
  });
  try {
    await grist.setOption("tableIds", tableIds);
    widgetOptions.tableIds = tableIds;
    setupAutoOpened = false;
    showToast("Configuration enregistrée");
    closeSettings();
    await loadAll();
  } catch (error) {
    showToast(error.message || "Erreur lors de l’enregistrement de la configuration");
  }
}

async function autoDetectSettings() {
  const detected = {};
  for (const [key, def] of Object.entries(TABLE_DEFS)) {
    const tableId = await findTableId(def, null);
    if (tableId) detected[key] = tableId;
  }
  Object.entries(detected).forEach(([key, tableId]) => {
    const select = $(`setting_${key}`);
    if (select) select.value = tableId;
  });
  showToast("Détection automatique terminée");
}

function bindEvents() {
  $("refreshBtn").addEventListener("click", loadAll);
  $("settingsBtn").addEventListener("click", openSettings);
  $("setupConfigBtn").addEventListener("click", openSettings);
  $("closeSettingsBtn").addEventListener("click", closeSettings);
  $("settingsBackdrop").addEventListener("click", closeSettings);
  $("saveSettingsBtn").addEventListener("click", saveSettings);
  $("autoDetectBtn").addEventListener("click", autoDetectSettings);
  $("closeDrawerBtn").addEventListener("click", closeDrawer);
  $("drawerBackdrop").addEventListener("click", closeDrawer);
  $("saveBtn").addEventListener("click", saveActiveSubject);

  $("serviceSearch").addEventListener("focus", openServiceDropdown);
  $("serviceSearch").addEventListener("input", (event) => {
    const hadSelection = Boolean(selectedService);
    if (selectedService && event.target.value !== selectedService.label) selectedService = null;
    if (hadSelection && !selectedService) renderDashboard();
    serviceComboIndex = -1;
    renderServiceDropdown(event.target.value);
    $("serviceDropdown").classList.remove("hidden");
    $("clearServiceBtn").classList.toggle("hidden", !event.target.value);
  });
  $("serviceSearch").addEventListener("keydown", (event) => {
    const items = [...$("serviceDropdown").querySelectorAll(".combo-item")];
    if (event.key === "ArrowDown" && items.length) {
      event.preventDefault();
      serviceComboIndex = Math.min(serviceComboIndex + 1, items.length - 1);
      renderServiceDropdown(event.target.value);
    } else if (event.key === "ArrowUp" && items.length) {
      event.preventDefault();
      serviceComboIndex = Math.max(serviceComboIndex - 1, 0);
      renderServiceDropdown(event.target.value);
    } else if (event.key === "Enter" && items.length) {
      event.preventDefault();
      items[Math.max(serviceComboIndex, 0)].click();
    } else if (event.key === "Escape") closeServiceDropdown();
  });
  $("clearServiceBtn").addEventListener("click", clearSelectedService);

  $("globalSearch").addEventListener("input", (event) => { filters.search = event.target.value; renderDashboard(); });
  $("statusFilter").addEventListener("change", (event) => { filters.status = event.target.value; renderDashboard(); });
  $("priorityFilter").addEventListener("change", (event) => { filters.priority = event.target.value; renderDashboard(); });
  $("hideClosedToggle").addEventListener("change", (event) => { filters.hideClosed = event.target.checked; renderDashboard(); });

  document.addEventListener("click", (event) => {
    if (!$("servicePicker").contains(event.target)) closeServiceDropdown();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeServiceDropdown();
      if ($("drawer").classList.contains("is-open")) closeDrawer();
      if (!$("settingsModal").classList.contains("hidden")) closeSettings();
    }
  });
}

bindEvents();
initialLoadStarted = true;
setTimeout(loadAll, optionsReceived ? 0 : 250);
setInterval(() => {
  if (!$("drawer").classList.contains("is-open") && $("settingsModal").classList.contains("hidden")) loadAll();
}, 60000);
