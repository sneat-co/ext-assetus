import { Totals } from '@sneat/space-models';
import { InjectionToken } from '@angular/core';

var AssetPage;
(function (AssetPage) {
    AssetPage["asset"] = "asset";
})(AssetPage || (AssetPage = {}));

// Car make/model reference data — ported faithfully from the legacy
// legacy mod-assetus-core (core/src/lib/data: car-makes-with-models.ts +
// vehicles.ts). The new lib's components (make-model-card, vehicle-card) consume
// `carMakes` and the public `IMake`/`IModel` shapes; nothing is dropped relative
// to the legacy export surface.
// engines mirrors the legacy default engine list (data/vehicles.ts).
const engines = [
    { title: 'Petrol 1L', engineCC: 999, engineFuel: 'petrol' },
    { title: 'Petrol 1.6L', engineCC: 1599, engineFuel: 'petrol' },
    { title: 'Diesel 2L', engineCC: 1999, engineFuel: 'diesel' },
];
// carMakes mirrors the legacy data/car-makes-with-models.ts table verbatim.
const carMakes = {
    Audi: {
        models: [
            { id: 'A1', engines },
            { id: 'A2', engines },
            { id: 'A3', engines },
            { id: 'A4', engines },
            { id: 'A5', engines },
            { id: 'A6', engines },
            { id: 'A7', engines },
            { id: 'A8', engines },
            { id: 'S4', engines },
            { id: 'S6', engines },
            { id: 'S8', engines },
            { id: 'Q3', engines },
            { id: 'Q5', engines },
            { id: 'Q7', engines },
        ],
    },
    BMW: {
        models: [
            { id: '1 Series', engines },
            { id: '2 Series', engines },
            { id: '3 Series Saloon', engines },
            { id: '3 Series Touring', engines },
            { id: '3 Series Gran Tourismo', engines },
            { id: '4 Series', engines },
            { id: '5 Series', engines },
            { id: '6 Series', engines },
            { id: '7 Series', engines },
            { id: '8 Series', engines },
            { id: 'i3', engines },
            { id: 'i8 Coupe', engines },
            { id: 'i8 Roadster', engines },
            { id: 'X1', engines },
            { id: 'X2', engines },
            { id: 'X3', engines },
            { id: 'X4', engines },
            { id: 'X5', engines },
            { id: 'X6', engines },
            { id: 'X7', engines },
            { id: 'z3', engines },
            { id: 'z4', engines },
            { id: 'z5', engines },
        ],
    },
    Toyota: {
        models: [
            { id: 'Avensis', engines },
            { id: 'Auris', engines },
            { id: 'Aygo', engines },
            { id: 'GR', engines },
            { id: 'GT86', engines },
            { id: 'C-HR', engines },
            { id: 'Camry', engines },
            { id: 'Corolla', engines },
            { id: 'Hilux', engines },
            { id: 'Prius', engines },
            { id: 'Prius+', engines },
            { id: 'Proace', engines },
            { id: 'Proace Verso', engines },
            { id: 'RAV4', engines },
            { id: 'Yaris', engines },
        ],
    },
    Tesla: {
        yearMin: 2001,
        models: [
            {
                id: 'Model 3',
                yearMin: 2017,
                engines: [{ title: '90KW', engineFuel: 'electricity' }],
            },
            {
                id: 'Model S',
                engines: [{ title: '90KW', engineFuel: 'electricity' }],
            },
            {
                id: 'Model X',
                engines: [{ title: '90KW', engineFuel: 'electricity' }],
            },
        ],
    },
    Hyundai: {
        yearMin: 1900,
        models: [
            { id: 'Kona', engines: [] },
            { id: 'Tuscan', engines: [] },
        ],
    },
};

