'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// ## Components
var APP_LAUNCHER = exports.APP_LAUNCHER = 'SLDSAppLauncher';
var APP_LAUNCHER_SECTION = exports.APP_LAUNCHER_SECTION = 'SLDSAppLauncherSection';
var APP_LAUNCHER_TILE = exports.APP_LAUNCHER_TILE = 'SLDSAppLauncherTile';
var APP_LAUNCHER_HEADER = exports.APP_LAUNCHER_HEADER = 'SLDSAppLauncherHeader';
/* Remove at next breaking change */
var BREAD_CRUMB = exports.BREAD_CRUMB = 'SLDSBreadcrumb';

var BREADCRUMB = exports.BREADCRUMB = 'SLDSBreadcrumb';
var BUTTON = exports.BUTTON = 'SLDSButton';
var BUTTON_GROUP = exports.BUTTON_GROUP = 'SLDSButtonGroup';
var BUTTON_STATEFUL = exports.BUTTON_STATEFUL = 'SLDSButtonStateful';
var BUTTON_ICON = exports.BUTTON_ICON = 'SLDSButtonIcon'; // a non-interctive icon wrapper for SLDSUtilityIcon
var CARD = exports.CARD = 'SLDSCard';
var CARD_BODY = exports.CARD_BODY = 'SLDSCardBody';
var CARD_EMPTY = exports.CARD_EMPTY = 'SLDSCardEmpty';
var CARD_FILTER = exports.CARD_FILTER = 'SLDSCardFilter';
var CARD_FOOTER = exports.CARD_FOOTER = 'SLDSCardFooter';
var CARD_HEADER = exports.CARD_HEADER = 'SLDSCardHeader';
var DATA_TABLE = exports.DATA_TABLE = 'SLDSDataTable';
var DATA_TABLE_CELL = exports.DATA_TABLE_CELL = 'SLDSDataTableCell';
var DATA_TABLE_COLUMN = exports.DATA_TABLE_COLUMN = 'SLDSDataTableColumn';
var DATA_TABLE_HEAD = exports.DATA_TABLE_HEAD = 'SLDSDataTableHead';
var DATA_TABLE_HEADER_CELL = exports.DATA_TABLE_HEADER_CELL = 'SLDSDataTableHeaderCell';
var DATA_TABLE_ROW_ACTIONS = exports.DATA_TABLE_ROW_ACTIONS = 'SLDSDataTableRowActions';
var DATA_TABLE_ROW = exports.DATA_TABLE_ROW = 'SLDSDataTableRow';
var DATE_PICKER = exports.DATE_PICKER = 'SLDSDatePicker';
var DIALOG = exports.DIALOG = 'SLDSDialog';
var FILTER = exports.FILTER = 'SLDSFilter';
var FORMS_CHECKBOX = exports.FORMS_CHECKBOX = 'SLDSCheckbox';
var FORMS_INLINE_EDIT = exports.FORMS_INLINE_EDIT = 'SLDSInlineEdit';
var FORMS_INPUT = exports.FORMS_INPUT = 'SLDSInput';
var FORMS_TEXTAREA = exports.FORMS_TEXTAREA = 'SLDSTextarea';
var FORMS_SEARCH = exports.FORMS_SEARCH = 'SLDSSearch';
var GLOBAL_HEADER = exports.GLOBAL_HEADER = 'SLDSGlobalHeader';
var GLOBAL_HEADER_PROFILE = exports.GLOBAL_HEADER_PROFILE = 'SLDSGlobalHeaderProfile';
var GLOBAL_HEADER_SEARCH = exports.GLOBAL_HEADER_SEARCH = 'SLDSGlobalHeaderSearch';
var GLOBAL_HEADER_TOOL = exports.GLOBAL_HEADER_TOOL = 'SLDSGlobalHeaderTool';
var GLOBAL_NAVIGATION_BAR = exports.GLOBAL_NAVIGATION_BAR = 'SLDSGlobalNavigationBar';
var GLOBAL_NAVIGATION_BAR_BUTTON = exports.GLOBAL_NAVIGATION_BAR_BUTTON = 'SLDSGlobalNavigationBarButton';
var GLOBAL_NAVIGATION_BAR_DROPDOWN = exports.GLOBAL_NAVIGATION_BAR_DROPDOWN = 'SLDSGlobalNavigationBarDropdown';
var GLOBAL_NAVIGATION_BAR_LABEL = exports.GLOBAL_NAVIGATION_BAR_LABEL = 'SLDSGlobalNavigationBarLabel';
var GLOBAL_NAVIGATION_BAR_LINK = exports.GLOBAL_NAVIGATION_BAR_LINK = 'SLDSGlobalNavigationBarLink';
var GLOBAL_NAVIGATION_BAR_REGION = exports.GLOBAL_NAVIGATION_BAR_REGION = 'SLDSGlobalNavigationBarRegion';
var GLOBAL_NAVIGATION_BAR_APP_LAUNCHER = exports.GLOBAL_NAVIGATION_BAR_APP_LAUNCHER = 'SLDSGlobalNavigationBarAppLauncher';
var GRID = exports.GRID = 'SLDSGrid';
var HIGHLIGHTER = exports.HIGHLIGHTER = 'SLDSHighlighter';
var ICON = exports.ICON = 'SLDSIcon';
var ICON_INPUT = exports.ICON_INPUT = 'SLDSIconInput';
var LIST = exports.LIST = 'SLDSList';
var LIST_ITEM = exports.LIST_ITEM = 'SLDSListItem';
var LIST_ITEM_LABEL = exports.LIST_ITEM_LABEL = 'SLDSListItemLabel';
var LOOKUP = exports.LOOKUP = 'SLDSLookup';
var MEDIA_OBJECT = exports.MEDIA_OBJECT = 'SLDSMediaObject';
var MENU_DROPDOWN = exports.MENU_DROPDOWN = 'SLDSMenuDropdown';
var MENU_DROPDOWN_TRIGGER = exports.MENU_DROPDOWN_TRIGGER = 'SLDSMenuDropdownTrigger';
var MENU_PICKLIST = exports.MENU_PICKLIST = 'SLDSMenuPicklist';
var MODAL = exports.MODAL = 'SLDSModal';
var NAVIGATION = exports.NAVIGATION = 'SLDSNavigation';
var NAVIGATION_ITEM = exports.NAVIGATION_ITEM = 'SLDSNavigationItem';
var NOTIFICATION = exports.NOTIFICATION = 'SLDSNotification';
var PANEL = exports.PANEL = 'SLDSPanel';
var PANEL_FILTER_GROUP = exports.PANEL_FILTER_GROUP = 'SLDSFilterGroup';
var PANEL_FILTER_LIST = exports.PANEL_FILTER_LIST = 'SLDSFilterList';
var PANEL_FILTER_LIST_HEADING = exports.PANEL_FILTER_LIST_HEADING = 'SLDSPanelFilterListHeading';
var PAGE_HEADER = exports.PAGE_HEADER = 'SLDSPageHeader';
var POPOVER = exports.POPOVER = 'SLDSPopover';
var POPOVER_TOOLTIP = exports.POPOVER_TOOLTIP = 'SLDSPopoverTooltip';
var PROGRESS_INDICATOR = exports.PROGRESS_INDICATOR = 'SLDSProgressIndicator';
var PROGRESS_INDICATOR_PROGRESS = exports.PROGRESS_INDICATOR_PROGRESS = 'SLDSProgressIndicatorProgress';
var PROGRESS_INDICATOR_STEP = exports.PROGRESS_INDICATOR_STEP = 'SLDSProgressIndicatorStep';
var SPINNER = exports.SPINNER = 'SLDSSpinner';
var TAB = exports.TAB = 'SLDSTab';
var TAB_ITEM = exports.TAB_ITEM = 'SLDSTabItem';
var TAB_PANEL = exports.TAB_PANEL = 'SLDSTabPanel';
var TABS = exports.TABS = 'SLDSTabs';
var TABS_LIST = exports.TABS_LIST = 'SLDSTabsList';
var TABS_PANEL = exports.TABS_PANEL = 'SLDSTabsPanel';
var TIME_PICKER = exports.TIME_PICKER = 'SLDSTimepicker';
var TREE = exports.TREE = 'SLDSTree';
var TREE_BRANCH = exports.TREE_BRANCH = 'SLDSTreeBranch';
var TREE_ITEM = exports.TREE_ITEM = 'SLDSTreeItem';