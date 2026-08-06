import { EnumAsUnionOfKeys, INavContext } from '@sneat/core';
import { ISpaceItemNavContext, Totals, ISpaceContext } from '@sneat/space-models';
import { ITitledRecord, CountryId, IWithSpaceIDs, ITotalsHolder } from '@sneat/dto';
import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

declare const enum AssetPage {
    asset = "asset"
}
type AssetPages = EnumAsUnionOfKeys<typeof AssetPage>;

type AssetCategory = 'books' | 'games' | 'toys' | 'sports_equipment' | 'tools' | 'electronics' | 'appliances' | 'clothing' | 'vehicles' | 'camping_equipment' | 'other' | 'dwelling' | 'document' | 'debt' | 'utility' | 'valuables' | 'digital_asset';
type AssetCondition = 'new' | 'excellent' | 'good' | 'fair' | 'needs_repair' | 'broken';
type AssetStatus = 'draft' | 'active' | 'transferred' | 'archived' | 'disposed' | 'lost';
type AssetPossession = 'unknown' | 'undisclosed' | 'owning' | 'leasing' | 'renting';
declare const AssetPossessionUndisclosed: AssetPossession;
declare const AssetPossessionOwning: AssetPossession;
declare const AssetPossessionRenting: AssetPossession;
declare const AssetPossessionLeasing: AssetPossession;
declare const AssetPossessions: AssetPossession[];
type AssetVehicleType = 'aircraft' | 'boat' | 'bus' | 'car' | 'helicopter' | 'motorcycle' | 'truck' | 'van';
type AssetDwellingType = 'apartment' | 'house' | 'office' | 'shop' | 'land' | 'garage' | 'warehouse';
type AssetRealEstateType = 'house' | 'apartment' | 'land';
type AssetSportsEquipmentType = 'bicycle' | 'kite' | 'kite_bar' | 'kite_board' | 'kite_hydrofoil' | 'prone_hydrofoil' | 'surf_board' | 'wetsuit' | 'wing' | 'wing_board' | 'wing_hydrofoil';
type AssetDocumentType = 'passport' | 'id_card' | 'driving_license' | 'insurance' | 'home_insurance' | 'life_insurance' | 'warranty' | 'marriage_cert' | 'birth_cert';
type AssetElectronicsType = 'laptop' | 'desktop' | 'phone' | 'tablet' | 'camera' | 'tv' | 'monitor' | 'console' | 'audio' | 'wearable' | 'printer' | 'networking' | 'other_electronics';
type AssetApplianceType = 'boiler' | 'washing_machine' | 'dishwasher' | 'fridge' | 'freezer' | 'oven' | 'cooker' | 'hvac' | 'water_heater' | 'dryer' | 'microwave' | 'vacuum' | 'other_appliance';
type AssetUtilityType = 'electricity' | 'gas' | 'water' | 'broadband' | 'mobile' | 'tv' | 'streaming' | 'waste' | 'other_utility';
type AssetValuableType = 'jewelry' | 'watch' | 'art' | 'collectible' | 'antique' | 'other_valuable';
type AssetDigitalAssetType = 'domain' | 'software_license' | 'digital_collectible' | 'other_digital';
type AssetType = AssetVehicleType | AssetDwellingType | AssetSportsEquipmentType | AssetDocumentType | AssetElectronicsType | AssetApplianceType | AssetUtilityType | AssetValuableType | AssetDigitalAssetType | string;
type EngineType = '' | 'other' | 'combustion' | 'electric' | 'phev' | 'hybrid' | 'steam';
type FuelType = '' | 'other' | 'bio' | 'petrol' | 'diesel' | 'hydrogen';
declare const EngineTypeUnknown = "";
declare const EngineTypeOther = "other";
declare const EngineTypePHEV = "phev";
declare const EngineTypeCombustion = "combustion";
declare const EngineTypeElectric = "electric";
declare const EngineTypeHybrid = "hybrid";
declare const EngineTypeSteam = "steam";
declare enum EngineTypes {
    unknown = "",
    other = "other",
    phev = "phev",
    combustion = "combustion",
    electric = "electric",
    hybrid = "hybrid",
    steam = "steam"
}
declare const FuelTypeUnknown = "";
declare const FuelTypeOther = "other";
declare const FuelTypePetrol = "petrol";
declare const FuelTypeDiesel = "diesel";
declare const FuelTypeHydrogen = "hydrogen";
declare const FuelTypeElectricity = "electricity";
declare enum FuelTypes {
    unknown = "",
    other = "other",
    petrol = "petrol",
    diesel = "diesel",
    hydrogen = "hydrogen",
    electricity = "electricity"
}
type FuelVolumeUnit = 'l' | 'g' | string;
type MileageUnit = 'km' | 'mile' | string;
declare const FuelVolumeUnitTypes: FuelVolumeUnit[];
declare const MileageUnitTypes: MileageUnit[];
type CurrencyCode = 'USD' | 'EUR';
declare const CurrencyUSD: CurrencyCode;
declare const CurrencyEUR: CurrencyCode;
declare const CurrencyList: CurrencyCode[];
type AssetVisibility = 'private' | 'family' | 'friends' | 'friends_of_friends' | 'specific_space' | 'public';
type OwnerType = 'individual' | 'family' | 'sports_club' | 'community' | 'school' | 'organisation';
type HistoryEventType = 'purchased' | 'repaired' | 'transferred' | 'sold' | 'donated' | 'lost';
interface IMoney {
    currency: string;
    value: number;
}
interface IOwner {
    spaceID: string;
    spaceType: string;
    ownerType: OwnerType;
}
interface IGeoPoint {
    lat: number;
    lng: number;
}
interface IAssetDates {
    dateOfBuild?: string;
    dateOfPurchase?: string;
    dateInsuredTill?: string;
    dateCertifiedTill?: string;
}
interface ISubAssetInfo extends ITitledRecord {
    type: AssetCategory;
    countryID?: CountryId;
    subType?: string;
    expires?: string;
}
interface IAssetGroupCounts {
    assets?: number;
}
interface IAssetGroupInfo extends ITitledRecord {
    order?: number;
    desc?: string;
    categoryID?: AssetCategory;
    numberOf?: IAssetGroupCounts;
    totals?: IMoney[];
}
interface IAssetusSpaceBrief {
    assets?: Record<string, IAssetBrief>;
}
interface IWithAssetSpaces {
    spaces?: Record<string, IAssetusSpaceBrief>;
}
interface IAssetLiabilityInfo {
    id: string;
    serviceTypes?: string[];
}
interface IAssetBrief {
    id: string;
    name: string;
    category: AssetCategory;
    condition: AssetCondition;
    status: AssetStatus;
    visibility: AssetVisibility;
}
interface IAssetDbo extends IAssetBrief, IWithSpaceIDs, IWithAssetSpaces {
    description?: string;
    acquisitionDate?: string;
    purchasePrice?: IMoney;
    estimatedValue?: IMoney;
    location?: string;
    notes?: string;
    tags?: string[];
    photos?: string[];
    createdAt?: string;
    updatedAt?: string;
    isRequest?: boolean;
    countryID?: CountryId;
    type?: AssetType;
    possession?: AssetPossession;
    parentCategoryID?: AssetCategory;
    yearOfBuild?: number;
    geo?: IGeoPoint;
    extraType?: AssetExtraType;
    extra?: IAssetExtra;
    dateOfBuild?: string;
    dateOfPurchase?: string;
    dateInsuredTill?: string;
    dateCertifiedTill?: string;
    totals?: IMoney[];
    canHaveIncome?: boolean;
    canHaveExpense?: boolean;
    financialDirection?: 'income' | 'expense';
    liabilities?: IAssetLiabilityInfo[];
    notUsedServiceTypes?: string[];
    groupID?: string;
    group?: IAssetGroupInfo;
    parentAssetID?: string;
    subAssets?: ISubAssetInfo[];
    sameAssetID?: string;
    relatedAs?: string;
    memberIDs?: string[];
    membersInfo?: ITitledRecord[];
}
type AssetExtraType = 'vehicle' | 'dwelling' | 'document' | 'appliance' | 'electronics' | 'utility' | 'valuable' | 'digital_asset' | 'sports_equipment';
interface IAssetExtra {
    [key: string]: unknown;
}
interface IAssetDboBase<ExtraType extends AssetExtraType = AssetExtraType, Extra extends object = IAssetExtra> extends Omit<IAssetDbo, 'name' | 'condition' | 'visibility' | 'type' | 'extraType' | 'extra'> {
    name?: string;
    condition?: AssetCondition;
    visibility?: AssetVisibility;
    type?: AssetType;
    title?: string;
    extraType?: ExtraType;
    extra?: Extra;
    createdBy?: string;
    updatedBy?: string;
}
interface IHistoryEvent {
    id: string;
    type: HistoryEventType;
    occurredAt: string;
    actorRef: string;
    note?: string;
    fromOwner?: IOwner;
    toOwner?: IOwner;
}
interface ILabeledOption<T extends string> {
    value: T;
    label: string;
}
declare const assetCategories: readonly AssetCategory[];
declare const assetConditions: readonly AssetCondition[];
declare const assetVisibilities: readonly AssetVisibility[];
declare const categoryOptions: ILabeledOption<AssetCategory>[];
declare const conditionOptions: ILabeledOption<AssetCondition>[];
declare const visibilityOptions: ILabeledOption<AssetVisibility>[];
declare function defaultVisibilityForSpaceType(spaceType: string | undefined): AssetVisibility;
declare function deriveOwnerType(spaceType: string | undefined): OwnerType;

