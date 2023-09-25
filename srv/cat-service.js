const cds = require("@sap/cds");
const xlsx = require("xlsx");
const fs = require("fs");
const bodyParser = require("body-parser");
class services extends cds.ApplicationService {
    async init() {
        const db = await cds.connect.to("db");
        console.log(db)

        const { material, article, vendor, customer, routing } = cds.entities("idmx");

        // material
        this.on("READ", "materialReadData", async (req) => {
            console.log("test1")
            let results = await SELECT.from(material);
            console.log("test2")
            console.log(JSON.stringify(results));
            return results;
        });
        this.on("READ", "materialWriteData", async (req) => {
            let approvedata = [
                {
                    Sno: 5,
                    Material: "Guava",
                    MaterialType: "Fruit",
                    IndustrySector: "Fruit",
                    Description: "Fruit",
                    BaseUnitOfMeasure: "Fruit",
                    MaterialGroup: "Fruit",
                },
            ];

            for (var i = 0; i < approvedata.length; i++) {
                await INSERT.into(material)
                    .columns("Sno",
                        "Material",
                        "MaterialType",
                        "IndustrySector",
                        "Description",
                        "BaseUnitOfMeasure",
                        "MaterialGroup"
                    )
                    .values(
                        approvedata[i]["Sno"],
                        approvedata[i]["Material"],
                        approvedata[i]["MaterialType"],
                        approvedata[i]["IndustrySector"],
                        approvedata[i]["Description"],
                        approvedata[i]["BaseUnitOfMeasure"],
                        approvedata[i]["MaterialGroup"],

                    );
            }

            let results = await SELECT.from(material);
            return results;
        });

        // article
        this.on("READ", "articleReadData", async (req) => {
            console.log("test1")
            let results = await SELECT.from(article);
            console.log("test2")
            console.log(JSON.stringify(results));
            return results;
        });
        this.on("READ", "articleWriteData", async (req) => {
            let approvedata = [
                {
                    Sno: 55,
                    Material_Number: "number",
                    Material_Type: "steel",
                    Material_Group: "iron",
                    Material_Category: "hardware",
                    Description: "metals",
                },
            ];

            for (var i = 0; i < approvedata.length; i++) {
                await INSERT.into(article)
                    .columns("Sno",
                        "Material_Number",
                        "Material_Type",
                        "Material_Group",
                        "Material_Category",
                        "Description"
                    )
                    .values(
                        approvedata[i]["Sno"],
                        approvedata[i]["Material_Number"],
                        approvedata[i]["Material_Type"],
                        approvedata[i]["Material_Group"],
                        approvedata[i]["Material_Category"],
                        approvedata[i]["Description"]
                    );
            }
            let results = await SELECT.from(article);
            return results;
        });

        // vender
        this.on("READ", "vendorReadData", async (req) => {
            console.log("test1")
            let results = await SELECT.from(vendor);
            console.log("test2")
            console.log(JSON.stringify(results));
            return results;
        });
        this.on("READ", "vendorWriteData", async (req) => {
            let approvedata = [
                {
                    Sno: 22,
                    Vender_Name: "VenderName",
                    Search_Term: "SearchTerm"
                },
            ];

            for (var i = 0; i < approvedata.length; i++) {
                await INSERT.into(vendor)
                    .columns("Sno",
                        "Vender_Name",
                        "Search_Term"
                    )
                    .values(
                        approvedata[i]["Sno"],
                        approvedata[i]["Vender_Name"],
                        approvedata[i]["Search_Term"]
                    );
            }
            let results = await SELECT.from(vendor);
            return results;
        });

        // customer
        this.on("READ", 'customerReadData', async (req) => {
            let results = await SELECT.from(customer);
            return results;
        })

        this.on("READ", "customerWriteData", async (req) => {
            let approverData = [
                {
                    Account_Group: "thisGroup",
                    Name: "thisName",
                    Name_2: "thisName2",
                    Search_Term: "thisSearch"
                },
            ]

            for (let i = 0; i < approverData.length; i++) {
                await INSERT.into(customer)
                    .columns("Account_Group", "Name", "Name_2", "Search_Term")
                    .values(approverData[i].Account_Group, approverData[i].Name, approverData[i].Name_2, approverData[i].Search_Term);
            }

            let results = await SELECT.from(customer)
            return results;
        })

        // Routing...
        this.on("READ", 'routingReadData', async (req) => {
            let results = await SELECT.from(routing);
            return results;
        })

        this.on("READ", "routingWriteData", async (req) => {
            let approverData = [
                {
                    Sno: 7,
                    External_No: 51,
                    Material_Number: 8,
                    Plant: "thisPlant",
                    Group_Counter: "thisGroupCounter",
                    Task_List_Discription: "thisTaskListDiscription",
                    Task_List_Usage: "Task",
                    Satus: "thisStatus",
                    Responsible_Planner_Group: "thisResponsiblePlannerGroup",
                    Unit_of_Measure: "thisUnitOfMeasure",
                    From_LotSize: "thisFromLotsize",
                    To_LotSize: "thisToLotsize",
                    Operation_Number: "thisOperationNumber",
                    Work_Centre: "thisWorkCentre",
                    Control_key: "thisControlKey",
                    Operation_Short_Text: "thisOperationShortText",
                    Base_Quantity: "thisBaseQuantity",
                    Standard_Value: "thisStandardValue"
                },
            ]

            for (let i = 0; i < approverData.length; i++) {
                await INSERT.into(routing)
                    .columns("Sno", "External_No", "Material_Number", "Plant","Group_Counter","Task_List_Discription",
                            "Task_List_Usage","Satus","Responsible_Planner_Group","Unit_of_Measure","From_LotSize",
                            "To_LotSize","Operation_Number","Work_Centre","Control_key",
                            "Operation_Short_Text","Base_Quantity","Standard_Value")
                    .values(approverData[i].Sno, approverData[i].External_No, approverData[i].Material_Number, approverData[i].Plant,
                            approverData[i].Group_Counter, approverData[i].Task_List_Discription, approverData[i].Task_List_Usage, approverData[i].Satus,
                            approverData[i].Responsible_Planner_Group, approverData[i].Unit_of_Measure, approverData[i].From_LotSize, approverData[i].To_LotSize,
                            approverData[i].Operation_Number, approverData[i].Work_Centre, approverData[i].Control_key, approverData[i].Operation_Short_Text,
                            approverData[i].Base_Quantity,approverData[i].Standard_Value);
            }

            let results = await SELECT.from(routing)
            return results;
        })


        await super.init();
    }
}




module.exports = { services };