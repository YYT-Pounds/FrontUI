import SearchFormManager from "@/frame/components/base/search-form/search-form-manager.ts";
import ProgramFormManager from "@/frame/components/base/program-form/program-form-manager.ts";
import TableManager from "@/frame/components/base/table/table-manager.ts";
import DialogSheetFormManager from "@/frame/view/dialog-sheet-form/dialog-sheet-form-manager.ts";

/**
 * 表单框
 */
class PageModelManager<Model> {
    /**
     * 请求地址
     */
    url: string
    /**
     * 请求方法
     */
    method: string
    /**
     * 自定义参数
     */
    otherParams?: keyof Model
    /**
     * 搜索组件模型
     */
    searchForm?: SearchFormManager<Model>
    /**
     * 功能组件模型
     */
    programForm?: ProgramFormManager
    /**
     * 表格组件模型
     */
    table: TableManager<Model>
    /**
     * 表单组件模型
     */
    form?: DialogSheetFormManager<Model>

    /**
     * 构造函数
     */
    constructor(url: string, method: string, table: TableManager<Model>) {
        this.url = url
        this.method = method
        this.table = table
    }
}

/**
 * 暴露
 */
export default PageModelManager