declare const assetExtraTypeVehicle: AssetExtraType;
declare const assetExtraTypeDwelling: AssetExtraType;
declare const assetExtraTypeDocument: AssetExtraType;
declare const assetExtraTypeAppliance: AssetExtraType;
declare const assetExtraTypeElectronics: AssetExtraType;
declare const assetExtraTypeUtility: AssetExtraType;
declare const assetExtraTypeValuable: AssetExtraType;
declare const assetExtraTypeDigitalAsset: AssetExtraType;
declare const assetExtraTypeSportsEquipment: AssetExtraType;
interface IAddress {
    countryID: CountryId;
    zipCode?: string;
    state?: string;
    city?: string;
    lines?: string;
}
interface IEngine {
    engineType?: EngineType;
    engineFuel?: FuelType;
    engineCC?: number;
    engineKW?: number;
    engineNM?: number;
    engineSerialNumber?: string;
}
interface IWithMakeAndModel {
    make?: string;
    model?: string;
}
interface IAssetVehicleExtra extends IWithMakeAndModel, IEngine {
    regNumber?: string;
    vin?: string;
    nctExpires?: string;
    taxExpires?: string;
    nextServiceDue?: string;
    warrantyExpiresOn?: string;
    lengthM?: number;
    hullOrTailNumber?: string;
}
interface IAssetApplianceExtra {
    make?: string;
    model?: string;
    serialNumber?: string;
    installedOn?: string;
    warrantyExpiresOn?: string;
    nextServiceDue?: string;
    energyRating?: string;
}
interface IAssetElectronicsExtra {
    make?: string;
    model?: string;
    serialNumber?: string;
    imei?: string;
    storageCapacity?: string;
    warrantyExpiresOn?: string;
}
interface IAssetUtilityExtra {
    provider?: string;
    accountNumber?: string;
    tariff?: string;
    monthlyCost?: IMoney;
    renewalDate?: string;
    contractEndsOn?: string;
}
interface IAssetValuableExtra {
    material?: string;
    appraisedValue?: IMoney;
    appraisalDate?: string;
    certificateNumber?: string;
    insuredValue?: IMoney;
}
interface IAssetDigitalAssetExtra {
    registrar?: string;
    identifier?: string;
    renewalDate?: string;
    autoRenew?: boolean;
    renewalCost?: IMoney;
}
type BicycleKind = 'road' | 'mountain' | 'e_bike' | 'kids' | 'hybrid' | 'gravel' | 'other';
declare const bicycleKinds: readonly BicycleKind[];
interface IAssetSportsEquipmentExtra {
    make?: string;
    model?: string;
    frameNumber?: string;
    bicycleKind?: BicycleKind;
}
interface IVehicleMileage {
    value: number;
    unit: MileageUnit;
}
interface IVehicleFuelRecord {
    volume?: number;
    unit?: FuelVolumeUnit;
    amount?: IMoney;
    fuelCost?: number;
    currency?: string;
}
interface IVehicleRecord {
    fuel?: IVehicleFuelRecord;
    mileage?: IVehicleMileage;
    createdAt?: string;
    createdBy?: string;
}
interface IAddVehicleRecordRequest {
    assetID: string;
    fuelVolume?: number;
    fuelVolumeUnit?: FuelVolumeUnit;
    fuelCost?: number;
    currency?: string;
    mileage?: number;
    mileageUnit?: MileageUnit;
}
interface IAssetDwellingExtra {
    address?: IAddress;
    rent_price?: {
        value?: number;
        currency?: string;
    };
    numberOfBedrooms?: number;
    areaSqM?: number;
}
interface IAssetDocumentExtra {
    docType?: AssetDocumentType;
    number?: string;
    batchNumber?: string;
    countryID?: CountryId;
    issuedBy?: string;
    issuedOn?: string;
    effectiveFrom?: string;
    expiresOn?: string;
    regNumber?: string;
    coversAssetID?: string;
    insuredAssetID?: string;
}
interface IDocTypeField {
    type?: 'str' | 'int' | 'date';
    required?: boolean;
    exclude?: boolean;
    max?: number;
    min?: number;
}
interface IDocTypeStandardFields {
    title?: IDocTypeField;
    number?: IDocTypeField;
    issuedBy?: IDocTypeField;
    issuedOn?: IDocTypeField;
    validTill?: IDocTypeField;
    members?: IDocTypeField;
}
interface IDocTypeDef {
    id: AssetDocumentType | 'other';
    fields?: IDocTypeStandardFields;
}
declare const standardDocTypesByID: Record<string, IDocTypeDef>;
declare function docTypeSchema(docType: AssetDocumentType | 'other' | undefined): IDocTypeDef | undefined;

