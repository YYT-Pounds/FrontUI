import BaseType from "@/frame/model/base/base-type.ts";

/**
 * 搜索框命名空间
 */
namespace SearchFormType {
    /**
     * 组件名称
     */
    type eType = "el-input" | "el-select" | "el-date-picker" | "el-time-picker"

    /**
     * props接口
     */
    interface SearchFormTypePropsModel<Model> {
        /**
         * 提示
         */
        placeholder?: string;
        /**
         * 是否可清空
         */
        clearable?: BaseType.bool
        /**
         * 是否禁用
         */
        disabled?: (data: Model) => boolean
    }
}

export default SearchFormType;