// Asset domain model — mirrors the Go backend
// (github.com/sneat-co/assetus/backend). Assetus is OWNERSHIP-ONLY: there is no
// sharing/availability/borrow/lend field and no ext.yardius.
// Legacy possession companions — ported from legacy mod-assetus-core
// (core/src/lib/dto/assetus-types.ts). AssetPossessions is the ordered option
// list the possession-card binds (owning/renting/leasing/undisclosed).
const AssetPossessionUndisclosed = 'undisclosed';
const AssetPossessionOwning = 'owning';
const AssetPossessionRenting = 'renting';
const AssetPossessionLeasing = 'leasing';
const AssetPossessions = [
    AssetPossessionOwning,
    AssetPossessionRenting,
    AssetPossessionLeasing,
    AssetPossessionUndisclosed,
];
// Legacy engine/fuel companions — ported faithfully from
// legacy mod-assetus-core (core/src/lib/dto/assetus-types.ts) so the migrated
// vehicle components keep their exact const/enum-member references. Values match
// the EngineType/FuelType unions above.
const EngineTypeUnknown = '';
const EngineTypeOther = 'other';
const EngineTypePHEV = 'phev';
const EngineTypeCombustion = 'combustion';
const EngineTypeElectric = 'electric';
const EngineTypeHybrid = 'hybrid';
const EngineTypeSteam = 'steam';
var EngineTypes;
(function (EngineTypes) {
    EngineTypes["unknown"] = "";
    EngineTypes["other"] = "other";
    EngineTypes["phev"] = "phev";
    EngineTypes["combustion"] = "combustion";
    EngineTypes["electric"] = "electric";
    EngineTypes["hybrid"] = "hybrid";
    EngineTypes["steam"] = "steam";
})(EngineTypes || (EngineTypes = {}));
const FuelTypeUnknown = '';
const FuelTypeOther = 'other';
const FuelTypePetrol = 'petrol';
const FuelTypeDiesel = 'diesel';
const FuelTypeHydrogen = 'hydrogen';
const FuelTypeElectricity = 'electricity';
var FuelTypes;
(function (FuelTypes) {
    FuelTypes["unknown"] = "";
    FuelTypes["other"] = "other";
    FuelTypes["petrol"] = "petrol";
    FuelTypes["diesel"] = "diesel";
    FuelTypes["hydrogen"] = "hydrogen";
    FuelTypes["electricity"] = "electricity";
})(FuelTypes || (FuelTypes = {}));
// Legacy unit lists — ported from legacy mod-assetus-core
// (core/src/lib/dto/assetus-types.ts). The migrated mileage dialog binds these
// directly as its select-option source.
const FuelVolumeUnitTypes = ['l', 'g'];
const MileageUnitTypes = ['km', 'mile'];
const CurrencyUSD = 'USD';
const CurrencyEUR = 'EUR';
const CurrencyList = [CurrencyUSD, CurrencyEUR];
const titleize = (s) => s
    .split('_')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
function options(values) {
    return values.map((value) => ({ value, label: titleize(value) }));
}
const assetCategories = [
    'books',
    'games',
    'toys',
    'sports_equipment',
    'tools',
    'electronics',
    'appliances',
    'clothing',
    'vehicles',
    'camping_equipment',
    'other',
    'dwelling',
    'document',
    'debt',
    'utility',
    'valuables',
    'digital_asset',
];
const assetConditions = [
    'new',
    'excellent',
    'good',
    'fair',
    'needs_repair',
    'broken',
];
const assetVisibilities = [
    'private',
    'family',
    'friends',
    'friends_of_friends',
    'specific_space',
    'public',
];
const categoryOptions = options(assetCategories);
const conditionOptions = options(assetConditions);
const visibilityOptions = options(assetVisibilities);
// --- Derivations matching the backend ---
// The default visibility a new asset inherits from its owning space type:
// private→private, family→family, everything else→specific_space.
function defaultVisibilityForSpaceType(spaceType) {
    switch (spaceType) {
        case 'private':
            return 'private';
        case 'family':
            return 'family';
        default:
            return 'specific_space';
    }
}
// Derives the OwnerType from the owning space type. Mirrors the backend's
// read-only derivation.
function deriveOwnerType(spaceType) {
    switch (spaceType) {
        case 'private':
            return 'individual';
        case 'family':
            return 'family';
        case 'sports_club':
            return 'sports_club';
        case 'community':
            return 'community';
        case 'school':
            return 'school';
        default:
            return 'organisation';
    }
}