interface IAssetDtoGroupCounts {
    assets?: number;
}
interface IAssetDtoGroup extends IWithSpaceIDs, ITitledRecord, ITotalsHolder {
    id: string;
    order: number;
    desc?: string;
    categoryId?: AssetCategory;
    numberOf?: IAssetDtoGroupCounts;
}

interface IAssetListItem {
    id: string;
    asset: IAssetDbo;
}
interface IListAssetsResponse {
    assets: IAssetListItem[];
}
interface IReQuoteBundle {
    vehicle?: IAssetListItem;
    policies: IAssetListItem[];
    licences: IAssetListItem[];
}
interface IInsuranceForAssetResponse {
    policies: IAssetListItem[];
}
interface IExpiringDocument {
    id: string;
    docType?: AssetDocumentType;
    expiresOn: string;
    asset: IAssetDbo;
}
interface IExpiringDocumentsResponse {
    documents: IExpiringDocument[];
}

type RenewalPeriod = 'once' | 'yearly';
interface IRenewalItem {
    assetID: string;
    assetName?: string;
    category?: string;
    kind: string;
    dueOn: string;
    period: RenewalPeriod;
}
interface IRenewalsResponse {
    renewals: IRenewalItem[];
}

interface IAssetContext extends ISpaceItemNavContext<IAssetBrief, IAssetDbo> {
    owner?: IOwner;
}
interface IAssetVehicleContext extends IAssetContext {
    readonly dbo?: IAssetDbo & {
        extra?: IAssetVehicleExtra;
    };
}
interface IAssetDwellingContext extends IAssetContext {
    readonly dbo?: IAssetDbo & {
        extra?: IAssetDwellingExtra;
    };
}
interface IAssetDocumentContext extends IAssetContext {
    readonly dbo?: IAssetDbo & {
        extra?: IAssetDocumentExtra;
    };
}
type IAssetGroupContext = INavContext<IAssetDtoGroup, IAssetDtoGroup>;

