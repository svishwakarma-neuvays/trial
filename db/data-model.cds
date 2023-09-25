namespace idmx;

entity material {
  Sno                       : Int64;
  Material                  : String(50);
  MaterialType              : String(50);
  IndustrySector            : String(50);
  Description               : String(500);
  BaseUnitOfMeasure         : String(20);
  MaterialGroup             : String(50);
  WeightUnit                : String(50);
  Plant                     : String(50);
  StorageLocation           : String(100);
  PurchasingGroup           : String(100);
  BatchManagement           : Boolean;
  AutomaticPO               : Boolean;
  GRProcessingTime          : Time;
  valuationClass            : String(50);
  PriceControl              : String(50);
  MovingPrice_StandardPrice : String(50);
  SalesOrganisation         : String(50);
  DistributionChannel       : String(50);
  Division                  : String(50);
  AccountAssignmentGroup    : String(50);
  ItemCategoryGroup         : String(50);
  AvailabilityCheck         : String(50);
  LoadingGroup              : String(50);
  TransportationGroup       : String(50);
  MRPGroup                  : String(50);
  MRPType                   : String(50);
  MRPController             : String(50);
  LotSizingProcedure        : String(50);
  MinLotSize                : String(50);
  MaxLotSize                : String(50);
  ProcurementType           : String(50);
  MRP2GRProcessingTime      : Time;
  MRP3AvailabilityCheck     : String(50);
  InspectionInterval        : String(50);
  QMControlKey              : String(50);

}

entity article {
  Sno               : Integer64;
  Material_Number   : String(50);
  Material_Type     : String(50);
  Material_Group    : String(50);
  Material_Category : String(50);
  Description       : String(50);
}

entity vendor {
  Sno         : Integer64;
  Vender_Name : String(50);
  Search_Term : String(50);
}

entity customer {
  Account_Group : String(50);
  Name          : String(50);
  Name_2        : String(50);
  Search_Term   : String(50);
}

entity routing {
  Sno                       : Integer64;
  External_No               : Integer64;
  Material_Number           : Integer64;
  Plant                     : String(50);
  Group_Counter             : String(50);
  Task_List_Discription     : String(50);
  Task_List_Usage           : String(50);
  Satus                     : String(50);
  Responsible_Planner_Group : String(50);
  Unit_of_Measure           : String(50);
  From_LotSize              : String(50);
  To_LotSize                : String(50);
  Operation_Number          : String(50);
  Work_Centre               : String(50);
  Control_key               : String(50);
  Operation_Short_Text      : String(50);
  Base_Quantity             : String(50);
  Standard_Value            : String(50);
}
