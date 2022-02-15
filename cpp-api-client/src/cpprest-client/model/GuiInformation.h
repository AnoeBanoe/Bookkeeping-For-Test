/**
 * ALICE Bookkeeping
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0
 *
 * NOTE: This class is auto generated by OpenAPI-Generator 5.4.0.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/*
 * GuiInformation.h
 *
 * GUI status and data
 */

#ifndef ORG_OPENAPITOOLS_CLIENT_MODEL_GuiInformation_H_
#define ORG_OPENAPITOOLS_CLIENT_MODEL_GuiInformation_H_


#include "ModelBase.h"

#include "model/GuiStatus.h"

namespace org {
namespace openapitools {
namespace client {
namespace model {


/// <summary>
/// GUI status and data
/// </summary>
class  GuiInformation
    : public ModelBase
{
public:
    GuiInformation();
    virtual ~GuiInformation();

    /////////////////////////////////////////////
    /// ModelBase overrides

    void validate() override;

    web::json::value toJson() const override;
    bool fromJson(const web::json::value& json) override;

    void toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) const override;
    bool fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) override;

    /////////////////////////////////////////////
    /// GuiInformation members

    /// <summary>
    /// 
    /// </summary>
    std::shared_ptr<GuiStatus> getStatus() const;
    bool statusIsSet() const;
    void unsetStatus();

    void setStatus(const std::shared_ptr<GuiStatus>& value);


protected:
    std::shared_ptr<GuiStatus> m_Status;
    bool m_StatusIsSet;
};


}
}
}
}

#endif /* ORG_OPENAPITOOLS_CLIENT_MODEL_GuiInformation_H_ */