type CarEngineFuel = '' | 'other' | 'petrol' | 'diesel' | 'hydrogen' | 'electricity';
interface Engine {
    title: string;
    engineType?: string;
    engineFuel: CarEngineFuel;
    engineCC?: number;
    engineKW?: number;
    engineNM?: number;
}
declare const engines: Engine[];
interface IMake {
    id: string;
    title: string;
}
interface IModel {
    id: string;
    title: string;
}
interface ICarModel {
    id: string;
    yearMin?: number;
    yearMax?: string;
    engines: Engine[];
}
interface ICarMake {
    yearMin?: number;
    yearMax?: string;
    models: ICarModel[];
}
declare const carMakes: Record<string, ICarMake>;

declare class AssetGroup {
    readonly context: IAssetGroupContext;
    readonly totals: Totals;
    constructor(context: IAssetGroupContext);
    get id(): string;
    get numberOf(): IAssetDtoGroupCounts;
}

interface IAssetMetadata {
    description?: string;
    acquisitionDate?: string;
    purchasePrice?: IMoney;
    estimatedValue?: IMoney;
    location?: string;
    notes?: string;
    tags?: string[];
}
interface IAssetRichFields {
    type?: AssetType;
    possession?: AssetPossession;
    countryID?: CountryId;
    parentCategoryID?: AssetCategory;
    yearOfBuild?: number;
    isRequest?: boolean;
    geo?: IGeoPoint;
    dateOfBuild?: string;
    dateOfPurchase?: string;
    dateInsuredTill?: string;
    dateCertifiedTill?: string;
    fieldsStr?: Record<string, string>;
    fieldsInt?: Record<string, number>;
    fieldsDate?: Record<string, string>;
    fieldsAmount?: Record<string, IMoney>;
    totals?: IMoney[];
    canHaveIncome?: boolean;
    canHaveExpense?: boolean;
    financialDirection?: string;
    liabilities?: IAssetLiabilityInfo[];
    notUsedServiceTypes?: string[];
    groupID?: string;
    group?: IAssetGroupInfo;
    parentAssetID?: string;
    subAssets?: ISubAssetInfo[];
    sameAssetID?: string;
    relatedAs?: string;
    memberIDs?: string[];
    membersInfo?: ITitledRecord[];
    extraType?: AssetExtraType;
    extra?: Record<string, unknown>;
}
interface ICreateAssetRequest extends IAssetMetadata, IAssetRichFields {
    spaceID: string;
    name: string;
    category: AssetCategory;
    condition: AssetCondition;
    visibility?: AssetVisibility;
    status?: AssetStatus;
}
interface IAssetResponse {
    id: string;
    asset: IAssetDbo;
}
interface IUpdateAssetRequest extends IAssetMetadata, IAssetRichFields {
    spaceID: string;
    assetID: string;
    name: string;
    category: AssetCategory;
    condition: AssetCondition;
    visibility: AssetVisibility;
}
interface IRemoveAssetRequest {
    spaceID: string;
    assetID: string;
    hardDelete?: boolean;
}
interface ITransferAssetRequest {
    spaceID: string;
    assetID: string;
    toSpaceID: string;
}
interface ITransferAssetResponse {
    id: string;
    owner: IOwner;
}
interface IRecordHistoryEventRequest {
    spaceID: string;
    assetID: string;
    type: HistoryEventType;
    occurredAt?: string;
    note?: string;
}
interface IAssetHistoryResponse {
    assetID: string;
    events: IHistoryEvent[];
}
interface ICreateVehicleRecordRequest extends IAddVehicleRecordRequest {
    spaceID: string;
}
interface ICreateVehicleRecordResponse {
    id: string;
}

