using idmx from '../db/data-model';

service services {
    entity MaterialData as projection on idmx.material;
    entity ArticleData  as projection on idmx.article;
    entity VendorData   as projection on idmx.vendor;
    entity customerData as projection on idmx.customer;
    entity RoutingData  as projection on idmx.routing;

    entity materialReadData {
        Sno               : Integer64;
        Material          : String(50);
        MaterialType      : String(50);
        IndustrySector    : String(50);
        Description       : String(500);
        BaseUnitOfMeasure : String(20);
        MaterialGroup     : String(50);
    }

    entity materialWriteData {
        Sno               : Integer64;
        Material          : String(50);
        MaterialType      : String(50);
        IndustrySector    : String(50);
        Description       : String(500);
        BaseUnitOfMeasure : String(20);
        MaterialGroup     : String(50);
    }

    entity articleReadData {
        Sno               : Integer64;
        Material_Number   : String(50);
        Material_Type     : String(50);
        Material_Group    : String(50);
        Material_Category : String(50);
        Description       : String(50);
    }

    entity articleWriteData {
        Sno               : Integer64;
        Material_Number   : String(50);
        Material_Type     : String(50);
        Material_Group    : String(50);
        Material_Category : String(50);
        Description       : String(50);
    }

    entity vendorReadData {
        Sno         : Integer64;
        Vender_Name : String(50);
        Search_Term : String(50);
    }

    entity vendorWriteData {
        Sno         : Integer64;
        Vender_Name : String(50);
        Search_Term : String(50);
    }

    entity customerReadData {
        Account_Group : String(50);
        Name          : String(50);
        Name_2        : String(50);
        Search_Term   : String(50);
    }

    entity customerWriteData {
        Account_Group : String(50);
        Name          : String(50);
        Name_2        : String(50);
        Search_Term   : String(50);
    }

    entity routingReadData {
        Sno                       : Integer64;
        External_No               : Integer64;
        Material_Number           : Integer64;
        Plant                     : String(50);
        Group_Counter             : String(50);
        Tisk_List_Discription     : String(50);
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
    entity routingWriteData {
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

}
