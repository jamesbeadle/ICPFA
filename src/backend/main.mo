import Base "mo:waterway-mops/BaseTypes";
import Result "mo:base/Result";
import DTOs "dtos/base_dtos";
import T "types/app_types";


actor Self {
  
  private var appStatus: Base.AppStatus = { 
    onHold = false;
    version = "0.0.1";
  };  
  
  public shared query func getAppStatus() : async Result.Result<DTOs.AppStatusDTO, T.Error> {
    return #ok(appStatus);
  };
    
};