interface IIdAndAssetDbo {
    id: string;
    dbo: IAssetDbo;
}
interface IAssetService {
    createAsset(request: ICreateAssetRequest): Observable<IAssetResponse>;
    updateAsset(request: IUpdateAssetRequest): Observable<IAssetResponse>;
    removeAsset(request: IRemoveAssetRequest): Observable<void>;
    transferAsset(request: ITransferAssetRequest): Observable<ITransferAssetResponse>;
    recordHistoryEvent(request: IRecordHistoryEventRequest): Observable<void>;
    getHistory(spaceID: string, assetID: string): Observable<IAssetHistoryResponse>;
    addVehicleRecord(request: ICreateVehicleRecordRequest): Observable<ICreateVehicleRecordResponse>;
    watchAssets(spaceID: string): Observable<IIdAndAssetDbo[]>;
    watchAssetByID(space: ISpaceContext, id: string): Observable<IAssetContext>;
    findInsuranceForAsset(spaceID: string, assetID: string): Observable<IInsuranceForAssetResponse>;
    listExpiringDocuments(spaceID: string, withinDays?: number): Observable<IExpiringDocumentsResponse>;
    getReQuoteBundle(spaceID: string, vehicleID: string): Observable<IReQuoteBundle>;
    getRenewals(spaceID: string, withinDays?: number): Observable<IRenewalsResponse>;
}
declare const ASSET_SERVICE: InjectionToken<IAssetService>;