// Polymorphic typed asset extras — mirror the Go backend
// (github.com/sneat-co/assetus/backend/extras4assetus + dbo4assetus).
//
// An asset's typed extra is resolved by its `extraType` discriminator
// (extra.WithExtraField on the backend). No field is dropped relative to the
// backend wire contract; an asset with no extra stays valid.
const assetExtraTypeVehicle = 'vehicle';
const assetExtraTypeDwelling = 'dwelling';
const assetExtraTypeDocument = 'document';
const assetExtraTypeAppliance = 'appliance';
const assetExtraTypeElectronics = 'electronics';
const assetExtraTypeUtility = 'utility';
const assetExtraTypeValuable = 'valuable';
const assetExtraTypeDigitalAsset = 'digital_asset';
const assetExtraTypeSportsEquipment = 'sports_equipment';
const bicycleKinds = [
    'road',
    'mountain',
    'e_bike',
    'kids',
    'hybrid',
    'gravel',
    'other',
];
// standardDocTypesByID is the per-doc-type validation schema mirroring the
// backend standardDocTypesByID. Passport and driving_license require
// number + validity (validTill); marriage_cert/birth_cert require
// number + issuedOn and exclude validity (marriage_cert allows up to 2 members).
const standardDocTypesByID = {
    other: {
        id: 'other',
        fields: {
            title: { required: true },
        },
    },
    passport: {
        id: 'passport',
        fields: {
            number: { required: true },
            validTill: { required: true },
            members: { max: 1 },
        },
    },
    driving_license: {
        id: 'driving_license',
        fields: {
            number: { required: true },
            validTill: { required: true },
            members: { max: 1 },
        },
    },
    // Insurance policy / contract — the Assetus side of the ReQuoter car re-quote:
    // policy number + insurer (issuedBy) + expiry (validTill), which drives the
    // renewal reminder and the re-quote prompt.
    insurance: {
        id: 'insurance',
        fields: {
            number: { required: true },
            issuedBy: {},
            validTill: { required: true },
            members: { max: 1 },
        },
    },
    // Home / contents insurance — covers a dwelling (coversAssetID). Yearly renewal.
    home_insurance: {
        id: 'home_insurance',
        fields: {
            number: { required: true },
            issuedBy: {},
            validTill: { required: true },
        },
    },
    // Life / critical-illness — covers a person; validity optional (whole-life).
    life_insurance: {
        id: 'life_insurance',
        fields: {
            number: { required: true },
            issuedBy: {},
        },
    },
    // Warranty — covers another asset (coversAssetID); the end date is required.
    warranty: {
        id: 'warranty',
        fields: {
            issuedBy: {},
            validTill: { required: true },
        },
    },
    birth_cert: {
        id: 'birth_cert',
        fields: {
            number: { required: true },
            issuedBy: {},
            issuedOn: { required: true },
            validTill: { exclude: true },
            members: { max: 1 },
        },
    },
    marriage_cert: {
        id: 'marriage_cert',
        fields: {
            number: { required: true },
            issuedBy: {},
            issuedOn: { required: true },
            validTill: { exclude: true },
            members: { max: 2 },
        },
    },
};
// docTypeSchema returns the validation schema for a document type, or undefined
// when the document type imposes no standard schema (mirrors the backend
// DocTypeSchema lookup).
function docTypeSchema(docType) {
    if (!docType) {
        return undefined;
    }
    return standardDocTypesByID[docType];
}

// Asset-group DTO — ported faithfully from legacy legacy mod-assetus-core
// (core/src/lib/dto/dto-asset.ts: IAssetDtoGroup + IAssetDtoGroupCounts). The new
// lib already carries an IAssetGroupInfo (the backend AssetGroupInfo projection);
// IAssetDtoGroup is the legacy UI-facing group DTO the asset-group page binds to.
// Kept as a distinct named export so consumers migrate without losing fields.

// Typed response shapes for the Assetus → ReQuoter read surface. They mirror the
// Go backend DTOs (dto4assetus) exactly so ReQuoter/Formius can type the
// responses of the assetus read endpoints. See docs/requoter-integration.md.

// Mirrors backend dto4assetus.Renewals* — the unified upcoming-renewals feed
// (GET /v0/assetus/renewals). A Calendarius sync turns each item into a
// renewal happening (recurring/yearly when period === 'yearly').

// AssetGroup uimodel — ported faithfully from legacy legacy mod-assetus-core
// (core/src/lib/uimodels/asset-group.ts). Wraps an IAssetGroupContext and exposes
// the group's id, totals and counts. Consumed by budgetus.
class AssetGroup {
    context;
    totals;
    constructor(context) {
        this.context = context;
        this.totals = new Totals(context.dbo?.totals);
    }
    get id() {
        return this.context.id;
    }
    get numberOf() {
        return this.context.dbo?.numberOf || {};
    }
}

const ASSET_SERVICE = new InjectionToken('AssetService');

/**
 * Generated bundle index. Do not edit.
 */

export { ASSET_SERVICE, AssetGroup, AssetPage, AssetPossessionLeasing, AssetPossessionOwning, AssetPossessionRenting, AssetPossessionUndisclosed, AssetPossessions, CurrencyEUR, CurrencyList, CurrencyUSD, EngineTypeCombustion, EngineTypeElectric, EngineTypeHybrid, EngineTypeOther, EngineTypePHEV, EngineTypeSteam, EngineTypeUnknown, EngineTypes, FuelTypeDiesel, FuelTypeElectricity, FuelTypeHydrogen, FuelTypeOther, FuelTypePetrol, FuelTypeUnknown, FuelTypes, FuelVolumeUnitTypes, MileageUnitTypes, assetCategories, assetConditions, assetExtraTypeAppliance, assetExtraTypeDigitalAsset, assetExtraTypeDocument, assetExtraTypeDwelling, assetExtraTypeElectronics, assetExtraTypeSportsEquipment, assetExtraTypeUtility, assetExtraTypeValuable, assetExtraTypeVehicle, assetVisibilities, bicycleKinds, carMakes, categoryOptions, conditionOptions, defaultVisibilityForSpaceType, deriveOwnerType, docTypeSchema, engines, standardDocTypesByID, visibilityOptions };
//# sourceMappingURL=sneat-extension-assetus-contract.mjs.map