export { ASSET_SERVICE, AssetGroup, AssetPage, AssetPossessionLeasing, AssetPossessionOwning, AssetPossessionRenting, AssetPossessionUndisclosed, AssetPossessions, CurrencyEUR, CurrencyList, CurrencyUSD, EngineTypeCombustion, EngineTypeElectric, EngineTypeHybrid, EngineTypeOther, EngineTypePHEV, EngineTypeSteam, EngineTypeUnknown, EngineTypes, FuelTypeDiesel, FuelTypeElectricity, FuelTypeHydrogen, FuelTypeOther, FuelTypePetrol, FuelTypeUnknown, FuelTypes, FuelVolumeUnitTypes, MileageUnitTypes, assetCategories, assetConditions, assetExtraTypeAppliance, assetExtraTypeDigitalAsset, assetExtraTypeDocument, assetExtraTypeDwelling, assetExtraTypeElectronics, assetExtraTypeSportsEquipment, assetExtraTypeUtility, assetExtraTypeValuable, assetExtraTypeVehicle, assetVisibilities, bicycleKinds, carMakes, categoryOptions, conditionOptions, defaultVisibilityForSpaceType, deriveOwnerType, docTypeSchema, engines, standardDocTypesByID, visibilityOptions };
export type { AssetApplianceType, AssetCategory, AssetCondition, AssetDigitalAssetType, AssetDocumentType, AssetDwellingType, AssetElectronicsType, AssetExtraType, AssetPages, AssetPossession, AssetRealEstateType, AssetSportsEquipmentType, AssetStatus, AssetType, AssetUtilityType, AssetValuableType, AssetVehicleType, AssetVisibility, BicycleKind, CarEngineFuel, CurrencyCode, Engine, EngineType, FuelType, FuelVolumeUnit, HistoryEventType, IAddVehicleRecordRequest, IAddress, IAssetApplianceExtra, IAssetBrief, IAssetContext, IAssetDates, IAssetDbo, IAssetDboBase, IAssetDigitalAssetExtra, IAssetDocumentContext, IAssetDocumentExtra, IAssetDtoGroup, IAssetDtoGroupCounts, IAssetDwellingContext, IAssetDwellingExtra, IAssetElectronicsExtra, IAssetExtra, IAssetGroupContext, IAssetGroupCounts, IAssetGroupInfo, IAssetHistoryResponse, IAssetLiabilityInfo, IAssetListItem, IAssetMetadata, IAssetResponse, IAssetRichFields, IAssetService, IAssetSportsEquipmentExtra, IAssetUtilityExtra, IAssetValuableExtra, IAssetVehicleContext, IAssetVehicleExtra, IAssetusSpaceBrief, ICarMake, ICarModel, ICreateAssetRequest, ICreateVehicleRecordRequest, ICreateVehicleRecordResponse, IDocTypeDef, IDocTypeField, IDocTypeStandardFields, IEngine, IExpiringDocument, IExpiringDocumentsResponse, IGeoPoint, IHistoryEvent, IIdAndAssetDbo, IInsuranceForAssetResponse, ILabeledOption, IListAssetsResponse, IMake, IModel, IMoney, IOwner, IReQuoteBundle, IRecordHistoryEventRequest, IRemoveAssetRequest, IRenewalItem, IRenewalsResponse, ISubAssetInfo, ITransferAssetRequest, ITransferAssetResponse, IUpdateAssetRequest, IVehicleFuelRecord, IVehicleMileage, IVehicleRecord, IWithAssetSpaces, IWithMakeAndModel, MileageUnit, OwnerType, RenewalPeriod };
