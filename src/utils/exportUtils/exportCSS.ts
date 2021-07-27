/*
Copyright 2021 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* eslint-disable max-len */

const lightCSS = `@charset "utf-8";
.hljs-addition {
  background: #dfd;
}

.hljs-deletion {
  background: #fdd;
}

@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  .mx_LeftPanel {
    background-image: unset;
    background-image: var(--avatar-url, unset);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
  }
  .mx_GroupFilterPanel,
  .mx_SpacePanel {
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
  }
  .mx_LeftPanel .mx_LeftPanel_roomListContainer {
    -webkit-backdrop-filter: blur(40px);
    backdrop-filter: blur(40px);
  }
}

.mx_RoomSublist_showNButton {
  background-color: transparent !important;
}

a:hover,
a:link,
a:visited {
  text-decoration: none;
}

:root {
  font-size: 10px;
  --transition-short: 0.1s;
  --transition-standard: 0.3s;
}

@media (prefers-reduced-motion) {
  :root {
    --transition-short: 0;
    --transition-standard: 0;
  }
}

html {
  height: 100%;
  overflow: hidden;
  -ms-scroll-chaining: none;
  overscroll-behavior: none;
}

body {
  font-family: Inter, Twemoji, Apple Color Emoji, Segoe UI Emoji, Arial,
    Helvetica, Sans-Serif, Noto Color Emoji;
  font-size: 1.5rem;
  background-color: #fff;
  color: #2e2f32;
  border: 0;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code,
pre {
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console,
    monospace;
  font-size: 100% !important;
}

.error,
.text-error,
.text-warning,
.warning {
  color: #ff4b55;
}

.text-success {
  color: #0dbd8b;
}

.text-muted {
  color: #61708b;
}

b {
  font-weight: 700;
}

h2 {
  color: #2e2f32;
  font-weight: 400;
  font-size: 1.8rem;
  margin-top: 16px;
  margin-bottom: 16px;
}

a:hover,
a:link,
a:visited {
  color: #238cf5;
}

input[type="password"],
input[type="search"],
input[type="text"] {
  padding: 9px;
  font-family: Inter, Twemoji, Apple Color Emoji, Segoe UI Emoji, Arial,
    Helvetica, Sans-Serif, Noto Color Emoji;
  font-size: 1.4rem;
  font-weight: 600;
  min-width: 0;
}

input[type="search"].mx_textinput_icon,
input[type="text"].mx_textinput_icon {
  padding-left: 36px;
  background-repeat: no-repeat;
  background-position: 10px;
}

input[type="search"].mx_textinput_icon.mx_textinput_search,
input[type="text"].mx_textinput_icon.mx_textinput_search {
  background-image: url(../../img/feather-customised/search-input.044bfa7.svg);
}

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  display: none;
}

input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  opacity: 1;
}

input::-moz-placeholder,
textarea::-moz-placeholder {
  opacity: 1;
}

input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  opacity: 1;
}

input::-ms-input-placeholder,
textarea::-ms-input-placeholder {
  opacity: 1;
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
}

input[type="password"],
input[type="text"],
textarea {
  background-color: transparent;
  color: #2e2f32;
}

textarea {
  font-family: Inter, Twemoji, Apple Color Emoji, Segoe UI Emoji, Arial,
    Helvetica, Sans-Serif, Noto Color Emoji;
  color: #2e2f32;
}

input[type="password"]:focus,
input[type="text"]:focus,
textarea:focus {
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}

:focus:not(.focus-visible) {
  outline: none;
}

.mx_Dialog .mx_textinput > input[type="search"],
.mx_Dialog .mx_textinput > input[type="text"],
.mx_MatrixChat .mx_textinput > input[type="search"],
.mx_MatrixChat .mx_textinput > input[type="text"] {
  border: none;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  color: #2e2f32;
}

.mx_Dialog .mx_textinput,
.mx_Dialog
  :not(.mx_textinput):not(.mx_Field):not(.mx_no_textinput)
  > input[type="search"],
.mx_Dialog
  :not(.mx_textinput):not(.mx_Field):not(.mx_no_textinput)
  > input[type="text"],
.mx_MatrixChat .mx_textinput,
.mx_MatrixChat
  :not(.mx_textinput):not(.mx_Field):not(.mx_no_textinput)
  > input[type="search"],
.mx_MatrixChat
  :not(.mx_textinput):not(.mx_Field):not(.mx_no_textinput)
  > input[type="text"] {
  display: block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: transparent;
  color: #9fa9ba;
  border-radius: 4px;
  border: 1px solid rgba(46, 47, 50, 0.1);
  margin: 9px;
}

.mx_Dialog .mx_textinput,
.mx_MatrixChat .mx_textinput {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_Dialog .mx_textinput input::-webkit-input-placeholder,
.mx_Dialog
  :not(.mx_textinput):not(.mx_Field):not(.mx_no_textinput)
  > input[type="search"]::-webkit-input-placeholder,
.mx_Dialog
  :not(.mx_textinput):not(.mx_Field):not(.mx_no_textinput)
  > input[type="text"]::-webkit-input-placeholder,
.mx_MatrixChat .mx_textinput input::-webkit-input-placeholder,
.mx_MatrixChat
  :not(.mx_textinput):not(.mx_Field):not(.mx_no_textinput)
  > input[type="search"]::-webkit-input-placeholder,
.mx_MatrixChat
  :not(.mx_textinput):not(.mx_Field):not(.mx_no_textinput)
  > input[type="text"]::-webkit-input-placeholder {
  color: rgba(159, 169, 186, 0.75);
}

.mx_Dialog .mx_textinput input::-moz-placeholder,
.mx_Dialog
  :not(.mx_textinput):not(.mx_Field):not(.mx_no_textinput)
  > input[type="search"]::-moz-placeholder,
.mx_Dialog
  :not(.mx_textinput):not(.mx_Field):not(.mx_no_textinput)
  > input[type="text"]::-moz-placeholder,
.mx_MatrixChat .mx_textinput input::-moz-placeholder,
.mx_MatrixChat
  :not(.mx_textinput):not(.mx_Field):not(.mx_no_textinput)
  > input[type="search"]::-moz-placeholder,
.mx_MatrixChat
  :not(.mx_textinput):not(.mx_Field):not(.mx_no_textinput)
  > input[type="text"]::-moz-placeholder {
  color: rgba(159, 169, 186, 0.75);
}

.mx_Dialog .mx_textinput input:-ms-input-placeholder,
.mx_Dialog
  :not(.mx_textinput):not(.mx_Field):not(.mx_no_textinput)
  > input[type="search"]:-ms-input-placeholder,
.mx_Dialog
  :not(.mx_textinput):not(.mx_Field):not(.mx_no_textinput)
  > input[type="text"]:-ms-input-placeholder,
.mx_MatrixChat .mx_textinput input:-ms-input-placeholder,
.mx_MatrixChat
  :not(.mx_textinput):not(.mx_Field):not(.mx_no_textinput)
  > input[type="search"]:-ms-input-placeholder,
.mx_MatrixChat
  :not(.mx_textinput):not(.mx_Field):not(.mx_no_textinput)
  > input[type="text"]:-ms-input-placeholder {
  color: rgba(159, 169, 186, 0.75);
}

.mx_Dialog .mx_textinput input::-ms-input-placeholder,
.mx_Dialog
  :not(.mx_textinput):not(.mx_Field):not(.mx_no_textinput)
  > input[type="search"]::-ms-input-placeholder,
.mx_Dialog
  :not(.mx_textinput):not(.mx_Field):not(.mx_no_textinput)
  > input[type="text"]::-ms-input-placeholder,
.mx_MatrixChat .mx_textinput input::-ms-input-placeholder,
.mx_MatrixChat
  :not(.mx_textinput):not(.mx_Field):not(.mx_no_textinput)
  > input[type="search"]::-ms-input-placeholder,
.mx_MatrixChat
  :not(.mx_textinput):not(.mx_Field):not(.mx_no_textinput)
  > input[type="text"]::-ms-input-placeholder {
  color: rgba(159, 169, 186, 0.75);
}

.mx_Dialog .mx_textinput input::placeholder,
.mx_Dialog
  :not(.mx_textinput):not(.mx_Field):not(.mx_no_textinput)
  > input[type="search"]::placeholder,
.mx_Dialog
  :not(.mx_textinput):not(.mx_Field):not(.mx_no_textinput)
  > input[type="text"]::placeholder,
.mx_MatrixChat .mx_textinput input::placeholder,
.mx_MatrixChat
  :not(.mx_textinput):not(.mx_Field):not(.mx_no_textinput)
  > input[type="search"]::placeholder,
.mx_MatrixChat
  :not(.mx_textinput):not(.mx_Field):not(.mx_no_textinput)
  > input[type="text"]::placeholder {
  color: rgba(159, 169, 186, 0.75);
}

.dark-panel {
  background-color: #f2f5f8;
}

.dark-panel .mx_textinput,
.dark-panel
  :not(.mx_textinput):not(.mx_Field):not(.mx_no_textinput)
  > input[type="search"],
.dark-panel
  :not(.mx_textinput):not(.mx_Field):not(.mx_no_textinput)
  > input[type="text"] {
  color: #9fa9ba;
  background-color: #fff;
  border: none;
}

.light-panel .mx_textinput,
.light-panel
  :not(.mx_textinput):not(.mx_Field):not(.mx_no_textinput)
  > input[type="search"],
.light-panel
  :not(.mx_textinput):not(.mx_Field):not(.mx_no_textinput)
  > input[type="text"] {
  color: #9fa9ba;
  background-color: #f2f5f8;
  border: none;
}

::-moz-focus-inner {
  border: 0;
}

#mx_theme_accentColor {
  color: #0dbd8b;
}

#mx_theme_secondaryAccentColor {
  color: #f2f5f8;
}

#mx_theme_tertiaryAccentColor {
  color: #d3efe1;
}

.mx_Dialog_wrapper {
  position: fixed;
  z-index: 4000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.mx_Dialog {
  background-color: #fff;
  color: #747474;
  z-index: 4012;
  font-weight: 300;
  font-size: 1.5rem;
  position: relative;
  padding: 24px;
  max-height: 80%;
  -webkit-box-shadow: 2px 15px 30px 0 rgba(0, 0, 0, 0.48);
  box-shadow: 2px 15px 30px 0 rgba(0, 0, 0, 0.48);
  border-radius: 8px;
  overflow-y: auto;
}

.mx_Dialog_fixedWidth {
  width: 60vw;
  max-width: 704px;
}

.mx_Dialog_staticWrapper .mx_Dialog {
  z-index: 4010;
  contain: content;
}

.mx_Dialog_background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(46, 48, 51, 0.38);
  opacity: 0.8;
  z-index: 4011;
}

.mx_Dialog_background.mx_Dialog_staticBackground {
  z-index: 4009;
}

.mx_Dialog_wrapperWithStaticUnder .mx_Dialog_background {
  opacity: 0.4;
}

.mx_Dialog_lightbox .mx_Dialog_background {
  opacity: 0.95;
  background-color: #000;
}

.mx_Dialog_lightbox .mx_Dialog {
  border-radius: 0;
  background-color: transparent;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  pointer-events: none;
  padding: 0;
}

.mx_Dialog_header {
  position: relative;
  margin-bottom: 10px;
}

.mx_Dialog_titleImage {
  vertical-align: sub;
  width: 25px;
  height: 25px;
  margin-left: -2px;
  margin-right: 4px;
}

.mx_Dialog_title {
  font-size: 2.2rem;
  font-weight: 600;
  line-height: 3.6rem;
  color: #45474a;
}

.mx_Dialog_header.mx_Dialog_headerWithButton > .mx_Dialog_title {
  text-align: center;
}

.mx_Dialog_header.mx_Dialog_headerWithCancel > .mx_Dialog_title {
  margin-right: 20px;
}

.mx_Dialog_title.danger {
  color: #ff4b55;
}

.mx_Dialog_cancelButton {
  -webkit-mask: url(../../img/feather-customised/cancel.23c2689.svg);
  mask: url(../../img/feather-customised/cancel.23c2689.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: cover;
  mask-size: cover;
  width: 14px;
  height: 14px;
  background-color: #c1c1c1;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 0;
}

.mx_Dialog_content {
  margin: 24px 0 68px;
  font-size: 1.4rem;
  color: #2e2f32;
  word-wrap: break-word;
}

.mx_Dialog_buttons {
  margin-top: 20px;
  text-align: right;
}

.mx_Dialog_buttons .mx_Dialog_buttons_additive {
  float: left;
}

.mx_Dialog_buttons button,
.mx_Dialog_buttons input[type="submit"],
.mx_Dialog button,
.mx_Dialog input[type="submit"] {
  vertical-align: middle;
  border-radius: 8px;
  font-family: Inter, Twemoji, Apple Color Emoji, Segoe UI Emoji, Arial,
    Helvetica, Sans-Serif, Noto Color Emoji;
  font-size: 1.4rem;
  color: #fff;
  background-color: #0dbd8b;
  width: auto;
  padding: 7px 1.5em;
  cursor: pointer;
  display: inline-block;
  outline: none;
  margin-left: 0;
  margin-right: 8px;
  font-weight: 600;
  border: 1px solid #0dbd8b;
  color: #0dbd8b;
  background-color: #fff;
  font-family: inherit;
}

.mx_Dialog button:last-child {
  margin-right: 0;
}

.mx_Dialog_buttons button:focus,
.mx_Dialog_buttons input[type="submit"]:focus,
.mx_Dialog button:focus,
.mx_Dialog input[type="submit"]:focus {
  -webkit-filter: brightness(105%);
  filter: brightness(105%);
}

.mx_Dialog_buttons button.mx_Dialog_primary,
.mx_Dialog_buttons input[type="submit"].mx_Dialog_primary,
.mx_Dialog button.mx_Dialog_primary,
.mx_Dialog input[type="submit"].mx_Dialog_primary {
  color: #fff;
  background-color: #0dbd8b;
  min-width: 156px;
}

.mx_Dialog_buttons button.danger,
.mx_Dialog_buttons input[type="submit"].danger,
.mx_Dialog button.danger,
.mx_Dialog input[type="submit"].danger {
  background-color: #ff4b55;
  border: 1px solid #ff4b55;
  color: #fff;
}

.mx_Dialog button.warning,
.mx_Dialog input[type="submit"].warning {
  border: 1px solid #ff4b55;
  color: #ff4b55;
}

.mx_Dialog_buttons button:disabled,
.mx_Dialog_buttons input[type="submit"]:disabled,
.mx_Dialog button:disabled,
.mx_Dialog input[type="submit"]:disabled {
  background-color: #747474;
  border: 1px solid #747474;
  opacity: 0.7;
}

.mx_Dialog_wrapper.mx_Dialog_spinner .mx_Dialog {
  width: auto;
  border-radius: 8px;
  padding: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  overflow-x: hidden;
  overflow-y: hidden;
}

.mx_GeneralButton {
  vertical-align: middle;
  border: 0;
  border-radius: 8px;
  font-family: Inter, Twemoji, Apple Color Emoji, Segoe UI Emoji, Arial,
    Helvetica, Sans-Serif, Noto Color Emoji;
  font-size: 1.4rem;
  color: #fff;
  background-color: #0dbd8b;
  width: auto;
  padding: 7px 1.5em;
  cursor: pointer;
  display: inline-block;
  outline: none;
  display: inline;
  margin: auto;
}

.mx_linkButton {
  cursor: pointer;
  color: #0dbd8b;
}

.mx_TextInputDialog_label {
  text-align: left;
  padding-bottom: 12px;
}

.mx_TextInputDialog_input {
  font-size: 1.5rem;
  border-radius: 3px;
  border: 1px solid #e7e7e7;
  padding: 9px;
  color: #2e2f32;
  background-color: #fff;
}

.mx_textButton {
  vertical-align: middle;
  border: 0;
  border-radius: 8px;
  font-family: Inter, Twemoji, Apple Color Emoji, Segoe UI Emoji, Arial,
    Helvetica, Sans-Serif, Noto Color Emoji;
  font-size: 1.4rem;
  color: #fff;
  background-color: #0dbd8b;
  width: auto;
  cursor: pointer;
  display: inline-block;
  outline: none;
  font-size: 1.5rem;
  padding: 0 1.5em;
}

.mx_button_row {
  margin-top: 69px;
}

.mx_Username_color1 {
  color: #368bd6;
}

.mx_Username_color2 {
  color: #ac3ba8;
}

.mx_Username_color3 {
  color: #0dbd8b;
}

.mx_Username_color4 {
  color: #e64f7a;
}

.mx_Username_color5 {
  color: #ff812d;
}

.mx_Username_color6 {
  color: #2dc2c5;
}

.mx_Username_color7 {
  color: #5c56f5;
}

.mx_Username_color8 {
  color: #74d12c;
}

.mx_Tooltip_dark .mx_Tooltip_chevron:after {
  border-right-color: #27303a;
}

html {
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
}

* {
  scrollbar-width: thin;
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.2);
}

.mx_AutoHideScrollbar:hover {
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
}

.mx_AutoHideScrollbar:hover::-webkit-scrollbar {
  background-color: transparent;
}

.mx_AutoHideScrollbar:hover::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
}

.mx_AutoHideScrollbar {
  overflow-x: hidden;
  overflow-y: auto;
  overflow-y: overlay;
  -ms-overflow-style: -ms-autohiding-scrollbar;
}

.mx_AutoHideScrollbar::-webkit-scrollbar,
.mx_AutoHideScrollbar::-webkit-scrollbar-thumb {
  background-color: transparent;
}

.mx_AutoHideScrollbar {
  scrollbar-color: transparent transparent;
}

.mx_CompatibilityPage {
  width: 100%;
  height: 100%;
  background-color: #e55;
}

.mx_CompatibilityPage_box {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 500px;
  height: 300px;
  border: 1px solid;
  padding: 10px;
  background-color: #fcc;
}

.mx_ContextualMenu_wrapper {
  position: fixed;
  z-index: 5000;
}

.mx_ContextualMenu_background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  z-index: 5000;
}

.mx_ContextualMenu {
  border-radius: 8px;
  -webkit-box-shadow: 4px 4px 12px 0 rgba(118, 131, 156, 0.6);
  box-shadow: 4px 4px 12px 0 rgba(118, 131, 156, 0.6);
  background-color: #fff;
  color: #2e2f32;
  position: absolute;
  font-size: 1.4rem;
  z-index: 5001;
  contain: content;
}

.mx_ContextualMenu_right {
  right: 0;
}

.mx_ContextualMenu.mx_ContextualMenu_withChevron_right {
  right: 8px;
}

.mx_ContextualMenu_chevron_right {
  position: absolute;
  right: -8px;
  top: 0;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-left: 8px solid #fff;
  border-bottom: 8px solid transparent;
}

.mx_ContextualMenu_left {
  left: 0;
}

.mx_ContextualMenu.mx_ContextualMenu_withChevron_left {
  left: 8px;
}

.mx_ContextualMenu_chevron_left {
  position: absolute;
  left: -8px;
  top: 0;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-right: 8px solid #fff;
  border-bottom: 8px solid transparent;
}

.mx_ContextualMenu_top {
  top: 0;
}

.mx_ContextualMenu.mx_ContextualMenu_withChevron_top {
  top: 8px;
}

.mx_ContextualMenu_chevron_top {
  position: absolute;
  left: 0;
  top: -8px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-bottom: 8px solid #fff;
  border-right: 8px solid transparent;
}

.mx_ContextualMenu_bottom {
  bottom: 0;
}

.mx_ContextualMenu.mx_ContextualMenu_withChevron_bottom {
  bottom: 8px;
}

.mx_ContextualMenu_chevron_bottom {
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-top: 8px solid #fff;
  border-right: 8px solid transparent;
}

.mx_CreateRoom {
  width: 960px;
  margin-left: auto;
  margin-right: auto;
  color: #2e2f32;
}

.mx_CreateRoom input,
.mx_CreateRoom textarea {
  border-radius: 3px;
  border: 1px solid #c7c7c7;
  font-weight: 300;
  font-size: 1.3rem;
  padding: 9px;
  margin-top: 6px;
}

.mx_CreateRoom_description {
  width: 330px;
}

.mx_CustomRoomTagPanel {
  background-color: hsla(0, 0%, 91%, 0.77);
  max-height: 40vh;
}

.mx_CustomRoomTagPanel_scroller {
  max-height: inherit;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_CustomRoomTagPanel .mx_AccessibleButton {
  margin: 0 auto;
  width: 40px;
  padding: 10px 0 9px;
  position: relative;
}

.mx_CustomRoomTagPanel .mx_BaseAvatar_image {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
}

.mx_CustomRoomTagPanel
  .mx_AccessibleButton.CustomRoomTagPanel_tileSelected:before {
  content: "";
  height: 56px;
  background-color: #238cf5;
  width: 5px;
  position: absolute;
  left: -9px;
  border-radius: 0 3px 3px 0;
  top: 5px;
}

.mx_FilePanel {
  -webkit-box-ordinal-group: 3;
  -ms-flex-order: 2;
  order: 2;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 0px;
  flex: 1 1 0;
  overflow-y: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.mx_FilePanel .mx_RoomView_messageListWrapper {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.mx_FilePanel .mx_RoomView_MessageList {
  width: 100%;
}

.mx_FilePanel .mx_EventTile_avatar,
.mx_FilePanel .mx_RoomView_MessageList h2 {
  display: none;
}

.mx_FilePanel .mx_EventTile:not([data-layout="bubble"]) {
  word-break: break-word;
  margin-top: 10px;
  padding-top: 0;
}

.mx_FilePanel .mx_EventTile:not([data-layout="bubble"]) .mx_EventTile_line {
  padding-left: 0;
}

.mx_FilePanel .mx_EventTile .mx_MImageBody {
  margin-right: 0;
}

.mx_FilePanel .mx_EventTile .mx_MFileBody {
  line-height: 2.4rem;
}

.mx_FilePanel .mx_EventTile .mx_MFileBody_download {
  padding-top: 8px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 1.4rem;
  color: #acacac;
}

.mx_FilePanel .mx_EventTile .mx_MFileBody_downloadLink {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  color: #747474;
}

.mx_FilePanel .mx_EventTile .mx_MImageBody_size {
  -webkit-box-flex: 1;
  -ms-flex: 1 0 0px;
  flex: 1 0 0;
  font-size: 1.4rem;
  text-align: right;
  white-space: nowrap;
}

.mx_FilePanel .mx_EventTile_senderDetails {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: -2px;
}

.mx_FilePanel .mx_EventTile_senderDetailsLink {
  text-decoration: none;
}

.mx_FilePanel .mx_EventTile .mx_SenderProfile {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  line-height: normal;
  padding: 0;
  font-size: 1.4rem;
  opacity: 1;
  color: #acacac;
}

.mx_FilePanel .mx_EventTile .mx_MessageTimestamp {
  -webkit-box-flex: 1;
  -ms-flex: 1 0 0px;
  flex: 1 0 0;
  text-align: right;
  visibility: visible;
  position: static;
  font-size: 1.4rem;
  opacity: 1;
  color: #acacac;
}

.mx_FilePanel .mx_EventTile_line {
  margin-right: 0;
  padding-left: 0;
}

.mx_FilePanel .mx_EventTile_selected .mx_EventTile_line {
  padding-left: 0;
}

.mx_FilePanel_empty:before {
  -webkit-mask-image: url(../../img/element-icons/room/files.5709c0c.svg);
  mask-image: url(../../img/element-icons/room/files.5709c0c.svg);
}

.mx_GenericErrorPage {
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.mx_GenericErrorPage_box {
  display: inline;
  width: 500px;
  min-height: 125px;
  border: 1px solid #f22;
  padding: 10px 10px 20px;
  background-color: #fcc;
}

.mx_GroupFilterPanel {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background-color: hsla(0, 0%, 91%, 0.77);
  cursor: pointer;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  min-height: 0;
}

.mx_GroupFilterPanel_items_selected {
  cursor: pointer;
}

.mx_GroupFilterPanel .mx_GroupFilterPanel_divider {
  height: 0;
  width: 90%;
  border: none;
  border-bottom: 1px solid #8d99a5;
}

.mx_GroupFilterPanel .mx_GroupFilterPanel_scroller {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  width: 100%;
}

.mx_GroupFilterPanel .mx_GroupFilterPanel_tagTileContainer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 6px;
}

.mx_GroupFilterPanel .mx_GroupFilterPanel_tagTileContainer > div {
  margin: 6px 0;
}

.mx_GroupFilterPanel .mx_TagTile {
  position: relative;
}

.mx_GroupFilterPanel .mx_TagTile .mx_BetaDot {
  position: absolute;
  right: -13px;
  top: -11px;
}

.mx_GroupFilterPanel .mx_TagTile.mx_TagTile_prototype {
  padding: 3px;
}

.mx_GroupFilterPanel .mx_TagTile.mx_TagTile_selected_prototype {
  background-color: #fff;
  border-radius: 6px;
}

.mx_TagTile_selected_prototype .mx_TagTile_homeIcon:before {
  background-color: #2e2f32;
}

.mx_TagTile:not(.mx_TagTile_selected_prototype) .mx_TagTile_homeIcon {
  background-color: rgba(92, 100, 112, 0.2);
  border-radius: 48px;
}

.mx_TagTile:not(.mx_TagTile_selected_prototype) .mx_TagTile_homeIcon:before {
  background-color: #5c6470;
}

.mx_TagTile_homeIcon {
  width: 32px;
  height: 32px;
  position: relative;
}

.mx_TagTile_homeIcon:before {
  -webkit-mask-image: url(../../img/element-icons/home.b706c0e.svg);
  mask-image: url(../../img/element-icons/home.b706c0e.svg);
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 21px;
  mask-size: 21px;
  content: "";
  display: inline-block;
  width: 32px;
  height: 32px;
  position: absolute;
  top: calc(50% - 16px);
  left: calc(50% - 16px);
}

.mx_GroupFilterPanel .mx_TagTile_plus {
  margin-bottom: 12px;
  height: 32px;
  width: 32px;
  border-radius: 20px;
  background-color: rgba(92, 100, 112, 0.2);
  position: relative;
  display: block !important;
}

.mx_GroupFilterPanel .mx_TagTile_plus:before {
  background-color: #5c6470;
  -webkit-mask-image: url(../../img/feather-customised/plus.38ae979.svg);
  mask-image: url(../../img/feather-customised/plus.38ae979.svg);
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.mx_GroupFilterPanel .mx_TagTile.mx_TagTile_selected:before {
  content: "";
  height: 100%;
  background-color: #0dbd8b;
  width: 4px;
  position: absolute;
  left: -12px;
  border-radius: 0 3px 3px 0;
}

.mx_GroupFilterPanel .mx_TagTile.mx_AccessibleButton:focus {
  -webkit-filter: none;
  filter: none;
}

.mx_TagTile_tooltip {
  position: relative;
  top: -30px;
  left: 5px;
}

.mx_TagTile_context_button {
  min-width: 15px;
  height: 15px;
  position: absolute;
  right: -5px;
  top: -8px;
  border-radius: 8px;
  background-color: #dbdbdb;
  color: #000;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  padding-top: 1px;
  padding-left: 4px;
  padding-right: 4px;
}

.mx_TagTile_avatar {
  position: relative;
}

.mx_TagTile_badge {
  position: absolute;
  right: -4px;
  top: -2px;
  border-radius: 8px;
  color: #fff;
  font-weight: 600;
  font-size: 1.4rem;
  padding: 0 5px;
  background-color: #61708b;
}

.mx_TagTile_badgeHighlight {
  background-color: #ff4b55;
}

.mx_GroupView {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow: hidden;
}

.mx_GroupView_error {
  margin: auto;
}

.mx_GroupView_header {
  min-height: 52px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding-bottom: 10px;
  padding-left: 19px;
}

.mx_GroupView_header_view {
  border-bottom: 1px solid transparent;
  padding-bottom: 0;
  padding-right: 8px;
}

.mx_GroupView_header_avatar,
.mx_GroupView_header_info {
  display: table-cell;
  vertical-align: middle;
}

.mx_GroupHeader_button {
  position: relative;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
  height: 20px;
  width: 20px;
}

.mx_GroupHeader_button:before {
  content: "";
  position: absolute;
  height: 20px;
  width: 20px;
  background-color: #91a1c0;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
}

.mx_GroupHeader_editButton:before {
  -webkit-mask-image: url(../../img/element-icons/settings.6b381af.svg);
  mask-image: url(../../img/element-icons/settings.6b381af.svg);
}

.mx_GroupHeader_shareButton:before {
  -webkit-mask-image: url(../../img/element-icons/room/share.54dc3fb.svg);
  mask-image: url(../../img/element-icons/room/share.54dc3fb.svg);
}

.mx_GroupView_hostingSignup img {
  margin-left: 5px;
}

.mx_GroupView_editable {
  border-bottom: 1px solid #c7c7c7 !important;
  min-width: 150px;
  cursor: text;
}

.mx_GroupView_editable:focus {
  border-bottom: 1px solid #0dbd8b !important;
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.mx_GroupView_header_isUserMember
  .mx_GroupView_header_name:hover
  div:not(.mx_GroupView_editable) {
  color: #0dbd8b;
  cursor: pointer;
}

.mx_GroupView_avatarPicker {
  position: relative;
}

.mx_GroupView_avatarPicker_edit {
  position: absolute;
  top: 50px;
  left: 15px;
}

.mx_GroupView_avatarPicker .mx_Spinner {
  width: 48px;
  height: 48px !important;
}

.mx_GroupView_header_leftCol {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  overflow: hidden;
}

.mx_GroupView_header_rightCol {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_GroupView_textButton {
  display: inline-block;
}

.mx_GroupView_header_groupid {
  font-weight: 400;
  font-size: medium;
  padding-left: 10px;
}

.mx_GroupView_header_name {
  vertical-align: middle;
  width: 100%;
  height: 31px;
  color: #2e2f32;
  font-weight: 700;
  font-size: 2.2rem;
  padding-right: 16px;
}

.mx_GroupView_header_name,
.mx_GroupView_header_shortDesc {
  overflow: hidden;
  padding-left: 19px;
  text-overflow: ellipsis;
  border-bottom: 1px solid transparent;
}

.mx_GroupView_header_shortDesc {
  vertical-align: bottom;
  float: left;
  max-height: 42px;
  color: #a2a2a2;
  font-weight: 300;
  font-size: 1.3rem;
  margin-right: 16px;
}

.mx_GroupView_avatarPicker_label {
  cursor: pointer;
}

.mx_GroupView_cancelButton {
  padding-left: 8px;
}

.mx_GroupView_cancelButton img {
  position: relative;
  top: 5px;
}

.mx_GroupView input[type="radio"] {
  margin: 10px 10px 0;
}

.mx_GroupView_label_text {
  display: inline-block;
  max-width: 80%;
  vertical-align: 0.1em;
  line-height: 2em;
}

.mx_GroupView_body {
  margin: 0 24px;
}

.mx_GroupView_body,
.mx_GroupView_rooms {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.mx_GroupView_rooms {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-height: 200px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.mx_GroupView h3 {
  text-transform: uppercase;
  color: #3d3b39;
  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 10px;
}

.mx_GroupView_rooms_header .mx_AccessibleButton {
  padding-left: 14px;
  margin-bottom: 14px;
  height: 24px;
}

.mx_GroupView_group {
  border-top: 1px solid transparent;
}

.mx_GroupView_group_disabled {
  opacity: 0.3;
  pointer-events: none;
}

.mx_GroupView_rooms_header_addRow_button {
  display: inline-block;
}

.mx_GroupView_rooms_header_addRow_button object {
  pointer-events: none;
}

.mx_GroupView_rooms_header_addRow_label {
  display: inline-block;
  vertical-align: top;
  line-height: 2.4rem;
  padding-left: 28px;
  color: #0dbd8b;
}

.mx_GroupView_rooms .mx_RoomDetailList {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  border-top: 1px solid transparent;
  padding-top: 10px;
  word-break: break-word;
}

.mx_GroupView .mx_RoomView_messageListWrapper {
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
}

.mx_GroupView_membershipSection {
  color: #888;
  margin-top: 10px;
}

.mx_GroupView_membershipSubSection {
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding-bottom: 8px;
}

.mx_GroupView_membershipSubSection .mx_Spinner {
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}

.mx_GroupView_membershipSection_description {
  line-height: 3.4rem;
}

.mx_GroupView_membershipSection_description .mx_BaseAvatar {
  margin-right: 10px;
}

.mx_GroupView_membershipSection .mx_GroupView_textButton {
  margin-right: 0;
  margin-top: 0;
  margin-left: 8px;
}

.mx_GroupView_memberSettings_toggle label {
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.mx_GroupView_memberSettings input {
  margin-right: 6px;
}

.mx_GroupView_featuredThings {
  margin-top: 20px;
}

.mx_GroupView_featuredThings_header {
  font-weight: 700;
  font-size: 120%;
  margin-bottom: 20px;
}

.mx_GroupView_featuredThings_category {
  font-weight: 700;
  font-size: 110%;
  margin-top: 10px;
}

.mx_GroupView_featuredThings_container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.mx_GroupView_featuredThing,
.mx_GroupView_featuredThings_addButton {
  display: table-cell;
  text-align: center;
  width: 100px;
  margin: 0 20px;
}

.mx_GroupView_featuredThing {
  position: relative;
}

.mx_GroupView_featuredThing .mx_GroupView_featuredThing_deleteButton {
  position: absolute;
  top: -7px;
  right: 11px;
  opacity: 0.4;
}

.mx_GroupView_featuredThing .mx_BaseAvatar {
  vertical-align: baseline;
  vertical-align: initial;
}

.mx_GroupView_featuredThings_addButton object {
  pointer-events: none;
}

.mx_GroupView_featuredThing_name {
  word-wrap: break-word;
}

.mx_GroupView_uploadInput {
  display: none;
}

.mx_GroupView_body .mx_AutoHideScrollbar > * {
  margin: 11px 50px 50px 68px;
}

.mx_GroupView_groupDesc textarea {
  width: 100%;
  max-width: 100%;
  height: 150px;
}

.mx_GroupView_changeDelayWarning,
.mx_GroupView_groupDesc_placeholder {
  background-color: #f7f7f7;
  color: #888;
  border-radius: 10px;
  text-align: center;
  margin: 20px 0;
}

.mx_GroupView_groupDesc_placeholder {
  padding: 100px 20px;
  cursor: pointer;
}

.mx_GroupView_changeDelayWarning {
  padding: 40px 20px;
}

.mx_GroupView
  .mx_MemberInfo
  .mx_AutoHideScrollbar
  > :not(.mx_MemberInfo_avatar) {
  padding-left: 16px;
  padding-right: 16px;
}

.mx_HeaderButtons {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.mx_RoomHeader_buttons + .mx_HeaderButtons:before {
  content: unset;
}

.mx_HeaderButtons:before {
  content: "";
  background-color: #91a1c0;
  opacity: 0.5;
  margin: 6px 8px;
  border-radius: 1px;
  width: 1px;
}

.mx_HomePage {
  max-width: 960px;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

.mx_HomePage_default {
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.mx_HomePage_default .mx_HomePage_default_wrapper {
  margin: auto;
}

.mx_HomePage_default img {
  height: 48px;
}

.mx_HomePage_default h1 {
  font-weight: 600;
  font-size: 3.2rem;
  line-height: 4.4rem;
  margin-bottom: 4px;
}

.mx_HomePage_default h4 {
  margin-top: 4px;
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.5rem;
  color: #61708b;
}

.mx_HomePage_default .mx_MiniAvatarUploader {
  margin: 0 auto;
}

.mx_HomePage_default .mx_HomePage_default_buttons {
  margin: 60px auto 0;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
}

.mx_HomePage_default .mx_HomePage_default_buttons .mx_AccessibleButton {
  padding: 73px 8px 15px;
  width: 160px;
  height: 132px;
  margin: 20px;
  position: relative;
  display: inline-block;
  border-radius: 8px;
  vertical-align: top;
  word-break: break-word;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
  color: #fff;
  background-color: #0dbd8b;
}

.mx_HomePage_default .mx_HomePage_default_buttons .mx_AccessibleButton:before {
  top: 20px;
  left: 60px;
  width: 40px;
  height: 40px;
  content: "";
  position: absolute;
  background-color: #fff;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
}

.mx_HomePage_default
  .mx_HomePage_default_buttons
  .mx_AccessibleButton.mx_HomePage_button_sendDm:before {
  -webkit-mask-image: url(../../img/element-icons/feedback.a91241e.svg);
  mask-image: url(../../img/element-icons/feedback.a91241e.svg);
}

.mx_HomePage_default
  .mx_HomePage_default_buttons
  .mx_AccessibleButton.mx_HomePage_button_explore:before {
  -webkit-mask-image: url(../../img/element-icons/roomlist/explore.1523e65.svg);
  mask-image: url(../../img/element-icons/roomlist/explore.1523e65.svg);
}

.mx_HomePage_default
  .mx_HomePage_default_buttons
  .mx_AccessibleButton.mx_HomePage_button_createGroup:before {
  -webkit-mask-image: url(../../img/element-icons/community-members.cbb31c1.svg);
  mask-image: url(../../img/element-icons/community-members.cbb31c1.svg);
}

.mx_LeftPanel {
  background-color: hsla(0, 0%, 96.1%, 0.9);
  min-width: 206px;
  max-width: 50%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  contain: content;
}

.mx_LeftPanel .mx_LeftPanel_GroupFilterPanelContainer {
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -ms-flex-preferred-size: 56px;
  flex-basis: 56px;
  height: 100%;
  -ms-flex-direction: column;
  flex-direction: column;
}

.mx_LeftPanel .mx_LeftPanel_GroupFilterPanelContainer,
.mx_LeftPanel .mx_LeftPanel_roomListContainer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
}

.mx_LeftPanel .mx_LeftPanel_roomListContainer {
  background-color: hsla(0, 0%, 96.1%, 0.9);
  -webkit-box-flex: 1;
  -ms-flex: 1 0 0px;
  flex: 1 0 0;
  min-width: 0;
  -ms-flex-direction: column;
  flex-direction: column;
}

.mx_LeftPanel .mx_LeftPanel_roomListContainer .mx_LeftPanel_userHeader {
  padding: 12px;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.mx_LeftPanel
  .mx_LeftPanel_roomListContainer
  .mx_LeftPanel_breadcrumbsContainer {
  overflow-y: hidden;
  overflow-x: scroll;
  margin: 12px 12px 0;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  contain: content;
}

.mx_LeftPanel
  .mx_LeftPanel_roomListContainer
  .mx_LeftPanel_breadcrumbsContainer.mx_IndicatorScrollbar_leftOverflow {
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(transparent),
    color-stop(5%, #000)
  );
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 5%);
  mask-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(transparent),
    color-stop(5%, #000)
  );
  mask-image: linear-gradient(90deg, transparent, #000 5%);
}

.mx_LeftPanel
  .mx_LeftPanel_roomListContainer
  .mx_LeftPanel_breadcrumbsContainer.mx_IndicatorScrollbar_rightOverflow {
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#000),
    color-stop(95%, #000),
    to(transparent)
  );
  -webkit-mask-image: linear-gradient(90deg, #000, #000 95%, transparent);
  mask-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#000),
    color-stop(95%, #000),
    to(transparent)
  );
  mask-image: linear-gradient(90deg, #000, #000 95%, transparent);
}

.mx_LeftPanel
  .mx_LeftPanel_roomListContainer
  .mx_LeftPanel_breadcrumbsContainer.mx_IndicatorScrollbar_rightOverflow.mx_IndicatorScrollbar_leftOverflow {
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(transparent),
    color-stop(5%, #000),
    color-stop(95%, #000),
    to(transparent)
  );
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent,
    #000 5%,
    #000 95%,
    transparent
  );
  mask-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(transparent),
    color-stop(5%, #000),
    color-stop(95%, #000),
    to(transparent)
  );
  mask-image: linear-gradient(
    90deg,
    transparent,
    #000 5%,
    #000 95%,
    transparent
  );
}

.mx_LeftPanel .mx_LeftPanel_roomListContainer .mx_LeftPanel_filterContainer {
  margin-left: 12px;
  margin-right: 12px;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_LeftPanel
  .mx_LeftPanel_roomListContainer
  .mx_LeftPanel_filterContainer
  .mx_RoomSearch_focused
  + .mx_LeftPanel_exploreButton,
.mx_LeftPanel
  .mx_LeftPanel_roomListContainer
  .mx_LeftPanel_filterContainer
  .mx_RoomSearch_hasQuery
  + .mx_LeftPanel_exploreButton {
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  margin: 0;
  width: 0;
}

.mx_LeftPanel
  .mx_LeftPanel_roomListContainer
  .mx_LeftPanel_filterContainer
  .mx_RoomSearch_focused
  + .mx_LeftPanel_exploreButton:before,
.mx_LeftPanel
  .mx_LeftPanel_roomListContainer
  .mx_LeftPanel_filterContainer
  .mx_RoomSearch_hasQuery
  + .mx_LeftPanel_exploreButton:before {
  content: none;
}

.mx_LeftPanel
  .mx_LeftPanel_roomListContainer
  .mx_LeftPanel_filterContainer
  .mx_LeftPanel_dialPadButton {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: rgba(141, 151, 165, 0.2);
  position: relative;
  margin-left: 8px;
}

.mx_LeftPanel
  .mx_LeftPanel_roomListContainer
  .mx_LeftPanel_filterContainer
  .mx_LeftPanel_dialPadButton:before {
  content: "";
  position: absolute;
  top: 8px;
  left: 8px;
  width: 16px;
  height: 16px;
  -webkit-mask-image: url(../../img/element-icons/call/dialpad.3be6cbc.svg);
  mask-image: url(../../img/element-icons/call/dialpad.3be6cbc.svg);
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  background: #737d8c;
}

.mx_LeftPanel
  .mx_LeftPanel_roomListContainer
  .mx_LeftPanel_filterContainer
  .mx_LeftPanel_exploreButton {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: rgba(141, 151, 165, 0.2);
  position: relative;
  margin-left: 8px;
}

.mx_LeftPanel
  .mx_LeftPanel_roomListContainer
  .mx_LeftPanel_filterContainer
  .mx_LeftPanel_exploreButton:before {
  content: "";
  position: absolute;
  top: 8px;
  left: 8px;
  width: 16px;
  height: 16px;
  -webkit-mask-image: url(../../img/element-icons/roomlist/explore.1523e65.svg);
  mask-image: url(../../img/element-icons/roomlist/explore.1523e65.svg);
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  background: #737d8c;
}

.mx_LeftPanel
  .mx_LeftPanel_roomListContainer
  .mx_LeftPanel_filterContainer
  .mx_LeftPanel_exploreButton.mx_LeftPanel_exploreButton_space:before {
  -webkit-mask-image: url(../../img/element-icons/roomlist/browse.080f923.svg);
  mask-image: url(../../img/element-icons/roomlist/browse.080f923.svg);
}

.mx_LeftPanel
  .mx_LeftPanel_roomListContainer
  .mx_LeftPanel_roomListFilterCount {
  font-size: 1.3rem;
  font-weight: 600;
  margin-left: 12px;
  margin-top: 14px;
  margin-bottom: -4px;
}

.mx_LeftPanel .mx_LeftPanel_roomListContainer .mx_LeftPanel_roomListWrapper {
  overflow: hidden;
  margin-top: 10px;
  -webkit-box-flex: 1;
  -ms-flex: 1 0 0px;
  flex: 1 0 0;
}

.mx_LeftPanel
  .mx_LeftPanel_roomListContainer
  .mx_LeftPanel_roomListWrapper.mx_LeftPanel_roomListWrapper_stickyBottom {
  padding-bottom: 32px;
}

.mx_LeftPanel
  .mx_LeftPanel_roomListContainer
  .mx_LeftPanel_roomListWrapper.mx_LeftPanel_roomListWrapper_stickyTop {
  padding-top: 32px;
}

.mx_LeftPanel
  .mx_LeftPanel_roomListContainer
  .mx_LeftPanel_actualRoomListContainer {
  position: relative;
  height: 100%;
}

.mx_LeftPanel.mx_LeftPanel_minimized {
  min-width: unset;
  width: unset !important;
}

.mx_LeftPanel.mx_LeftPanel_minimized .mx_LeftPanel_roomListContainer {
  width: 68px;
}

.mx_LeftPanel.mx_LeftPanel_minimized
  .mx_LeftPanel_roomListContainer
  .mx_LeftPanel_userHeader {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.mx_LeftPanel.mx_LeftPanel_minimized
  .mx_LeftPanel_roomListContainer
  .mx_LeftPanel_filterContainer {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.mx_LeftPanel.mx_LeftPanel_minimized
  .mx_LeftPanel_roomListContainer
  .mx_LeftPanel_filterContainer
  .mx_LeftPanel_dialPadButton,
.mx_LeftPanel.mx_LeftPanel_minimized
  .mx_LeftPanel_roomListContainer
  .mx_LeftPanel_filterContainer
  .mx_LeftPanel_exploreButton {
  margin-left: 0;
  margin-top: 8px;
  background-color: transparent;
}

.mx_LeftPanelWidget {
  margin-left: 8px;
  margin-bottom: 4px;
}

.mx_LeftPanelWidget .mx_LeftPanelWidget_headerContainer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 24px;
  color: #8d99a5;
  margin-top: 4px;
}

.mx_LeftPanelWidget
  .mx_LeftPanelWidget_headerContainer
  .mx_LeftPanelWidget_stickable {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  max-width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_LeftPanelWidget
  .mx_LeftPanelWidget_headerContainer
  .mx_LeftPanelWidget_headerText {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  max-width: calc(100% - 16px);
  line-height: 1.6rem;
  font-size: 1.3rem;
  font-weight: 600;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.mx_LeftPanelWidget
  .mx_LeftPanelWidget_headerContainer
  .mx_LeftPanelWidget_headerText
  .mx_LeftPanelWidget_collapseBtn {
  display: inline-block;
  position: relative;
  width: 14px;
  height: 14px;
  margin-right: 6px;
}

.mx_LeftPanelWidget
  .mx_LeftPanelWidget_headerContainer
  .mx_LeftPanelWidget_headerText
  .mx_LeftPanelWidget_collapseBtn:before {
  content: "";
  width: 18px;
  height: 18px;
  position: absolute;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  background-color: #8d99a5;
  -webkit-mask-image: url(../../img/feather-customised/chevron-down.5278abe.svg);
  mask-image: url(../../img/feather-customised/chevron-down.5278abe.svg);
}

.mx_LeftPanelWidget
  .mx_LeftPanelWidget_headerContainer
  .mx_LeftPanelWidget_headerText
  .mx_LeftPanelWidget_collapseBtn.mx_LeftPanelWidget_collapseBtn_collapsed:before {
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
}

.mx_LeftPanelWidget .mx_LeftPanelWidget_resizeBox {
  position: relative;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow: visible;
}

.mx_LeftPanelWidget .mx_AppTileFullWidth,
.mx_LeftPanelWidget .mx_LeftPanelWidget_resizeBox {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
}

.mx_LeftPanelWidget .mx_AppTileFullWidth {
  -webkit-box-flex: 1;
  -ms-flex: 1 0 0px;
  flex: 1 0 0;
  overflow: hidden;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-mask-image: linear-gradient(0deg, transparent, #000 4px);
  mask-image: linear-gradient(0deg, transparent, #000 4px);
}

.mx_LeftPanelWidget .mx_LeftPanelWidget_resizerHandle {
  cursor: ns-resize;
  border-radius: 3px;
  width: unset !important;
  height: 4px !important;
  position: absolute;
  top: -24px !important;
  left: calc(50% - 32px) !important;
  right: calc(50% - 32px) !important;
}

.mx_LeftPanelWidget:hover .mx_LeftPanelWidget_resizerHandle {
  opacity: 0.8;
  background-color: #2e2f32;
}

.mx_LeftPanelWidget .mx_LeftPanelWidget_maximizeButton {
  margin-left: 8px;
  margin-right: 7px;
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 32px;
}

.mx_LeftPanelWidget .mx_LeftPanelWidget_maximizeButton:before {
  content: "";
  width: 16px;
  height: 16px;
  position: absolute;
  top: 4px;
  left: 4px;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-image: url(../../img/feather-customised/maximise.dc32127.svg);
  mask-image: url(../../img/feather-customised/maximise.dc32127.svg);
  background: #61708b;
}

.mx_LeftPanelWidget_maximizeButtonTooltip {
  margin-top: -3px;
}

.mx_MainSplit {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  min-width: 0;
  min-height: 0;
  height: 100%;
}

.mx_MainSplit > .mx_RightPanel_ResizeWrapper {
  padding: 5px;
  margin-left: 8px;
  height: calc(100vh - 51px);
}

.mx_MainSplit > .mx_RightPanel_ResizeWrapper:hover .mx_RightPanel_ResizeHandle {
  top: 50% !important;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  height: 64px !important;
  width: 4px !important;
  border-radius: 4px !important;
  background-color: #2e2f32;
  opacity: 0.8;
}

.mx_MatrixChat_splash {
  position: relative;
  height: 100%;
}

.mx_MatrixChat_splashButtons {
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 30px;
}

.mx_MatrixChat_wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.mx_MatrixToolbar {
  -webkit-box-ordinal-group: 2;
  -ms-flex-order: 1;
  order: 1;
  height: 40px;
}

.mx_MatrixChat {
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-ordinal-group: 3;
  -ms-flex-order: 2;
  order: 2;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  min-height: 0;
}

.mx_MatrixChat_syncError {
  color: #fff;
  background-color: #df2a8b;
  border-radius: 5px;
  display: table;
  padding: 30px;
  position: absolute;
  top: 100px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}

.mx_MatrixChat > :not(.mx_LeftPanel):not(.mx_SpacePanel):not(.mx_ResizeHandle) {
  background-color: #fff;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 0px;
  flex: 1 1 0;
  min-width: 0;
  height: 100%;
}

.mx_MatrixChat > .mx_ResizeHandle_horizontal:hover {
  position: relative;
}

.mx_MatrixChat > .mx_ResizeHandle_horizontal:hover:before {
  position: absolute;
  left: 6px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  height: 64px;
  width: 4px;
  border-radius: 4px;
  content: " ";
  background-color: #2e2f32;
  opacity: 0.8;
}

.mx_MyGroups {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.mx_MyGroups .mx_BetaCard {
  margin: 0 72px;
  max-width: 760px;
}

.mx_MyGroups .mx_RoomHeader_simpleHeader {
  margin-left: 0;
}

.mx_MyGroups_header {
  margin-left: 2px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.mx_MyGroups > :not(.mx_RoomHeader):not(.mx_BetaCard) {
  max-width: 960px;
  margin: 40px;
}

.mx_MyGroups_headerCard {
  -webkit-box-flex: 1;
  -ms-flex: 1 0 50%;
  flex: 1 0 50%;
  margin-bottom: 30px;
  min-width: 400px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_MyGroups_headerCard .mx_MyGroups_headerCard_button {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  margin-right: 13px;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background-color: rgba(92, 100, 112, 0.2);
  position: relative;
}

.mx_MyGroups_headerCard .mx_MyGroups_headerCard_button:before {
  background-color: #5c6470;
  -webkit-mask: url(../../img/icons-create-room.817ede2.svg);
  mask: url(../../img/icons-create-room.817ede2.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: 80%;
  mask-size: 80%;
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.mx_MyGroups_headerCard_header {
  font-weight: 700;
  margin-bottom: 10px;
}

.mx_MyGroups_headerCard_content {
  padding-right: 15px;
}

.mx_MyGroups_joinBox {
  visibility: hidden;
  height: 0;
  margin: 0;
}

.mx_MyGroups_content {
  margin-left: 2px;
  -webkit-box-flex: 1;
  -ms-flex: 1 0 0px;
  flex: 1 0 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow-y: auto;
}

.mx_MyGroups_scrollable {
  overflow-y: inherit;
}

.mx_MyGroups_placeholder {
  background-color: #f7f7f7;
  color: #888;
  line-height: 40rem;
  border-radius: 10px;
  text-align: center;
}

.mx_MyGroups_joinedGroups {
  border-top: 1px solid transparent;
  overflow-x: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  -ms-flex-line-pack: start;
  align-content: flex-start;
}

.mx_MyGroups_joinedGroups .mx_GroupTile {
  min-width: 300px;
  max-width: 33%;
  -webkit-box-flex: 1;
  -ms-flex: 1 0 300px;
  flex: 1 0 300px;
  height: 75px;
  margin: 10px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  cursor: pointer;
}

.mx_GroupTile_avatar {
  cursor: -webkit-grab, -webkit-grab;
  cursor: grab, -webkit-grab;
}

.mx_GroupTile_profile {
  margin-left: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.mx_GroupTile_profile .mx_GroupTile_desc,
.mx_GroupTile_profile .mx_GroupTile_groupId,
.mx_GroupTile_profile .mx_GroupTile_name {
  padding-right: 10px;
}

.mx_GroupTile_profile .mx_GroupTile_name {
  margin: 0;
  font-size: 1.5rem;
}

.mx_GroupTile_profile .mx_GroupTile_groupId {
  font-size: 1.3rem;
  opacity: 0.7;
}

.mx_GroupTile_profile .mx_GroupTile_desc {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 1.3rem;
  max-height: 36px;
  overflow: hidden;
}

.mx_NonUrgentToastContainer {
  position: absolute;
  bottom: 30px;
  left: 28px;
  z-index: 101;
}

.mx_NonUrgentToastContainer .mx_NonUrgentToastContainer_toast {
  padding: 10px 12px;
  border-radius: 8px;
  width: 320px;
  font-size: 1.3rem;
  margin-top: 8px;
  background-color: #17191c;
  color: #fff;
}

.mx_NotificationPanel {
  -webkit-box-ordinal-group: 3;
  -ms-flex-order: 2;
  order: 2;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 0px;
  flex: 1 1 0;
  overflow-y: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.mx_NotificationPanel .mx_RoomView_messageListWrapper {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.mx_NotificationPanel .mx_RoomView_MessageList {
  width: 100%;
}

.mx_NotificationPanel .mx_RoomView_MessageList h2 {
  margin-left: 0;
}

.mx_NotificationPanel .mx_EventTile {
  word-break: break-word;
  position: relative;
  padding-bottom: 18px;
}

.mx_NotificationPanel
  .mx_EventTile:not(.mx_EventTile_last):not(.mx_EventTile_lastInSection):after {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #8d99a5;
  height: 1px;
  opacity: 0.4;
  content: "";
}

.mx_NotificationPanel .mx_EventTile_roomName {
  font-weight: 700;
  font-size: 1.4rem;
}

.mx_NotificationPanel .mx_EventTile_roomName > * {
  vertical-align: middle;
}

.mx_NotificationPanel .mx_EventTile_roomName > .mx_BaseAvatar {
  margin-right: 8px;
}

.mx_NotificationPanel .mx_EventTile_roomName a {
  color: #2e2f32;
}

.mx_NotificationPanel .mx_EventTile_avatar {
  display: none;
}

.mx_NotificationPanel .mx_EventTile .mx_MessageTimestamp,
.mx_NotificationPanel .mx_EventTile .mx_SenderProfile {
  color: #2e2f32;
  font-size: 1.2rem;
  display: inline;
}

.mx_NotificationPanel
  .mx_EventTile:not([data-layout="bubble"])
  .mx_EventTile_senderDetails {
  padding-left: 36px;
  position: relative;
}

.mx_NotificationPanel
  .mx_EventTile:not([data-layout="bubble"])
  .mx_EventTile_senderDetails
  a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.mx_NotificationPanel .mx_EventTile_roomName a,
.mx_NotificationPanel .mx_EventTile_senderDetails a {
  text-decoration: none !important;
}

.mx_NotificationPanel .mx_EventTile .mx_MessageTimestamp {
  visibility: visible;
  position: static;
  display: inline;
  padding-left: 5px;
}

.mx_NotificationPanel
  .mx_EventTile:not([data-layout="bubble"])
  .mx_EventTile_line {
  margin-right: 0;
  padding: 0 0 0 36px;
}

.mx_NotificationPanel .mx_EventTile_selected .mx_EventTile_line {
  padding-left: 0;
}

.mx_NotificationPanel .mx_EventTile:hover .mx_EventTile_line {
  background-color: #fff;
}

.mx_NotificationPanel .mx_EventTile_content {
  margin-right: 0;
}

.mx_NotificationPanel_empty:before {
  -webkit-mask-image: url(../../img/element-icons/notifications.d298b39.svg);
  mask-image: url(../../img/element-icons/notifications.d298b39.svg);
}

.mx_RightPanel {
  overflow-x: hidden;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  border-radius: 8px;
  padding: 4px 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 100%;
  contain: strict;
}

.mx_RightPanel .mx_RoomView_MessageList {
  padding: 14px 18px;
}

.mx_RightPanel_header {
  -webkit-box-ordinal-group: 2;
  -ms-flex-order: 1;
  order: 1;
  border-bottom: 1px solid transparent;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 52px;
  flex: 0 0 52px;
}

.mx_RightPanel_headerButtonGroup {
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background-color: #fff;
  padding: 0 9px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_RightPanel_headerButton {
  cursor: pointer;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  margin-left: 1px;
  margin-right: 1px;
  height: 32px;
  width: 32px;
  position: relative;
  border-radius: 100%;
}

.mx_RightPanel_headerButton:before {
  content: "";
  position: absolute;
  top: 4px;
  left: 4px;
  height: 24px;
  width: 24px;
  background-color: #c1c6cd;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
}

.mx_RightPanel_headerButton:hover {
  background: rgba(13, 189, 139, 0.1);
}

.mx_RightPanel_headerButton:hover:before {
  background-color: #0dbd8b;
}

.mx_RightPanel_notifsButton:before {
  -webkit-mask-image: url(../../img/element-icons/notifications.d298b39.svg);
  mask-image: url(../../img/element-icons/notifications.d298b39.svg);
  -webkit-mask-position: center;
  mask-position: center;
}

.mx_RightPanel_roomSummaryButton:before {
  -webkit-mask-image: url(../../img/element-icons/room/room-summary.1ad0865.svg);
  mask-image: url(../../img/element-icons/room/room-summary.1ad0865.svg);
  -webkit-mask-position: center;
  mask-position: center;
}

.mx_RightPanel_groupMembersButton:before {
  -webkit-mask-image: url(../../img/element-icons/community-members.cbb31c1.svg);
  mask-image: url(../../img/element-icons/community-members.cbb31c1.svg);
  -webkit-mask-position: center;
  mask-position: center;
}

.mx_RightPanel_roomsButton:before {
  -webkit-mask-image: url(../../img/element-icons/community-rooms.8f0b6c9.svg);
  mask-image: url(../../img/element-icons/community-rooms.8f0b6c9.svg);
  -webkit-mask-position: center;
  mask-position: center;
}

.mx_RightPanel_pinnedMessagesButton:before {
  -webkit-mask-image: url(../../img/element-icons/room/pin.a996417.svg);
  mask-image: url(../../img/element-icons/room/pin.a996417.svg);
  -webkit-mask-position: center;
  mask-position: center;
}

.mx_RightPanel_pinnedMessagesButton
  .mx_RightPanel_pinnedMessagesButton_unreadIndicator {
  position: absolute;
  right: 0;
  top: 0;
  margin: 4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  -webkit-transform: scale(1);
  transform: scale(1);
  background: #ff4b55;
  -webkit-box-shadow: 0 0 0 0 #ff4b55;
  box-shadow: 0 0 0 0 #ff4b55;
  -webkit-animation: mx_RightPanel_indicator_pulse 2s infinite;
  animation: mx_RightPanel_indicator_pulse 2s infinite;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

.mx_RightPanel_pinnedMessagesButton
  .mx_RightPanel_pinnedMessagesButton_unreadIndicator:after {
  content: "";
  position: absolute;
  width: inherit;
  height: inherit;
  top: 0;
  left: 0;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transform-origin: center center;
  transform-origin: center center;
  -webkit-animation-name: mx_RightPanel_indicator_pulse_shadow;
  animation-name: mx_RightPanel_indicator_pulse_shadow;
  -webkit-animation-duration: inherit;
  animation-duration: inherit;
  -webkit-animation-iteration-count: inherit;
  animation-iteration-count: inherit;
  border-radius: 50%;
  background: #ff4b55;
}

@-webkit-keyframes mx_RightPanel_indicator_pulse {
  0% {
    -webkit-transform: scale(0.95);
    transform: scale(0.95);
  }
  70% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  to {
    -webkit-transform: scale(0.95);
    transform: scale(0.95);
  }
}

@keyframes mx_RightPanel_indicator_pulse {
  0% {
    -webkit-transform: scale(0.95);
    transform: scale(0.95);
  }
  70% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  to {
    -webkit-transform: scale(0.95);
    transform: scale(0.95);
  }
}

@-webkit-keyframes mx_RightPanel_indicator_pulse_shadow {
  0% {
    opacity: 0.7;
  }
  70% {
    -webkit-transform: scale(2.2);
    transform: scale(2.2);
    opacity: 0;
  }
  to {
    opacity: 0;
  }
}

@keyframes mx_RightPanel_indicator_pulse_shadow {
  0% {
    opacity: 0.7;
  }
  70% {
    -webkit-transform: scale(2.2);
    transform: scale(2.2);
    opacity: 0;
  }
  to {
    opacity: 0;
  }
}

.mx_RightPanel_headerButton_highlight:before {
  background-color: #0dbd8b !important;
}

.mx_RightPanel_headerButton_badge {
  font-size: 0.8rem;
  border-radius: 8px;
  color: #fff;
  background-color: #0dbd8b;
  font-weight: 700;
  position: absolute;
  top: -4px;
  left: 20px;
  padding: 2px 4px;
}

.mx_RightPanel_collapsebutton {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: right;
  height: 16px;
  border: none;
}

.mx_RightPanel .mx_GroupRoomList,
.mx_RightPanel .mx_MemberInfo,
.mx_RightPanel .mx_MemberList,
.mx_RightPanel_blank {
  -webkit-box-ordinal-group: 3;
  -ms-flex-order: 2;
  order: 2;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 0px;
  flex: 1 1 0;
}

.mx_RightPanel .mx_RoomView_messagePanelSpinner {
  -webkit-box-ordinal-group: 3;
  -ms-flex-order: 2;
  order: 2;
  margin: auto;
}

.mx_RightPanel_empty {
  margin-right: -28px;
}

.mx_RightPanel_empty h2 {
  font-weight: 700;
  margin: 16px 0;
}

.mx_RightPanel_empty h2,
.mx_RightPanel_empty p {
  font-size: 1.4rem;
}

.mx_RightPanel_empty:before {
  content: "";
  display: block;
  margin: 11px auto 29px;
  height: 42px;
  width: 42px;
  background-color: #91a1c0;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-position: center;
  mask-position: center;
}

.mx_RightPanel_scopeHeader {
  margin: 24px;
  text-align: center;
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.2rem;
}

.mx_RightPanel_scopeHeader .mx_BaseAvatar {
  margin-right: 8px;
  vertical-align: middle;
}

.mx_RightPanel_scopeHeader .mx_BaseAvatar_image {
  border-radius: 8px;
}

.mx_RoomDirectory_dialogWrapper > .mx_Dialog {
  max-width: 960px;
  height: 100%;
}

.mx_RoomDirectory_dialog {
  height: 100%;
  flex-direction: column;
}

.mx_RoomDirectory,
.mx_RoomDirectory_dialog {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
}

.mx_RoomDirectory {
  margin-bottom: 12px;
  color: #2e2f32;
  word-break: break-word;
}

.mx_RoomDirectory,
.mx_RoomDirectory_list {
  flex-direction: column;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.mx_RoomDirectory_list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
}

.mx_RoomDirectory_list .mx_RoomView_messageListWrapper {
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
}

.mx_RoomDirectory_listheader {
  display: block;
  margin-top: 13px;
}

.mx_RoomDirectory_searchbox {
  -webkit-box-flex: 1 !important;
  -ms-flex: 1 !important;
  flex: 1 !important;
}

.mx_RoomDirectory_listheader .mx_NetworkDropdown {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 200px;
  flex: 0 0 200px;
}

.mx_RoomDirectory_tableWrapper {
  overflow-y: auto;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 0px;
  flex: 1 1 0;
}

.mx_RoomDirectory_tableWrapper .mx_RoomDirectory_footer {
  margin-top: 24px;
  text-align: center;
}

.mx_RoomDirectory_tableWrapper .mx_RoomDirectory_footer > h5 {
  margin: 0;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.8rem;
  color: #2e2f32;
}

.mx_RoomDirectory_tableWrapper .mx_RoomDirectory_footer > p {
  margin: 40px auto 60px;
  font-size: 1.4rem;
  line-height: 2rem;
  color: #737d8c;
  max-width: 464px;
}

.mx_RoomDirectory_tableWrapper .mx_RoomDirectory_footer > hr {
  margin: 0;
  border: none;
  height: 1px;
  background-color: #f3f8fd;
}

.mx_RoomDirectory_tableWrapper
  .mx_RoomDirectory_footer
  .mx_RoomDirectory_newRoom {
  margin: 24px auto 0;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
}

.mx_RoomDirectory_table {
  color: #2e2f32;
  display: grid;
  font-size: 1.2rem;
  grid-template-columns: -webkit-max-content auto -webkit-max-content -webkit-max-content -webkit-max-content;
  grid-template-columns: max-content auto max-content max-content max-content;
  grid-row-gap: 24px;
  row-gap: 24px;
  text-align: left;
  width: 100%;
}

.mx_RoomDirectory_roomAvatar {
  padding: 2px 14px 0 0;
}

.mx_RoomDirectory_roomMemberCount {
  -ms-flex-item-align: center;
  align-self: center;
  color: #747474;
  padding: 3px 10px 0;
}

.mx_RoomDirectory_roomMemberCount:before {
  background-color: #747474;
  display: inline-block;
  vertical-align: text-top;
  margin-right: 2px;
  content: "";
  -webkit-mask: url(../../img/feather-customised/user.7a4d23d.svg);
  mask: url(../../img/feather-customised/user.7a4d23d.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: 80%;
  mask-size: 80%;
  width: 16px;
  height: 16px;
}

.mx_RoomDirectory_join,
.mx_RoomDirectory_preview {
  -ms-flex-item-align: center;
  align-self: center;
  white-space: nowrap;
}

.mx_RoomDirectory_name {
  display: inline-block;
  font-size: 1.8rem;
  font-weight: 600;
}

.mx_RoomDirectory_perms {
  display: inline-block;
}

.mx_RoomDirectory_perm {
  border-radius: 10px;
  display: inline-block;
  height: 20px;
  line-height: 2rem;
  padding: 0 5px;
  color: #fff;
  background-color: #aaa;
}

.mx_RoomDirectory_topic {
  cursor: auto;
  color: #747474;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

.mx_RoomDirectory_alias {
  font-size: 1.2rem;
  color: #a2a2a2;
}

.mx_RoomDirectory .mx_RoomView_MessageList {
  padding: 0;
}

.mx_RoomDirectory > span {
  font-size: 1.5rem;
  margin-top: 0;
}

.mx_RoomDirectory > span .mx_AccessibleButton {
  padding: 0;
}

.mx_RoomSearch {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  border-radius: 8px;
  background-color: rgba(141, 151, 165, 0.2);
  border: 1px solid transparent;
  height: 28px;
  padding: 1px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_RoomSearch .mx_RoomSearch_icon {
  width: 16px;
  height: 16px;
  -webkit-mask: url(../../img/element-icons/roomlist/search.3774248.svg);
  mask: url(../../img/element-icons/roomlist/search.3774248.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  background-color: #737d8c;
  margin-left: 7px;
}

.mx_RoomSearch .mx_RoomSearch_input {
  border: none !important;
  -webkit-box-flex: 1 !important;
  -ms-flex: 1 !important;
  flex: 1 !important;
  color: #2e2f32 !important;
  padding: 0;
  height: 100%;
  width: 100%;
  font-size: 1.2rem;
  line-height: 1.6rem;
}

.mx_RoomSearch
  .mx_RoomSearch_input:not(.mx_RoomSearch_inputExpanded)::-webkit-input-placeholder {
  color: #8d99a5 !important;
}

.mx_RoomSearch
  .mx_RoomSearch_input:not(.mx_RoomSearch_inputExpanded)::-moz-placeholder {
  color: #8d99a5 !important;
}

.mx_RoomSearch
  .mx_RoomSearch_input:not(.mx_RoomSearch_inputExpanded):-ms-input-placeholder {
  color: #8d99a5 !important;
}

.mx_RoomSearch
  .mx_RoomSearch_input:not(.mx_RoomSearch_inputExpanded)::-ms-input-placeholder {
  color: #8d99a5 !important;
}

.mx_RoomSearch
  .mx_RoomSearch_input:not(.mx_RoomSearch_inputExpanded)::placeholder {
  color: #8d99a5 !important;
}

.mx_RoomSearch.mx_RoomSearch_hasQuery {
  border-color: #737d8c;
}

.mx_RoomSearch.mx_RoomSearch_focused {
  -webkit-box-shadow: 0 0 4px 4px rgba(0, 132, 255, 0.5);
  box-shadow: 0 0 4px 4px rgba(0, 132, 255, 0.5);
  border-color: transparent;
}

.mx_RoomSearch.mx_RoomSearch_focused,
.mx_RoomSearch.mx_RoomSearch_hasQuery {
  background-color: #fff;
}

.mx_RoomSearch.mx_RoomSearch_focused .mx_RoomSearch_clearButton,
.mx_RoomSearch.mx_RoomSearch_hasQuery .mx_RoomSearch_clearButton {
  width: 16px;
  height: 16px;
  -webkit-mask-image: url(../../img/element-icons/roomlist/search-clear.6164d97.svg);
  mask-image: url(../../img/element-icons/roomlist/search-clear.6164d97.svg);
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  background-color: #737d8c;
  margin-right: 8px;
}

.mx_RoomSearch .mx_RoomSearch_clearButton {
  width: 0;
  height: 0;
}

.mx_RoomSearch.mx_RoomSearch_minimized {
  border-radius: 32px;
  height: auto;
  width: auto;
  padding: 8px;
}

.mx_RoomSearch.mx_RoomSearch_minimized .mx_RoomSearch_icon {
  margin-left: 0;
}

.mx_RoomStatusBar:not(.mx_RoomStatusBar_unsentMessages) {
  margin-left: 65px;
  min-height: 50px;
}

.mx_RoomStatusBar_typingIndicatorAvatars {
  width: 52px;
  margin-top: -1px;
  text-align: left;
}

.mx_RoomStatusBar_typingIndicatorAvatars .mx_BaseAvatar_image {
  margin-right: -12px;
  border: 1px solid #fff;
}

.mx_RoomStatusBar_typingIndicatorAvatars .mx_BaseAvatar_initial {
  padding-left: 1px;
  padding-top: 1px;
}

.mx_RoomStatusBar_typingIndicatorRemaining {
  display: inline-block;
  color: #acacac;
  background-color: #ddd;
  border: 1px solid #fff;
  border-radius: 40px;
  width: 24px;
  height: 24px;
  line-height: 2.4rem;
  font-size: 0.8em;
  vertical-align: top;
  text-align: center;
  position: absolute;
}

.mx_RoomStatusBar_scrollDownIndicator {
  cursor: pointer;
  padding-left: 1px;
}

.mx_RoomStatusBar_unreadMessagesBar {
  padding-top: 10px;
  color: #ff4b55;
  cursor: pointer;
}

.mx_RoomStatusBar_connectionLostBar {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 19px;
  min-height: 58px;
}

.mx_RoomStatusBar_unsentMessages > div[role="alert"] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  min-height: 70px;
  margin: 12px;
  padding-left: 16px;
  background-color: #f3f8fd;
  border-radius: 4px;
}

.mx_RoomStatusBar_unsentMessages .mx_RoomStatusBar_unsentBadge {
  margin-right: 12px;
}

.mx_RoomStatusBar_unsentMessages
  .mx_RoomStatusBar_unsentBadge
  .mx_NotificationBadge {
  width: 24px !important;
  height: 24px !important;
  border-radius: 24px !important;
}

.mx_RoomStatusBar_unsentMessages
  .mx_RoomStatusBar_unsentBadge
  .mx_NotificationBadge
  .mx_NotificationBadge_count {
  font-size: 1.6rem !important;
}

.mx_RoomStatusBar_unsentMessages .mx_RoomStatusBar_unsentTitle {
  color: #ff4b55;
  font-size: 1.5rem;
}

.mx_RoomStatusBar_unsentMessages .mx_RoomStatusBar_unsentDescription {
  font-size: 1.2rem;
}

.mx_RoomStatusBar_unsentMessages .mx_RoomStatusBar_unsentButtonBar {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  text-align: right;
  margin-right: 22px;
  color: #61708b;
}

.mx_RoomStatusBar_unsentMessages
  .mx_RoomStatusBar_unsentButtonBar
  .mx_AccessibleButton {
  padding: 5px 10px 5px 30px;
  display: inline-block;
  position: relative;
}

.mx_RoomStatusBar_unsentMessages
  .mx_RoomStatusBar_unsentButtonBar
  .mx_AccessibleButton:nth-child(2) {
  border-left: 1px solid #e3e8f0;
}

.mx_RoomStatusBar_unsentMessages
  .mx_RoomStatusBar_unsentButtonBar
  .mx_AccessibleButton:before {
  content: "";
  position: absolute;
  left: 10px;
  background-color: #61708b;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  width: 18px;
  height: 18px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.mx_RoomStatusBar_unsentMessages
  .mx_RoomStatusBar_unsentButtonBar
  .mx_AccessibleButton.mx_RoomStatusBar_unsentCancelAllBtn:before {
  -webkit-mask-image: url(../../img/element-icons/trashcan.3b626db.svg);
  mask-image: url(../../img/element-icons/trashcan.3b626db.svg);
}

.mx_RoomStatusBar_unsentMessages
  .mx_RoomStatusBar_unsentButtonBar
  .mx_AccessibleButton.mx_RoomStatusBar_unsentResendAllBtn {
  padding-left: 34px;
}

.mx_RoomStatusBar_unsentMessages
  .mx_RoomStatusBar_unsentButtonBar
  .mx_AccessibleButton.mx_RoomStatusBar_unsentResendAllBtn:before {
  -webkit-mask-image: url(../../img/element-icons/retry.6cd23ad.svg);
  mask-image: url(../../img/element-icons/retry.6cd23ad.svg);
}

.mx_RoomStatusBar_unsentMessages
  .mx_RoomStatusBar_unsentButtonBar
  .mx_InlineSpinner {
  vertical-align: middle;
  margin-right: 5px;
  top: 1px;
}

.mx_RoomStatusBar_unsentMessages
  .mx_RoomStatusBar_unsentButtonBar
  .mx_InlineSpinner
  + span {
  margin-right: 10px;
}

.mx_RoomStatusBar_connectionLostBar img {
  padding-left: 10px;
  padding-right: 10px;
  vertical-align: middle;
  float: left;
}

.mx_RoomStatusBar_connectionLostBar_title {
  color: #ff4b55;
}

.mx_RoomStatusBar_connectionLostBar_desc {
  color: #2e2f32;
  font-size: 1.3rem;
  opacity: 0.5;
  padding-bottom: 20px;
}

.mx_RoomStatusBar_resend_link {
  color: #2e2f32 !important;
  text-decoration: underline !important;
  cursor: pointer;
}

.mx_RoomStatusBar_typingBar {
  height: 50px;
  line-height: 5rem;
  color: #2e2f32;
  opacity: 0.5;
  overflow-y: hidden;
  display: block;
}

.mx_MatrixChat_useCompactLayout
  .mx_RoomStatusBar:not(.mx_RoomStatusBar_unsentMessages) {
  min-height: 40px;
}

.mx_MatrixChat_useCompactLayout .mx_RoomStatusBar_indicator {
  margin-top: 10px;
}

.mx_MatrixChat_useCompactLayout .mx_RoomStatusBar_typingBar {
  height: 40px;
  line-height: 4rem;
}

.mx_RoomView {
  word-wrap: break-word;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

@-webkit-keyframes mx_RoomView_fileDropTarget_animation {
  0% {
    opacity: 0;
  }
  to {
    opacity: 0.95;
  }
}

@keyframes mx_RoomView_fileDropTarget_animation {
  0% {
    opacity: 0;
  }
  to {
    opacity: 0.95;
  }
}

.mx_RoomView_fileDropTarget {
  min-width: 0;
  width: 100%;
  height: 100%;
  font-size: 1.8rem;
  text-align: center;
  pointer-events: none;
  background-color: #fff;
  opacity: 0.95;
  position: absolute;
  z-index: 3000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-animation: mx_RoomView_fileDropTarget_animation;
  animation: mx_RoomView_fileDropTarget_animation;
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
}

@-webkit-keyframes mx_RoomView_fileDropTarget_image_animation {
  0% {
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
  }
  to {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
}

@keyframes mx_RoomView_fileDropTarget_image_animation {
  0% {
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
  }
  to {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
}

.mx_RoomView_fileDropTarget_image {
  width: 32px;
  -webkit-animation: mx_RoomView_fileDropTarget_image_animation;
  animation: mx_RoomView_fileDropTarget_image_animation;
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  margin-bottom: 16px;
}

.mx_RoomView_auxPanel {
  min-width: 0;
  width: 100%;
  margin: 0 auto;
  overflow: auto;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}

.mx_RoomView_auxPanel_fullHeight {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3000;
  background-color: #fff;
}

.mx_RoomView_auxPanel_hiddenHighlights {
  border-bottom: 1px solid transparent;
  padding: 10px 26px;
  color: #ff4b55;
  cursor: pointer;
}

.mx_RoomView_auxPanel_apps {
  max-width: 1920px !important;
}

.mx_RoomView .mx_MainSplit,
.mx_RoomView_messagePanel {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 0px;
  flex: 1 1 0;
}

.mx_RoomView_messagePanel {
  width: 100%;
  overflow-y: auto;
  overflow-anchor: none;
}

.mx_RoomView_messagePanelSearchSpinner {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background-image: url(../../img/typing-indicator-2x.0eb9f0e.gif);
  background-position: center 367px;
  background-size: 25px;
  background-repeat: no-repeat;
  position: relative;
}

.mx_RoomView_messagePanelSearchSpinner:before {
  background-color: #888;
  -webkit-mask: url(../../img/feather-customised/search-input.044bfa7.svg);
  mask: url(../../img/feather-customised/search-input.044bfa7.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: 50px;
  mask-size: 50px;
  content: "";
  position: absolute;
  top: 286px;
  left: 0;
  right: 0;
  height: 50px;
}

.mx_RoomView_body {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  min-width: 0;
}

.mx_RoomView_body .mx_RoomView_messagePanel,
.mx_RoomView_body .mx_RoomView_messagePanelSearchSpinner,
.mx_RoomView_body .mx_RoomView_messagePanelSpinner {
  -webkit-box-ordinal-group: 3;
  -ms-flex-order: 2;
  order: 2;
}

.mx_RoomView_body .mx_RoomView_timeline {
  position: relative;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  contain: content;
}

.mx_RoomView_statusArea {
  width: 100%;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  max-height: 0;
  background-color: #fff;
  z-index: 1000;
  overflow: hidden;
  -webkit-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

.mx_RoomView_statusArea_expanded {
  max-height: 100px;
}

.mx_RoomView_statusAreaBox {
  margin: auto;
  min-height: 50px;
}

.mx_RoomView_statusAreaBox_line {
  margin-left: 65px;
  border-top: 1px solid transparent;
  height: 1px;
}

.mx_RoomView_messageListWrapper {
  min-height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}

.mx_RoomView_searchResultsPanel .mx_RoomView_messageListWrapper {
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
}

.mx_RoomView_searchResultsPanel a {
  text-decoration: none;
  color: inherit;
}

.mx_RoomView_empty {
  font-size: 1.3rem;
  padding: 0 24px;
  margin-right: 30px;
  text-align: center;
  margin-bottom: 80px;
}

.mx_RoomView_MessageList {
  list-style-type: none;
  padding: 18px;
  margin: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.mx_RoomView_MessageList li {
  clear: both;
}

li.mx_RoomView_myReadMarker_container {
  height: 0;
  margin: 0;
  padding: 0;
  border: 0;
}

hr.mx_RoomView_myReadMarker {
  border-top: 1px solid #0dbd8b;
  border-bottom: 1px solid #0dbd8b;
  margin-top: 0;
  position: relative;
  top: -1px;
  z-index: 1;
  will-change: width;
  -webkit-transition: width easeinsine 0.4s 1s, opacity easeinsine 0.4s 1s;
  transition: width easeinsine 0.4s 1s, opacity easeinsine 0.4s 1s;
  width: 99%;
  opacity: 1;
}

.mx_RoomView_callStatusBar .mx_UploadBar_uploadProgressInner {
  background-color: #fff;
}

.mx_RoomView_callStatusBar .mx_UploadBar_uploadFilename {
  color: #fff;
  opacity: 1;
}

.mx_RoomView_inCall .mx_RoomView_statusAreaBox_line {
  margin-top: 2px;
  border: none;
  height: 0;
}

.mx_RoomView_inCall .mx_MessageComposer_wrapper {
  border-top: 2px hidden;
  padding-top: 1px;
}

.mx_RoomView_voipChevron {
  position: absolute;
  bottom: -11px;
  right: 11px;
}

.mx_RoomView_voipButton {
  float: right;
  margin-right: 13px;
  margin-top: 13px;
  cursor: pointer;
}

.mx_RoomView_voipButton object {
  pointer-events: none;
}

.mx_RoomView .mx_MessageComposer {
  width: 100%;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  margin-right: 2px;
}

.mx_RoomView_ongoingConfCallNotification {
  width: 100%;
  text-align: center;
  background-color: #ff4b55;
  color: #fff;
  font-weight: 700;
  padding: 6px 0;
  cursor: pointer;
}

.mx_RoomView_ongoingConfCallNotification a {
  color: #fff !important;
}

.mx_MatrixChat_useCompactLayout .mx_RoomView_MessageList {
  margin-bottom: 4px;
}

.mx_MatrixChat_useCompactLayout .mx_RoomView_statusAreaBox {
  min-height: 42px;
}

.mx_ScrollPanel .mx_RoomView_MessageList {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  content-visibility: auto;
  contain-intrinsic-size: 50px;
}

.mx_SearchBox {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 0px;
  flex: 1 1 0;
  min-width: 0;
}

.mx_SearchBox.mx_SearchBox_blurred:not(:hover) {
  background-color: transparent;
}

.mx_SearchBox .mx_SearchBox_closeButton {
  cursor: pointer;
  background-image: url(../../img/icons-close.11ff07c.svg);
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  background-position: 50%;
  padding: 9px;
}

.mx_SpacePanel {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  background-color: hsla(0, 0%, 91%, 0.77);
  padding: 0;
  margin: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.mx_SpacePanel .mx_SpacePanel_spaceTreeWrapper {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 8px 8px 16px 0;
}

.mx_SpacePanel .mx_SpacePanel_toggleCollapse {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  width: 40px;
  height: 40px;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: 32px;
  mask-size: 32px;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  margin-left: 16px;
  margin-bottom: 12px;
  background-color: #8d99a5;
  -webkit-mask-image: url(../../img/element-icons/expand-space-panel.e6f74b9.svg);
  mask-image: url(../../img/element-icons/expand-space-panel.e6f74b9.svg);
}

.mx_SpacePanel .mx_SpacePanel_toggleCollapse.expanded {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

.mx_SpacePanel ul {
  margin: 0;
  list-style: none;
  padding: 0;
}

.mx_SpacePanel ul > .mx_SpaceItem {
  padding-left: 16px;
}

.mx_SpacePanel .mx_SpaceButton_toggleCollapse {
  cursor: pointer;
}

.mx_SpacePanel .mx_SpaceItem_dragging .mx_SpaceButton_toggleCollapse {
  visibility: hidden;
}

.mx_SpacePanel .mx_SpaceTreeLevel {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  max-width: 250px;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.mx_SpacePanel .mx_SpaceItem {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-flow: wrap;
  flex-flow: wrap;
}

.mx_SpacePanel .mx_SpaceItem.mx_SpaceItem_narrow {
  -ms-flex-item-align: baseline;
  align-self: baseline;
}

.mx_SpacePanel
  .mx_SpaceItem.collapsed
  > .mx_SpaceButton
  > .mx_SpaceButton_toggleCollapse {
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
}

.mx_SpacePanel .mx_SpaceItem.collapsed > .mx_SpaceTreeLevel {
  display: none;
}

.mx_SpacePanel .mx_SpaceItem:not(.hasSubSpaces) > .mx_SpaceButton {
  margin-left: 16px;
  min-width: 40px;
}

.mx_SpacePanel .mx_SpaceButton {
  border-radius: 8px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 4px 4px 4px 0;
  width: 100%;
}

.mx_SpacePanel
  .mx_SpaceButton.mx_SpaceButton_active:not(.mx_SpaceButton_narrow)
  .mx_SpaceButton_selectionWrapper {
  background-color: #fff;
}

.mx_SpacePanel
  .mx_SpaceButton.mx_SpaceButton_active.mx_SpaceButton_narrow
  .mx_SpaceButton_selectionWrapper {
  padding: 1px;
  border: 3px solid #737d8c;
}

.mx_SpacePanel .mx_SpaceButton .mx_SpaceButton_selectionWrapper {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 12px;
  padding: 4px;
}

.mx_SpacePanel
  .mx_SpaceButton:not(.mx_SpaceButton_narrow)
  .mx_SpaceButton_selectionWrapper {
  width: 100%;
  padding-right: 16px;
  overflow: hidden;
}

.mx_SpacePanel .mx_SpaceButton .mx_SpaceButton_name {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin-left: 8px;
  white-space: nowrap;
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-right: 8px;
  font-size: 1.4rem;
  line-height: 1.8rem;
}

.mx_SpacePanel .mx_SpaceButton .mx_SpaceButton_toggleCollapse {
  width: 16px;
  height: 20px;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: 20px;
  mask-size: 20px;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  background-color: #8d99a5;
  -webkit-mask-image: url(../../img/feather-customised/chevron-down.5278abe.svg);
  mask-image: url(../../img/feather-customised/chevron-down.5278abe.svg);
}

.mx_SpacePanel .mx_SpaceButton .mx_SpaceButton_icon {
  width: 32px;
  min-width: 32px;
  height: 32px;
  border-radius: 8px;
  position: relative;
}

.mx_SpacePanel .mx_SpaceButton .mx_SpaceButton_icon:before {
  position: absolute;
  content: "";
  width: 32px;
  height: 32px;
  top: 0;
  left: 0;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 18px;
  mask-size: 18px;
}

.mx_SpacePanel .mx_SpaceButton.mx_SpaceButton_home .mx_SpaceButton_icon {
  background-color: #fff;
}

.mx_SpacePanel .mx_SpaceButton.mx_SpaceButton_home .mx_SpaceButton_icon:before {
  background-color: #3f3d3d;
  -webkit-mask-image: url(../../img/element-icons/home.b706c0e.svg);
  mask-image: url(../../img/element-icons/home.b706c0e.svg);
}

.mx_SpacePanel .mx_SpaceButton.mx_SpaceButton_new .mx_SpaceButton_icon {
  background-color: #0dbd8b;
  -webkit-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
}

.mx_SpacePanel .mx_SpaceButton.mx_SpaceButton_new .mx_SpaceButton_icon:before {
  background-color: #fff;
  -webkit-mask-image: url(../../img/element-icons/plus.62cc275.svg);
  mask-image: url(../../img/element-icons/plus.62cc275.svg);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.mx_SpacePanel .mx_SpaceButton.mx_SpaceButton_newCancel .mx_SpaceButton_icon {
  background-color: #c1c6cd;
}

.mx_SpacePanel
  .mx_SpaceButton.mx_SpaceButton_newCancel
  .mx_SpaceButton_icon:before {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.mx_SpacePanel .mx_SpaceButton .mx_BaseAvatar_image {
  border-radius: 8px;
}

.mx_SpacePanel .mx_SpaceButton .mx_SpaceButton_menuButton {
  width: 20px;
  min-width: 20px;
  height: 20px;
  margin-top: auto;
  margin-bottom: auto;
  display: none;
  position: absolute;
  right: 4px;
}

.mx_SpacePanel .mx_SpaceButton .mx_SpaceButton_menuButton:before {
  top: 2px;
  left: 2px;
  content: "";
  width: 16px;
  height: 16px;
  position: absolute;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-image: url(../../img/element-icons/context-menu.829cc1a.svg);
  mask-image: url(../../img/element-icons/context-menu.829cc1a.svg);
  background: #2e2f32;
}

.mx_SpacePanel .mx_SpacePanel_badgeContainer {
  position: absolute;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_SpacePanel .mx_SpacePanel_badgeContainer .mx_NotificationBadge {
  margin: 0 2px;
}

.mx_SpacePanel .mx_SpacePanel_badgeContainer .mx_NotificationBadge_dot {
  margin: 0 7px;
}

.mx_SpacePanel.collapsed .mx_SpaceButton .mx_SpacePanel_badgeContainer {
  right: 0;
  top: 0;
}

.mx_SpacePanel.collapsed
  .mx_SpaceButton
  .mx_SpacePanel_badgeContainer
  .mx_NotificationBadge {
  background-clip: padding-box;
}

.mx_SpacePanel.collapsed
  .mx_SpaceButton
  .mx_SpacePanel_badgeContainer
  .mx_NotificationBadge_dot {
  margin: 0 -1px 0 0;
  border: 3px solid hsla(0, 0%, 91%, 0.77);
}

.mx_SpacePanel.collapsed
  .mx_SpaceButton
  .mx_SpacePanel_badgeContainer
  .mx_NotificationBadge_2char,
.mx_SpacePanel.collapsed
  .mx_SpaceButton
  .mx_SpacePanel_badgeContainer
  .mx_NotificationBadge_3char {
  margin: -5px -5px 0 0;
  border: 2px solid hsla(0, 0%, 91%, 0.77);
}

.mx_SpacePanel.collapsed
  .mx_SpaceButton.mx_SpaceButton_active
  .mx_SpacePanel_badgeContainer {
  right: -3px;
  top: -3px;
}

.mx_SpacePanel:not(.collapsed) .mx_SpacePanel_badgeContainer {
  position: absolute;
  right: 4px;
}

.mx_SpacePanel:not(.collapsed)
  .mx_SpaceButton:focus-within:not(.mx_SpaceButton_home):not(.mx_SpaceButton_invite)
  .mx_SpacePanel_badgeContainer,
.mx_SpacePanel:not(.collapsed)
  .mx_SpaceButton:hover:not(.mx_SpaceButton_home):not(.mx_SpaceButton_invite)
  .mx_SpacePanel_badgeContainer,
.mx_SpacePanel:not(.collapsed)
  .mx_SpaceButton_hasMenuOpen:not(.mx_SpaceButton_home):not(.mx_SpaceButton_invite)
  .mx_SpacePanel_badgeContainer {
  width: 0;
  height: 0;
  display: none;
}

.mx_SpacePanel:not(.collapsed)
  .mx_SpaceButton:focus-within:not(.mx_SpaceButton_home):not(.mx_SpaceButton_invite)
  .mx_SpaceButton_menuButton,
.mx_SpacePanel:not(.collapsed)
  .mx_SpaceButton:hover:not(.mx_SpaceButton_home):not(.mx_SpaceButton_invite)
  .mx_SpaceButton_menuButton,
.mx_SpacePanel:not(.collapsed)
  .mx_SpaceButton_hasMenuOpen:not(.mx_SpaceButton_home):not(.mx_SpaceButton_invite)
  .mx_SpaceButton_menuButton {
  display: block;
}

.mx_SpacePanel > .mx_AutoHideScrollbar > .mx_SpaceButton,
.mx_SpacePanel
  > .mx_AutoHideScrollbar
  > .mx_SpaceButton.mx_SpaceButton_active:before {
  height: 32px;
}

.mx_SpacePanel > .mx_AutoHideScrollbar > ul {
  padding-left: 0;
}

.mx_SpacePanel_contextMenu .mx_SpacePanel_contextMenu_header {
  margin: 12px 16px;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.8rem;
}

.mx_SpacePanel_contextMenu
  .mx_IconizedContextMenu_optionList
  .mx_AccessibleButton.mx_SpacePanel_contextMenu_inviteButton {
  color: #0dbd8b;
}

.mx_SpacePanel_contextMenu
  .mx_IconizedContextMenu_optionList
  .mx_AccessibleButton.mx_SpacePanel_contextMenu_inviteButton
  .mx_SpacePanel_iconInvite:before {
  background-color: #0dbd8b;
  -webkit-mask-image: url(../../img/element-icons/room/invite.946a71b.svg);
  mask-image: url(../../img/element-icons/room/invite.946a71b.svg);
}

.mx_SpacePanel_contextMenu .mx_SpacePanel_iconSettings:before {
  -webkit-mask-image: url(../../img/element-icons/settings.6b381af.svg);
  mask-image: url(../../img/element-icons/settings.6b381af.svg);
}

.mx_SpacePanel_contextMenu .mx_SpacePanel_iconLeave:before {
  -webkit-mask-image: url(../../img/element-icons/leave.bb917e7.svg);
  mask-image: url(../../img/element-icons/leave.bb917e7.svg);
}

.mx_SpacePanel_contextMenu .mx_SpacePanel_iconMembers:before {
  -webkit-mask-image: url(../../img/element-icons/room/members.88c3e93.svg);
  mask-image: url(../../img/element-icons/room/members.88c3e93.svg);
}

.mx_SpacePanel_contextMenu .mx_SpacePanel_iconPlus:before {
  -webkit-mask-image: url(../../img/element-icons/roomlist/plus-circle.aa44b1a.svg);
  mask-image: url(../../img/element-icons/roomlist/plus-circle.aa44b1a.svg);
}

.mx_SpacePanel_contextMenu .mx_SpacePanel_iconHash:before {
  -webkit-mask-image: url(../../img/element-icons/roomlist/hash-circle.c36ee5b.svg);
  mask-image: url(../../img/element-icons/roomlist/hash-circle.c36ee5b.svg);
}

.mx_SpacePanel_contextMenu .mx_SpacePanel_iconExplore:before {
  -webkit-mask-image: url(../../img/element-icons/roomlist/browse.080f923.svg);
  mask-image: url(../../img/element-icons/roomlist/browse.080f923.svg);
}

.mx_SpacePanel_sharePublicSpace {
  margin: 0;
}

.mx_SpaceRoomDirectory_dialogWrapper > .mx_Dialog {
  max-width: 960px;
  height: 100%;
}

.mx_SpaceRoomDirectory {
  height: 100%;
  margin-bottom: 12px;
  color: #2e2f32;
  word-break: break-word;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.mx_SpaceRoomDirectory,
.mx_SpaceRoomDirectory .mx_Dialog_title,
.mx_SpaceRoomView_landing .mx_Dialog_title {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.mx_SpaceRoomDirectory .mx_Dialog_title .mx_BaseAvatar,
.mx_SpaceRoomView_landing .mx_Dialog_title .mx_BaseAvatar {
  margin-right: 12px;
  -ms-flex-item-align: center;
  align-self: center;
}

.mx_SpaceRoomDirectory .mx_Dialog_title .mx_BaseAvatar_image,
.mx_SpaceRoomView_landing .mx_Dialog_title .mx_BaseAvatar_image {
  border-radius: 8px;
}

.mx_SpaceRoomDirectory .mx_Dialog_title > div > h1,
.mx_SpaceRoomView_landing .mx_Dialog_title > div > h1 {
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.2rem;
  margin: 0;
}

.mx_SpaceRoomDirectory .mx_Dialog_title > div > div,
.mx_SpaceRoomView_landing .mx_Dialog_title > div > div {
  font-weight: 400;
  color: #737d8c;
  font-size: 1.5rem;
  line-height: 2.4rem;
}

.mx_SpaceRoomDirectory .mx_AccessibleButton_kind_link,
.mx_SpaceRoomView_landing .mx_AccessibleButton_kind_link {
  padding: 0;
}

.mx_SpaceRoomDirectory .mx_SearchBox,
.mx_SpaceRoomView_landing .mx_SearchBox {
  margin: 24px 0 16px;
}

.mx_SpaceRoomDirectory .mx_SpaceRoomDirectory_noResults,
.mx_SpaceRoomView_landing .mx_SpaceRoomDirectory_noResults {
  text-align: center;
}

.mx_SpaceRoomDirectory .mx_SpaceRoomDirectory_noResults > div,
.mx_SpaceRoomView_landing .mx_SpaceRoomDirectory_noResults > div {
  font-size: 1.5rem;
  line-height: 2.4rem;
  color: #737d8c;
}

.mx_SpaceRoomDirectory .mx_SpaceRoomDirectory_listHeader,
.mx_SpaceRoomView_landing .mx_SpaceRoomDirectory_listHeader {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  min-height: 32px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 1.5rem;
  line-height: 2.4rem;
  color: #2e2f32;
}

.mx_SpaceRoomDirectory .mx_SpaceRoomDirectory_listHeader .mx_AccessibleButton,
.mx_SpaceRoomView_landing
  .mx_SpaceRoomDirectory_listHeader
  .mx_AccessibleButton {
  padding: 4px 12px;
  font-weight: 400;
}

.mx_SpaceRoomDirectory
  .mx_SpaceRoomDirectory_listHeader
  .mx_AccessibleButton
  + .mx_AccessibleButton,
.mx_SpaceRoomView_landing
  .mx_SpaceRoomDirectory_listHeader
  .mx_AccessibleButton
  + .mx_AccessibleButton {
  margin-left: 16px;
}

.mx_SpaceRoomDirectory
  .mx_SpaceRoomDirectory_listHeader
  .mx_AccessibleButton_kind_danger_outline,
.mx_SpaceRoomDirectory
  .mx_SpaceRoomDirectory_listHeader
  .mx_AccessibleButton_kind_primary_outline,
.mx_SpaceRoomView_landing
  .mx_SpaceRoomDirectory_listHeader
  .mx_AccessibleButton_kind_danger_outline,
.mx_SpaceRoomView_landing
  .mx_SpaceRoomDirectory_listHeader
  .mx_AccessibleButton_kind_primary_outline {
  padding: 3px 12px;
}

.mx_SpaceRoomDirectory .mx_SpaceRoomDirectory_listHeader > span,
.mx_SpaceRoomView_landing .mx_SpaceRoomDirectory_listHeader > span {
  margin-left: auto;
}

.mx_SpaceRoomDirectory .mx_SpaceRoomDirectory_error,
.mx_SpaceRoomView_landing .mx_SpaceRoomDirectory_error {
  position: relative;
  font-weight: 600;
  color: #ff4b55;
  font-size: 1.5rem;
  line-height: 1.8rem;
  margin: 20px auto 12px;
  padding-left: 24px;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
}

.mx_SpaceRoomDirectory .mx_SpaceRoomDirectory_error:before,
.mx_SpaceRoomView_landing .mx_SpaceRoomDirectory_error:before {
  content: "";
  position: absolute;
  height: 16px;
  width: 16px;
  left: 0;
  background-image: url(../../img/element-icons/warning-badge.413c9a9.svg);
}

.mx_SpaceRoomDirectory_list {
  margin-top: 16px;
  padding-bottom: 40px;
}

.mx_SpaceRoomDirectory_list .mx_SpaceRoomDirectory_roomCount > h3 {
  display: inline;
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.2rem;
  color: #2e2f32;
}

.mx_SpaceRoomDirectory_list .mx_SpaceRoomDirectory_roomCount > span {
  margin-left: 8px;
  font-size: 1.5rem;
  line-height: 2.4rem;
  color: #737d8c;
}

.mx_SpaceRoomDirectory_list
  .mx_SpaceRoomDirectory_subspace
  .mx_BaseAvatar_image {
  border-radius: 8px;
}

.mx_SpaceRoomDirectory_list .mx_SpaceRoomDirectory_subspace_toggle {
  position: absolute;
  left: -1px;
  top: 10px;
  height: 16px;
  width: 16px;
  border-radius: 4px;
  background-color: #fff;
}

.mx_SpaceRoomDirectory_list .mx_SpaceRoomDirectory_subspace_toggle:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 16px;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  background-color: #8d99a5;
  -webkit-mask-size: 16px;
  mask-size: 16px;
  -webkit-transform: rotate(270deg);
  transform: rotate(270deg);
  -webkit-mask-image: url(../../img/feather-customised/chevron-down.5278abe.svg);
  mask-image: url(../../img/feather-customised/chevron-down.5278abe.svg);
}

.mx_SpaceRoomDirectory_list
  .mx_SpaceRoomDirectory_subspace_toggle.mx_SpaceRoomDirectory_subspace_toggle_shown:before {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
}

.mx_SpaceRoomDirectory_list .mx_SpaceRoomDirectory_subspace_children {
  position: relative;
  padding-left: 12px;
}

.mx_SpaceRoomDirectory_list .mx_SpaceRoomDirectory_roomTile {
  position: relative;
  padding: 8px 16px;
  border-radius: 8px;
  min-height: 56px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 20px auto -webkit-max-content;
  grid-template-columns: 20px auto max-content;
  grid-column-gap: 8px;
  grid-row-gap: 6px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_SpaceRoomDirectory_list .mx_SpaceRoomDirectory_roomTile .mx_BaseAvatar {
  grid-row: 1;
  grid-column: 1;
}

.mx_SpaceRoomDirectory_list
  .mx_SpaceRoomDirectory_roomTile
  .mx_SpaceRoomDirectory_roomTile_name {
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.8rem;
  grid-row: 1;
  grid-column: 2;
}

.mx_SpaceRoomDirectory_list
  .mx_SpaceRoomDirectory_roomTile
  .mx_SpaceRoomDirectory_roomTile_name
  .mx_InfoTooltip {
  display: inline;
  margin-left: 12px;
  color: #8d99a5;
  font-size: 1.2rem;
  line-height: 1.5rem;
}

.mx_SpaceRoomDirectory_list
  .mx_SpaceRoomDirectory_roomTile
  .mx_SpaceRoomDirectory_roomTile_name
  .mx_InfoTooltip
  .mx_InfoTooltip_icon {
  margin-right: 4px;
  position: relative;
  vertical-align: text-top;
}

.mx_SpaceRoomDirectory_list
  .mx_SpaceRoomDirectory_roomTile
  .mx_SpaceRoomDirectory_roomTile_name
  .mx_InfoTooltip
  .mx_InfoTooltip_icon:before {
  position: absolute;
  top: 0;
  left: 0;
}

.mx_SpaceRoomDirectory_list
  .mx_SpaceRoomDirectory_roomTile
  .mx_SpaceRoomDirectory_roomTile_info {
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: #737d8c;
  grid-row: 2;
  grid-column: 1/3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.mx_SpaceRoomDirectory_list
  .mx_SpaceRoomDirectory_roomTile
  .mx_SpaceRoomDirectory_actions {
  text-align: right;
  margin-left: 20px;
  grid-column: 3;
  grid-row: 1/3;
}

.mx_SpaceRoomDirectory_list
  .mx_SpaceRoomDirectory_roomTile
  .mx_SpaceRoomDirectory_actions
  .mx_AccessibleButton {
  line-height: 2.4rem;
  padding: 4px 16px;
  display: inline-block;
  visibility: hidden;
}

.mx_SpaceRoomDirectory_list
  .mx_SpaceRoomDirectory_roomTile
  .mx_SpaceRoomDirectory_actions
  .mx_AccessibleButton_kind_danger_outline,
.mx_SpaceRoomDirectory_list
  .mx_SpaceRoomDirectory_roomTile
  .mx_SpaceRoomDirectory_actions
  .mx_AccessibleButton_kind_primary_outline {
  padding: 3px 16px;
}

.mx_SpaceRoomDirectory_list
  .mx_SpaceRoomDirectory_roomTile
  .mx_SpaceRoomDirectory_actions
  .mx_Checkbox {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: middle;
  margin-left: 12px;
}

.mx_SpaceRoomDirectory_list .mx_SpaceRoomDirectory_roomTile:hover {
  background-color: hsla(0, 0%, 91%, 0.77);
}

.mx_SpaceRoomDirectory_list
  .mx_SpaceRoomDirectory_roomTile:hover
  .mx_AccessibleButton {
  visibility: visible;
}

.mx_SpaceRoomDirectory_list .mx_SpaceRoomDirectory_roomTile:before,
.mx_SpaceRoomDirectory_list .mx_SpaceRoomDirectory_subspace_children:before {
  content: "";
  position: absolute;
  background-color: hsla(0, 0%, 91%, 0.77);
  width: 1px;
  height: 100%;
  left: 6px;
  top: 0;
}

.mx_SpaceRoomDirectory_list
  .mx_SpaceRoomDirectory_actions
  .mx_SpaceRoomDirectory_actionsText {
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #737d8c;
}

.mx_SpaceRoomDirectory_list > hr {
  border: none;
  height: 1px;
  background-color: rgba(141, 151, 165, 0.2);
  margin: 20px 0;
}

.mx_SpaceRoomDirectory_list .mx_SpaceRoomDirectory_createRoom {
  display: block;
  margin: 16px auto 0;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
}

.mx_SpaceRoomView .mx_MainSplit > div:first-child {
  padding: 80px 60px;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-height: 100%;
  overflow-y: auto;
}

.mx_SpaceRoomView .mx_MainSplit > div:first-child h1 {
  margin: 0;
  font-size: 2.4rem;
  font-weight: 600;
  color: #2e2f32;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
}

.mx_SpaceRoomView
  .mx_MainSplit
  > div:first-child
  .mx_SpaceRoomView_description {
  font-size: 1.5rem;
  color: #737d8c;
  margin-top: 12px;
  margin-bottom: 24px;
  max-width: 428px;
}

.mx_SpaceRoomView .mx_MainSplit > div:first-child .mx_AddExistingToSpace {
  max-width: 428px;
}

.mx_SpaceRoomView
  .mx_MainSplit
  > div:first-child
  .mx_AddExistingToSpace
  .mx_AddExistingToSpace_content {
  height: calc(100vh - 360px);
  max-height: 400px;
}

.mx_SpaceRoomView
  .mx_MainSplit
  > div:first-child:not(.mx_SpaceRoomView_landing)
  .mx_SpaceFeedbackPrompt {
  width: 428px;
}

.mx_SpaceRoomView .mx_MainSplit > div:first-child .mx_SpaceRoomView_buttons {
  display: block;
  margin-top: 44px;
  width: 428px;
  text-align: right;
}

.mx_SpaceRoomView
  .mx_MainSplit
  > div:first-child
  .mx_SpaceRoomView_buttons
  .mx_AccessibleButton_hasKind {
  padding: 8px 22px;
  margin-left: 16px;
}

.mx_SpaceRoomView
  .mx_MainSplit
  > div:first-child
  .mx_SpaceRoomView_buttons
  input.mx_AccessibleButton {
  border: none;
}

.mx_SpaceRoomView .mx_MainSplit > div:first-child .mx_Field {
  max-width: 428px;
}

.mx_SpaceRoomView .mx_MainSplit > div:first-child .mx_Field + .mx_Field {
  margin-top: 28px;
}

.mx_SpaceRoomView .mx_MainSplit > div:first-child .mx_SpaceRoomView_errorText {
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #ff4b55;
  margin-bottom: 28px;
}

.mx_SpaceRoomView
  .mx_MainSplit
  > div:first-child
  .mx_AccessibleButton_disabled {
  cursor: not-allowed;
}

.mx_SpaceRoomView .mx_SpaceRoomView_preview {
  padding: 32px 24px !important;
  margin: auto;
  max-width: 480px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-shadow: 2px 15px 30px rgba(0, 0, 0, 0.48);
  box-shadow: 2px 15px 30px rgba(0, 0, 0, 0.48);
  border-radius: 8px;
  position: relative;
}

.mx_SpaceRoomView .mx_SpaceRoomView_preview .mx_BetaCard_betaPill {
  position: absolute;
  right: 24px;
  top: 32px;
}

.mx_SpaceRoomView
  .mx_SpaceRoomView_preview
  .mx_SpaceRoomView_preview_spaceBetaPrompt {
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: #2e2f32;
  margin-top: 24px;
  position: relative;
  padding-left: 24px;
}

.mx_SpaceRoomView
  .mx_SpaceRoomView_preview
  .mx_SpaceRoomView_preview_spaceBetaPrompt
  .mx_AccessibleButton_kind_link {
  display: inline;
  padding: 0;
  font-size: inherit;
  line-height: inherit;
}

.mx_SpaceRoomView
  .mx_SpaceRoomView_preview
  .mx_SpaceRoomView_preview_spaceBetaPrompt:before {
  content: "";
  position: absolute;
  height: 2.4rem;
  width: 20px;
  left: 0;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-image: url(../../img/element-icons/room/room-summary.1ad0865.svg);
  mask-image: url(../../img/element-icons/room/room-summary.1ad0865.svg);
  background-color: #737d8c;
}

.mx_SpaceRoomView .mx_SpaceRoomView_preview .mx_SpaceRoomView_preview_inviter {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 20px;
  font-size: 1.5rem;
}

.mx_SpaceRoomView
  .mx_SpaceRoomView_preview
  .mx_SpaceRoomView_preview_inviter
  > div {
  margin-left: 8px;
}

.mx_SpaceRoomView
  .mx_SpaceRoomView_preview
  .mx_SpaceRoomView_preview_inviter
  > div
  .mx_SpaceRoomView_preview_inviter_name {
  line-height: 1.8rem;
}

.mx_SpaceRoomView
  .mx_SpaceRoomView_preview
  .mx_SpaceRoomView_preview_inviter
  > div
  .mx_SpaceRoomView_preview_inviter_mxid {
  line-height: 2.4rem;
  color: #737d8c;
}

.mx_SpaceRoomView
  .mx_SpaceRoomView_preview
  > .mx_BaseAvatar
  > .mx_BaseAvatar_image,
.mx_SpaceRoomView .mx_SpaceRoomView_preview > .mx_BaseAvatar_image {
  border-radius: 12px;
}

.mx_SpaceRoomView .mx_SpaceRoomView_preview h1.mx_SpaceRoomView_preview_name {
  margin: 20px 0 !important;
}

.mx_SpaceRoomView .mx_SpaceRoomView_preview .mx_SpaceRoomView_preview_topic {
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: #737d8c;
  margin: 20px 0;
  max-height: 160px;
  overflow-y: auto;
}

.mx_SpaceRoomView
  .mx_SpaceRoomView_preview
  .mx_SpaceRoomView_preview_joinButtons {
  margin-top: 20px;
}

.mx_SpaceRoomView
  .mx_SpaceRoomView_preview
  .mx_SpaceRoomView_preview_joinButtons
  .mx_AccessibleButton {
  width: 200px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 14px 0;
}

.mx_SpaceRoomView
  .mx_SpaceRoomView_preview
  .mx_SpaceRoomView_preview_joinButtons
  .mx_AccessibleButton
  + .mx_AccessibleButton {
  margin-left: 20px;
}

.mx_SpaceRoomView .mx_SpaceRoomView_landing {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.mx_SpaceRoomView
  .mx_SpaceRoomView_landing
  > .mx_BaseAvatar
  > .mx_BaseAvatar_image,
.mx_SpaceRoomView .mx_SpaceRoomView_landing > .mx_BaseAvatar_image {
  border-radius: 12px;
}

.mx_SpaceRoomView .mx_SpaceRoomView_landing .mx_SpaceRoomView_landing_name {
  margin: 24px 0 16px;
  font-size: 1.5rem;
  color: #737d8c;
}

.mx_SpaceRoomView
  .mx_SpaceRoomView_landing
  .mx_SpaceRoomView_landing_name
  > span {
  display: inline-block;
}

.mx_SpaceRoomView
  .mx_SpaceRoomView_landing
  .mx_SpaceRoomView_landing_name
  .mx_SpaceRoomView_landing_nameRow {
  margin-top: 12px;
}

.mx_SpaceRoomView
  .mx_SpaceRoomView_landing
  .mx_SpaceRoomView_landing_name
  .mx_SpaceRoomView_landing_nameRow
  > h1 {
  display: inline-block;
}

.mx_SpaceRoomView
  .mx_SpaceRoomView_landing
  .mx_SpaceRoomView_landing_name
  .mx_SpaceRoomView_landing_inviter
  .mx_BaseAvatar {
  margin-right: 4px;
  vertical-align: middle;
}

.mx_SpaceRoomView .mx_SpaceRoomView_landing .mx_SpaceRoomView_landing_info {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_SpaceRoomView
  .mx_SpaceRoomView_landing
  .mx_SpaceRoomView_landing_info
  .mx_SpaceRoomView_info {
  display: inline-block;
  margin: 0 auto 0 0;
}

.mx_SpaceRoomView
  .mx_SpaceRoomView_landing
  .mx_SpaceRoomView_landing_info
  .mx_FacePile {
  display: inline-block;
  margin-right: 12px;
}

.mx_SpaceRoomView
  .mx_SpaceRoomView_landing
  .mx_SpaceRoomView_landing_info
  .mx_FacePile
  .mx_FacePile_faces {
  cursor: pointer;
}

.mx_SpaceRoomView
  .mx_SpaceRoomView_landing
  .mx_SpaceRoomView_landing_info
  .mx_SpaceRoomView_landing_inviteButton {
  position: relative;
  padding: 4px 18px 4px 40px;
  line-height: 2.4rem;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
}

.mx_SpaceRoomView
  .mx_SpaceRoomView_landing
  .mx_SpaceRoomView_landing_info
  .mx_SpaceRoomView_landing_inviteButton:before {
  position: absolute;
  content: "";
  left: 8px;
  height: 16px;
  width: 16px;
  background: #fff;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: 16px;
  mask-size: 16px;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-image: url(../../img/element-icons/room/invite.946a71b.svg);
  mask-image: url(../../img/element-icons/room/invite.946a71b.svg);
}

.mx_SpaceRoomView
  .mx_SpaceRoomView_landing
  .mx_SpaceRoomView_landing_info
  .mx_SpaceRoomView_landing_settingsButton {
  position: relative;
  margin-left: 16px;
  width: 24px;
  height: 24px;
}

.mx_SpaceRoomView
  .mx_SpaceRoomView_landing
  .mx_SpaceRoomView_landing_info
  .mx_SpaceRoomView_landing_settingsButton:before {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  height: 24px;
  width: 24px;
  background: #8d99a5;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-image: url(../../img/element-icons/settings.6b381af.svg);
  mask-image: url(../../img/element-icons/settings.6b381af.svg);
}

.mx_SpaceRoomView .mx_SpaceRoomView_landing .mx_SpaceRoomView_landing_topic {
  font-size: 1.5rem;
  margin-top: 12px;
  margin-bottom: 16px;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.mx_SpaceRoomView .mx_SpaceRoomView_landing > hr {
  border: none;
  height: 1px;
  background-color: hsla(0, 0%, 91%, 0.77);
}

.mx_SpaceRoomView .mx_SpaceRoomView_landing .mx_SearchBox {
  margin: 0 0 20px;
  -webkit-box-flex: 0;
  -ms-flex: 0;
  flex: 0;
}

.mx_SpaceRoomView .mx_SpaceRoomView_landing .mx_SpaceFeedbackPrompt {
  margin-bottom: 16px;
}

.mx_SpaceRoomView .mx_SpaceRoomView_landing .mx_SpaceFeedbackPrompt + hr {
  display: none;
}

.mx_SpaceRoomView .mx_SpaceRoomView_landing .mx_SpaceRoomDirectory_list {
  display: contents;
}

.mx_SpaceRoomView .mx_SpaceRoomView_privateScope > .mx_AccessibleButton {
  position: relative;
  padding: 16px 32px 16px 72px;
  width: 432px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #e7e7e7;
  font-size: 1.5rem;
  margin: 20px 0;
}

.mx_SpaceRoomView .mx_SpaceRoomView_privateScope > .mx_AccessibleButton > h3 {
  font-weight: 600;
  margin: 0 0 4px;
}

.mx_SpaceRoomView .mx_SpaceRoomView_privateScope > .mx_AccessibleButton > span {
  color: #737d8c;
}

.mx_SpaceRoomView .mx_SpaceRoomView_privateScope > .mx_AccessibleButton:before {
  position: absolute;
  content: "";
  width: 32px;
  height: 32px;
  top: 24px;
  left: 20px;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 24px;
  mask-size: 24px;
  background-color: #8d99a5;
}

.mx_SpaceRoomView .mx_SpaceRoomView_privateScope > .mx_AccessibleButton:hover {
  border-color: #0dbd8b;
}

.mx_SpaceRoomView
  .mx_SpaceRoomView_privateScope
  > .mx_AccessibleButton:hover:before {
  background-color: #0dbd8b;
}

.mx_SpaceRoomView
  .mx_SpaceRoomView_privateScope
  > .mx_AccessibleButton:hover
  > span {
  color: #2e2f32;
}

.mx_SpaceRoomView
  .mx_SpaceRoomView_privateScope
  .mx_SpaceRoomView_privateScope_justMeButton:before {
  -webkit-mask-image: url(../../img/element-icons/room/members.88c3e93.svg);
  mask-image: url(../../img/element-icons/room/members.88c3e93.svg);
}

.mx_SpaceRoomView
  .mx_SpaceRoomView_privateScope
  .mx_SpaceRoomView_privateScope_meAndMyTeammatesButton:before {
  -webkit-mask-image: url(../../img/element-icons/community-members.cbb31c1.svg);
  mask-image: url(../../img/element-icons/community-members.cbb31c1.svg);
}

.mx_SpaceRoomView .mx_SpaceRoomView_betaWarning {
  padding: 12px 12px 12px 54px;
  position: relative;
  font-size: 1.5rem;
  line-height: 2.4rem;
  width: 432px;
  border-radius: 8px;
  background-color: #f7f7f7;
  color: #737d8c;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.mx_SpaceRoomView .mx_SpaceRoomView_betaWarning > h3 {
  font-weight: 600;
  font-size: inherit;
  line-height: inherit;
  margin: 0;
}

.mx_SpaceRoomView .mx_SpaceRoomView_betaWarning > p {
  font-size: inherit;
  line-height: inherit;
  margin: 0;
}

.mx_SpaceRoomView .mx_SpaceRoomView_betaWarning:before {
  -webkit-mask-image: url(../../img/element-icons/room/room-summary.1ad0865.svg);
  mask-image: url(../../img/element-icons/room/room-summary.1ad0865.svg);
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
  content: "";
  width: 20px;
  height: 20px;
  position: absolute;
  top: 14px;
  left: 14px;
  background-color: #737d8c;
}

.mx_SpaceRoomView
  .mx_SpaceRoomView_inviteTeammates
  .mx_SpaceRoomView_inviteTeammates_betaDisclaimer {
  padding: 58px 16px 16px;
  position: relative;
  border-radius: 8px;
  background-color: #f3f8fd;
  max-width: 428px;
  margin: 20px 0 30px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.mx_SpaceRoomView
  .mx_SpaceRoomView_inviteTeammates
  .mx_SpaceRoomView_inviteTeammates_betaDisclaimer
  .mx_BetaCard_betaPill {
  position: absolute;
  left: 16px;
  top: 16px;
}

.mx_SpaceRoomView
  .mx_SpaceRoomView_inviteTeammates
  .mx_SpaceRoomView_inviteTeammates_buttons {
  color: #737d8c;
  margin-top: 28px;
}

.mx_SpaceRoomView
  .mx_SpaceRoomView_inviteTeammates
  .mx_SpaceRoomView_inviteTeammates_buttons
  .mx_AccessibleButton {
  position: relative;
  display: inline-block;
  padding-left: 32px;
  line-height: 24px;
}

.mx_SpaceRoomView
  .mx_SpaceRoomView_inviteTeammates
  .mx_SpaceRoomView_inviteTeammates_buttons
  .mx_AccessibleButton:before {
  content: "";
  position: absolute;
  height: 24px;
  width: 24px;
  top: 0;
  left: 0;
  background-color: #737d8c;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
}

.mx_SpaceRoomView
  .mx_SpaceRoomView_inviteTeammates
  .mx_SpaceRoomView_inviteTeammates_buttons
  .mx_AccessibleButton
  + .mx_AccessibleButton {
  margin-left: 32px;
}

.mx_SpaceRoomView
  .mx_SpaceRoomView_inviteTeammates
  .mx_SpaceRoomView_inviteTeammates_buttons
  .mx_SpaceRoomView_inviteTeammates_inviteDialogButton:before {
  -webkit-mask-image: url(../../img/element-icons/room/invite.946a71b.svg);
  mask-image: url(../../img/element-icons/room/invite.946a71b.svg);
}

.mx_SpaceRoomView_info {
  color: #737d8c;
  font-size: 1.5rem;
  line-height: 2.4rem;
  margin: 20px 0;
}

.mx_SpaceRoomView_info .mx_SpaceRoomView_info_private,
.mx_SpaceRoomView_info .mx_SpaceRoomView_info_public {
  padding-left: 20px;
  position: relative;
}

.mx_SpaceRoomView_info .mx_SpaceRoomView_info_private:before,
.mx_SpaceRoomView_info .mx_SpaceRoomView_info_public:before {
  position: absolute;
  content: "";
  width: 20px;
  height: 20px;
  top: 0;
  left: -2px;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  background-color: #8d99a5;
}

.mx_SpaceRoomView_info .mx_SpaceRoomView_info_public:before {
  -webkit-mask-size: 12px;
  mask-size: 12px;
  -webkit-mask-image: url(../../img/globe.8201f08.svg);
  mask-image: url(../../img/globe.8201f08.svg);
}

.mx_SpaceRoomView_info .mx_SpaceRoomView_info_private:before {
  -webkit-mask-size: 14px;
  mask-size: 14px;
  -webkit-mask-image: url(../../img/element-icons/lock.1f264bd.svg);
  mask-image: url(../../img/element-icons/lock.1f264bd.svg);
}

.mx_SpaceRoomView_info .mx_AccessibleButton_kind_link {
  color: inherit;
  position: relative;
  padding-left: 16px;
}

.mx_SpaceRoomView_info .mx_AccessibleButton_kind_link:before {
  content: "·";
  position: absolute;
  left: 6px;
}

.mx_SpaceFeedbackPrompt {
  margin-top: 18px;
  margin-bottom: 12px;
}

.mx_SpaceFeedbackPrompt > hr {
  border: none;
  border-top: 1px solid #e7e7e7;
  margin-bottom: 12px;
}

.mx_SpaceFeedbackPrompt > div {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  font-size: 1.5rem;
  line-height: 2.4rem;
}

.mx_SpaceFeedbackPrompt > div > span {
  color: #737d8c;
  position: relative;
  padding-left: 32px;
  font-size: inherit;
  line-height: inherit;
  margin-right: auto;
}

.mx_SpaceFeedbackPrompt > div > span:before {
  content: "";
  position: absolute;
  left: 0;
  top: 2px;
  height: 20px;
  width: 20px;
  background-color: #737d8c;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-image: url(../../img/element-icons/room/room-summary.1ad0865.svg);
  mask-image: url(../../img/element-icons/room/room-summary.1ad0865.svg);
  -webkit-mask-position: center;
  mask-position: center;
}

.mx_SpaceFeedbackPrompt > div .mx_AccessibleButton_kind_link {
  color: #0dbd8b;
  position: relative;
  padding: 0 0 0 24px;
  margin-left: 8px;
  font-size: inherit;
  line-height: inherit;
}

.mx_SpaceFeedbackPrompt > div .mx_AccessibleButton_kind_link:before {
  content: "";
  position: absolute;
  left: 0;
  height: 16px;
  width: 16px;
  background-color: #0dbd8b;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-image: url(../../img/element-icons/chat-bubbles.e2bd2cb.svg);
  mask-image: url(../../img/element-icons/chat-bubbles.e2bd2cb.svg);
  -webkit-mask-position: center;
  mask-position: center;
}

.mx_TabbedView {
  padding: 0 0 0 16px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 8px 0 0;
}

.mx_TabbedView,
.mx_TabbedView_tabsOnLeft {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.mx_TabbedView_tabsOnLeft {
  position: absolute;
}

.mx_TabbedView_tabsOnLeft .mx_TabbedView_tabLabels {
  width: 170px;
  max-width: 170px;
  position: fixed;
}

.mx_TabbedView_tabsOnLeft .mx_TabbedView_tabPanel {
  margin-left: 240px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.mx_TabbedView_tabsOnLeft .mx_TabbedView_tabLabel_active {
  background-color: #0dbd8b;
  color: #fff;
}

.mx_TabbedView_tabsOnLeft
  .mx_TabbedView_tabLabel_active
  .mx_TabbedView_maskedIcon:before {
  background-color: #fff;
}

.mx_TabbedView_tabsOnLeft .mx_TabbedView_maskedIcon {
  width: 16px;
  height: 16px;
  margin-left: 8px;
  margin-right: 16px;
}

.mx_TabbedView_tabsOnLeft .mx_TabbedView_maskedIcon:before {
  -webkit-mask-size: 16px;
  mask-size: 16px;
  width: 16px;
  height: 16px;
}

.mx_TabbedView_tabsOnTop {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.mx_TabbedView_tabsOnTop .mx_TabbedView_tabLabels {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 8px;
}

.mx_TabbedView_tabsOnTop .mx_TabbedView_tabLabel {
  padding-left: 0;
  padding-right: 52px;
}

.mx_TabbedView_tabsOnTop .mx_TabbedView_tabLabel .mx_TabbedView_tabLabel_text {
  font-size: 15px;
  color: #8d99a5;
}

.mx_TabbedView_tabsOnTop .mx_TabbedView_tabPanel {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
}

.mx_TabbedView_tabsOnTop .mx_TabbedView_tabLabel_active,
.mx_TabbedView_tabsOnTop
  .mx_TabbedView_tabLabel_active
  .mx_TabbedView_tabLabel_text {
  color: #0dbd8b;
}

.mx_TabbedView_tabsOnTop
  .mx_TabbedView_tabLabel_active
  .mx_TabbedView_maskedIcon:before {
  background-color: #0dbd8b;
}

.mx_TabbedView_tabsOnTop .mx_TabbedView_maskedIcon {
  width: 22px;
  height: 22px;
  margin-left: 0;
  margin-right: 8px;
}

.mx_TabbedView_tabsOnTop .mx_TabbedView_maskedIcon:before {
  -webkit-mask-size: 22px;
  mask-size: 22px;
  width: inherit;
  height: inherit;
}

.mx_TabbedView_tabLabels {
  color: #45474a;
}

.mx_TabbedView_tabLabel {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  vertical-align: text-top;
  cursor: pointer;
  padding: 8px 0;
  border-radius: 8px;
  font-size: 1.3rem;
  position: relative;
}

.mx_TabbedView_maskedIcon {
  display: inline-block;
}

.mx_TabbedView_maskedIcon:before {
  display: inline-block;
  background-color: #c1c6cd;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  content: "";
}

.mx_TabbedView_tabLabel_text {
  vertical-align: middle;
}

.mx_TabbedView_tabPanel {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.mx_TabbedView_tabPanel,
.mx_TabbedView_tabPanelContent {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  min-height: 0;
}

.mx_TabbedView_tabPanelContent {
  overflow: auto;
}

.mx_ToastContainer {
  position: absolute;
  top: 0;
  left: 70px;
  z-index: 101;
  padding: 4px;
  display: grid;
  grid-template-rows: 1fr 14px 6px;
}

.mx_ToastContainer.mx_ToastContainer_stacked:before {
  content: "";
  margin: 0 4px;
  grid-row: 2/4;
}

.mx_ToastContainer .mx_Toast_toast,
.mx_ToastContainer.mx_ToastContainer_stacked:before {
  grid-column: 1;
  background-color: #f2f5f8;
  -webkit-box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
}

.mx_ToastContainer .mx_Toast_toast {
  grid-row: 1/3;
  color: #2e2f32;
  overflow: hidden;
  display: grid;
  grid-template-columns: 22px 1fr;
  grid-column-gap: 8px;
  -webkit-column-gap: 8px;
  -moz-column-gap: 8px;
  column-gap: 8px;
  grid-row-gap: 4px;
  row-gap: 4px;
  padding: 8px;
}

.mx_ToastContainer .mx_Toast_toast.mx_Toast_hasIcon:after,
.mx_ToastContainer .mx_Toast_toast.mx_Toast_hasIcon:before {
  content: "";
  width: 22px;
  height: 22px;
  grid-column: 1;
  grid-row: 1;
  -webkit-mask-size: 100%;
  mask-size: 100%;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  background-size: 100%;
  background-repeat: no-repeat;
}

.mx_ToastContainer
  .mx_Toast_toast.mx_Toast_hasIcon.mx_Toast_icon_verification:after {
  -webkit-mask-image: url(../../img/e2e/normal.76f0c09.svg);
  mask-image: url(../../img/e2e/normal.76f0c09.svg);
  background-color: #2e2f32;
}

.mx_ToastContainer
  .mx_Toast_toast.mx_Toast_hasIcon.mx_Toast_icon_verification_warning:before {
  background-color: #fff;
  -webkit-mask-image: url(../../img/e2e/normal.76f0c09.svg);
  mask-image: url(../../img/e2e/normal.76f0c09.svg);
  -webkit-mask-size: 80%;
  mask-size: 80%;
}

.mx_ToastContainer
  .mx_Toast_toast.mx_Toast_hasIcon.mx_Toast_icon_verification_warning:after {
  -webkit-mask-image: url(../../img/e2e/warning.78bb264.svg);
  mask-image: url(../../img/e2e/warning.78bb264.svg);
  background-color: #ff4b55;
}

.mx_ToastContainer
  .mx_Toast_toast.mx_Toast_hasIcon.mx_Toast_icon_secure_backup:after {
  -webkit-mask-image: url(../../img/feather-customised/secure-backup.329cb1c.svg);
  mask-image: url(../../img/feather-customised/secure-backup.329cb1c.svg);
  background-color: #2e2f32;
}

.mx_ToastContainer .mx_Toast_toast.mx_Toast_hasIcon .mx_Toast_body,
.mx_ToastContainer .mx_Toast_toast.mx_Toast_hasIcon .mx_Toast_title {
  grid-column: 2;
}

.mx_ToastContainer .mx_Toast_toast:not(.mx_Toast_hasIcon) {
  padding-left: 12px;
}

.mx_ToastContainer .mx_Toast_toast:not(.mx_Toast_hasIcon) .mx_Toast_title {
  grid-column: 1/-1;
}

.mx_ToastContainer .mx_Toast_toast .mx_Toast_description,
.mx_ToastContainer .mx_Toast_toast .mx_Toast_title {
  padding-right: 8px;
}

.mx_ToastContainer .mx_Toast_toast .mx_Toast_title {
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.mx_ToastContainer .mx_Toast_toast .mx_Toast_title h2 {
  grid-column: 1/3;
  grid-row: 1;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  display: inline;
  width: auto;
  vertical-align: middle;
}

.mx_ToastContainer .mx_Toast_toast .mx_Toast_title span {
  padding-left: 8px;
  float: right;
  font-size: 1.2rem;
  line-height: 2.2rem;
  color: #61708b;
}

.mx_ToastContainer .mx_Toast_toast .mx_Toast_body {
  grid-column: 1/3;
  grid-row: 2;
}

.mx_ToastContainer .mx_Toast_toast .mx_Toast_buttons {
  float: right;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.mx_ToastContainer .mx_Toast_toast .mx_Toast_buttons .mx_AccessibleButton {
  min-width: 96px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.mx_ToastContainer
  .mx_Toast_toast
  .mx_Toast_buttons
  .mx_AccessibleButton
  + .mx_AccessibleButton {
  margin-left: 5px;
}

.mx_ToastContainer .mx_Toast_toast .mx_Toast_description {
  max-width: 272px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 4px 0 11px;
  font-size: 1.2rem;
}

.mx_ToastContainer
  .mx_Toast_toast
  .mx_Toast_description
  .mx_AccessibleButton_kind_link {
  font-size: inherit;
  padding: 0;
}

.mx_ToastContainer .mx_Toast_toast .mx_Toast_description a {
  text-decoration: none;
}

.mx_ToastContainer .mx_Toast_toast .mx_Toast_detail {
  color: #737d8c;
}

.mx_ToastContainer .mx_Toast_toast .mx_Toast_deviceID {
  font-size: 1rem;
}

.mx_UploadBar {
  padding-left: 65px;
  position: relative;
}

.mx_UploadBar .mx_ProgressBar {
  width: calc(100% - 40px);
}

.mx_UploadBar_filename {
  margin-top: 5px;
  color: #61708b;
  position: relative;
  padding-left: 22px;
  font-size: 1.5rem;
  vertical-align: middle;
}

.mx_UploadBar_filename:before {
  content: "";
  height: 18px;
  width: 18px;
  left: 0;
  -webkit-mask-image: url(../../img/element-icons/upload.e2a53e0.svg);
  mask-image: url(../../img/element-icons/upload.e2a53e0.svg);
}

.mx_UploadBar_cancel,
.mx_UploadBar_filename:before {
  position: absolute;
  top: 0;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  background-color: #61708b;
}

.mx_UploadBar_cancel {
  right: 0;
  height: 16px;
  width: 16px;
  margin-right: 16px;
  -webkit-mask-image: url(../../img/icons-close.11ff07c.svg);
  mask-image: url(../../img/icons-close.11ff07c.svg);
}

.mx_UserMenu {
  padding-right: 6px;
}

.mx_UserMenu.mx_UserMenu_prototype {
  margin-bottom: 6px;
  padding-right: 0;
}

.mx_UserMenu.mx_UserMenu_prototype .mx_UserMenu_headerButtons {
  margin-right: 2px;
}

.mx_UserMenu.mx_UserMenu_prototype:after {
  content: "";
  border-bottom: 1px solid #2e2f32;
  opacity: 0.2;
  display: block;
  padding-top: 8px;
}

.mx_UserMenu .mx_UserMenu_headerButtons {
  width: 16px;
  height: 16px;
  position: relative;
  display: block;
}

.mx_UserMenu .mx_UserMenu_headerButtons:before {
  content: "";
  width: 16px;
  height: 16px;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  background: #8d99a5;
  -webkit-mask-image: url(../../img/feather-customised/chevron-down.5278abe.svg);
  mask-image: url(../../img/feather-customised/chevron-down.5278abe.svg);
}

.mx_UserMenu .mx_UserMenu_row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_UserMenu .mx_UserMenu_row .mx_UserMenu_userAvatarContainer {
  position: relative;
  margin-right: 8px;
  height: 32px;
  padding: 3px 0;
}

.mx_UserMenu
  .mx_UserMenu_row
  .mx_UserMenu_userAvatarContainer
  .mx_UserMenu_userAvatar {
  border-radius: 32px;
  -o-object-fit: cover;
  object-fit: cover;
}

.mx_UserMenu .mx_UserMenu_row .mx_UserMenu_doubleName {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  min-width: 0;
}

.mx_UserMenu .mx_UserMenu_row .mx_UserMenu_doubleName .mx_UserMenu_subUserName,
.mx_UserMenu .mx_UserMenu_row .mx_UserMenu_doubleName .mx_UserMenu_userName {
  display: block;
}

.mx_UserMenu .mx_UserMenu_row .mx_UserMenu_doubleName .mx_UserMenu_subUserName {
  color: #61708b;
  font-size: 1.3rem;
  line-height: 1.8rem;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.mx_UserMenu .mx_UserMenu_row .mx_UserMenu_userName {
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.mx_UserMenu .mx_UserMenu_row .mx_UserMenu_dnd {
  width: 24px;
  height: 24px;
  margin-right: 8px;
  position: relative;
}

.mx_UserMenu .mx_UserMenu_row .mx_UserMenu_dnd:before {
  content: "";
  position: absolute;
  width: 24px;
  height: 24px;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  background: #61708b;
}

.mx_UserMenu .mx_UserMenu_row .mx_UserMenu_dnd.mx_UserMenu_dnd_noisy:before {
  -webkit-mask-image: url(../../img/element-icons/notifications.d298b39.svg);
  mask-image: url(../../img/element-icons/notifications.d298b39.svg);
}

.mx_UserMenu .mx_UserMenu_row .mx_UserMenu_dnd.mx_UserMenu_dnd_muted:before {
  -webkit-mask-image: url(../../img/element-icons/roomlist/notifications-off.0c57561.svg);
  mask-image: url(../../img/element-icons/roomlist/notifications-off.0c57561.svg);
}

.mx_UserMenu.mx_UserMenu_minimized {
  padding-right: 0;
}

.mx_UserMenu.mx_UserMenu_minimized .mx_UserMenu_userAvatarContainer {
  margin-right: 0;
}

.mx_UserMenu_contextMenu {
  width: 258px;
}

.mx_UserMenu_contextMenu.mx_UserMenu_contextMenu_prototype {
  padding-bottom: 16px;
}

.mx_UserMenu_contextMenu.mx_UserMenu_contextMenu_prototype
  .mx_UserMenu_contextMenu_header {
  padding-bottom: 0;
  padding-top: 16px;
}

.mx_UserMenu_contextMenu.mx_UserMenu_contextMenu_prototype
  .mx_UserMenu_contextMenu_header:nth-child(n + 2) {
  padding-top: 8px;
}

.mx_UserMenu_contextMenu.mx_UserMenu_contextMenu_prototype hr {
  width: 85%;
  opacity: 0.2;
  border: none;
  border-bottom: 1px solid #2e2f32;
}

.mx_UserMenu_contextMenu.mx_UserMenu_contextMenu_prototype.mx_IconizedContextMenu
  > .mx_IconizedContextMenu_optionList {
  margin-top: 4px;
}

.mx_UserMenu_contextMenu.mx_UserMenu_contextMenu_prototype.mx_IconizedContextMenu
  > .mx_IconizedContextMenu_optionList:before {
  border: none;
}

.mx_UserMenu_contextMenu.mx_UserMenu_contextMenu_prototype.mx_IconizedContextMenu
  > .mx_IconizedContextMenu_optionList
  > .mx_AccessibleButton {
  padding-top: 2px;
  padding-bottom: 2px;
}

.mx_UserMenu_contextMenu.mx_IconizedContextMenu
  .mx_IconizedContextMenu_optionList_red
  .mx_AccessibleButton {
  padding-top: 16px;
  padding-bottom: 16px;
}

.mx_UserMenu_contextMenu .mx_UserMenu_contextMenu_header {
  padding: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_UserMenu_contextMenu
  .mx_UserMenu_contextMenu_header
  .mx_UserMenu_contextMenu_name {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: calc(100% - 40px);
}

.mx_UserMenu_contextMenu
  .mx_UserMenu_contextMenu_header
  .mx_UserMenu_contextMenu_name
  * {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.mx_UserMenu_contextMenu
  .mx_UserMenu_contextMenu_header
  .mx_UserMenu_contextMenu_name
  .mx_UserMenu_contextMenu_displayName {
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
}

.mx_UserMenu_contextMenu
  .mx_UserMenu_contextMenu_header
  .mx_UserMenu_contextMenu_name
  .mx_UserMenu_contextMenu_userId {
  font-size: 1.5rem;
  line-height: 2.4rem;
}

.mx_UserMenu_contextMenu
  .mx_UserMenu_contextMenu_header
  .mx_UserMenu_contextMenu_themeButton {
  min-width: 32px;
  max-width: 32px;
  width: 32px;
  height: 32px;
  margin-left: 8px;
  border-radius: 32px;
  background-color: #e3e8f0;
  cursor: pointer;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.mx_UserMenu_contextMenu
  .mx_UserMenu_contextMenu_header.mx_UserMenu_contextMenu_guestPrompts,
.mx_UserMenu_contextMenu
  .mx_UserMenu_contextMenu_header.mx_UserMenu_contextMenu_hostingLink {
  padding-top: 0;
}

.mx_UserMenu_contextMenu
  .mx_UserMenu_contextMenu_header.mx_UserMenu_contextMenu_guestPrompts {
  display: inline-block;
}

.mx_UserMenu_contextMenu
  .mx_UserMenu_contextMenu_header.mx_UserMenu_contextMenu_guestPrompts
  > span {
  font-weight: 600;
  display: block;
}

.mx_UserMenu_contextMenu
  .mx_UserMenu_contextMenu_header.mx_UserMenu_contextMenu_guestPrompts
  > span
  + span {
  margin-top: 8px;
}

.mx_UserMenu_contextMenu
  .mx_UserMenu_contextMenu_header.mx_UserMenu_contextMenu_guestPrompts
  .mx_AccessibleButton_kind_link {
  font-weight: 400;
  font-size: inherit;
  padding: 0;
}

.mx_UserMenu_contextMenu .mx_IconizedContextMenu_icon {
  width: 16px;
  height: 16px;
  display: block;
}

.mx_UserMenu_contextMenu .mx_IconizedContextMenu_icon:before {
  content: "";
  width: 16px;
  height: 16px;
  display: block;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  background: #2e2f32;
}

.mx_UserMenu_contextMenu .mx_UserMenu_iconHome:before {
  -webkit-mask-image: url(../../img/element-icons/roomlist/home.1b4edd5.svg);
  mask-image: url(../../img/element-icons/roomlist/home.1b4edd5.svg);
}

.mx_UserMenu_contextMenu .mx_UserMenu_iconHosting:before {
  -webkit-mask-image: url(../../img/element-icons/brands/element.182040d.svg);
  mask-image: url(../../img/element-icons/brands/element.182040d.svg);
}

.mx_UserMenu_contextMenu .mx_UserMenu_iconBell:before {
  -webkit-mask-image: url(../../img/element-icons/notifications.d298b39.svg);
  mask-image: url(../../img/element-icons/notifications.d298b39.svg);
}

.mx_UserMenu_contextMenu .mx_UserMenu_iconLock:before {
  -webkit-mask-image: url(../../img/element-icons/security.66f2fa6.svg);
  mask-image: url(../../img/element-icons/security.66f2fa6.svg);
}

.mx_UserMenu_contextMenu .mx_UserMenu_iconSettings:before {
  -webkit-mask-image: url(../../img/element-icons/settings.6b381af.svg);
  mask-image: url(../../img/element-icons/settings.6b381af.svg);
}

.mx_UserMenu_contextMenu .mx_UserMenu_iconArchive:before {
  -webkit-mask-image: url(../../img/element-icons/roomlist/archived.226584d.svg);
  mask-image: url(../../img/element-icons/roomlist/archived.226584d.svg);
}

.mx_UserMenu_contextMenu .mx_UserMenu_iconMessage:before {
  -webkit-mask-image: url(../../img/element-icons/roomlist/feedback.b9a3f53.svg);
  mask-image: url(../../img/element-icons/roomlist/feedback.b9a3f53.svg);
}

.mx_UserMenu_contextMenu .mx_UserMenu_iconSignOut:before {
  -webkit-mask-image: url(../../img/element-icons/leave.bb917e7.svg);
  mask-image: url(../../img/element-icons/leave.bb917e7.svg);
}

.mx_UserMenu_contextMenu .mx_UserMenu_iconMembers:before {
  -webkit-mask-image: url(../../img/element-icons/room/members.88c3e93.svg);
  mask-image: url(../../img/element-icons/room/members.88c3e93.svg);
}

.mx_UserMenu_contextMenu .mx_UserMenu_iconInvite:before {
  -webkit-mask-image: url(../../img/element-icons/room/invite.946a71b.svg);
  mask-image: url(../../img/element-icons/room/invite.946a71b.svg);
}

.mx_ViewSource_separator {
  clear: both;
  border-bottom: 1px solid #e5e5e5;
  padding-top: 0.7em;
  padding-bottom: 0.7em;
}

.mx_ViewSource_heading {
  font-size: 1.7rem;
  font-weight: 400;
  color: #2e2f32;
  margin-top: 0.7em;
}

.mx_ViewSource pre {
  text-align: left;
  font-size: 1.2rem;
  padding: 0.5em 1em;
  word-wrap: break-word;
  white-space: pre-wrap;
}

.mx_ViewSource_details {
  margin-top: 0.8em;
}

.mx_CompleteSecurity_header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_CompleteSecurity_headerIcon {
  width: 24px;
  height: 24px;
  margin-right: 4px;
  position: relative;
}

.mx_CompleteSecurity_heroIcon {
  width: 128px;
  height: 128px;
  position: relative;
  margin: 0 auto;
}

.mx_CompleteSecurity_body {
  font-size: 1.5rem;
}

.mx_CompleteSecurity_waiting {
  color: #8d99a5;
}

.mx_CompleteSecurity_actionRow {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  margin-top: 2.8rem;
}

.mx_CompleteSecurity_actionRow .mx_AccessibleButton {
  -webkit-margin-start: 18px;
  margin-inline-start: 18px;
}

.mx_CompleteSecurity_actionRow .mx_AccessibleButton.warning {
  color: #ff4b55;
}

.mx_Login_submit {
  vertical-align: middle;
  border: 0;
  border-radius: 8px;
  font-family: Inter, Twemoji, Apple Color Emoji, Segoe UI Emoji, Arial,
    Helvetica, Sans-Serif, Noto Color Emoji;
  font-size: 1.4rem;
  color: #fff;
  background-color: #0dbd8b;
  width: auto;
  padding: 7px 1.5em;
  cursor: pointer;
  display: inline-block;
  outline: none;
  width: 100%;
  margin-top: 24px;
  margin-bottom: 24px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-align: center;
}

.mx_Login_submit:disabled {
  opacity: 0.3;
  cursor: default;
}

.mx_Login_loader {
  display: inline;
  position: relative;
  top: 2px;
  left: 8px;
}

.mx_Login_loader .mx_Spinner {
  display: inline;
}

.mx_Login_loader .mx_Spinner img {
  width: 16px;
  height: 16px;
}

.mx_Login_error {
  color: #ff4b55;
  font-weight: 700;
  text-align: center;
  margin-top: 12px;
  margin-bottom: 12px;
}

.mx_Login_error.mx_Login_serverError {
  text-align: left;
  font-weight: 400;
}

.mx_Login_error.mx_Login_serverError.mx_Login_serverErrorNonFatal {
  color: #ff8d13;
}

.mx_Login_type_container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #232f32;
}

.mx_Login_type_container .mx_Field {
  margin: 0;
}

.mx_Login_type_label {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.mx_Login_underlinedServerName {
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  border-bottom: 1px dashed #0dbd8b;
}

div.mx_AccessibleButton_kind_link.mx_Login_forgot {
  display: block;
  margin: 0 auto;
  font-size: inherit;
  padding: 0;
}

div.mx_AccessibleButton_kind_link.mx_Login_forgot.mx_AccessibleButton_disabled {
  cursor: not-allowed;
}

.mx_MediaBody.mx_AudioPlayer_container {
  padding: 16px 12px 12px;
}

.mx_MediaBody.mx_AudioPlayer_container .mx_AudioPlayer_primaryContainer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.mx_MediaBody.mx_AudioPlayer_container
  .mx_AudioPlayer_primaryContainer
  .mx_PlayPauseButton {
  margin-right: 8px;
}

.mx_MediaBody.mx_AudioPlayer_container
  .mx_AudioPlayer_primaryContainer
  .mx_AudioPlayer_mediaInfo {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  overflow: hidden;
}

.mx_MediaBody.mx_AudioPlayer_container
  .mx_AudioPlayer_primaryContainer
  .mx_AudioPlayer_mediaInfo
  > * {
  display: block;
}

.mx_MediaBody.mx_AudioPlayer_container
  .mx_AudioPlayer_primaryContainer
  .mx_AudioPlayer_mediaInfo
  .mx_AudioPlayer_mediaName {
  color: #2e2f32;
  font-size: 1.5rem;
  line-height: 1.5rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding-bottom: 4px;
}

.mx_MediaBody.mx_AudioPlayer_container
  .mx_AudioPlayer_primaryContainer
  .mx_AudioPlayer_mediaInfo
  .mx_AudioPlayer_byline {
  font-size: 1.2rem;
  line-height: 1.2rem;
}

.mx_MediaBody.mx_AudioPlayer_container .mx_AudioPlayer_seek {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_MediaBody.mx_AudioPlayer_container .mx_AudioPlayer_seek .mx_SeekBar {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.mx_MediaBody.mx_AudioPlayer_container .mx_AudioPlayer_seek .mx_Clock {
  width: 4.2rem;
  min-width: 4.2rem;
  padding-left: 4px;
  text-align: right;
}

.mx_PlayPauseButton {
  position: relative;
  width: 32px;
  height: 32px;
  min-width: 32px;
  min-height: 32px;
  border-radius: 32px;
  background-color: #f4f6fa;
}

.mx_PlayPauseButton:before {
  content: "";
  position: absolute;
  background-color: #737d8c;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
}

.mx_PlayPauseButton.mx_PlayPauseButton_disabled:before {
  opacity: 0.5;
}

.mx_PlayPauseButton.mx_PlayPauseButton_play:before {
  width: 13px;
  height: 16px;
  top: 8px;
  left: 12px;
  -webkit-mask-image: url(../../img/element-icons/play.a72552b.svg);
  mask-image: url(../../img/element-icons/play.a72552b.svg);
}

.mx_PlayPauseButton.mx_PlayPauseButton_pause:before {
  width: 10px;
  height: 12px;
  top: 10px;
  left: 11px;
  -webkit-mask-image: url(../../img/element-icons/pause.c4c0886.svg);
  mask-image: url(../../img/element-icons/pause.c4c0886.svg);
}

.mx_MediaBody.mx_VoiceMessagePrimaryContainer {
  padding-right: 11px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  contain: content;
}

.mx_MediaBody.mx_VoiceMessagePrimaryContainer .mx_Waveform .mx_Waveform_bar {
  background-color: #c1c6cd;
  height: 100%;
  -webkit-transform: scaleY(max(0.05, var(--barHeight)));
  transform: scaleY(max(0.05, var(--barHeight)));
}

.mx_MediaBody.mx_VoiceMessagePrimaryContainer
  .mx_Waveform
  .mx_Waveform_bar.mx_Waveform_bar_100pct {
  -webkit-transition: background-color 0.25s ease;
  transition: background-color 0.25s ease;
  background-color: #737d8c;
}

.mx_MediaBody.mx_VoiceMessagePrimaryContainer .mx_Clock {
  width: 4.2rem;
  padding-right: 6px;
  padding-left: 8px;
}

.mx_MediaBody.mx_VoiceMessagePrimaryContainer.mx_VoiceMessagePrimaryContainer_noWaveform {
  max-width: 162px;
}

.mx_SeekBar {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  height: 1px;
  background: #c1c6cd;
  outline: none;
  position: relative;
  cursor: pointer;
}

.mx_SeekBar::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background-color: #8d99a5;
  cursor: pointer;
}

.mx_SeekBar::-moz-range-thumb {
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background-color: #8d99a5;
  cursor: pointer;
  border: none;
}

.mx_SeekBar:before {
  content: "";
  background-color: #8d99a5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleX(var(--fillTo));
  transform: scaleX(var(--fillTo));
}

.mx_SeekBar::-moz-range-progress {
  background-color: #8d99a5;
  height: 1px;
}

.mx_SeekBar:disabled {
  opacity: 0.5;
}

.mx_SeekBar:after {
  content: "";
  position: absolute;
  top: -6px;
  bottom: -6px;
  left: 0;
  right: 0;
}

.mx_Waveform {
  position: relative;
  height: 30px;
  top: 1px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  overflow: hidden;
}

.mx_Waveform .mx_Waveform_bar {
  width: 0;
  border: 1px solid transparent;
  border-radius: 2px;
  min-height: 0;
  max-height: 100%;
  margin-left: 1px;
  margin-right: 1px;
}

.mx_AuthBody {
  width: 500px;
  font-size: 1.2rem;
  color: #61708b;
  background-color: #fff;
  border-radius: 0 4px 4px 0;
  padding: 25px 60px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.mx_AuthBody h2 {
  font-size: 2.4rem;
  font-weight: 600;
  margin-top: 8px;
  color: #232f32;
}

.mx_AuthBody h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: #61708b;
}

.mx_AuthBody h3.mx_AuthBody_centered {
  text-align: center;
}

.mx_AuthBody a:hover,
.mx_AuthBody a:link,
.mx_AuthBody a:visited {
  color: #0dbd8b;
  text-decoration: none;
}

.mx_AuthBody input[type="password"],
.mx_AuthBody input[type="text"] {
  color: #232f32;
}

.mx_AuthBody .mx_Field input,
.mx_AuthBody .mx_Field select {
  color: #232f32;
  background-color: #fff;
}

.mx_AuthBody .mx_Field label {
  color: #232f32;
}

.mx_AuthBody .mx_Field input:not(:-moz-placeholder-shown) + label,
.mx_AuthBody .mx_Field textarea:not(:-moz-placeholder-shown) + label {
  background-color: #fff;
}

.mx_AuthBody .mx_Field input:not(:-ms-input-placeholder) + label,
.mx_AuthBody .mx_Field textarea:not(:-ms-input-placeholder) + label {
  background-color: #fff;
}

.mx_AuthBody .mx_Field_labelAlwaysTopLeft label,
.mx_AuthBody .mx_Field input:focus + label,
.mx_AuthBody .mx_Field input:not(:placeholder-shown) + label,
.mx_AuthBody .mx_Field select + label,
.mx_AuthBody .mx_Field textarea:focus + label,
.mx_AuthBody .mx_Field textarea:not(:placeholder-shown) + label {
  background-color: #fff;
}

.mx_AuthBody input.error {
  color: #ff4b55;
}

.mx_AuthBody .mx_Field input {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.mx_AuthBody .mx_Field_select:before {
  background-color: #232f32;
}

.mx_AuthBody .mx_Dropdown {
  color: #232f32;
}

.mx_AuthBody .mx_Dropdown_arrow {
  background: #232f32;
}

.mx_AuthBody .mx_Dropdown_menu {
  background-color: #fff;
}

.mx_AuthBody .mx_Dropdown_menu .mx_Dropdown_option_highlight {
  background-color: #ddd;
}

.mx_AuthBody_fieldRow {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 10px;
}

.mx_AuthBody_fieldRow > .mx_Field {
  margin: 0 5px;
}

.mx_AuthBody_fieldRow > .mx_Field:first-child {
  margin-left: 0;
}

.mx_AuthBody_fieldRow > .mx_Field:last-child {
  margin-right: 0;
}

.mx_AuthBody_paddedFooter {
  height: 80px;
  padding-top: 28px;
  text-align: center;
}

.mx_AuthBody_paddedFooter .mx_AuthBody_paddedFooter_title {
  margin-top: 16px;
  font-size: 1.5rem;
  line-height: 2.4rem;
}

.mx_AuthBody_paddedFooter
  .mx_AuthBody_paddedFooter_title
  .mx_InlineSpinner
  img {
  vertical-align: sub;
  margin-right: 5px;
}

.mx_AuthBody_paddedFooter .mx_AuthBody_paddedFooter_subtitle {
  margin-top: 8px;
  font-size: 1rem;
  line-height: 1.4rem;
}

.mx_AuthBody_changeFlow {
  display: block;
  text-align: center;
  width: 100%;
}

.mx_AuthBody_changeFlow > a {
  font-weight: 600;
}

.mx_SSOButtons + .mx_AuthBody_changeFlow {
  margin-top: 24px;
}

.mx_AuthBody_spinner {
  margin: 1em 0;
}

@media only screen and (max-width: 480px) {
  .mx_AuthBody {
    border-radius: 4px;
    width: auto;
    max-width: 500px;
    padding: 10px;
  }
}

.mx_AuthButtons {
  min-height: 24px;
  height: unset !important;
  padding-top: 13px !important;
  padding-bottom: 14px !important;
  -webkit-box-ordinal-group: 5;
  -ms-flex-order: 4;
  order: 4;
}

.mx_AuthButtons_loginButton_wrapper {
  text-align: center;
  width: 100%;
}

.mx_AuthButtons_loginButton,
.mx_AuthButtons_registerButton {
  margin-top: 3px;
  height: 40px;
  border: 0;
  border-radius: 40px;
  margin-left: 4px;
  margin-right: 4px;
  min-width: 80px;
  background-color: #0dbd8b;
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0 11px;
  word-break: break-word;
}

.mx_AuthFooter {
  text-align: center;
  width: 100%;
  font-size: 1.4rem;
  opacity: 0.72;
  padding: 20px 0;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(transparent),
    to(rgba(0, 0, 0, 0.8))
  );
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
}

.mx_AuthFooter a:hover,
.mx_AuthFooter a:link,
.mx_AuthFooter a:visited {
  color: #fff;
  margin: 0 22px;
}

.mx_AuthHeader {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 206px;
  padding: 25px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

@media only screen and (max-width: 480px) {
  .mx_AuthHeader {
    display: none;
  }
}

.mx_AuthHeaderLogo {
  margin-top: 15px;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 0 25px;
}

.mx_AuthHeaderLogo img {
  width: 100%;
}

@media only screen and (max-width: 480px) {
  .mx_AuthHeaderLogo {
    display: none;
  }
}

.mx_AuthPage {
  width: 100%;
  min-height: 100%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  background-color: #2e3649;
}

.mx_AuthPage,
.mx_AuthPage_modal {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.mx_AuthPage_modal {
  margin: 100px auto auto;
  border-radius: 4px;
  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.33);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.33);
  background-color: hsla(0, 0%, 96.1%, 0.9);
}

@media only screen and (max-width: 480px) {
  .mx_AuthPage_modal {
    margin-top: 0;
  }
}

.mx_CompleteSecurityBody {
  width: 600px;
  color: #232f32;
  background-color: #fff;
  border-radius: 4px;
  padding: 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.mx_CompleteSecurityBody h2 {
  font-size: 2.4rem;
  font-weight: 600;
  margin-top: 0;
}

.mx_CompleteSecurityBody h3 {
  font-size: 1.4rem;
  font-weight: 600;
}

.mx_CompleteSecurityBody a:hover,
.mx_CompleteSecurityBody a:link,
.mx_CompleteSecurityBody a:visited {
  color: #0dbd8b;
  text-decoration: none;
}

.mx_CountryDropdown .mx_Dropdown_input .mx_Dropdown_option {
  padding: 0 3px;
}

.mx_CountryDropdown .mx_Dropdown_arrow {
  padding-right: 3px;
}

.mx_CountryDropdown_shortOption {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  height: 100%;
}

.mx_CountryDropdown_option,
.mx_CountryDropdown_shortOption {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_CountryDropdown_option {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.mx_InteractiveAuthEntryComponents_emailWrapper {
  padding-right: 100px;
  position: relative;
  margin-top: 32px;
  margin-bottom: 32px;
}

.mx_InteractiveAuthEntryComponents_emailWrapper:after,
.mx_InteractiveAuthEntryComponents_emailWrapper:before {
  position: absolute;
  width: 116px;
  height: 116px;
  content: "";
  right: -10px;
}

.mx_InteractiveAuthEntryComponents_emailWrapper:before {
  background-color: rgba(244, 246, 250, 0.91);
  border-radius: 50%;
  top: -20px;
}

.mx_InteractiveAuthEntryComponents_emailWrapper:after {
  background-image: url(../../img/element-icons/email-prompt.1d04dfe.svg);
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
  top: -25px;
}

.mx_InteractiveAuthEntryComponents_msisdnWrapper {
  text-align: center;
}

.mx_InteractiveAuthEntryComponents_msisdnEntry {
  font-size: 200%;
  font-weight: 700;
  border: 1px solid #c7c7c7;
  border-radius: 3px;
  width: 6em;
}

.mx_InteractiveAuthEntryComponents_msisdnEntry:focus {
  border: 1px solid #0dbd8b;
}

.mx_InteractiveAuthEntryComponents_msisdnSubmit {
  margin-top: 4px;
  margin-bottom: 5px;
}

.mx_InteractiveAuthEntryComponents_termsSubmit {
  margin-top: 20px;
  margin-bottom: 5px;
  display: block;
  width: 100%;
}

.mx_InteractiveAuthEntryComponents_msisdnSubmit:disabled {
  background-color: #747474;
  cursor: default;
}

.mx_InteractiveAuthEntryComponents_termsSubmit:disabled {
  background-color: #92caad;
  cursor: default;
}

.mx_InteractiveAuthEntryComponents_termsPolicy {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: start;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_InteractiveAuthEntryComponents_passwordSection {
  width: 300px;
}

.mx_InteractiveAuthEntryComponents_sso_buttons {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  margin-top: 20px;
}

.mx_InteractiveAuthEntryComponents_sso_buttons .mx_AccessibleButton {
  margin-left: 5px;
}

.mx_AuthBody_language {
  width: 100%;
}

.mx_AuthBody_language .mx_Dropdown_input {
  border: none;
  font-size: 1.4rem;
  font-weight: 600;
  color: #4e5054;
  width: auto;
}

.mx_AuthBody_language .mx_Dropdown_arrow {
  background: #4e5054;
}

progress.mx_PassphraseField_progress {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  border: 0;
  height: 4px;
  position: absolute;
  top: -12px;
  border-radius: "2px";
}

progress.mx_PassphraseField_progress::-moz-progress-bar {
  border-radius: "2px";
}

progress.mx_PassphraseField_progress::-webkit-progress-bar,
progress.mx_PassphraseField_progress::-webkit-progress-value {
  border-radius: "2px";
}

progress.mx_PassphraseField_progress {
  color: #ff4b55;
}

progress.mx_PassphraseField_progress::-moz-progress-bar {
  background-color: #ff4b55;
}

progress.mx_PassphraseField_progress::-webkit-progress-value {
  background-color: #ff4b55;
}

progress.mx_PassphraseField_progress[value="2"],
progress.mx_PassphraseField_progress[value="3"] {
  color: #ff812d;
}

progress.mx_PassphraseField_progress[value="2"]::-moz-progress-bar,
progress.mx_PassphraseField_progress[value="3"]::-moz-progress-bar {
  background-color: #ff812d;
}

progress.mx_PassphraseField_progress[value="2"]::-webkit-progress-value,
progress.mx_PassphraseField_progress[value="3"]::-webkit-progress-value {
  background-color: #ff812d;
}

progress.mx_PassphraseField_progress[value="4"] {
  color: #0dbd8b;
}

progress.mx_PassphraseField_progress[value="4"]::-moz-progress-bar {
  background-color: #0dbd8b;
}

progress.mx_PassphraseField_progress[value="4"]::-webkit-progress-value {
  background-color: #0dbd8b;
}

.mx_Welcome {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_Welcome.mx_WelcomePage_registrationDisabled .mx_ButtonCreateAccount {
  display: none;
}

.mx_Welcome .mx_AuthBody_language {
  width: 160px;
  margin-bottom: 10px;
}

.mx_BaseAvatar {
  position: relative;
  display: inline-block;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.mx_BaseAvatar_initial {
  position: absolute;
  left: 0;
  color: #fff;
  text-align: center;
  speak: none;
  pointer-events: none;
  font-weight: 400;
}

.mx_BaseAvatar_image {
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 125px;
  vertical-align: top;
  background-color: #fff;
}

.mx_DecoratedRoomAvatar,
.mx_ExtraTile {
  position: relative;
  contain: content;
}

.mx_DecoratedRoomAvatar.mx_DecoratedRoomAvatar_cutout .mx_BaseAvatar,
.mx_ExtraTile.mx_DecoratedRoomAvatar_cutout .mx_BaseAvatar {
  -webkit-mask-image: url(../../img/element-icons/roomlist/decorated-avatar-mask.76c407f.svg);
  mask-image: url(../../img/element-icons/roomlist/decorated-avatar-mask.76c407f.svg);
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

.mx_DecoratedRoomAvatar .mx_DecoratedRoomAvatar_icon,
.mx_ExtraTile .mx_DecoratedRoomAvatar_icon {
  position: absolute;
  bottom: -2px;
  right: -2px;
  margin: 4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.mx_DecoratedRoomAvatar .mx_DecoratedRoomAvatar_icon:before,
.mx_ExtraTile .mx_DecoratedRoomAvatar_icon:before {
  content: "";
  width: 8px;
  height: 8px;
  position: absolute;
  border-radius: 8px;
}

.mx_DecoratedRoomAvatar .mx_DecoratedRoomAvatar_icon_globe:before,
.mx_ExtraTile .mx_DecoratedRoomAvatar_icon_globe:before {
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  background: #737d8c;
  -webkit-mask-image: url(../../img/globe.8201f08.svg);
  mask-image: url(../../img/globe.8201f08.svg);
}

.mx_DecoratedRoomAvatar .mx_DecoratedRoomAvatar_icon_offline:before,
.mx_ExtraTile .mx_DecoratedRoomAvatar_icon_offline:before {
  background-color: #e3e8f0;
}

.mx_DecoratedRoomAvatar .mx_DecoratedRoomAvatar_icon_online:before,
.mx_ExtraTile .mx_DecoratedRoomAvatar_icon_online:before {
  background-color: #0dbd8b;
}

.mx_DecoratedRoomAvatar .mx_DecoratedRoomAvatar_icon_away:before,
.mx_ExtraTile .mx_DecoratedRoomAvatar_icon_away:before {
  background-color: #d9b072;
}

.mx_DecoratedRoomAvatar .mx_NotificationBadge,
.mx_DecoratedRoomAvatar .mx_RoomTile_badgeContainer,
.mx_ExtraTile .mx_NotificationBadge,
.mx_ExtraTile .mx_RoomTile_badgeContainer {
  position: absolute;
  top: 0;
  right: 0;
  height: 18px;
  width: 18px;
}

.mx_MessageComposer_avatar .mx_BaseAvatar {
  padding: 2px;
  border: 1px solid transparent;
  border-radius: 100%;
}

.mx_MessageComposer_avatar .mx_BaseAvatar_initial {
  left: 2px;
}

.mx_MemberStatusMessageAvatar_hasStatus .mx_BaseAvatar {
  border-color: #0dbd8b;
}

.mx_WidgetAvatar {
  border-radius: 4px;
}

.mx_BetaCard {
  margin-bottom: 20px;
  padding: 24px;
  background-color: #f4f6fa;
  border-radius: 8px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.mx_BetaCard .mx_BetaCard_columns {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.mx_BetaCard .mx_BetaCard_columns > div .mx_BetaCard_title {
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.2rem;
  color: #2e2f32;
  margin: 4px 0 14px;
}

.mx_BetaCard
  .mx_BetaCard_columns
  > div
  .mx_BetaCard_title
  .mx_BetaCard_betaPill {
  margin-left: 12px;
}

.mx_BetaCard .mx_BetaCard_columns > div .mx_BetaCard_caption {
  font-size: 1.5rem;
  line-height: 2rem;
  color: #737d8c;
  margin-bottom: 20px;
}

.mx_BetaCard
  .mx_BetaCard_columns
  > div
  .mx_BetaCard_buttons
  .mx_AccessibleButton {
  display: block;
  margin: 12px 0;
  padding: 7px 40px;
  width: auto;
}

.mx_BetaCard .mx_BetaCard_columns > div .mx_BetaCard_disclaimer {
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #737d8c;
  margin-top: 20px;
}

.mx_BetaCard .mx_BetaCard_columns > img {
  margin: auto 0 auto 20px;
  width: 300px;
  -o-object-fit: contain;
  object-fit: contain;
  height: 100%;
}

.mx_BetaCard .mx_BetaCard_relatedSettings .mx_SettingsFlag {
  margin: 16px 0 0;
  font-size: 1.5rem;
  line-height: 2.4rem;
  color: #2e2f32;
}

.mx_BetaCard
  .mx_BetaCard_relatedSettings
  .mx_SettingsFlag
  .mx_SettingsFlag_microcopy {
  margin-top: 4px;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #737d8c;
}

.mx_BetaCard_betaPill {
  background-color: #238cf5;
  padding: 4px 10px;
  border-radius: 8px;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 15px;
  color: #fff;
  display: inline-block;
  vertical-align: text-bottom;
}

.mx_BetaCard_betaPill.mx_BetaCard_betaPill_clickable {
  cursor: pointer;
}

.mx_BetaDot {
  margin: 10px;
  height: 12px;
  width: 12px;
  -webkit-animation: mx_Beta_bluePulse 2s infinite;
  animation: mx_Beta_bluePulse 2s infinite;
  -webkit-animation-iteration-count: 20;
  animation-iteration-count: 20;
  position: relative;
}

.mx_BetaDot,
.mx_BetaDot:after {
  border-radius: 50%;
  -webkit-transform: scale(1);
  transform: scale(1);
  background: #238cf5;
}

.mx_BetaDot:after {
  content: "";
  position: absolute;
  width: inherit;
  height: inherit;
  top: 0;
  left: 0;
  -webkit-transform-origin: center center;
  transform-origin: center center;
  -webkit-animation-name: mx_Beta_bluePulse_shadow;
  animation-name: mx_Beta_bluePulse_shadow;
  -webkit-animation-duration: inherit;
  animation-duration: inherit;
  -webkit-animation-iteration-count: inherit;
  animation-iteration-count: inherit;
}

@-webkit-keyframes mx_Beta_bluePulse {
  0% {
    -webkit-transform: scale(0.95);
    transform: scale(0.95);
  }
  70% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  to {
    -webkit-transform: scale(0.95);
    transform: scale(0.95);
  }
}

@keyframes mx_Beta_bluePulse {
  0% {
    -webkit-transform: scale(0.95);
    transform: scale(0.95);
  }
  70% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  to {
    -webkit-transform: scale(0.95);
    transform: scale(0.95);
  }
}

@-webkit-keyframes mx_Beta_bluePulse_shadow {
  0% {
    opacity: 0.7;
  }
  70% {
    -webkit-transform: scale(2.2);
    transform: scale(2.2);
    opacity: 0;
  }
  to {
    opacity: 0;
  }
}

@keyframes mx_Beta_bluePulse_shadow {
  0% {
    opacity: 0.7;
  }
  70% {
    -webkit-transform: scale(2.2);
    transform: scale(2.2);
    opacity: 0;
  }
  to {
    opacity: 0;
  }
}

.mx_CallContextMenu_item {
  width: 205px;
  height: 40px;
  padding-left: 16px;
  line-height: 40px;
  vertical-align: center;
}

.mx_IconizedContextMenu {
  min-width: 146px;
}

.mx_IconizedContextMenu .mx_IconizedContextMenu_optionList > * {
  padding-left: 20px;
  padding-right: 20px;
}

.mx_IconizedContextMenu
  .mx_IconizedContextMenu_optionList
  .mx_IconizedContextMenu_optionList_notFirst:before,
.mx_IconizedContextMenu
  .mx_IconizedContextMenu_optionList:nth-child(n + 2):before {
  border-top: 1px solid #2e2f32;
  opacity: 0.1;
  content: "";
  width: 100%;
  position: absolute;
  left: 0;
}

.mx_IconizedContextMenu
  .mx_IconizedContextMenu_optionList:first-child
  .mx_AccessibleButton:first-child {
  border-radius: 8px 8px 0 0;
}

.mx_IconizedContextMenu
  .mx_IconizedContextMenu_optionList:last-child
  .mx_AccessibleButton:last-child {
  border-radius: 0 0 8px 8px;
}

.mx_IconizedContextMenu
  .mx_IconizedContextMenu_optionList
  .mx_AccessibleButton {
  padding-top: 12px;
  padding-bottom: 12px;
  text-decoration: none;
  color: #2e2f32;
  font-size: 1.5rem;
  line-height: 2.4rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_IconizedContextMenu
  .mx_IconizedContextMenu_optionList
  .mx_AccessibleButton:hover {
  background-color: #f5f8fa;
}

.mx_IconizedContextMenu
  .mx_IconizedContextMenu_optionList
  .mx_AccessibleButton.mx_AccessibleButton_disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.mx_IconizedContextMenu
  .mx_IconizedContextMenu_optionList
  .mx_AccessibleButton
  .mx_IconizedContextMenu_icon,
.mx_IconizedContextMenu
  .mx_IconizedContextMenu_optionList
  .mx_AccessibleButton
  img {
  width: 16px;
  min-width: 16px;
  max-width: 16px;
}

.mx_IconizedContextMenu
  .mx_IconizedContextMenu_optionList
  .mx_AccessibleButton
  span.mx_IconizedContextMenu_label {
  width: 100%;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.mx_IconizedContextMenu
  .mx_IconizedContextMenu_optionList
  .mx_AccessibleButton
  .mx_IconizedContextMenu_icon
  + .mx_IconizedContextMenu_label {
  padding-left: 14px;
}

.mx_IconizedContextMenu .mx_IconizedContextMenu_icon {
  position: relative;
  width: 16px;
  height: 16px;
}

.mx_IconizedContextMenu .mx_IconizedContextMenu_icon:before {
  content: "";
  width: 16px;
  height: 16px;
  position: absolute;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  background: #2e2f32;
}

.mx_IconizedContextMenu
  .mx_IconizedContextMenu_optionList_red
  .mx_AccessibleButton {
  color: #ff4b55 !important;
}

.mx_IconizedContextMenu
  .mx_IconizedContextMenu_optionList_red
  .mx_IconizedContextMenu_icon:before {
  background-color: #ff4b55;
}

.mx_IconizedContextMenu .mx_IconizedContextMenu_active.mx_AccessibleButton,
.mx_IconizedContextMenu .mx_IconizedContextMenu_active .mx_AccessibleButton {
  color: #0dbd8b !important;
}

.mx_IconizedContextMenu
  .mx_IconizedContextMenu_active
  .mx_IconizedContextMenu_icon:before {
  background-color: #0dbd8b;
}

.mx_IconizedContextMenu.mx_IconizedContextMenu_compact
  .mx_IconizedContextMenu_optionList
  > * {
  padding: 8px 16px 8px 11px;
}

.mx_IconizedContextMenu .mx_IconizedContextMenu_checked {
  margin-left: 16px;
  margin-right: -5px;
}

.mx_IconizedContextMenu .mx_IconizedContextMenu_checked:before {
  -webkit-mask-image: url(../../img/element-icons/roomlist/checkmark.a8c4d72.svg);
  mask-image: url(../../img/element-icons/roomlist/checkmark.a8c4d72.svg);
}

.mx_MessageContextMenu .mx_IconizedContextMenu_icon {
  width: 16px;
  height: 16px;
  display: block;
}

.mx_MessageContextMenu .mx_IconizedContextMenu_icon:before {
  content: "";
  width: 16px;
  height: 16px;
  display: block;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  background: #2e2f32;
}

.mx_MessageContextMenu .mx_MessageContextMenu_iconCollapse:before {
  -webkit-mask-image: url(../../img/element-icons/message/chevron-up.90f4709.svg);
  mask-image: url(../../img/element-icons/message/chevron-up.90f4709.svg);
}

.mx_MessageContextMenu .mx_MessageContextMenu_iconReport:before {
  -webkit-mask-image: url(../../img/element-icons/warning-badge.413c9a9.svg);
  mask-image: url(../../img/element-icons/warning-badge.413c9a9.svg);
}

.mx_MessageContextMenu .mx_MessageContextMenu_iconLink:before {
  -webkit-mask-image: url(../../img/element-icons/link.8f4b1fc.svg);
  mask-image: url(../../img/element-icons/link.8f4b1fc.svg);
}

.mx_MessageContextMenu .mx_MessageContextMenu_iconPermalink:before {
  -webkit-mask-image: url(../../img/element-icons/room/share.54dc3fb.svg);
  mask-image: url(../../img/element-icons/room/share.54dc3fb.svg);
}

.mx_MessageContextMenu .mx_MessageContextMenu_iconUnhidePreview:before {
  -webkit-mask-image: url(../../img/element-icons/settings/appearance.cdebd40.svg);
  mask-image: url(../../img/element-icons/settings/appearance.cdebd40.svg);
}

.mx_MessageContextMenu .mx_MessageContextMenu_iconForward:before {
  -webkit-mask-image: url(../../img/element-icons/message/fwd.d1f50ee.svg);
  mask-image: url(../../img/element-icons/message/fwd.d1f50ee.svg);
}

.mx_MessageContextMenu .mx_MessageContextMenu_iconRedact:before {
  -webkit-mask-image: url(../../img/element-icons/trashcan.3b626db.svg);
  mask-image: url(../../img/element-icons/trashcan.3b626db.svg);
}

.mx_MessageContextMenu .mx_MessageContextMenu_iconResend:before {
  -webkit-mask-image: url(../../img/element-icons/retry.6cd23ad.svg);
  mask-image: url(../../img/element-icons/retry.6cd23ad.svg);
}

.mx_MessageContextMenu .mx_MessageContextMenu_iconSource:before {
  -webkit-mask-image: url(../../img/element-icons/room/format-bar/code.27444ba.svg);
  mask-image: url(../../img/element-icons/room/format-bar/code.27444ba.svg);
}

.mx_MessageContextMenu .mx_MessageContextMenu_iconQuote:before {
  -webkit-mask-image: url(../../img/element-icons/room/format-bar/quote.560cd8f.svg);
  mask-image: url(../../img/element-icons/room/format-bar/quote.560cd8f.svg);
}

.mx_MessageContextMenu .mx_MessageContextMenu_iconPin:before {
  -webkit-mask-image: url(../../img/element-icons/room/pin-upright.65783fb.svg);
  mask-image: url(../../img/element-icons/room/pin-upright.65783fb.svg);
}

.mx_MessageContextMenu .mx_MessageContextMenu_iconUnpin:before {
  -webkit-mask-image: url(../../img/element-icons/room/pin.a996417.svg);
  mask-image: url(../../img/element-icons/room/pin.a996417.svg);
}

.mx_StatusMessageContextMenu {
  padding: 10px;
}

.mx_StatusMessageContextMenu_form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

input.mx_StatusMessageContextMenu_message {
  border-radius: 4px;
  border: 1px solid #e7e7e7;
  padding: 6.5px 11px;
  background-color: #fff;
  font-weight: 400;
  margin: 0 0 10px;
}

.mx_StatusMessageContextMenu_message::-webkit-input-placeholder {
  color: #61708b;
}

.mx_StatusMessageContextMenu_message::-moz-placeholder {
  color: #61708b;
}

.mx_StatusMessageContextMenu_message:-ms-input-placeholder {
  color: #61708b;
}

.mx_StatusMessageContextMenu_message::-ms-input-placeholder {
  color: #61708b;
}

.mx_StatusMessageContextMenu_message::placeholder {
  color: #61708b;
}

.mx_StatusMessageContextMenu_actionContainer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.mx_StatusMessageContextMenu_clear,
.mx_StatusMessageContextMenu_submit {
  vertical-align: middle;
  border-radius: 8px;
  font-family: Inter, Twemoji, Apple Color Emoji, Segoe UI Emoji, Arial,
    Helvetica, Sans-Serif, Noto Color Emoji;
  font-size: 1.4rem;
  color: #fff;
  background-color: #0dbd8b;
  width: auto;
  cursor: pointer;
  display: inline-block;
  outline: none;
  -ms-flex-item-align: start;
  align-self: start;
  font-size: 1.2rem;
  padding: 6px 1em;
  border: 1px solid transparent;
  margin-right: 10px;
}

.mx_StatusMessageContextMenu_submit[disabled] {
  opacity: 0.49;
}

.mx_StatusMessageContextMenu_clear {
  color: #ff4b55;
  background-color: transparent;
  border: 1px solid #ff4b55;
}

.mx_StatusMessageContextMenu_actionContainer .mx_Spinner {
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
}

.mx_TagTileContextMenu_item {
  padding: 8px 20px 8px 8px;
  cursor: pointer;
  white-space: nowrap;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  line-height: 1.6rem;
}

.mx_TagTileContextMenu_item:before {
  content: "";
  height: 15px;
  width: 15px;
  background-color: currentColor;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
  margin-right: 8px;
}

.mx_TagTileContextMenu_viewCommunity:before {
  -webkit-mask-image: url(../../img/element-icons/view-community.0cad1a5.svg);
  mask-image: url(../../img/element-icons/view-community.0cad1a5.svg);
}

.mx_TagTileContextMenu_moveUp:before {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

.mx_TagTileContextMenu_moveDown:before,
.mx_TagTileContextMenu_moveUp:before {
  -webkit-mask-image: url(../../img/feather-customised/chevron-down.5278abe.svg);
  mask-image: url(../../img/feather-customised/chevron-down.5278abe.svg);
}

.mx_TagTileContextMenu_hideCommunity:before {
  -webkit-mask-image: url(../../img/element-icons/hide.2b52315.svg);
  mask-image: url(../../img/element-icons/hide.2b52315.svg);
}

.mx_TagTileContextMenu_separator {
  margin-top: 0;
  margin-bottom: 0;
  border-style: none;
  border-top: 1px solid;
  border-color: #e7e7e7;
}

.mx_AddExistingToSpaceDialog_wrapper .mx_Dialog {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.mx_AddExistingToSpace .mx_SearchBox {
  margin: 0 0 15px;
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
}

.mx_AddExistingToSpace .mx_AddExistingToSpace_content {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.mx_AddExistingToSpace .mx_AddExistingToSpace_noResults {
  display: block;
  margin-top: 24px;
}

.mx_AddExistingToSpace .mx_AddExistingToSpace_section:not(:first-child) {
  margin-top: 24px;
}

.mx_AddExistingToSpace .mx_AddExistingToSpace_section > h3 {
  margin: 0;
  color: #737d8c;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.5rem;
}

.mx_AddExistingToSpace
  .mx_AddExistingToSpace_section
  .mx_AddExistingToSpace_entry {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 12px;
}

.mx_AddExistingToSpace
  .mx_AddExistingToSpace_section
  .mx_AddExistingToSpace_entry
  .mx_DecoratedRoomAvatar {
  margin-right: 12px;
}

.mx_AddExistingToSpace
  .mx_AddExistingToSpace_section
  .mx_AddExistingToSpace_entry
  .mx_AddExistingToSpace_entry_name {
  font-size: 1.5rem;
  line-height: 30px;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 12px;
}

.mx_AddExistingToSpace
  .mx_AddExistingToSpace_section
  .mx_AddExistingToSpace_entry
  .mx_Checkbox {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_AddExistingToSpace .mx_AddExistingToSpace_section_spaces .mx_BaseAvatar {
  margin-right: 12px;
}

.mx_AddExistingToSpace
  .mx_AddExistingToSpace_section_spaces
  .mx_BaseAvatar_image {
  border-radius: 8px;
}

.mx_AddExistingToSpace .mx_AddExistingToSpace_section_experimental {
  position: relative;
  border-radius: 8px;
  margin: 12px 0;
  padding: 8px 8px 8px 42px;
  background-color: #f3f8fd;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #737d8c;
}

.mx_AddExistingToSpace .mx_AddExistingToSpace_section_experimental:before {
  content: "";
  position: absolute;
  left: 10px;
  top: calc(50% - 8px);
  height: 16px;
  width: 16px;
  background-color: #737d8c;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-image: url(../../img/element-icons/room/room-summary.1ad0865.svg);
  mask-image: url(../../img/element-icons/room/room-summary.1ad0865.svg);
  -webkit-mask-position: center;
  mask-position: center;
}

.mx_AddExistingToSpace .mx_AddExistingToSpace_footer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 20px;
}

.mx_AddExistingToSpace .mx_AddExistingToSpace_footer > span {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #737d8c;
}

.mx_AddExistingToSpace .mx_AddExistingToSpace_footer > span .mx_ProgressBar {
  height: 8px;
  width: 100%;
  border-radius: 8px;
}

.mx_AddExistingToSpace
  .mx_AddExistingToSpace_footer
  > span
  .mx_ProgressBar::-moz-progress-bar {
  border-radius: 8px;
}

.mx_AddExistingToSpace
  .mx_AddExistingToSpace_footer
  > span
  .mx_ProgressBar::-webkit-progress-bar,
.mx_AddExistingToSpace
  .mx_AddExistingToSpace_footer
  > span
  .mx_ProgressBar::-webkit-progress-value {
  border-radius: 8px;
}

.mx_AddExistingToSpace
  .mx_AddExistingToSpace_footer
  > span
  .mx_AddExistingToSpace_progressText {
  margin-top: 8px;
  font-size: 1.5rem;
  line-height: 2.4rem;
  color: #2e2f32;
}

.mx_AddExistingToSpace .mx_AddExistingToSpace_footer > span > * {
  vertical-align: middle;
}

.mx_AddExistingToSpace
  .mx_AddExistingToSpace_footer
  .mx_AddExistingToSpace_error {
  padding-left: 12px;
}

.mx_AddExistingToSpace
  .mx_AddExistingToSpace_footer
  .mx_AddExistingToSpace_error
  > img {
  -ms-flex-item-align: center;
  align-self: center;
}

.mx_AddExistingToSpace
  .mx_AddExistingToSpace_footer
  .mx_AddExistingToSpace_error
  .mx_AddExistingToSpace_errorHeading {
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.8rem;
  color: #ff4b55;
}

.mx_AddExistingToSpace
  .mx_AddExistingToSpace_footer
  .mx_AddExistingToSpace_error
  .mx_AddExistingToSpace_errorCaption {
  margin-top: 4px;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #2e2f32;
}

.mx_AddExistingToSpace .mx_AddExistingToSpace_footer .mx_AccessibleButton {
  display: inline-block;
  -ms-flex-item-align: center;
  align-self: center;
}

.mx_AddExistingToSpace
  .mx_AddExistingToSpace_footer
  .mx_AccessibleButton_kind_primary {
  padding: 8px 36px;
}

.mx_AddExistingToSpace
  .mx_AddExistingToSpace_footer
  .mx_AddExistingToSpace_retryButton {
  margin-left: 12px;
  padding-left: 24px;
  position: relative;
}

.mx_AddExistingToSpace
  .mx_AddExistingToSpace_footer
  .mx_AddExistingToSpace_retryButton:before {
  content: "";
  position: absolute;
  background-color: #2e2f32;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-image: url(../../img/element-icons/retry.6cd23ad.svg);
  mask-image: url(../../img/element-icons/retry.6cd23ad.svg);
  width: 18px;
  height: 18px;
  left: 0;
}

.mx_AddExistingToSpace
  .mx_AddExistingToSpace_footer
  .mx_AccessibleButton_kind_link {
  padding: 0;
}

.mx_AddExistingToSpaceDialog {
  width: 480px;
  color: #2e2f32;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  min-height: 0;
  height: 80vh;
}

.mx_AddExistingToSpaceDialog,
.mx_AddExistingToSpaceDialog .mx_Dialog_title {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.mx_AddExistingToSpaceDialog .mx_Dialog_title .mx_BaseAvatar_image {
  border-radius: 8px;
  margin: 0;
  vertical-align: unset;
}

.mx_AddExistingToSpaceDialog .mx_Dialog_title .mx_BaseAvatar {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  margin: auto 16px auto 5px;
  vertical-align: middle;
}

.mx_AddExistingToSpaceDialog .mx_Dialog_title > div > h1 {
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.2rem;
  margin: 0;
}

.mx_AddExistingToSpaceDialog
  .mx_Dialog_title
  > div
  .mx_AddExistingToSpaceDialog_onlySpace {
  color: #737d8c;
  font-size: 1.5rem;
  line-height: 2.4rem;
}

.mx_AddExistingToSpaceDialog .mx_Dialog_title .mx_Dropdown_input {
  border: none;
}

.mx_AddExistingToSpaceDialog
  .mx_Dialog_title
  .mx_Dropdown_input
  > .mx_Dropdown_option {
  padding-left: 0;
  -webkit-box-flex: unset;
  -ms-flex: unset;
  flex: unset;
  height: unset;
  color: #737d8c;
  font-size: 1.5rem;
  line-height: 2.4rem;
}

.mx_AddExistingToSpaceDialog
  .mx_Dialog_title
  .mx_Dropdown_input
  > .mx_Dropdown_option
  .mx_BaseAvatar {
  display: none;
}

.mx_AddExistingToSpaceDialog
  .mx_Dialog_title
  .mx_Dropdown_input
  .mx_Dropdown_menu
  .mx_AddExistingToSpaceDialog_dropdownOptionActive {
  color: #0dbd8b;
  padding-right: 32px;
  position: relative;
}

.mx_AddExistingToSpaceDialog
  .mx_Dialog_title
  .mx_Dropdown_input
  .mx_Dropdown_menu
  .mx_AddExistingToSpaceDialog_dropdownOptionActive:before {
  content: "";
  width: 20px;
  height: 20px;
  top: 8px;
  right: 0;
  position: absolute;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  background-color: #0dbd8b;
  -webkit-mask-image: url(../../img/element-icons/roomlist/checkmark.a8c4d72.svg);
  mask-image: url(../../img/element-icons/roomlist/checkmark.a8c4d72.svg);
}

.mx_AddExistingToSpaceDialog .mx_AddExistingToSpace {
  display: contents;
}

.mx_AddressPickerDialog a:hover,
.mx_AddressPickerDialog a:link,
.mx_AddressPickerDialog a:visited {
  color: #0dbd8b;
  text-decoration: none;
}

.mx_AddressPickerDialog_input,
.mx_AddressPickerDialog_input:focus {
  height: 26px;
  font-size: 1.4rem;
  font-family: Inter, Twemoji, Apple Color Emoji, Segoe UI Emoji, Arial,
    Helvetica, Sans-Serif, Noto Color Emoji;
  padding-left: 12px;
  padding-right: 12px;
  margin: 0 !important;
  border: 0 !important;
  outline: 0 !important;
  width: 1000%;
  resize: none;
  overflow: hidden;
  vertical-align: middle;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  word-wrap: nowrap;
}

.mx_AddressPickerDialog .mx_Dialog_content {
  min-height: 50px;
}

.mx_AddressPickerDialog_inputContainer {
  border-radius: 3px;
  border: 1px solid #e7e7e7;
  line-height: 3.6rem;
  padding: 1px 4px;
  max-height: 150px;
  overflow-x: hidden;
  overflow-y: auto;
}

.mx_AddressPickerDialog_error {
  margin-top: 10px;
  color: #ff4b55;
}

.mx_AddressPickerDialog_cancel {
  position: absolute;
  right: 11px;
  top: 13px;
  cursor: pointer;
}

.mx_AddressPickerDialog_cancel object {
  pointer-events: none;
}

.mx_AddressPickerDialog_identityServer {
  margin-top: 1em;
}

.mx_AnalyticsModal table {
  margin: 10px 0;
}

.mx_BetaFeedbackDialog .mx_BetaFeedbackDialog_subheading {
  color: #2e2f32;
  font-size: 1.4rem;
  line-height: 2rem;
  margin-bottom: 24px;
}

.mx_BetaFeedbackDialog .mx_AccessibleButton_kind_link {
  padding: 0;
  font-size: inherit;
  line-height: inherit;
}

.mx_BugReportDialog
  .mx_BugReportDialog_download
  .mx_AccessibleButton_kind_link {
  padding-left: 0;
}

.mx_ChangelogDialog_content {
  max-height: 300px;
  overflow: auto;
}

.mx_ChangelogDialog_li {
  padding: 0.2em;
}

.mx_ChatCreateOrReuseDialog .mx_ChatCreateOrReuseDialog_tiles {
  margin-top: 24px;
}

.mx_ChatCreateOrReuseDialog .mx_Dialog_content {
  margin-bottom: 24px;
  min-height: 100px;
}

.mx_ChatCreateOrReuseDialog .mx_RoomTile_badge {
  display: none;
}

.mx_ChatCreateOrReuseDialog_profile {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.mx_ChatCreateOrReuseDialog_profile_name {
  padding: 14px;
}

.mx_CommunityPrototypeInviteDialog.mx_Dialog_fixedWidth {
  width: 360px;
}

.mx_CommunityPrototypeInviteDialog .mx_Dialog_content {
  margin-bottom: 0;
}

.mx_CommunityPrototypeInviteDialog
  .mx_Dialog_content
  .mx_CommunityPrototypeInviteDialog_people {
  position: relative;
  margin-bottom: 4px;
}

.mx_CommunityPrototypeInviteDialog
  .mx_Dialog_content
  .mx_CommunityPrototypeInviteDialog_people
  .mx_AccessibleButton {
  display: inline-block;
  background-color: #ddd;
  border-radius: 4px;
  padding: 3px 5px;
  font-size: 1.2rem;
  float: right;
}

.mx_CommunityPrototypeInviteDialog
  .mx_Dialog_content
  .mx_CommunityPrototypeInviteDialog_morePeople {
  margin-top: 8px;
}

.mx_CommunityPrototypeInviteDialog
  .mx_Dialog_content
  .mx_CommunityPrototypeInviteDialog_person {
  position: relative;
  margin-top: 4px;
}

.mx_CommunityPrototypeInviteDialog
  .mx_Dialog_content
  .mx_CommunityPrototypeInviteDialog_person
  > * {
  vertical-align: middle;
}

.mx_CommunityPrototypeInviteDialog
  .mx_Dialog_content
  .mx_CommunityPrototypeInviteDialog_person
  .mx_Checkbox {
  position: absolute;
  right: 0;
  top: calc(50% - 8px);
  width: 16px;
}

.mx_CommunityPrototypeInviteDialog
  .mx_Dialog_content
  .mx_CommunityPrototypeInviteDialog_person
  .mx_CommunityPrototypeInviteDialog_personIdentifiers {
  display: inline-block;
}

.mx_CommunityPrototypeInviteDialog
  .mx_Dialog_content
  .mx_CommunityPrototypeInviteDialog_person
  .mx_CommunityPrototypeInviteDialog_personIdentifiers
  > * {
  display: block;
}

.mx_CommunityPrototypeInviteDialog
  .mx_Dialog_content
  .mx_CommunityPrototypeInviteDialog_person
  .mx_CommunityPrototypeInviteDialog_personIdentifiers
  .mx_CommunityPrototypeInviteDialog_personName {
  font-weight: 600;
  font-size: 1.4rem;
  color: #2e2f32;
  margin-left: 7px;
}

.mx_CommunityPrototypeInviteDialog
  .mx_Dialog_content
  .mx_CommunityPrototypeInviteDialog_person
  .mx_CommunityPrototypeInviteDialog_personIdentifiers
  .mx_CommunityPrototypeInviteDialog_personId {
  font-size: 1.2rem;
  color: #61708b;
  margin-left: 7px;
}

.mx_CommunityPrototypeInviteDialog
  .mx_Dialog_content
  .mx_CommunityPrototypeInviteDialog_primaryButton {
  display: block;
  font-size: 1.3rem;
  line-height: 20px;
  height: 20px;
  margin-top: 24px;
}

.mx_ConfirmUserActionDialog .mx_Dialog_content {
  min-height: 48px;
  margin-bottom: 24px;
}

.mx_ConfirmUserActionDialog_avatar {
  float: left;
  margin-right: 20px;
  margin-top: -2px;
}

.mx_ConfirmUserActionDialog_name {
  font-size: 1.8rem;
}

.mx_ConfirmUserActionDialog_userId {
  font-size: 1.3rem;
}

.mx_ConfirmUserActionDialog_reasonField {
  font-family: Inter, Twemoji, Apple Color Emoji, Segoe UI Emoji, Arial,
    Helvetica, Sans-Serif, Noto Color Emoji;
  font-size: 1.4rem;
  color: #2e2f32;
  background-color: #fff;
  border-radius: 3px;
  border: 1px solid #e7e7e7;
  line-height: 3.6rem;
  padding: 1px 16px;
  margin-bottom: 24px;
  width: 90%;
}

.mx_CreateCommunityPrototypeDialog .mx_Dialog_content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  margin-bottom: 12px;
}

.mx_CreateCommunityPrototypeDialog
  .mx_Dialog_content
  .mx_CreateCommunityPrototypeDialog_colName {
  -ms-flex-preferred-size: 66.66%;
  flex-basis: 66.66%;
  padding-right: 100px;
}

.mx_CreateCommunityPrototypeDialog
  .mx_Dialog_content
  .mx_CreateCommunityPrototypeDialog_colName
  .mx_Field
  input {
  font-size: 1.6rem;
  line-height: 2rem;
}

.mx_CreateCommunityPrototypeDialog
  .mx_Dialog_content
  .mx_CreateCommunityPrototypeDialog_colName
  .mx_CreateCommunityPrototypeDialog_subtext {
  display: block;
  color: #61708b;
  margin-bottom: 16px;
}

.mx_CreateCommunityPrototypeDialog
  .mx_Dialog_content
  .mx_CreateCommunityPrototypeDialog_colName
  .mx_CreateCommunityPrototypeDialog_subtext:last-child {
  margin-top: 16px;
}

.mx_CreateCommunityPrototypeDialog
  .mx_Dialog_content
  .mx_CreateCommunityPrototypeDialog_colName
  .mx_CreateCommunityPrototypeDialog_subtext.mx_CreateCommunityPrototypeDialog_subtext_error {
  color: #ff4b55;
}

.mx_CreateCommunityPrototypeDialog
  .mx_Dialog_content
  .mx_CreateCommunityPrototypeDialog_colName
  .mx_CreateCommunityPrototypeDialog_communityId {
  position: relative;
}

.mx_CreateCommunityPrototypeDialog
  .mx_Dialog_content
  .mx_CreateCommunityPrototypeDialog_colName
  .mx_CreateCommunityPrototypeDialog_communityId
  .mx_InfoTooltip {
  float: right;
}

.mx_CreateCommunityPrototypeDialog
  .mx_Dialog_content
  .mx_CreateCommunityPrototypeDialog_colName
  .mx_AccessibleButton {
  display: block;
  height: 32px;
  font-size: 1.6rem;
  line-height: 32px;
}

.mx_CreateCommunityPrototypeDialog
  .mx_Dialog_content
  .mx_CreateCommunityPrototypeDialog_colAvatar {
  -ms-flex-preferred-size: 33.33%;
  flex-basis: 33.33%;
}

.mx_CreateCommunityPrototypeDialog
  .mx_Dialog_content
  .mx_CreateCommunityPrototypeDialog_colAvatar
  .mx_CreateCommunityPrototypeDialog_avatarContainer {
  margin-top: 12px;
  margin-bottom: 20px;
}

.mx_CreateCommunityPrototypeDialog
  .mx_Dialog_content
  .mx_CreateCommunityPrototypeDialog_colAvatar
  .mx_CreateCommunityPrototypeDialog_avatarContainer
  .mx_CreateCommunityPrototypeDialog_avatar,
.mx_CreateCommunityPrototypeDialog
  .mx_Dialog_content
  .mx_CreateCommunityPrototypeDialog_colAvatar
  .mx_CreateCommunityPrototypeDialog_avatarContainer
  .mx_CreateCommunityPrototypeDialog_placeholderAvatar {
  width: 96px;
  height: 96px;
  border-radius: 96px;
}

.mx_CreateCommunityPrototypeDialog
  .mx_Dialog_content
  .mx_CreateCommunityPrototypeDialog_colAvatar
  .mx_CreateCommunityPrototypeDialog_avatarContainer
  .mx_CreateCommunityPrototypeDialog_placeholderAvatar {
  background-color: #368bd6;
}

.mx_CreateCommunityPrototypeDialog
  .mx_Dialog_content
  .mx_CreateCommunityPrototypeDialog_colAvatar
  .mx_CreateCommunityPrototypeDialog_avatarContainer
  .mx_CreateCommunityPrototypeDialog_placeholderAvatar:before {
  display: inline-block;
  background-color: #fff;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 96px;
  mask-size: 96px;
  width: 96px;
  height: 96px;
  -webkit-mask-position: center;
  mask-position: center;
  content: "";
  vertical-align: middle;
  -webkit-mask-image: url(../../img/element-icons/add-photo.c0b4c3b.svg);
  mask-image: url(../../img/element-icons/add-photo.c0b4c3b.svg);
}

.mx_CreateCommunityPrototypeDialog
  .mx_Dialog_content
  .mx_CreateCommunityPrototypeDialog_colAvatar
  .mx_CreateCommunityPrototypeDialog_tip
  > b,
.mx_CreateCommunityPrototypeDialog
  .mx_Dialog_content
  .mx_CreateCommunityPrototypeDialog_colAvatar
  .mx_CreateCommunityPrototypeDialog_tip
  > span {
  display: block;
  color: #61708b;
}

.mx_CreateGroupDialog_inputRow {
  margin-top: 10px;
  margin-bottom: 10px;
}

.mx_CreateGroupDialog_label {
  text-align: left;
  padding-bottom: 12px;
}

.mx_CreateGroupDialog_input {
  font-size: 1.5rem;
  border-radius: 3px;
  border: 1px solid #e7e7e7;
  padding: 9px;
  color: #2e2f32;
  background-color: #fff;
}

.mx_CreateGroupDialog_input_hasPrefixAndSuffix {
  border-radius: 0;
}

.mx_CreateGroupDialog_input_group {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.mx_CreateGroupDialog_prefix,
.mx_CreateGroupDialog_suffix {
  padding: 0 5px;
  line-height: 3.7rem;
  background-color: #e3e8f0;
  border: 1px solid #e7e7e7;
  text-align: center;
}

.mx_CreateGroupDialog_prefix {
  border-right: 0;
  border-radius: 3px 0 0 3px;
}

.mx_CreateGroupDialog_suffix {
  border-left: 0;
  border-radius: 0 3px 3px 0;
}

.mx_CreateRoomDialog_details {
  margin-top: 15px;
}

.mx_CreateRoomDialog_details .mx_CreateRoomDialog_details_summary {
  outline: none;
  list-style: none;
  font-weight: 600;
  cursor: pointer;
  color: #0dbd8b;
}

.mx_CreateRoomDialog_details
  .mx_CreateRoomDialog_details_summary::-webkit-details-marker {
  display: none;
}

.mx_CreateRoomDialog_details > div {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  margin: 5px 0;
}

.mx_CreateRoomDialog_details > div input[type="checkbox"] {
  margin-right: 10px;
}

.mx_CreateRoomDialog_label {
  text-align: left;
  padding-bottom: 12px;
}

.mx_CreateRoomDialog_input_container {
  padding-right: 20px;
}

.mx_CreateRoomDialog_input {
  font-size: 1.5rem;
  border-radius: 3px;
  border: 1px solid #e7e7e7;
  padding: 9px;
  color: #2e2f32;
  background-color: #fff;
  width: 100%;
}

.mx_CreateRoomDialog_aliasContainer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 24px 0 10px;
}

.mx_CreateRoomDialog_aliasContainer .mx_RoomAliasField {
  margin: 0;
}

.mx_CreateRoomDialog.mx_Dialog_fixedWidth {
  width: 450px;
}

.mx_CreateRoomDialog .mx_Dialog_content {
  margin-bottom: 40px;
}

.mx_CreateRoomDialog .mx_Field_input label,
.mx_CreateRoomDialog p {
  color: #61708b;
}

.mx_CreateRoomDialog .mx_SettingsFlag {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.mx_CreateRoomDialog .mx_SettingsFlag_label {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 0px;
  flex: 1 1 0;
  min-width: 0;
  font-weight: 600;
}

.mx_CreateRoomDialog .mx_ToggleSwitch {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  margin-left: 30px;
}

.mx_CreateRoomDialog .mx_Dialog_content > .mx_SettingsFlag {
  margin-top: 24px;
}

.mx_CreateRoomDialog p {
  margin: 0 85px 0 0;
  font-size: 1.2rem;
}

.mx_CreateRoomDialog .mx_Dropdown {
  margin-bottom: 8px;
  font-weight: 400;
  font-family: Inter, Twemoji, Apple Color Emoji, Segoe UI Emoji, Arial,
    Helvetica, Sans-Serif, Noto Color Emoji;
  font-size: 1.4rem;
  color: #2e2f32;
}

.mx_CreateRoomDialog .mx_Dropdown .mx_Dropdown_input {
  border: 1px solid #e7e7e7;
}

.mx_CreateRoomDialog .mx_Dropdown .mx_Dropdown_option {
  font-size: 1.4rem;
  line-height: 3.2rem;
  height: 32px;
  min-height: 32px;
}

.mx_CreateRoomDialog .mx_Dropdown .mx_Dropdown_option > div {
  padding-left: 30px;
  position: relative;
}

.mx_CreateRoomDialog .mx_Dropdown .mx_Dropdown_option > div:before {
  content: "";
  position: absolute;
  height: 16px;
  width: 16px;
  left: 6px;
  top: 8px;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  background-color: #737d8c;
}

.mx_CreateRoomDialog .mx_Dropdown .mx_CreateRoomDialog_dropdown_invite:before {
  -webkit-mask-image: url(../../img/element-icons/lock.1f264bd.svg);
  mask-image: url(../../img/element-icons/lock.1f264bd.svg);
  -webkit-mask-size: contain;
  mask-size: contain;
}

.mx_CreateRoomDialog .mx_Dropdown .mx_CreateRoomDialog_dropdown_public:before {
  -webkit-mask-image: url(../../img/globe.8201f08.svg);
  mask-image: url(../../img/globe.8201f08.svg);
  -webkit-mask-size: 12px;
  mask-size: 12px;
}

.mx_CreateRoomDialog
  .mx_Dropdown
  .mx_CreateRoomDialog_dropdown_restricted:before {
  -webkit-mask-image: url(../../img/element-icons/community-members.cbb31c1.svg);
  mask-image: url(../../img/element-icons/community-members.cbb31c1.svg);
  -webkit-mask-size: contain;
  mask-size: contain;
}

.mx_DeactivateAccountDialog .mx_Dialog_content {
  margin-bottom: 30px;
}

.mx_DeactivateAccountDialog .mx_DeactivateAccountDialog_input_section {
  margin-top: 60px;
}

.mx_DeactivateAccountDialog
  .mx_DeactivateAccountDialog_input_section
  .mx_Field {
  width: 300px;
}

.mx_DevTools_content {
  margin: 10px 0;
}

.mx_DevTools_ServersInRoomList_button {
  cursor: default !important;
}

.mx_DevTools_RoomStateExplorer_query {
  margin-bottom: 10px;
}

.mx_DevTools_RoomStateExplorer_button,
.mx_DevTools_ServersInRoomList_button {
  margin-bottom: 10px;
  width: 100%;
}

.mx_DevTools_label_left {
  float: left;
}

.mx_DevTools_label_right {
  float: right;
}

.mx_DevTools_label_bottom {
  clear: both;
  border-bottom: 1px solid #e5e5e5;
}

.mx_DevTools_inputRow {
  display: table-row;
}

.mx_DevTools_inputLabelCell {
  display: table-cell;
  font-weight: 700;
  padding-right: 24px;
}

.mx_DevTools_inputCell {
  display: table-cell;
  width: 240px;
}

.mx_DevTools_inputCell input {
  display: inline-block;
  border: 0;
  border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.5);
  padding: 0;
  width: 240px;
  color: rgba(74, 74, 74, 0.9);
  font-family: Inter, Twemoji, Apple Color Emoji, Segoe UI Emoji, Arial,
    Helvetica, Sans-Serif, Noto Color Emoji;
  font-size: 1.6rem;
}

.mx_DevTools_textarea {
  font-size: 1.2rem;
  max-width: 684px;
  min-height: 250px;
  padding: 10px;
}

.mx_DevTools_eventTypeStateKeyGroup {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.mx_DevTools_content .mx_Field_input:first-of-type {
  margin-right: 42px;
}

.mx_DevTools_tgl {
  display: none;
}

.mx_DevTools_tgl,
.mx_DevTools_tgl *,
.mx_DevTools_tgl + .mx_DevTools_tgl-btn,
.mx_DevTools_tgl:after,
.mx_DevTools_tgl :after,
.mx_DevTools_tgl:before,
.mx_DevTools_tgl :before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.mx_DevTools_tgl + .mx_DevTools_tgl-btn::-moz-selection,
.mx_DevTools_tgl::-moz-selection,
.mx_DevTools_tgl ::-moz-selection,
.mx_DevTools_tgl:after::-moz-selection,
.mx_DevTools_tgl :after::-moz-selection,
.mx_DevTools_tgl:before::-moz-selection,
.mx_DevTools_tgl :before::-moz-selection {
  background: none;
}

.mx_DevTools_tgl + .mx_DevTools_tgl-btn::selection,
.mx_DevTools_tgl::selection,
.mx_DevTools_tgl ::selection,
.mx_DevTools_tgl:after::selection,
.mx_DevTools_tgl :after::selection,
.mx_DevTools_tgl:before::selection,
.mx_DevTools_tgl :before::selection {
  background: none;
}

.mx_DevTools_tgl + .mx_DevTools_tgl-btn {
  outline: 0;
  display: block;
  width: 7em;
  height: 2em;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.mx_DevTools_tgl + .mx_DevTools_tgl-btn:after,
.mx_DevTools_tgl + .mx_DevTools_tgl-btn:before {
  position: relative;
  display: block;
  content: "";
  width: 50%;
  height: 100%;
}

.mx_DevTools_tgl + .mx_DevTools_tgl-btn:after {
  left: 0;
}

.mx_DevTools_tgl + .mx_DevTools_tgl-btn:before {
  display: none;
}

.mx_DevTools_tgl:checked + .mx_DevTools_tgl-btn:after {
  left: 50%;
}

.mx_DevTools_tgl-flip + .mx_DevTools_tgl-btn {
  padding: 2px;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  font-family: sans-serif;
  -webkit-perspective: 100px;
  perspective: 100px;
}

.mx_DevTools_tgl-flip + .mx_DevTools_tgl-btn:after,
.mx_DevTools_tgl-flip + .mx_DevTools_tgl-btn:before {
  display: inline-block;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
  width: 100%;
  text-align: center;
  position: absolute;
  line-height: 2em;
  font-weight: 700;
  color: #fff;
  top: 0;
  left: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 4px;
}

.mx_DevTools_tgl-flip + .mx_DevTools_tgl-btn:after {
  content: attr(data-tg-on);
  background: #02c66f;
  -webkit-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
}

.mx_DevTools_tgl-flip + .mx_DevTools_tgl-btn:before {
  background: #ff3a19;
  content: attr(data-tg-off);
}

.mx_DevTools_tgl-flip + .mx_DevTools_tgl-btn:active:before {
  -webkit-transform: rotateY(-20deg);
  transform: rotateY(-20deg);
}

.mx_DevTools_tgl-flip:checked + .mx_DevTools_tgl-btn:before {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.mx_DevTools_tgl-flip:checked + .mx_DevTools_tgl-btn:after {
  -webkit-transform: rotateY(0);
  transform: rotateY(0);
  left: 0;
  background: #7fc6a6;
}

.mx_DevTools_tgl-flip:checked + .mx_DevTools_tgl-btn:active:after {
  -webkit-transform: rotateY(20deg);
  transform: rotateY(20deg);
}

.mx_DevTools_VerificationRequest {
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 1px 5px;
  margin-bottom: 6px;
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console,
    monospace;
}

.mx_DevTools_VerificationRequest dl {
  display: grid;
  grid-template-columns: -webkit-max-content auto;
  grid-template-columns: max-content auto;
  margin: 0;
}

.mx_DevTools_VerificationRequest dd {
  grid-column-start: 2;
}

.mx_DevTools_VerificationRequest dd:empty {
  color: #666;
}

.mx_DevTools_VerificationRequest dd:empty:after {
  content: "(empty)";
}

.mx_DevTools_VerificationRequest dt {
  font-weight: 700;
  grid-column-start: 1;
}

.mx_DevTools_VerificationRequest dt:after {
  content: ":";
}

.mx_DevTools_SettingsExplorer table {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
}

.mx_DevTools_SettingsExplorer table th {
  border-bottom: 1px solid #0dbd8b;
  text-align: left;
}

.mx_DevTools_SettingsExplorer table td,
.mx_DevTools_SettingsExplorer table th {
  width: 360px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.mx_DevTools_SettingsExplorer table td + td,
.mx_DevTools_SettingsExplorer table th + th {
  width: auto;
}

.mx_DevTools_SettingsExplorer table tr:hover {
  background-color: rgba(13, 189, 139, 0.5);
}

.mx_DevTools_SettingsExplorer .mx_DevTools_SettingsExplorer_mutable {
  background-color: #0dbd8b;
}

.mx_DevTools_SettingsExplorer .mx_DevTools_SettingsExplorer_immutable {
  background-color: #ff4b55;
}

.mx_DevTools_SettingsExplorer .mx_DevTools_SettingsExplorer_edit {
  float: right;
  margin-right: 16px;
}

.mx_DevTools_SettingsExplorer .mx_DevTools_SettingsExplorer_warning {
  border: 2px solid #ff4b55;
  border-radius: 4px;
  padding: 4px;
  margin-bottom: 8px;
}

.mx_EditCommunityPrototypeDialog.mx_Dialog_fixedWidth {
  width: 360px;
}

.mx_EditCommunityPrototypeDialog .mx_Dialog_content {
  margin-bottom: 12px;
}

.mx_EditCommunityPrototypeDialog
  .mx_Dialog_content
  .mx_AccessibleButton.mx_AccessibleButton_kind_primary {
  display: block;
  height: 32px;
  font-size: 1.6rem;
  line-height: 32px;
}

.mx_EditCommunityPrototypeDialog
  .mx_Dialog_content
  .mx_EditCommunityPrototypeDialog_rowAvatar {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_EditCommunityPrototypeDialog
  .mx_Dialog_content
  .mx_EditCommunityPrototypeDialog_avatarContainer {
  margin-top: 20px;
  margin-bottom: 20px;
}

.mx_EditCommunityPrototypeDialog
  .mx_Dialog_content
  .mx_EditCommunityPrototypeDialog_avatarContainer
  .mx_EditCommunityPrototypeDialog_avatar,
.mx_EditCommunityPrototypeDialog
  .mx_Dialog_content
  .mx_EditCommunityPrototypeDialog_avatarContainer
  .mx_EditCommunityPrototypeDialog_placeholderAvatar {
  width: 96px;
  height: 96px;
  border-radius: 96px;
}

.mx_EditCommunityPrototypeDialog
  .mx_Dialog_content
  .mx_EditCommunityPrototypeDialog_avatarContainer
  .mx_EditCommunityPrototypeDialog_placeholderAvatar {
  background-color: #368bd6;
}

.mx_EditCommunityPrototypeDialog
  .mx_Dialog_content
  .mx_EditCommunityPrototypeDialog_avatarContainer
  .mx_EditCommunityPrototypeDialog_placeholderAvatar:before {
  display: inline-block;
  background-color: #fff;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 96px;
  mask-size: 96px;
  width: 96px;
  height: 96px;
  -webkit-mask-position: center;
  mask-position: center;
  content: "";
  vertical-align: middle;
  -webkit-mask-image: url(../../img/element-icons/add-photo.c0b4c3b.svg);
  mask-image: url(../../img/element-icons/add-photo.c0b4c3b.svg);
}

.mx_EditCommunityPrototypeDialog
  .mx_Dialog_content
  .mx_EditCommunityPrototypeDialog_tip {
  margin-left: 20px;
}

.mx_EditCommunityPrototypeDialog
  .mx_Dialog_content
  .mx_EditCommunityPrototypeDialog_tip
  > b,
.mx_EditCommunityPrototypeDialog
  .mx_Dialog_content
  .mx_EditCommunityPrototypeDialog_tip
  > span {
  display: block;
  color: #61708b;
}

.mx_ExportDialog .mx_ExportDialog_subheading {
  font-size: 1.6rem;
  display: block;
  font-family: Inter, Twemoji, Apple Color Emoji, Segoe UI Emoji, Arial,
    Helvetica, Sans-Serif, Noto Color Emoji;
  font-weight: 600;
  color: #2e2f32;
  margin-top: 18px;
  margin-bottom: 12px;
}

.mx_ExportDialog.mx_ExportDialog_Exporting .mx_ExportDialog_options {
  pointer-events: none;
}

.mx_ExportDialog.mx_ExportDialog_Exporting .mx_Field_select:before {
  display: none;
}

.mx_ExportDialog.mx_ExportDialog_Exporting
  .mx_RadioButton
  input[type="radio"]:checked
  + div
  > div {
  background: grey;
}

.mx_ExportDialog.mx_ExportDialog_Exporting
  .mx_RadioButton
  input[type="radio"]:checked
  + div {
  border-color: unset;
}

.mx_ExportDialog.mx_ExportDialog_Exporting
  .mx_Field_valid.mx_Field:focus-within
  label,
.mx_ExportDialog.mx_ExportDialog_Exporting .mx_Field_valid.mx_Field label {
  color: unset;
}

.mx_ExportDialog.mx_ExportDialog_Exporting .mx_Field_valid.mx_Field,
.mx_ExportDialog.mx_ExportDialog_Exporting
  .mx_Field_valid.mx_Field:focus-within {
  border-color: #e7e7e7;
}

.mx_ExportDialog.mx_ExportDialog_Exporting
  .mx_Checkbox
  input[type="checkbox"]:checked
  + label
  > .mx_Checkbox_background {
  background: grey;
  border-color: grey;
}

.mx_ExportDialog .mx_ExportDialog_progress .mx_Dialog_buttons {
  margin-top: unset;
  margin-left: 18px;
}

.mx_ExportDialog .mx_ExportDialog_progress .mx_ExportDialog_spinner {
  -webkit-animation: mx_rotate 2s linear infinite;
  animation: mx_rotate 2s linear infinite;
  z-index: 2;
  position: relative;
  margin-right: 10px;
  width: 24px;
  height: 24px;
}

.mx_ExportDialog
  .mx_ExportDialog_progress
  .mx_ExportDialog_spinner
  .mx_ExportDialog_spinner_path {
  stroke: #0dbd8b;
  stroke-linecap: round;
  -webkit-animation: mx_dash 1.5s ease-in-out infinite;
  animation: mx_dash 1.5s ease-in-out infinite;
}

.mx_ExportDialog .mx_ExportDialog_progress {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_ExportDialog .mx_RadioButton > .mx_RadioButton_content {
  margin-top: 5px;
  margin-bottom: 5px;
}

.mx_ExportDialog .mx_Field {
  width: 256px;
}

.mx_ExportDialog .mx_Field_postfix {
  padding: 9px 10px;
}

@-webkit-keyframes mx_rotate {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

@keyframes mx_rotate {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

@-webkit-keyframes mx_dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  to {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}

@keyframes mx_dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  to {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}

.mx_FeedbackDialog hr {
  margin: 24px 0;
  border-color: #e7e7e7;
}

.mx_FeedbackDialog .mx_Dialog_content {
  margin-bottom: 24px;
}

.mx_FeedbackDialog .mx_Dialog_content > h2 {
  margin-bottom: 32px;
}

.mx_FeedbackDialog .mx_FeedbackDialog_section {
  position: relative;
  padding-left: 52px;
}

.mx_FeedbackDialog .mx_FeedbackDialog_section > p {
  color: #8d99a5;
}

.mx_FeedbackDialog .mx_FeedbackDialog_section .mx_AccessibleButton_kind_link {
  padding: 0;
  font-size: inherit;
}

.mx_FeedbackDialog .mx_FeedbackDialog_section .mx_AccessibleButton_kind_link,
.mx_FeedbackDialog .mx_FeedbackDialog_section a {
  color: #0dbd8b;
  text-decoration: underline;
}

.mx_FeedbackDialog .mx_FeedbackDialog_section:after,
.mx_FeedbackDialog .mx_FeedbackDialog_section:before {
  content: "";
  position: absolute;
  width: 40px;
  height: 40px;
  left: 0;
  top: 0;
}

.mx_FeedbackDialog .mx_FeedbackDialog_section:before {
  background-color: #c1c6cd;
  border-radius: 20px;
}

.mx_FeedbackDialog .mx_FeedbackDialog_section:after {
  background: #fff;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: 24px;
  mask-size: 24px;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

.mx_FeedbackDialog .mx_FeedbackDialog_reportBug:after {
  -webkit-mask-image: url(../../img/feather-customised/bug.3dc7afa.svg);
  mask-image: url(../../img/feather-customised/bug.3dc7afa.svg);
}

.mx_FeedbackDialog .mx_FeedbackDialog_rateApp .mx_RadioButton {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-size: 20px;
  -webkit-transition: font-size 1s, border 0.5s;
  transition: font-size 1s, border 0.5s;
  border-radius: 50%;
  border: 2px solid transparent;
  margin-top: 12px;
  margin-bottom: 24px;
  vertical-align: top;
  cursor: pointer;
}

.mx_FeedbackDialog
  .mx_FeedbackDialog_rateApp
  .mx_RadioButton
  input[type="radio"]
  + div {
  display: none;
}

.mx_FeedbackDialog
  .mx_FeedbackDialog_rateApp
  .mx_RadioButton
  .mx_RadioButton_content {
  background: #c1c6cd;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 20px;
  margin: 5px;
}

.mx_FeedbackDialog
  .mx_FeedbackDialog_rateApp
  .mx_RadioButton
  .mx_RadioButton_spacer {
  display: none;
}

.mx_FeedbackDialog
  .mx_FeedbackDialog_rateApp
  .mx_RadioButton
  + .mx_RadioButton {
  margin-left: 16px;
}

.mx_FeedbackDialog .mx_FeedbackDialog_rateApp .mx_RadioButton_checked {
  font-size: 24px;
  border-color: #0dbd8b;
}

.mx_FeedbackDialog .mx_FeedbackDialog_rateApp:after {
  -webkit-mask-image: url(../../img/element-icons/feedback.a91241e.svg);
  mask-image: url(../../img/element-icons/feedback.a91241e.svg);
}

.mx_ForwardDialog {
  width: 520px;
  color: #2e2f32;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  min-height: 0;
  height: 80vh;
}

.mx_ForwardDialog > h3 {
  margin: 0 0 6px;
  color: #737d8c;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.5rem;
}

.mx_ForwardDialog > .mx_ForwardDialog_preview {
  max-height: 30%;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  overflow-y: auto;
}

.mx_ForwardDialog
  > .mx_ForwardDialog_preview
  .mx_EventTile[data-layout="bubble"] {
  margin-top: 20px;
}

.mx_ForwardDialog > .mx_ForwardDialog_preview div {
  pointer-events: none;
}

.mx_ForwardDialog > .mx_ForwardDialog_preview .mx_EventTile_e2eIcon_unencrypted,
.mx_ForwardDialog > .mx_ForwardDialog_preview .mx_EventTile_msgOption,
.mx_ForwardDialog > .mx_ForwardDialog_preview .mx_MFileBody_download {
  display: none;
}

.mx_ForwardDialog > hr {
  width: 100%;
  border: none;
  border-top: 1px solid #e7e7e7;
  margin: 12px 0;
}

.mx_ForwardDialog > .mx_ForwardList {
  display: contents;
}

.mx_ForwardDialog > .mx_ForwardList .mx_SearchBox {
  margin: 0 0 15px;
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
}

.mx_ForwardDialog > .mx_ForwardList .mx_ForwardList_content {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.mx_ForwardDialog > .mx_ForwardList .mx_ForwardList_noResults {
  display: block;
  margin-top: 24px;
}

.mx_ForwardDialog > .mx_ForwardList .mx_ForwardList_results:not(:first-child) {
  margin-top: 24px;
}

.mx_ForwardDialog
  > .mx_ForwardList
  .mx_ForwardList_results
  .mx_ForwardList_entry {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  height: 32px;
  padding: 6px;
  border-radius: 8px;
}

.mx_ForwardDialog
  > .mx_ForwardList
  .mx_ForwardList_results
  .mx_ForwardList_entry:hover {
  background-color: hsla(0, 0%, 91%, 0.77);
}

.mx_ForwardDialog
  > .mx_ForwardList
  .mx_ForwardList_results
  .mx_ForwardList_entry
  .mx_ForwardList_roomButton {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-right: 12px;
  min-width: 0;
}

.mx_ForwardDialog
  > .mx_ForwardList
  .mx_ForwardList_results
  .mx_ForwardList_entry
  .mx_ForwardList_roomButton
  .mx_DecoratedRoomAvatar {
  margin-right: 12px;
}

.mx_ForwardDialog
  > .mx_ForwardList
  .mx_ForwardList_results
  .mx_ForwardList_entry
  .mx_ForwardList_roomButton
  .mx_ForwardList_entry_name {
  font-size: 1.5rem;
  line-height: 30px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 12px;
}

.mx_ForwardDialog
  > .mx_ForwardList
  .mx_ForwardList_results
  .mx_ForwardList_entry
  .mx_ForwardList_sendButton {
  position: relative;
}

.mx_ForwardDialog
  > .mx_ForwardList
  .mx_ForwardList_results
  .mx_ForwardList_entry
  .mx_ForwardList_sendButton:not(.mx_ForwardList_canSend)
  .mx_ForwardList_sendLabel {
  visibility: hidden;
}

.mx_ForwardDialog
  > .mx_ForwardList
  .mx_ForwardList_results
  .mx_ForwardList_entry
  .mx_ForwardList_sendButton
  .mx_ForwardList_sendIcon,
.mx_ForwardDialog
  > .mx_ForwardList
  .mx_ForwardList_results
  .mx_ForwardList_entry
  .mx_ForwardList_sendButton
  .mx_NotificationBadge {
  position: absolute;
}

.mx_ForwardDialog
  > .mx_ForwardList
  .mx_ForwardList_results
  .mx_ForwardList_entry
  .mx_ForwardList_sendButton
  .mx_NotificationBadge {
  background-color: #fff;
}

.mx_ForwardDialog
  > .mx_ForwardList
  .mx_ForwardList_results
  .mx_ForwardList_entry
  .mx_ForwardList_sendButton.mx_ForwardList_sending
  .mx_ForwardList_sendIcon {
  background-color: #0dbd8b;
  -webkit-mask-image: url(../../img/element-icons/circle-sending.bcca6aa.svg);
  mask-image: url(../../img/element-icons/circle-sending.bcca6aa.svg);
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 14px;
  mask-size: 14px;
  width: 14px;
  height: 14px;
}

.mx_ForwardDialog
  > .mx_ForwardList
  .mx_ForwardList_results
  .mx_ForwardList_entry
  .mx_ForwardList_sendButton.mx_ForwardList_sent
  .mx_ForwardList_sendIcon {
  background-color: #0dbd8b;
  -webkit-mask-image: url(../../img/element-icons/circle-sent.5079cbe.svg);
  mask-image: url(../../img/element-icons/circle-sent.5079cbe.svg);
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 14px;
  mask-size: 14px;
  width: 14px;
  height: 14px;
}

.mx_GroupAddressPicker_checkboxContainer {
  margin-top: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.mx_HostSignupDialog {
  width: 90vw;
  max-width: 580px;
  height: 80vh;
  max-height: 600px;
  background-color: #fff;
}

.mx_HostSignupDialog .mx_HostSignupDialog_info {
  text-align: center;
}

.mx_HostSignupDialog
  .mx_HostSignupDialog_info
  .mx_HostSignupDialog_content_top {
  margin-bottom: 24px;
}

.mx_HostSignupDialog .mx_HostSignupDialog_info .mx_HostSignupDialog_paragraphs {
  text-align: left;
  padding-left: 25%;
  padding-right: 25%;
}

.mx_HostSignupDialog .mx_HostSignupDialog_info .mx_HostSignupDialog_buttons {
  margin-bottom: 24px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.mx_HostSignupDialog
  .mx_HostSignupDialog_info
  .mx_HostSignupDialog_buttons
  button {
  padding: 12px;
  margin: 0 16px;
}

.mx_HostSignupDialog .mx_HostSignupDialog_info .mx_HostSignupDialog_footer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: baseline;
  -ms-flex-align: baseline;
  align-items: baseline;
}

.mx_HostSignupDialog .mx_HostSignupDialog_info .mx_HostSignupDialog_footer img {
  padding-right: 5px;
}

.mx_HostSignupDialog iframe {
  width: 100%;
  height: 100%;
  border: none;
  background-color: #fff;
  min-height: 540px;
}

.mx_HostSignupDialog_text_dark {
  color: #2e2f32;
}

.mx_HostSignupDialog_text_light {
  color: #737d8c;
}

.mx_HostSignup_maximize_button {
  -webkit-mask: url(../../img/feather-customised/maximise.dc32127.svg);
  mask: url(../../img/feather-customised/maximise.dc32127.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: cover;
  mask-size: cover;
  right: 10px;
}

.mx_HostSignup_maximize_button,
.mx_HostSignup_minimize_button {
  width: 14px;
  height: 14px;
  background-color: #c1c1c1;
  cursor: pointer;
  position: absolute;
  top: 10px;
}

.mx_HostSignup_minimize_button {
  -webkit-mask: url(../../img/feather-customised/minimise.aec9142.svg);
  mask: url(../../img/feather-customised/minimise.aec9142.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: cover;
  mask-size: cover;
  right: 25px;
}

.mx_HostSignup_persisted {
  width: 90vw;
  max-width: 580px;
  height: 80vh;
  max-height: 600px;
  top: 0;
  left: 0;
  position: fixed;
  display: none;
}

.mx_HostSignupDialog_minimized {
  position: fixed;
  bottom: 80px;
  right: 26px;
  width: 314px;
  height: 217px;
  overflow: hidden;
}

.mx_HostSignupDialog_minimized.mx_Dialog {
  padding: 12px;
}

.mx_HostSignupDialog_minimized .mx_Dialog_title {
  text-align: left !important;
  padding-left: 20px;
  font-size: 1.5rem;
}

.mx_HostSignupDialog_minimized iframe {
  width: 100%;
  height: 100%;
  border: none;
  background-color: #fff;
}

.mx_IncomingSasDialog_opponentProfile_image {
  position: relative;
}

.mx_IncomingSasDialog_opponentProfile h2 {
  display: inline-block;
  margin-left: 10px;
}

.mx_InviteDialog_transferWrapper .mx_Dialog {
  padding-bottom: 16px;
}

.mx_InviteDialog_addressBar {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  margin: 8px 45px 0 0;
}

.mx_InviteDialog_addressBar .mx_InviteDialog_editor {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  width: 100%;
  background-color: #f3f8fd;
  border-radius: 4px;
  min-height: 25px;
  padding-left: 8px;
  overflow-x: hidden;
  overflow-y: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.mx_InviteDialog_addressBar .mx_InviteDialog_editor .mx_InviteDialog_userTile {
  margin: 6px 6px 0 0;
  display: inline-block;
  min-width: -webkit-max-content;
  min-width: -moz-max-content;
  min-width: max-content;
}

.mx_InviteDialog_addressBar .mx_InviteDialog_editor > input[type="text"] {
  margin: 6px 0 !important;
  height: 24px;
  line-height: 2.4rem;
  font-size: 1.4rem;
  padding-left: 12px;
  border: 0 !important;
  outline: 0 !important;
  resize: none;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  min-width: 40%;
  -webkit-box-flex: 1 !important;
  -ms-flex: 1 !important;
  flex: 1 !important;
  color: #2e2f32 !important;
}

.mx_InviteDialog_addressBar .mx_InviteDialog_goButton {
  min-width: 48px;
  margin-left: 10px;
  height: 25px;
  line-height: 2.5rem;
}

.mx_InviteDialog_addressBar .mx_InviteDialog_buttonAndSpinner .mx_Spinner {
  width: 20px;
  height: 20px;
  margin-left: 5px;
  display: inline-block;
  vertical-align: middle;
}

.mx_InviteDialog_section {
  padding-bottom: 4px;
}

.mx_InviteDialog_section h3 {
  font-size: 1.2rem;
  color: #61708b;
  font-weight: 700;
  text-transform: uppercase;
}

.mx_InviteDialog_section > p {
  margin: 0;
}

.mx_InviteDialog_section > span {
  color: #2e2f32;
}

.mx_InviteDialog_section .mx_InviteDialog_subname {
  margin-bottom: 10px;
  margin-top: -10px;
  font-size: 1.2rem;
  color: #61708b;
}

.mx_InviteDialog_section_hidden_suggestions_disclaimer {
  padding: 8px 0 16px;
  font-size: 1.4rem;
}

.mx_InviteDialog_section_hidden_suggestions_disclaimer > span {
  color: #2e2f32;
  font-weight: 600;
}

.mx_InviteDialog_section_hidden_suggestions_disclaimer > p {
  margin: 0;
}

.mx_InviteDialog_footer {
  border-top: 1px solid #e7e7e7;
}

.mx_InviteDialog_footer > h3 {
  margin: 12px 0;
  font-size: 1.2rem;
  color: #61708b;
  font-weight: 700;
  text-transform: uppercase;
}

.mx_InviteDialog_footer .mx_InviteDialog_footer_link {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-radius: 4px;
  border: 1px solid #747474;
  padding: 8px;
}

.mx_InviteDialog_footer .mx_InviteDialog_footer_link > a {
  text-decoration: none;
  -ms-flex-negative: 1;
  flex-shrink: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mx_InviteDialog_footer .mx_InviteDialog_footer_link_copy {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  cursor: pointer;
  margin-left: 20px;
  display: inherit;
}

.mx_InviteDialog_footer .mx_InviteDialog_footer_link_copy > div {
  -webkit-mask-image: url(../../img/feather-customised/clipboard.24dd87a.svg);
  mask-image: url(../../img/feather-customised/clipboard.24dd87a.svg);
  background-color: #2e2f32;
  margin-left: 5px;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
}

.mx_InviteDialog_roomTile {
  cursor: pointer;
  padding: 5px 10px;
}

.mx_InviteDialog_roomTile:hover {
  background-color: #f3f8fd;
  border-radius: 4px;
}

.mx_InviteDialog_roomTile * {
  vertical-align: middle;
}

.mx_InviteDialog_roomTile .mx_InviteDialog_roomTile_avatarStack {
  display: inline-block;
  position: relative;
  width: 36px;
  height: 36px;
}

.mx_InviteDialog_roomTile .mx_InviteDialog_roomTile_avatarStack > * {
  position: absolute;
  top: 0;
  left: 0;
}

.mx_InviteDialog_roomTile .mx_InviteDialog_roomTile_selected {
  width: 36px;
  height: 36px;
  border-radius: 36px;
  background-color: #368bd6;
  display: inline-block;
  position: relative;
}

.mx_InviteDialog_roomTile .mx_InviteDialog_roomTile_selected:before {
  content: "";
  width: 24px;
  height: 24px;
  grid-column: 1;
  grid-row: 1;
  -webkit-mask-image: url(../../img/feather-customised/check.5745b4e.svg);
  mask-image: url(../../img/feather-customised/check.5745b4e.svg);
  -webkit-mask-size: 100%;
  mask-size: 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  position: absolute;
  top: 6px;
  left: 6px;
  background-color: #fff;
}

.mx_InviteDialog_roomTile .mx_InviteDialog_roomTile_nameStack {
  display: inline-block;
  overflow: hidden;
}

.mx_InviteDialog_roomTile .mx_InviteDialog_roomTile_name {
  font-weight: 600;
  font-size: 1.4rem;
  color: #2e2f32;
  margin-left: 7px;
}

.mx_InviteDialog_roomTile .mx_InviteDialog_roomTile_userId {
  font-size: 1.2rem;
  color: #61708b;
  margin-left: 7px;
}

.mx_InviteDialog_roomTile .mx_InviteDialog_roomTile_name,
.mx_InviteDialog_roomTile .mx_InviteDialog_roomTile_userId {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mx_InviteDialog_roomTile .mx_InviteDialog_roomTile_time {
  text-align: right;
  font-size: 1.2rem;
  color: #61708b;
  float: right;
  line-height: 3.6rem;
}

.mx_InviteDialog_roomTile .mx_InviteDialog_roomTile_highlight {
  font-weight: 900;
}

.mx_InviteDialog_userTile {
  margin-right: 8px;
}

.mx_InviteDialog_userTile .mx_InviteDialog_userTile_pill {
  background-color: #368bd6;
  border-radius: 12px;
  display: inline-block;
  height: 24px;
  line-height: 2.4rem;
  padding-left: 8px;
  padding-right: 8px;
  color: #fff;
}

.mx_InviteDialog_userTile
  .mx_InviteDialog_userTile_pill
  .mx_InviteDialog_userTile_avatar {
  border-radius: 20px;
  position: relative;
  left: -5px;
  top: 2px;
}

.mx_InviteDialog_userTile
  .mx_InviteDialog_userTile_pill
  .mx_InviteDialog_userTile_name,
.mx_InviteDialog_userTile
  .mx_InviteDialog_userTile_pill
  img.mx_InviteDialog_userTile_avatar {
  vertical-align: top;
}

.mx_InviteDialog_userTile
  .mx_InviteDialog_userTile_pill
  .mx_InviteDialog_userTile_threepidAvatar {
  background-color: #fff;
}

.mx_InviteDialog_userTile .mx_InviteDialog_userTile_remove {
  display: inline-block;
  margin-left: 4px;
}

.mx_InviteDialog_other {
  height: 600px;
  padding-left: 20px;
}

.mx_InviteDialog_other .mx_InviteDialog_userSections {
  height: calc(100% - 115px);
}

.mx_InviteDialog_content {
  height: calc(100% - 36px);
  overflow: hidden;
}

.mx_InviteDialog_transfer {
  width: 496px;
  height: 466px;
}

.mx_InviteDialog_transfer,
.mx_InviteDialog_transfer .mx_InviteDialog_content {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.mx_InviteDialog_transfer .mx_InviteDialog_content .mx_TabbedView {
  height: calc(100% - 60px);
}

.mx_InviteDialog_transfer .mx_InviteDialog_content {
  overflow: visible;
}

.mx_InviteDialog_transfer .mx_InviteDialog_addressBar {
  margin-top: 8px;
}

.mx_InviteDialog_transfer input[type="checkbox"] {
  margin-right: 8px;
}

.mx_InviteDialog_userSections {
  margin-top: 4px;
  overflow-y: auto;
  padding: 0 45px 4px 0;
}

.mx_InviteDialog_hasFooter .mx_InviteDialog_userSections {
  height: calc(100% - 175px);
}

.mx_InviteDialog_helpText {
  margin: 0;
}

.mx_InviteDialog_helpText .mx_AccessibleButton_kind_link {
  padding: 0;
}

.mx_InviteDialog_dialPad .mx_InviteDialog_dialPadField {
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-radius: 0;
  margin-top: 0;
  border-color: #c1c6cd;
}

.mx_InviteDialog_dialPad .mx_InviteDialog_dialPadField input {
  font-size: 18px;
  font-weight: 600;
  padding-top: 0;
}

.mx_InviteDialog_dialPad .mx_InviteDialog_dialPadField:focus-within {
  border-color: #0dbd8b;
}

.mx_InviteDialog_dialPadField .mx_Field_postfix {
  border-left: none;
}

.mx_InviteDialog_dialPad {
  width: 224px;
  margin-top: 16px;
  margin-left: auto;
  margin-right: auto;
}

.mx_InviteDialog_dialPad .mx_DialPad {
  grid-row-gap: 16px;
  row-gap: 16px;
  grid-column-gap: 48px;
  -webkit-column-gap: 48px;
  -moz-column-gap: 48px;
  column-gap: 48px;
  margin-left: auto;
  margin-right: auto;
}

.mx_InviteDialog_transferConsultConnect {
  padding-top: 16px;
  position: relative;
  width: 496px;
  left: -24px;
  padding-left: 24px;
  padding-right: 24px;
  border-top: 1px solid #e3e8f0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_InviteDialog_transferConsultConnect_pushRight {
  margin-left: auto;
}

.mx_InviteDialog_userDirectoryIcon:before {
  -webkit-mask-image: url(../../img/voip/tab-userdirectory.cc3ed9a.svg);
  mask-image: url(../../img/voip/tab-userdirectory.cc3ed9a.svg);
}

.mx_InviteDialog_dialPadIcon:before {
  -webkit-mask-image: url(../../img/voip/tab-dialpad.a4a190e.svg);
  mask-image: url(../../img/voip/tab-dialpad.a4a190e.svg);
}

.mx_InviteDialog_multiInviterError > h4 {
  font-size: 1.5rem;
  line-height: 2.4rem;
  color: #737d8c;
  font-weight: 400;
}

.mx_InviteDialog_multiInviterError
  > div
  .mx_InviteDialog_multiInviterError_entry {
  margin-bottom: 24px;
}

.mx_InviteDialog_multiInviterError
  > div
  .mx_InviteDialog_multiInviterError_entry
  .mx_InviteDialog_multiInviterError_entry_userProfile
  .mx_InviteDialog_multiInviterError_entry_name {
  margin-left: 6px;
  font-size: 1.5rem;
  line-height: 2.4rem;
  font-weight: 600;
  color: #2e2f32;
}

.mx_InviteDialog_multiInviterError
  > div
  .mx_InviteDialog_multiInviterError_entry
  .mx_InviteDialog_multiInviterError_entry_userProfile
  .mx_InviteDialog_multiInviterError_entry_userId {
  margin-left: 6px;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #8d99a5;
}

.mx_InviteDialog_multiInviterError
  > div
  .mx_InviteDialog_multiInviterError_entry
  .mx_InviteDialog_multiInviterError_entry_error {
  margin-left: 32px;
  font-size: 1.5rem;
  line-height: 2.4rem;
  color: #ff4b55;
}

.mx_KeyboardShortcutsDialog {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-bottom: -50px;
  max-height: 1100px;
}

.mx_KeyboardShortcutsDialog .mx_KeyboardShortcutsDialog_category {
  width: 33.3333%;
  margin: 0 0 40px;
}

.mx_KeyboardShortcutsDialog .mx_KeyboardShortcutsDialog_category > div {
  padding-left: 5px;
}

.mx_KeyboardShortcutsDialog h3 {
  margin: 0 0 10px;
}

.mx_KeyboardShortcutsDialog h5 {
  margin: 15px 0 5px;
  font-weight: 400;
}

.mx_KeyboardShortcutsDialog kbd {
  padding: 5px;
  border-radius: 4px;
  background-color: #f3f8fd;
  margin-right: 5px;
  min-width: 20px;
  text-align: center;
  display: inline-block;
  border: 1px solid #e9edf1;
  -webkit-box-shadow: 0 2px #e9edf1;
  box-shadow: 0 2px #e9edf1;
  margin-bottom: 4px;
  text-transform: capitalize;
}

.mx_KeyboardShortcutsDialog kbd + kbd {
  margin-left: 5px;
}

.mx_KeyboardShortcutsDialog .mx_KeyboardShortcutsDialog_inline div {
  display: inline;
}

.mx_ManageRestrictedJoinRuleDialog,
.mx_ManageRestrictedJoinRuleDialog_wrapper .mx_Dialog {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.mx_ManageRestrictedJoinRuleDialog {
  width: 480px;
  color: #2e2f32;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  min-height: 0;
  height: 60vh;
}

.mx_ManageRestrictedJoinRuleDialog .mx_SearchBox {
  margin: 0 0 15px;
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
}

.mx_ManageRestrictedJoinRuleDialog .mx_ManageRestrictedJoinRuleDialog_content {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.mx_ManageRestrictedJoinRuleDialog
  .mx_ManageRestrictedJoinRuleDialog_noResults {
  display: block;
  margin-top: 24px;
}

.mx_ManageRestrictedJoinRuleDialog
  .mx_ManageRestrictedJoinRuleDialog_section:not(:first-child) {
  margin-top: 24px;
}

.mx_ManageRestrictedJoinRuleDialog
  .mx_ManageRestrictedJoinRuleDialog_section
  > h3 {
  margin: 0;
  color: #737d8c;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.5rem;
}

.mx_ManageRestrictedJoinRuleDialog
  .mx_ManageRestrictedJoinRuleDialog_section
  .mx_ManageRestrictedJoinRuleDialog_entry {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 12px;
}

.mx_ManageRestrictedJoinRuleDialog
  .mx_ManageRestrictedJoinRuleDialog_section
  .mx_ManageRestrictedJoinRuleDialog_entry
  > div {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.mx_ManageRestrictedJoinRuleDialog
  .mx_ManageRestrictedJoinRuleDialog_section
  .mx_ManageRestrictedJoinRuleDialog_entry
  .mx_RoomAvatar_isSpaceRoom
  img,
.mx_ManageRestrictedJoinRuleDialog
  .mx_ManageRestrictedJoinRuleDialog_section
  .mx_ManageRestrictedJoinRuleDialog_entry
  img.mx_RoomAvatar_isSpaceRoom {
  border-radius: 4px;
}

.mx_ManageRestrictedJoinRuleDialog
  .mx_ManageRestrictedJoinRuleDialog_section
  .mx_ManageRestrictedJoinRuleDialog_entry
  .mx_ManageRestrictedJoinRuleDialog_entry_name {
  margin: 0 8px;
  font-size: 1.5rem;
  line-height: 30px;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.mx_ManageRestrictedJoinRuleDialog
  .mx_ManageRestrictedJoinRuleDialog_section
  .mx_ManageRestrictedJoinRuleDialog_entry
  .mx_ManageRestrictedJoinRuleDialog_entry_description {
  margin-top: 8px;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #8d99a5;
}

.mx_ManageRestrictedJoinRuleDialog
  .mx_ManageRestrictedJoinRuleDialog_section
  .mx_ManageRestrictedJoinRuleDialog_entry
  .mx_Checkbox {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_ManageRestrictedJoinRuleDialog
  .mx_ManageRestrictedJoinRuleDialog_section_spaces
  .mx_BaseAvatar {
  margin-right: 12px;
}

.mx_ManageRestrictedJoinRuleDialog
  .mx_ManageRestrictedJoinRuleDialog_section_spaces
  .mx_BaseAvatar_image {
  border-radius: 8px;
}

.mx_ManageRestrictedJoinRuleDialog
  .mx_ManageRestrictedJoinRuleDialog_section_info {
  position: relative;
  border-radius: 8px;
  margin: 12px 0;
  padding: 8px 8px 8px 42px;
  background-color: #f3f8fd;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #737d8c;
}

.mx_ManageRestrictedJoinRuleDialog
  .mx_ManageRestrictedJoinRuleDialog_section_info:before {
  content: "";
  position: absolute;
  left: 10px;
  top: calc(50% - 8px);
  height: 16px;
  width: 16px;
  background-color: #737d8c;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-image: url(../../img/element-icons/room/room-summary.1ad0865.svg);
  mask-image: url(../../img/element-icons/room/room-summary.1ad0865.svg);
  -webkit-mask-position: center;
  mask-position: center;
}

.mx_ManageRestrictedJoinRuleDialog .mx_ManageRestrictedJoinRuleDialog_footer {
  margin-top: 20px;
}

.mx_ManageRestrictedJoinRuleDialog
  .mx_ManageRestrictedJoinRuleDialog_footer
  .mx_ManageRestrictedJoinRuleDialog_footer_buttons {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  margin-left: auto;
}

.mx_ManageRestrictedJoinRuleDialog
  .mx_ManageRestrictedJoinRuleDialog_footer
  .mx_ManageRestrictedJoinRuleDialog_footer_buttons
  .mx_AccessibleButton {
  display: inline-block;
}

.mx_ManageRestrictedJoinRuleDialog
  .mx_ManageRestrictedJoinRuleDialog_footer
  .mx_ManageRestrictedJoinRuleDialog_footer_buttons
  .mx_AccessibleButton
  + .mx_AccessibleButton {
  margin-left: 24px;
}

.mx_MessageEditHistoryDialog .mx_Dialog_header > .mx_Dialog_title {
  text-align: center;
}

.mx_MessageEditHistoryDialog {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  max-height: 60vh;
}

.mx_MessageEditHistoryDialog_scrollPanel {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
}

.mx_MessageEditHistoryDialog_error {
  color: #ff4b55;
  text-align: center;
}

.mx_MessageEditHistoryDialog_edits {
  list-style-type: none;
  font-size: 1.4rem;
  padding: 0;
  color: #2e2f32;
}

.mx_MessageEditHistoryDialog_edits span.mx_EditHistoryMessage_deletion,
.mx_MessageEditHistoryDialog_edits span.mx_EditHistoryMessage_insertion {
  padding: 0 2px;
}

.mx_MessageEditHistoryDialog_edits .mx_EditHistoryMessage_deletion {
  color: #ff4c55;
  background-color: rgba(255, 76, 85, 0.1);
  text-decoration: line-through;
}

.mx_MessageEditHistoryDialog_edits .mx_EditHistoryMessage_insertion {
  color: #1aa97b;
  background-color: rgba(26, 169, 123, 0.1);
  text-decoration: underline;
}

.mx_MessageEditHistoryDialog_edits .mx_EventTile_content,
.mx_MessageEditHistoryDialog_edits .mx_EventTile_line {
  margin-right: 0;
}

.mx_MessageEditHistoryDialog_edits .mx_MessageActionBar .mx_AccessibleButton {
  font-size: 1rem;
  padding: 0 8px;
}

.mx_ModalWidgetDialog .mx_ModalWidgetDialog_warning {
  margin-bottom: 24px;
}

.mx_ModalWidgetDialog .mx_ModalWidgetDialog_warning > img {
  vertical-align: middle;
  margin-right: 8px;
}

.mx_ModalWidgetDialog .mx_ModalWidgetDialog_buttons {
  float: right;
  margin-top: 24px;
}

.mx_ModalWidgetDialog
  .mx_ModalWidgetDialog_buttons
  .mx_AccessibleButton
  + .mx_AccessibleButton {
  margin-left: 8px;
}

.mx_ModalWidgetDialog iframe {
  width: 100%;
  height: 450px;
  border: 0;
  border-radius: 8px;
}

.mx_NewSessionReviewDialog_header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: 0;
}

.mx_NewSessionReviewDialog_headerIcon {
  width: 24px;
  height: 24px;
  margin-right: 4px;
  position: relative;
}

.mx_NewSessionReviewDialog_deviceName {
  font-weight: 600;
}

.mx_NewSessionReviewDialog_deviceID {
  font-size: 1.2rem;
  color: #8d99a5;
}

.mx_RegistrationEmailPromptDialog {
  width: 417px;
}

.mx_RegistrationEmailPromptDialog .mx_Dialog_content {
  margin-bottom: 24px;
  color: #8d99a5;
}

.mx_RegistrationEmailPromptDialog .mx_Dialog_primary {
  width: 100%;
}

.mx_RoomSettingsDialog_settingsIcon:before {
  -webkit-mask-image: url(../../img/element-icons/settings.6b381af.svg);
  mask-image: url(../../img/element-icons/settings.6b381af.svg);
}

.mx_RoomSettingsDialog_securityIcon:before {
  -webkit-mask-image: url(../../img/element-icons/security.66f2fa6.svg);
  mask-image: url(../../img/element-icons/security.66f2fa6.svg);
}

.mx_RoomSettingsDialog_rolesIcon:before {
  -webkit-mask-image: url(../../img/element-icons/room/settings/roles.bad9a9e.svg);
  mask-image: url(../../img/element-icons/room/settings/roles.bad9a9e.svg);
}

.mx_RoomSettingsDialog_notificationsIcon:before {
  -webkit-mask-image: url(../../img/element-icons/notifications.d298b39.svg);
  mask-image: url(../../img/element-icons/notifications.d298b39.svg);
}

.mx_RoomSettingsDialog_bridgesIcon:before {
  -webkit-mask-image: url(../../img/feather-customised/bridge.b2ca042.svg);
  mask-image: url(../../img/feather-customised/bridge.b2ca042.svg);
}

.mx_RoomSettingsDialog_warningIcon:before {
  -webkit-mask-image: url(../../img/element-icons/room/settings/advanced.e079c15.svg);
  mask-image: url(../../img/element-icons/room/settings/advanced.e079c15.svg);
}

.mx_RoomSettingsDialog .mx_Dialog_title {
  -ms-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin: 0 auto;
  padding-right: 80px;
}

.mx_RoomSettingsDialog
  .mx_AvatarSetting_avatar
  .mx_AvatarSetting_avatarPlaceholder:before {
  -webkit-mask: url(../../img/feather-customised/image.a8671b8.svg);
  mask: url(../../img/feather-customised/image.a8671b8.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 36px;
  mask-size: 36px;
  -webkit-mask-position: center;
  mask-position: center;
}

.mx_RoomSettingsDialog_BridgeList {
  padding: 0;
}

.mx_RoomSettingsDialog_BridgeList .mx_AccessibleButton {
  display: inline;
  margin: 0;
  padding: 0;
}

.mx_RoomSettingsDialog_BridgeList li {
  list-style-type: none;
  padding: 5px;
  margin-bottom: 8px;
  border: 1px solid transparent;
  border-radius: 5px;
}

.mx_RoomSettingsDialog_BridgeList li .column-icon {
  float: left;
  padding-right: 10px;
}

.mx_RoomSettingsDialog_BridgeList li .column-icon * {
  border-radius: 5px;
  border: 1px solid #e3e8f0;
}

.mx_RoomSettingsDialog_BridgeList li .column-icon .noProtocolIcon {
  width: 48px;
  height: 48px;
  background: #e3e8f0;
  border-radius: 5px;
}

.mx_RoomSettingsDialog_BridgeList li .column-icon .protocol-icon {
  float: left;
  margin-right: 5px;
}

.mx_RoomSettingsDialog_BridgeList li .column-icon .protocol-icon img {
  border-radius: 5px;
  border-width: 1px;
  border-color: transparent;
}

.mx_RoomSettingsDialog_BridgeList li .column-icon .protocol-icon span {
  left: auto;
}

.mx_RoomSettingsDialog_BridgeList li .column-data {
  display: inline-block;
  width: 85%;
}

.mx_RoomSettingsDialog_BridgeList li .column-data > h3 {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 16pt;
  color: #2e2f32;
}

.mx_RoomSettingsDialog_BridgeList li .column-data > * {
  margin-top: 4px;
  margin-bottom: 0;
}

.mx_RoomSettingsDialog_BridgeList li .column-data .workspace-channel-details {
  color: #2e2f32;
  font-weight: 600;
}

.mx_RoomSettingsDialog_BridgeList
  li
  .column-data
  .workspace-channel-details
  .channel {
  margin-left: 5px;
}

.mx_RoomSettingsDialog_BridgeList li .column-data .metadata {
  color: #61708b;
  margin-bottom: 0;
  overflow-y: visible;
  text-overflow: ellipsis;
  white-space: normal;
  padding: 0;
}

.mx_RoomSettingsDialog_BridgeList li .column-data .metadata > li {
  padding: 0;
  border: 0;
}

.mx_RoomUpgradeDialog {
  padding-right: 70px;
}

.mx_RoomUpgradeWarningDialog {
  max-width: 38vw;
  width: 38vw;
}

.mx_RoomUpgradeWarningDialog .mx_SettingsFlag {
  font-weight: 700;
}

.mx_RoomUpgradeWarningDialog .mx_SettingsFlag .mx_ToggleSwitch {
  display: inline-block;
  vertical-align: middle;
  margin-left: 8px;
  float: right;
}

.mx_RoomUpgradeWarningDialog .mx_SettingsFlag .mx_SettingsFlag_label {
  display: inline-block;
  vertical-align: middle;
}

.mx_ServerOfflineDialog .mx_ServerOfflineDialog_content {
  padding-right: 85px;
  color: #2e2f32;
}

.mx_ServerOfflineDialog .mx_ServerOfflineDialog_content hr {
  border-color: #2e2f32;
  opacity: 0.1;
  border-bottom: none;
}

.mx_ServerOfflineDialog .mx_ServerOfflineDialog_content ul {
  padding: 16px;
}

.mx_ServerOfflineDialog .mx_ServerOfflineDialog_content ul li:nth-child(n + 2) {
  margin-top: 16px;
}

.mx_ServerOfflineDialog
  .mx_ServerOfflineDialog_content
  .mx_ServerOfflineDialog_content_context
  .mx_ServerOfflineDialog_content_context_timestamp {
  display: inline-block;
  width: 115px;
  color: #61708b;
  line-height: 24px;
  vertical-align: top;
}

.mx_ServerOfflineDialog
  .mx_ServerOfflineDialog_content
  .mx_ServerOfflineDialog_content_context
  .mx_ServerOfflineDialog_content_context_timeline {
  display: inline-block;
  width: calc(100% - 155px);
}

.mx_ServerOfflineDialog
  .mx_ServerOfflineDialog_content
  .mx_ServerOfflineDialog_content_context
  .mx_ServerOfflineDialog_content_context_timeline
  .mx_ServerOfflineDialog_content_context_timeline_header
  span {
  margin-left: 8px;
  vertical-align: middle;
}

.mx_ServerOfflineDialog
  .mx_ServerOfflineDialog_content
  .mx_ServerOfflineDialog_content_context
  .mx_ServerOfflineDialog_content_context_timeline
  .mx_ServerOfflineDialog_content_context_txn {
  position: relative;
  margin-top: 8px;
}

.mx_ServerOfflineDialog
  .mx_ServerOfflineDialog_content
  .mx_ServerOfflineDialog_content_context
  .mx_ServerOfflineDialog_content_context_timeline
  .mx_ServerOfflineDialog_content_context_txn
  .mx_ServerOfflineDialog_content_context_txn_desc {
  width: calc(100% - 100px);
}

.mx_ServerOfflineDialog
  .mx_ServerOfflineDialog_content
  .mx_ServerOfflineDialog_content_context
  .mx_ServerOfflineDialog_content_context_timeline
  .mx_ServerOfflineDialog_content_context_txn
  .mx_AccessibleButton {
  float: right;
  padding: 0;
}

.mx_ServerPickerDialog {
  width: 468px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.mx_ServerPickerDialog .mx_Dialog_content {
  margin-bottom: 0;
}

.mx_ServerPickerDialog .mx_Dialog_content > p {
  color: #737d8c;
  font-size: 1.4rem;
  margin: 16px 0;
}

.mx_ServerPickerDialog .mx_Dialog_content > p:first-of-type {
  margin-bottom: 40px;
}

.mx_ServerPickerDialog .mx_Dialog_content > p:last-of-type {
  margin: 0 24px 24px;
}

.mx_ServerPickerDialog .mx_Dialog_content > h4 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #737d8c;
  margin-left: 8px;
}

.mx_ServerPickerDialog .mx_Dialog_content > a {
  color: #0dbd8b;
  margin-left: 8px;
}

.mx_ServerPickerDialog
  .mx_ServerPickerDialog_otherHomeserverRadio
  input[type="radio"]
  + div {
  margin-top: auto;
  margin-bottom: auto;
}

.mx_ServerPickerDialog .mx_ServerPickerDialog_otherHomeserver {
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: unset;
}

.mx_ServerPickerDialog .mx_ServerPickerDialog_otherHomeserver > input {
  padding-left: 0;
}

.mx_ServerPickerDialog .mx_ServerPickerDialog_otherHomeserver > label {
  margin-left: 0;
}

.mx_ServerPickerDialog .mx_AccessibleButton_kind_primary {
  width: calc(100% - 64px);
  margin: 0 8px;
  padding: 15px 18px;
}

.mx_SetEmailDialog_email_input {
  border-radius: 3px;
  border: 1px solid #e7e7e7;
  padding: 9px;
  color: rgba(74, 74, 74, 0.9);
  background-color: #fff;
  font-size: 1.5rem;
  width: 100%;
  max-width: 280px;
  margin-bottom: 10px;
}

.mx_SetEmailDialog_email_input:focus {
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 1px solid #0dbd8b;
}

.mx_RoomSettingsDialog,
.mx_SpaceSettingsDialog,
.mx_UserSettingsDialog {
  width: 90vw;
  max-width: 1000px;
  height: 80vh;
}

.mx_RoomSettingsDialog .mx_TabbedView,
.mx_SpaceSettingsDialog .mx_TabbedView,
.mx_UserSettingsDialog .mx_TabbedView {
  top: 65px;
}

.mx_RoomSettingsDialog .mx_TabbedView .mx_SettingsTab,
.mx_SpaceSettingsDialog .mx_TabbedView .mx_SettingsTab,
.mx_UserSettingsDialog .mx_TabbedView .mx_SettingsTab {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  min-width: 580px;
  padding-right: 100px;
  padding-bottom: 100px;
}

.mx_RoomSettingsDialog .mx_Dialog_title,
.mx_SpaceSettingsDialog .mx_Dialog_title,
.mx_UserSettingsDialog .mx_Dialog_title {
  margin-bottom: 24px;
}

.mx_ShareDialog hr {
  margin-top: 25px;
  margin-bottom: 25px;
  border-color: #747474;
}

.mx_ShareDialog_content {
  margin: 10px 0;
}

.mx_ShareDialog_matrixto {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-radius: 5px;
  border: 1px solid #747474;
  margin-bottom: 10px;
  margin-top: 30px;
  padding: 10px;
}

.mx_ShareDialog_matrixto a {
  text-decoration: none;
}

.mx_ShareDialog_matrixto_link {
  -ms-flex-negative: 1;
  flex-shrink: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mx_ShareDialog_matrixto_copy {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  cursor: pointer;
  margin-left: 20px;
  display: inherit;
}

.mx_ShareDialog_matrixto_copy:after {
  content: "";
  -webkit-mask-image: url(../../img/feather-customised/clipboard.24dd87a.svg);
  mask-image: url(../../img/feather-customised/clipboard.24dd87a.svg);
  background-color: #2e2f32;
  margin-left: 5px;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
}

.mx_ShareDialog_split {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.mx_ShareDialog_qrcode_container {
  float: left;
  height: 256px;
  width: 256px;
  margin-right: 64px;
}

.mx_ShareDialog_qrcode_container + .mx_ShareDialog_social_container {
  width: 299px;
}

.mx_ShareDialog_social_container {
  display: inline-block;
}

.mx_ShareDialog_social_icon {
  display: inline-grid;
  margin-right: 10px;
  margin-bottom: 10px;
}

.mx_SlashCommandHelpDialog .mx_SlashCommandHelpDialog_headerRow h2 {
  margin-bottom: 2px;
}

.mx_SlashCommandHelpDialog .mx_Dialog_content {
  margin-top: 12px;
  margin-bottom: 34px;
}

.mx_SpaceSettingsDialog {
  color: #2e2f32;
}

.mx_SpaceSettingsDialog .mx_SpaceSettings_errorText {
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #ff4b55;
  margin-bottom: 28px;
}

.mx_SpaceSettingsDialog .mx_ToggleSwitch {
  display: inline-block;
  vertical-align: middle;
  margin-left: 16px;
}

.mx_SpaceSettingsDialog
  .mx_SettingsTab_section
  .mx_SettingsTab_section_caption {
  margin-top: 12px;
  margin-bottom: 20px;
}

.mx_SpaceSettingsDialog .mx_SettingsTab_section + .mx_SettingsTab_subheading {
  border-top: 1px solid #e3e8f0;
  margin-top: 0;
  padding-top: 24px;
}

.mx_SpaceSettingsDialog .mx_SettingsTab_section .mx_RadioButton {
  margin-top: 8px;
  margin-bottom: 4px;
}

.mx_SpaceSettingsDialog
  .mx_SettingsTab_section
  .mx_RadioButton
  .mx_RadioButton_content {
  font-weight: 600;
  line-height: 1.8rem;
  color: #2e2f32;
}

.mx_SpaceSettingsDialog .mx_SettingsTab_section .mx_RadioButton + span {
  font-size: 1.5rem;
  line-height: 1.8rem;
  color: #737d8c;
  margin-left: 26px;
}

.mx_SpaceSettingsDialog .mx_SettingsTab_section .mx_SettingsTab_showAdvanced {
  margin: 16px 0;
  padding: 0;
}

.mx_SpaceSettingsDialog .mx_SettingsTab_section .mx_SettingsFlag {
  margin-top: 24px;
}

.mx_SpaceSettingsDialog .mx_SpaceSettingsDialog_buttons {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 64px;
}

.mx_SpaceSettingsDialog .mx_SpaceSettingsDialog_buttons .mx_AccessibleButton {
  display: inline-block;
}

.mx_SpaceSettingsDialog
  .mx_SpaceSettingsDialog_buttons
  .mx_AccessibleButton_kind_link {
  margin-left: auto;
}

.mx_SpaceSettingsDialog .mx_AccessibleButton_hasKind {
  padding: 8px 22px;
}

.mx_SpaceSettingsDialog
  .mx_TabbedView_tabLabel
  .mx_SpaceSettingsDialog_generalIcon:before {
  -webkit-mask-image: url(../../img/element-icons/settings.6b381af.svg);
  mask-image: url(../../img/element-icons/settings.6b381af.svg);
}

.mx_SpaceSettingsDialog
  .mx_TabbedView_tabLabel
  .mx_SpaceSettingsDialog_visibilityIcon:before {
  -webkit-mask-image: url(../../img/element-icons/eye.23b2229.svg);
  mask-image: url(../../img/element-icons/eye.23b2229.svg);
}

.mx_TabbedIntegrationManagerDialog .mx_Dialog {
  width: 60%;
  height: 70%;
  overflow: hidden;
  padding: 0;
  max-width: none;
  max-height: none;
  position: relative;
}

.mx_TabbedIntegrationManagerDialog_container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.mx_TabbedIntegrationManagerDialog_container
  .mx_TabbedIntegrationManagerDialog_currentManager {
  width: 100%;
  height: 100%;
  border-top: 1px solid #0dbd8b;
}

.mx_TabbedIntegrationManagerDialog_container
  .mx_TabbedIntegrationManagerDialog_currentManager
  iframe {
  background-color: #fff;
  border: 0;
  width: 100%;
  height: 100%;
}

.mx_TabbedIntegrationManagerDialog_tab {
  display: inline-block;
  border: 1px solid #0dbd8b;
  border-bottom: 0;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  padding: 10px 8px;
  margin-right: 5px;
}

.mx_TabbedIntegrationManagerDialog_currentTab {
  background-color: #0dbd8b;
  color: #fff;
}

.mx_TermsDialog_forIntegrationManager .mx_Dialog {
  width: 60%;
  height: 70%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.mx_TermsDialog_termsTableHeader {
  font-weight: 700;
  text-align: left;
}

.mx_TermsDialog_termsTable {
  font-size: 1.2rem;
  width: 100%;
}

.mx_TermsDialog_service,
.mx_TermsDialog_summary {
  padding-right: 10px;
}

.mx_TermsDialog_link {
  display: inline-block;
  -webkit-mask-image: url(../../img/external-link.a8d3e9b.svg);
  mask-image: url(../../img/external-link.a8d3e9b.svg);
  background-color: #0dbd8b;
  width: 10px;
  height: 10px;
}

.mx_UntrustedDeviceDialog .mx_Dialog_title {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_UntrustedDeviceDialog .mx_Dialog_title .mx_E2EIcon {
  margin-left: 0;
}

.mx_UploadConfirmDialog_fileIcon {
  margin-right: 5px;
}

.mx_UploadConfirmDialog_previewOuter {
  text-align: center;
}

.mx_UploadConfirmDialog_previewInner {
  display: inline-block;
  text-align: left;
}

.mx_UploadConfirmDialog_imagePreview {
  max-height: 300px;
  max-width: 100%;
  border-radius: 4px;
  border: 1px solid #c1c1c1;
}

.mx_UserSettingsDialog_settingsIcon:before {
  -webkit-mask-image: url(../../img/element-icons/settings.6b381af.svg);
  mask-image: url(../../img/element-icons/settings.6b381af.svg);
}

.mx_UserSettingsDialog_appearanceIcon:before {
  -webkit-mask-image: url(../../img/element-icons/settings/appearance.cdebd40.svg);
  mask-image: url(../../img/element-icons/settings/appearance.cdebd40.svg);
}

.mx_UserSettingsDialog_voiceIcon:before {
  -webkit-mask-image: url(../../img/element-icons/call/voice-call.303eba8.svg);
  mask-image: url(../../img/element-icons/call/voice-call.303eba8.svg);
}

.mx_UserSettingsDialog_bellIcon:before {
  -webkit-mask-image: url(../../img/element-icons/notifications.d298b39.svg);
  mask-image: url(../../img/element-icons/notifications.d298b39.svg);
}

.mx_UserSettingsDialog_preferencesIcon:before {
  -webkit-mask-image: url(../../img/element-icons/settings/preference.82bfabd.svg);
  mask-image: url(../../img/element-icons/settings/preference.82bfabd.svg);
}

.mx_UserSettingsDialog_securityIcon:before {
  -webkit-mask-image: url(../../img/element-icons/security.66f2fa6.svg);
  mask-image: url(../../img/element-icons/security.66f2fa6.svg);
}

.mx_UserSettingsDialog_helpIcon:before {
  -webkit-mask-image: url(../../img/element-icons/settings/help.68b703f.svg);
  mask-image: url(../../img/element-icons/settings/help.68b703f.svg);
}

.mx_UserSettingsDialog_labsIcon:before {
  -webkit-mask-image: url(../../img/element-icons/settings/lab-flags.6fbe5e2.svg);
  mask-image: url(../../img/element-icons/settings/lab-flags.6fbe5e2.svg);
}

.mx_UserSettingsDialog_mjolnirIcon:before {
  -webkit-mask-image: url(../../img/element-icons/room/composer/emoji.52d7369.svg);
  mask-image: url(../../img/element-icons/room/composer/emoji.52d7369.svg);
}

.mx_UserSettingsDialog_flairIcon:before {
  -webkit-mask-image: url(../../img/element-icons/settings/flair.4227a88.svg);
  mask-image: url(../../img/element-icons/settings/flair.4227a88.svg);
}

.mx_WidgetCapabilitiesPromptDialog .text-muted {
  font-size: 1.2rem;
}

.mx_WidgetCapabilitiesPromptDialog .mx_Dialog_content {
  margin-bottom: 16px;
}

.mx_WidgetCapabilitiesPromptDialog .mx_WidgetCapabilitiesPromptDialog_cap {
  margin-top: 20px;
  font-size: 1.5rem;
  line-height: 1.5rem;
}

.mx_WidgetCapabilitiesPromptDialog
  .mx_WidgetCapabilitiesPromptDialog_cap
  .mx_WidgetCapabilitiesPromptDialog_byline {
  color: #61708b;
  margin-left: 26px;
  font-size: 1.2rem;
  line-height: 1.2rem;
}

.mx_WidgetCapabilitiesPromptDialog .mx_Dialog_buttons {
  margin-top: 40px;
}

.mx_WidgetCapabilitiesPromptDialog .mx_SettingsFlag {
  line-height: calc(1.4rem + 14px);
  color: #61708b;
  font-size: 1.2rem;
}

.mx_WidgetCapabilitiesPromptDialog .mx_SettingsFlag .mx_ToggleSwitch {
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
  width: 3.2rem;
  height: 1.5rem;
}

.mx_WidgetCapabilitiesPromptDialog
  .mx_SettingsFlag
  .mx_ToggleSwitch.mx_ToggleSwitch_on
  > .mx_ToggleSwitch_ball {
  left: calc(100% - 1.5rem);
}

.mx_WidgetCapabilitiesPromptDialog
  .mx_SettingsFlag
  .mx_ToggleSwitch
  .mx_ToggleSwitch_ball {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 1.5rem;
}

.mx_WidgetCapabilitiesPromptDialog .mx_SettingsFlag .mx_SettingsFlag_label {
  display: inline-block;
  vertical-align: middle;
}

.mx_WidgetOpenIDPermissionsDialog .mx_SettingsFlag .mx_ToggleSwitch {
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
}

.mx_WidgetOpenIDPermissionsDialog .mx_SettingsFlag .mx_SettingsFlag_label {
  display: inline-block;
  vertical-align: middle;
}

.mx_AccessSecretStorageDialog_reset {
  position: relative;
  padding-left: 24px;
  margin-top: 7px;
}

.mx_AccessSecretStorageDialog_reset:before {
  content: "";
  display: inline-block;
  position: absolute;
  height: 16px;
  width: 16px;
  left: 0;
  top: 2px;
  background-image: url(../../img/element-icons/warning-badge.413c9a9.svg);
  background-size: contain;
}

.mx_AccessSecretStorageDialog_reset .mx_AccessSecretStorageDialog_reset_link {
  color: #ff4b55;
}

.mx_AccessSecretStorageDialog_titleWithIcon:before {
  content: "";
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 8px;
  position: relative;
  top: 5px;
  background-color: #2e2f32;
}

.mx_AccessSecretStorageDialog_resetBadge:before {
  background-image: url(../../img/element-icons/warning-badge.413c9a9.svg);
  background-size: 24px;
  background-color: transparent;
}

.mx_AccessSecretStorageDialog_secureBackupTitle:before {
  -webkit-mask-image: url(../../img/feather-customised/secure-backup.329cb1c.svg);
  mask-image: url(../../img/feather-customised/secure-backup.329cb1c.svg);
}

.mx_AccessSecretStorageDialog_securePhraseTitle:before {
  -webkit-mask-image: url(../../img/feather-customised/secure-phrase.a9d3725.svg);
  mask-image: url(../../img/feather-customised/secure-phrase.a9d3725.svg);
}

.mx_AccessSecretStorageDialog_keyStatus {
  height: 30px;
}

.mx_AccessSecretStorageDialog_passPhraseInput {
  width: 300px;
  border: 1px solid #0dbd8b;
  border-radius: 5px;
  padding: 10px;
}

.mx_AccessSecretStorageDialog_recoveryKeyEntry {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_AccessSecretStorageDialog_recoveryKeyEntry_textInput {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.mx_AccessSecretStorageDialog_recoveryKeyEntry_entryControlSeparatorText {
  margin: 16px;
}

.mx_AccessSecretStorageDialog_recoveryKeyFeedback:before {
  content: "";
  display: inline-block;
  vertical-align: bottom;
  width: 20px;
  height: 20px;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: 20px;
  mask-size: 20px;
  margin-right: 5px;
}

.mx_AccessSecretStorageDialog_recoveryKeyFeedback_valid {
  color: #0dbd8b;
}

.mx_AccessSecretStorageDialog_recoveryKeyFeedback_valid:before {
  -webkit-mask-image: url(../../img/feather-customised/check.5745b4e.svg);
  mask-image: url(../../img/feather-customised/check.5745b4e.svg);
  background-color: #0dbd8b;
}

.mx_AccessSecretStorageDialog_recoveryKeyFeedback_invalid {
  color: #ff4b55;
}

.mx_AccessSecretStorageDialog_recoveryKeyFeedback_invalid:before {
  -webkit-mask-image: url(../../img/feather-customised/x.9662221.svg);
  mask-image: url(../../img/feather-customised/x.9662221.svg);
  background-color: #ff4b55;
}

.mx_AccessSecretStorageDialog_recoveryKeyEntry_fileInput {
  display: none;
}

.mx_CreateCrossSigningDialog {
  width: 560px;
}

.mx_CreateCrossSigningDialog details .mx_AccessibleButton {
  margin: 1em 0;
}

.mx_CreateCrossSigningDialog .mx_Dialog_title,
.mx_CreateKeyBackupDialog .mx_Dialog_title {
  margin-bottom: 1em;
}

.mx_CreateKeyBackupDialog_primaryContainer {
  padding: 20px;
}

.mx_CreateKeyBackupDialog_primaryContainer:after {
  content: "";
  clear: both;
  display: block;
}

.mx_CreateKeyBackupDialog_passPhraseContainer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.mx_CreateKeyBackupDialog_passPhraseInput {
  -webkit-box-flex: 0;
  -ms-flex: none;
  flex: none;
  width: 250px;
  border: 1px solid #0dbd8b;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 1em;
}

.mx_CreateKeyBackupDialog_passPhraseMatch {
  margin-left: 20px;
}

.mx_CreateKeyBackupDialog_recoveryKeyHeader {
  margin-bottom: 1em;
}

.mx_CreateKeyBackupDialog_recoveryKeyContainer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.mx_CreateKeyBackupDialog_recoveryKey {
  width: 262px;
  padding: 20px;
  color: #888;
  background-color: #f7f7f7;
  margin-right: 12px;
}

.mx_CreateKeyBackupDialog_recoveryKeyButtons {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_CreateKeyBackupDialog_recoveryKeyButtons button {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  white-space: nowrap;
}

.mx_CreateKeyBackupDialog details .mx_AccessibleButton {
  margin: 1em 0;
}

.mx_CreateSecretStorageDialog {
  width: 560px;
}

.mx_CreateSecretStorageDialog .mx_SettingsFlag {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.mx_CreateSecretStorageDialog .mx_SettingsFlag_label {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 0px;
  flex: 1 1 0;
  min-width: 0;
  font-weight: 600;
}

.mx_CreateSecretStorageDialog .mx_ToggleSwitch {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  margin-left: 30px;
}

.mx_CreateSecretStorageDialog details .mx_AccessibleButton {
  margin: 1em 0;
}

.mx_CreateSecretStorageDialog .mx_Dialog_title {
  margin-bottom: 1em;
}

.mx_CreateSecretStorageDialog_titleWithIcon:before {
  content: "";
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 8px;
  position: relative;
  top: 5px;
  background-color: #2e2f32;
}

.mx_CreateSecretStorageDialog_secureBackupTitle:before {
  -webkit-mask-image: url(../../img/feather-customised/secure-backup.329cb1c.svg);
  mask-image: url(../../img/feather-customised/secure-backup.329cb1c.svg);
}

.mx_CreateSecretStorageDialog_securePhraseTitle:before {
  -webkit-mask-image: url(../../img/feather-customised/secure-phrase.a9d3725.svg);
  mask-image: url(../../img/feather-customised/secure-phrase.a9d3725.svg);
}

.mx_CreateSecretStorageDialog_centeredBody,
.mx_CreateSecretStorageDialog_centeredTitle {
  text-align: center;
}

.mx_CreateSecretStorageDialog_primaryContainer {
  padding-top: 20px;
}

.mx_CreateSecretStorageDialog_primaryContainer:after {
  content: "";
  clear: both;
  display: block;
}

.mx_CreateSecretStorageDialog_primaryContainer .mx_RadioButton {
  margin-bottom: 16px;
  padding: 11px;
}

.mx_CreateSecretStorageDialog_optionTitle {
  color: #45474a;
  font-weight: 600;
  font-size: 1.8rem;
  padding-bottom: 10px;
}

.mx_CreateSecretStorageDialog_optionIcon {
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 8px;
  position: relative;
  top: 5px;
  background-color: #2e2f32;
}

.mx_CreateSecretStorageDialog_optionIcon_securePhrase {
  -webkit-mask-image: url(../../img/feather-customised/secure-phrase.a9d3725.svg);
  mask-image: url(../../img/feather-customised/secure-phrase.a9d3725.svg);
}

.mx_CreateSecretStorageDialog_optionIcon_secureBackup {
  -webkit-mask-image: url(../../img/feather-customised/secure-backup.329cb1c.svg);
  mask-image: url(../../img/feather-customised/secure-backup.329cb1c.svg);
}

.mx_CreateSecretStorageDialog_passPhraseContainer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.mx_Field.mx_CreateSecretStorageDialog_passPhraseField {
  margin-top: 0;
}

.mx_CreateSecretStorageDialog_passPhraseMatch {
  width: 200px;
  margin-left: 20px;
}

.mx_CreateSecretStorageDialog_recoveryKeyContainer {
  width: 380px;
  margin-left: auto;
  margin-right: auto;
}

.mx_CreateSecretStorageDialog_recoveryKey {
  font-weight: 700;
  text-align: center;
  padding: 20px;
  color: #888;
  background-color: #f7f7f7;
  border-radius: 6px;
  word-spacing: 1em;
  margin-bottom: 20px;
}

.mx_CreateSecretStorageDialog_recoveryKeyButtons {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_CreateSecretStorageDialog_recoveryKeyButtons .mx_AccessibleButton {
  width: 160px;
  padding-left: 0;
  padding-right: 0;
  white-space: nowrap;
}

.mx_CreateSecretStorageDialog_continueSpinner {
  margin-top: 33px;
  text-align: right;
}

.mx_CreateSecretStorageDialog_continueSpinner img {
  width: 20px;
  height: 20px;
}

.mx_KeyBackupFailedDialog .mx_Dialog_title {
  margin-bottom: 32px;
}

.mx_KeyBackupFailedDialog_title {
  position: relative;
  padding-left: 45px;
  padding-bottom: 10px;
}

.mx_KeyBackupFailedDialog_title:before {
  -webkit-mask: url(../../img/e2e/lock-warning-filled.993fb6c.svg);
  mask: url(../../img/e2e/lock-warning-filled.993fb6c.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  background-color: #2e2f32;
  content: "";
  position: absolute;
  top: -6px;
  right: 0;
  bottom: 0;
  left: 0;
}

.mx_KeyBackupFailedDialog .mx_Dialog_buttons {
  margin-top: 36px;
}

.mx_RestoreKeyBackupDialog_keyStatus {
  height: 30px;
}

.mx_RestoreKeyBackupDialog_primaryContainer {
  padding: 20px;
}

.mx_RestoreKeyBackupDialog_passPhraseInput,
.mx_RestoreKeyBackupDialog_recoveryKeyInput {
  width: 300px;
  border: 1px solid #0dbd8b;
  border-radius: 5px;
  padding: 10px;
}

.mx_RestoreKeyBackupDialog_content > div {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  min-height: 110px;
}

.mx_NetworkDropdown {
  height: 32px;
  position: relative;
  padding-right: 32px;
  margin-left: auto;
  margin-right: 9px;
  margin-top: 12px;
}

.mx_NetworkDropdown,
.mx_NetworkDropdown .mx_AccessibleButton {
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
}

.mx_NetworkDropdown_menu {
  min-width: 204px;
  margin: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #c1c1c1;
  background-color: #fff;
  max-height: calc(100vh - 20px);
  overflow-y: auto;
}

.mx_NetworkDropdown_menu_network {
  font-weight: 700;
}

.mx_NetworkDropdown_server {
  padding: 12px 0;
  border-bottom: 1px solid #9fa9ba;
}

.mx_NetworkDropdown_server .mx_NetworkDropdown_server_title {
  padding: 0 10px;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 2rem;
  margin-bottom: 4px;
  position: relative;
}

.mx_NetworkDropdown_server
  .mx_NetworkDropdown_server_title
  .mx_AccessibleButton {
  position: absolute;
  display: inline;
  right: 10px;
  height: 16px;
  width: 16px;
  margin-top: 2px;
}

.mx_NetworkDropdown_server
  .mx_NetworkDropdown_server_title
  .mx_AccessibleButton:after {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-image: url(../../img/feather-customised/x.9662221.svg);
  mask-image: url(../../img/feather-customised/x.9662221.svg);
  background-color: #ff4b55;
}

.mx_NetworkDropdown_server .mx_NetworkDropdown_server_subtitle {
  padding: 0 10px;
  font-size: 1rem;
  line-height: 1.4rem;
  margin-top: -4px;
  margin-bottom: 4px;
  color: #61708b;
}

.mx_NetworkDropdown_server .mx_NetworkDropdown_server_network {
  font-size: 1.2rem;
  line-height: 1.6rem;
  padding: 4px 10px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.mx_NetworkDropdown_server
  .mx_NetworkDropdown_server_network[aria-checked="true"]:after {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  right: 10px;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-image: url(../../img/feather-customised/check.5745b4e.svg);
  mask-image: url(../../img/feather-customised/check.5745b4e.svg);
  background-color: #0dbd8b;
}

.mx_NetworkDropdown_server_add:hover,
.mx_NetworkDropdown_server_network:hover {
  background-color: #f3f8fd;
}

.mx_NetworkDropdown_server_add {
  padding: 16px 10px 16px 32px;
  position: relative;
  border-radius: 0 0 4px 4px;
}

.mx_NetworkDropdown_server_add:before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  left: 7px;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-image: url(../../img/feather-customised/plus.38ae979.svg);
  mask-image: url(../../img/feather-customised/plus.38ae979.svg);
  background-color: #61708b;
}

.mx_NetworkDropdown_handle {
  position: relative;
}

.mx_NetworkDropdown_handle:after {
  content: "";
  position: absolute;
  width: 26px;
  height: 26px;
  right: -27.5px;
  top: -3px;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-image: url(../../img/feather-customised/chevron-down-thin.f9a2477.svg);
  mask-image: url(../../img/feather-customised/chevron-down-thin.f9a2477.svg);
  background-color: #2e2f32;
}

.mx_NetworkDropdown_handle .mx_NetworkDropdown_handle_server {
  color: #61708b;
  font-size: 1.2rem;
}

.mx_NetworkDropdown_dialog .mx_Dialog {
  width: 45vw;
}

.mx_AccessibleButton {
  cursor: pointer;
}

.mx_AccessibleButton_disabled {
  cursor: default;
}

.mx_AccessibleButton_hasKind {
  padding: 7px 18px;
  text-align: center;
  border-radius: 8px;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-size: 1.4rem;
}

.mx_AccessibleButton_kind_primary {
  color: #fff;
  background-color: #0dbd8b;
  font-weight: 600;
}

.mx_AccessibleButton_kind_primary_outline {
  color: #0dbd8b;
  background-color: #fff;
  border: 1px solid #0dbd8b;
  font-weight: 600;
}

.mx_AccessibleButton_kind_secondary {
  color: #0dbd8b;
  font-weight: 600;
}

.mx_AccessibleButton_kind_primary.mx_AccessibleButton_disabled,
.mx_AccessibleButton_kind_primary_outline.mx_AccessibleButton_disabled {
  opacity: 0.4;
}

.mx_AccessibleButton_hasKind.mx_AccessibleButton_kind_primary_sm {
  padding: 5px 12px;
  color: #fff;
  background-color: #0dbd8b;
}

.mx_AccessibleButton_kind_primary_sm.mx_AccessibleButton_disabled {
  opacity: 0.4;
}

.mx_AccessibleButton_kind_danger {
  color: #fff;
  background-color: #ff4b55;
}

.mx_AccessibleButton_kind_danger_outline {
  color: #ff4b55;
  background-color: transparent;
  border: 1px solid #ff4b55;
}

.mx_AccessibleButton_kind_danger.mx_AccessibleButton_disabled {
  color: #fff;
  background-color: #f5b6bb;
}

.mx_AccessibleButton_kind_danger_outline.mx_AccessibleButton_disabled {
  color: #f5b6bb;
  border-color: #f5b6bb;
}

.mx_AccessibleButton_hasKind.mx_AccessibleButton_kind_danger_sm {
  padding: 5px 12px;
  color: #fff;
  background-color: #ff4b55;
}

.mx_AccessibleButton_kind_danger_sm.mx_AccessibleButton_disabled {
  color: #fff;
  background-color: #f5b6bb;
}

.mx_AccessibleButton_kind_link {
  color: #0dbd8b;
  background-color: transparent;
}

.mx_AccessibleButton_kind_link.mx_AccessibleButton_disabled {
  opacity: 0.4;
}

.mx_AccessibleButton_hasKind.mx_AccessibleButton_kind_link_sm {
  padding: 5px 12px;
  color: #0dbd8b;
  background-color: transparent;
}

.mx_AccessibleButton_kind_link_sm.mx_AccessibleButton_disabled {
  opacity: 0.4;
}

.mx_AddressSelector {
  position: absolute;
  background-color: #fff;
  width: 485px;
  max-height: 116px;
  overflow-y: auto;
  border-radius: 3px;
  border: 1px solid #0dbd8b;
  cursor: pointer;
  z-index: 1;
}

.mx_AddressSelector.mx_AddressSelector_empty {
  display: none;
}

.mx_AddressSelector_addressListElement .mx_AddressTile {
  background-color: #fff;
  border: 1px solid #fff;
}

.mx_AddressSelector_addressListElement.mx_AddressSelector_selected {
  background-color: #f2f5f8;
}

.mx_AddressSelector_addressListElement.mx_AddressSelector_selected
  .mx_AddressTile {
  background-color: #f2f5f8;
  border: 1px solid #f2f5f8;
}

.mx_AddressTile {
  display: inline-block;
  border-radius: 3px;
  background-color: rgba(74, 73, 74, 0.1);
  border: 1px solid #e7e7e7;
  line-height: 2.6rem;
  color: #2e2f32;
  font-size: 1.4rem;
  font-weight: 400;
  margin-right: 4px;
}

.mx_AddressTile.mx_AddressTile_error {
  background-color: rgba(255, 0, 100, 0.1);
  color: #ff4b55;
  border-color: #ff4b55;
}

.mx_AddressTile_network {
  padding-right: 4px;
}

.mx_AddressTile_avatar,
.mx_AddressTile_network {
  display: inline-block;
  position: relative;
  padding-left: 2px;
  vertical-align: middle;
}

.mx_AddressTile_avatar {
  padding-right: 7px;
}

.mx_AddressTile_mx {
  display: inline-block;
  margin: 0;
  border: 0;
  padding: 0;
}

.mx_AddressTile_name {
  display: inline-block;
  padding-right: 4px;
  font-weight: 600;
  overflow: hidden;
  height: 26px;
  vertical-align: middle;
}

.mx_AddressTile_name.mx_AddressTile_justified {
  width: 180px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: middle;
}

.mx_AddressTile_id {
  display: inline-block;
  padding-right: 11px;
}

.mx_AddressTile_id.mx_AddressTile_justified {
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: middle;
}

.mx_AddressTile_unknownMx {
  display: inline-block;
  font-weight: 600;
  padding-right: 11px;
}

.mx_AddressTile_unknownMxl.mx_AddressTile_justified {
  width: 380px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: middle;
}

.mx_AddressTile_email {
  display: inline-block;
  font-weight: 600;
  padding-right: 11px;
}

.mx_AddressTile_email.mx_AddressTile_justified {
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: middle;
}

.mx_AddressTile_unknown {
  display: inline-block;
  padding-right: 11px;
}

.mx_AddressTile_unknown.mx_AddressTile_justified {
  width: 380px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: middle;
}

.mx_AddressTile_dismiss {
  display: inline-block;
  padding-right: 11px;
  padding-left: 1px;
  cursor: pointer;
}

.mx_AddressTile_dismiss object {
  pointer-events: none;
}

.mx_DesktopBuildsNotice {
  text-align: center;
  padding: 0 16px;
}

.mx_DesktopBuildsNotice > * {
  vertical-align: middle;
}

.mx_DesktopBuildsNotice > img {
  margin-right: 8px;
}

.mx_desktopCapturerSourcePicker {
  overflow: hidden;
}

.mx_desktopCapturerSourcePicker_tabLabels {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 0 0 8px;
}

.mx_desktopCapturerSourcePicker_tabLabel,
.mx_desktopCapturerSourcePicker_tabLabel_selected {
  width: 100%;
  text-align: center;
  border-radius: 8px;
  padding: 8px 0;
  font-size: 1.3rem;
}

.mx_desktopCapturerSourcePicker_tabLabel_selected {
  background-color: #0dbd8b;
  color: #fff;
}

.mx_desktopCapturerSourcePicker_panel {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  height: 500px;
  overflow: overlay;
}

.mx_desktopCapturerSourcePicker_stream_button {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin: 8px;
  border-radius: 4px;
}

.mx_desktopCapturerSourcePicker_stream_button:focus,
.mx_desktopCapturerSourcePicker_stream_button:hover {
  background: #fff;
}

.mx_desktopCapturerSourcePicker_stream_thumbnail {
  margin: 4px;
  width: 312px;
}

.mx_desktopCapturerSourcePicker_stream_name {
  margin: 0 4px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 312px;
}

.mx_DialPadBackspaceButton {
  position: relative;
  height: 28px;
  width: 28px;
}

.mx_DialPadBackspaceButton:before {
  content: "";
  background-color: #8d97a5;
  width: inherit;
  height: inherit;
  top: 0;
  left: 0;
  position: absolute;
  display: inline-block;
  vertical-align: middle;
  -webkit-mask-image: url(../../img/element-icons/call/delete.833d785.svg);
  mask-image: url(../../img/element-icons/call/delete.833d785.svg);
  -webkit-mask-position: 8px;
  mask-position: 8px;
  -webkit-mask-size: 20px;
  mask-size: 20px;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

.mx_DirectorySearchBox {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding-left: 9px;
  padding-right: 9px;
}

.mx_DirectorySearchBox_joinButton {
  display: table-cell;
  padding: 3px 10px;
  background-color: #f2f5f8;
  border-radius: 3px;
  background-image: url(../../img/icon-return.cb24475.svg);
  background-position: 8px 70%;
  background-repeat: no-repeat;
  text-indent: 18px;
  font-weight: 600;
  font-size: 1.2rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
}

.mx_DirectorySearchBox_clear {
  background-color: #ff4b55;
  -webkit-mask: url(../../img/cancel.4b9715b.svg);
  mask: url(../../img/cancel.4b9715b.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: 10px;
  mask-size: 10px;
  width: 15px;
  height: 15px;
  cursor: pointer;
}

.mx_Dropdown {
  position: relative;
  color: #2e2f32;
}

.mx_Dropdown_disabled {
  opacity: 0.3;
}

.mx_Dropdown_input {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  border-radius: 4px;
  border: 1px solid #c7c7c7;
  font-size: 1.2rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.mx_Dropdown_input.mx_AccessibleButton_disabled {
  cursor: not-allowed;
}

.mx_Dropdown_input:focus {
  border-color: #238cf5;
}

.mx_Dropdown_input.mx_AccessibleButton:focus {
  -webkit-filter: none;
  filter: none;
}

.mx_Dropdown_arrow {
  width: 10px;
  height: 6px;
  padding-right: 9px;
  -webkit-mask: url(../../img/feather-customised/dropdown-arrow.1a22ebc.svg);
  mask: url(../../img/feather-customised/dropdown-arrow.1a22ebc.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  background: #2e2f32;
}

.mx_Dropdown_option {
  height: 35px;
  line-height: 3.5rem;
  padding-left: 8px;
  padding-right: 8px;
}

.mx_Dropdown_input > .mx_Dropdown_option {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_Dropdown_input > .mx_Dropdown_option,
.mx_Dropdown_option div {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mx_Dropdown_option .mx_Dropdown_option_emoji,
.mx_Dropdown_option img {
  margin: 5px;
  width: 16px;
  vertical-align: middle;
}

.mx_Dropdown_option_emoji {
  font-size: 1.6rem;
  line-height: 1.6rem;
}

input.mx_Dropdown_option,
input.mx_Dropdown_option:focus {
  font-weight: 400;
  border: 0;
  padding-top: 0;
  padding-bottom: 0;
  width: 60%;
}

.mx_Dropdown_menu {
  position: absolute;
  left: -1px;
  right: -1px;
  top: 100%;
  z-index: 2;
  margin: 0;
  padding: 0;
  border-radius: 4px;
  border: 1px solid #238cf5;
  background-color: #fff;
  max-height: 200px;
  overflow-y: auto;
}

.mx_Dropdown_menu .mx_Dropdown_option {
  height: auto;
  min-height: 35px;
}

.mx_Dropdown_menu .mx_Dropdown_option_highlight {
  background-color: #ddd;
}

.mx_Dropdown_searchPrompt {
  font-weight: 400;
  margin-left: 5px;
  margin-bottom: 5px;
}

.mx_EditableItemList {
  margin-top: 12px;
  margin-bottom: 10px;
}

.mx_EditableItem {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 5px;
}

.mx_EditableItem_delete {
  -webkit-box-ordinal-group: 4;
  -ms-flex-order: 3;
  order: 3;
  margin-right: 5px;
  cursor: pointer;
  vertical-align: middle;
  width: 14px;
  height: 14px;
  -webkit-mask-image: url(../../img/feather-customised/cancel.23c2689.svg);
  mask-image: url(../../img/feather-customised/cancel.23c2689.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  background-color: #ff4b55;
  -webkit-mask-size: 100%;
  mask-size: 100%;
}

.mx_EditableItem_email {
  vertical-align: middle;
}

.mx_EditableItem_promptText {
  margin-right: 10px;
  -webkit-box-ordinal-group: 3;
  -ms-flex-order: 2;
  order: 2;
}

.mx_EditableItem_confirmBtn {
  margin-right: 5px;
}

.mx_EditableItem_item {
  -webkit-box-flex: 1;
  -ms-flex: auto 1 0px;
  flex: auto 1 0;
  -webkit-box-ordinal-group: 2;
  -ms-flex-order: 1;
  order: 1;
  width: calc(100% - 14px);
  overflow-x: hidden;
  text-overflow: ellipsis;
}

.mx_EditableItemList_label {
  margin-bottom: 5px;
}

.mx_ErrorBoundary {
  width: 100%;
  height: 100%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.mx_ErrorBoundary,
.mx_ErrorBoundary_body {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_ErrorBoundary_body {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  max-width: 400px;
}

.mx_ErrorBoundary_body .mx_AccessibleButton {
  margin-top: 5px;
}

.mx_EventListSummary {
  position: relative;
}

.mx_TextualEvent.mx_EventListSummary_summary {
  font-size: 1.4rem;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
}

.mx_EventListSummary_avatars {
  display: inline-block;
  margin-right: 8px;
  padding-top: 8px;
  line-height: 1.2rem;
}

.mx_EventListSummary_avatars .mx_BaseAvatar {
  margin-right: -4px;
  cursor: pointer;
}

.mx_EventListSummary_toggle {
  color: #0dbd8b;
  cursor: pointer;
  float: right;
  margin-right: 10px;
  margin-top: 8px;
}

.mx_EventListSummary_line {
  border-bottom: 1px solid transparent;
  margin-left: 63px;
  line-height: 3rem;
}

.mx_MatrixChat_useCompactLayout .mx_EventListSummary {
  font-size: 1.3rem;
}

.mx_MatrixChat_useCompactLayout .mx_EventListSummary .mx_EventTile_line {
  line-height: 2rem;
}

.mx_MatrixChat_useCompactLayout .mx_EventListSummary_line {
  line-height: 2.2rem;
}

.mx_MatrixChat_useCompactLayout .mx_EventListSummary_toggle {
  margin-top: 3px;
}

.mx_MatrixChat_useCompactLayout .mx_TextualEvent.mx_EventListSummary_summary {
  font-size: 1.3rem;
}

.mx_FacePile .mx_FacePile_faces {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
  vertical-align: middle;
}

.mx_FacePile .mx_FacePile_faces > .mx_FacePile_face + .mx_FacePile_face {
  margin-right: -8px;
}

.mx_FacePile .mx_FacePile_faces .mx_BaseAvatar_image {
  border: 1px solid #fff;
}

.mx_FacePile .mx_FacePile_faces .mx_BaseAvatar_initial {
  margin: 1px;
}

.mx_FacePile .mx_FacePile_faces .mx_FacePile_more {
  position: relative;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  background-color: hsla(0, 0%, 91%, 0.77);
}

.mx_FacePile .mx_FacePile_faces .mx_FacePile_more:before {
  content: "";
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  height: inherit;
  width: inherit;
  background: #8d99a5;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: 20px;
  mask-size: 20px;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-image: url(../../img/element-icons/room/ellipsis.b82ece6.svg);
  mask-image: url(../../img/element-icons/room/ellipsis.b82ece6.svg);
}

.mx_FacePile .mx_FacePile_summary {
  margin-left: 12px;
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: #8d99a5;
}

.mx_Field {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  min-width: 0;
  position: relative;
  margin: 1em 0;
  border-radius: 4px;
  -webkit-transition: border-color 0.25s;
  transition: border-color 0.25s;
  border: 1px solid #e7e7e7;
}

.mx_Field_prefix {
  border-right: 1px solid #e7e7e7;
}

.mx_Field_postfix {
  border-left: 1px solid #e7e7e7;
}

.mx_Field input,
.mx_Field select,
.mx_Field textarea {
  font-weight: 400;
  font-family: Inter, Twemoji, Apple Color Emoji, Segoe UI Emoji, Arial,
    Helvetica, Sans-Serif, Noto Color Emoji;
  font-size: 1.4rem;
  border: none;
  border-radius: 4px;
  padding: 8px 9px;
  color: #2e2f32;
  background-color: #fff;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  min-width: 0;
}

.mx_Field select {
  -moz-appearance: none;
  -webkit-appearance: none;
}

.mx_Field_select:before {
  content: "";
  position: absolute;
  top: 15px;
  right: 10px;
  width: 10px;
  height: 6px;
  -webkit-mask: url(../../img/feather-customised/dropdown-arrow.1a22ebc.svg);
  mask: url(../../img/feather-customised/dropdown-arrow.1a22ebc.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  background-color: #2e2f32;
  z-index: 1;
  pointer-events: none;
}

.mx_Field:focus-within {
  border-color: #238cf5;
}

.mx_Field input:focus,
.mx_Field select:focus,
.mx_Field textarea:focus {
  outline: 0;
}

.mx_Field input::-webkit-input-placeholder,
.mx_Field textarea::-webkit-input-placeholder {
  -webkit-transition: color 0.25s ease-in 0s;
  transition: color 0.25s ease-in 0s;
  color: transparent;
}

.mx_Field input::-moz-placeholder,
.mx_Field textarea::-moz-placeholder {
  -moz-transition: color 0.25s ease-in 0s;
  transition: color 0.25s ease-in 0s;
  color: transparent;
}

.mx_Field input:-ms-input-placeholder,
.mx_Field textarea:-ms-input-placeholder {
  -ms-transition: color 0.25s ease-in 0s;
  transition: color 0.25s ease-in 0s;
  color: transparent;
}

.mx_Field input::-ms-input-placeholder,
.mx_Field textarea::-ms-input-placeholder {
  -ms-transition: color 0.25s ease-in 0s;
  transition: color 0.25s ease-in 0s;
  color: transparent;
}

.mx_Field input::placeholder,
.mx_Field textarea::placeholder {
  -webkit-transition: color 0.25s ease-in 0s;
  transition: color 0.25s ease-in 0s;
  color: transparent;
}

.mx_Field input:placeholder-shown:focus::-webkit-input-placeholder,
.mx_Field textarea:placeholder-shown:focus::-webkit-input-placeholder {
  -webkit-transition: color 0.25s ease-in 0.1s;
  transition: color 0.25s ease-in 0.1s;
  color: #888;
}

.mx_Field input:placeholder-shown:focus::-moz-placeholder,
.mx_Field textarea:placeholder-shown:focus::-moz-placeholder {
  -moz-transition: color 0.25s ease-in 0.1s;
  transition: color 0.25s ease-in 0.1s;
  color: #888;
}

.mx_Field input:placeholder-shown:focus:-ms-input-placeholder,
.mx_Field textarea:placeholder-shown:focus:-ms-input-placeholder {
  -ms-transition: color 0.25s ease-in 0.1s;
  transition: color 0.25s ease-in 0.1s;
  color: #888;
}

.mx_Field input:placeholder-shown:focus::-ms-input-placeholder,
.mx_Field textarea:placeholder-shown:focus::-ms-input-placeholder {
  -ms-transition: color 0.25s ease-in 0.1s;
  transition: color 0.25s ease-in 0.1s;
  color: #888;
}

.mx_Field input:-moz-placeholder-shown:focus::placeholder,
.mx_Field textarea:-moz-placeholder-shown:focus::placeholder {
  -moz-transition: color 0.25s ease-in 0.1s;
  transition: color 0.25s ease-in 0.1s;
  color: #888;
}

.mx_Field input:-ms-input-placeholder:focus::placeholder,
.mx_Field textarea:-ms-input-placeholder:focus::placeholder {
  -ms-transition: color 0.25s ease-in 0.1s;
  transition: color 0.25s ease-in 0.1s;
  color: #888;
}

.mx_Field input:placeholder-shown:focus::placeholder,
.mx_Field textarea:placeholder-shown:focus::placeholder {
  -webkit-transition: color 0.25s ease-in 0.1s;
  transition: color 0.25s ease-in 0.1s;
  color: #888;
}

.mx_Field label {
  -webkit-transition: font-size 0.25s ease-out 0.1s, color 0.25s ease-out 0.1s,
    top 0.25s ease-out 0.1s, background-color 0.25s ease-out 0.1s;
  transition: font-size 0.25s ease-out 0.1s, color 0.25s ease-out 0.1s,
    top 0.25s ease-out 0.1s, background-color 0.25s ease-out 0.1s;
  color: #2e2f32;
  background-color: transparent;
  font-size: 1.4rem;
  position: absolute;
  left: 0;
  top: 0;
  margin: 7px 8px;
  padding: 2px;
  pointer-events: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: calc(100% - 20px);
}

.mx_Field input:not(:-moz-placeholder-shown) + label,
.mx_Field textarea:not(:-moz-placeholder-shown) + label {
  -moz-transition: font-size 0.25s ease-out 0s, color 0.25s ease-out 0s,
    top 0.25s ease-out 0s, background-color 0.25s ease-out 0s;
  transition: font-size 0.25s ease-out 0s, color 0.25s ease-out 0s,
    top 0.25s ease-out 0s, background-color 0.25s ease-out 0s;
  font-size: 1rem;
  top: -13px;
  padding: 0 2px;
  background-color: #fff;
  pointer-events: auto;
}

.mx_Field input:not(:-ms-input-placeholder) + label,
.mx_Field textarea:not(:-ms-input-placeholder) + label {
  -ms-transition: font-size 0.25s ease-out 0s, color 0.25s ease-out 0s,
    top 0.25s ease-out 0s, background-color 0.25s ease-out 0s;
  transition: font-size 0.25s ease-out 0s, color 0.25s ease-out 0s,
    top 0.25s ease-out 0s, background-color 0.25s ease-out 0s;
  font-size: 1rem;
  top: -13px;
  padding: 0 2px;
  background-color: #fff;
  pointer-events: auto;
}

.mx_Field_labelAlwaysTopLeft label,
.mx_Field input:focus + label,
.mx_Field input:not(:placeholder-shown) + label,
.mx_Field select + label,
.mx_Field textarea:focus + label,
.mx_Field textarea:not(:placeholder-shown) + label {
  -webkit-transition: font-size 0.25s ease-out 0s, color 0.25s ease-out 0s,
    top 0.25s ease-out 0s, background-color 0.25s ease-out 0s;
  transition: font-size 0.25s ease-out 0s, color 0.25s ease-out 0s,
    top 0.25s ease-out 0s, background-color 0.25s ease-out 0s;
  font-size: 1rem;
  top: -13px;
  padding: 0 2px;
  background-color: #fff;
  pointer-events: auto;
}

.mx_Field input:focus + label,
.mx_Field select:focus + label,
.mx_Field textarea:focus + label {
  color: #238cf5;
}

.mx_Field input:disabled,
.mx_Field input:disabled + label,
.mx_Field select:disabled,
.mx_Field select:disabled + label,
.mx_Field textarea:disabled,
.mx_Field textarea:disabled + label {
  background-color: #fff;
  color: #888;
}

.mx_Field_valid.mx_Field,
.mx_Field_valid.mx_Field:focus-within {
  border-color: #0dbd8b;
}

.mx_Field_valid.mx_Field:focus-within label,
.mx_Field_valid.mx_Field label {
  color: #0dbd8b;
}

.mx_Field_invalid.mx_Field,
.mx_Field_invalid.mx_Field:focus-within {
  border-color: #ff4b55;
}

.mx_Field_invalid.mx_Field:focus-within label,
.mx_Field_invalid.mx_Field label {
  color: #ff4b55;
}

.mx_Field_tooltip {
  margin-top: -12px;
  margin-left: 4px;
  width: 200px;
}

.mx_Field_tooltip.mx_Field_valid {
  -webkit-animation: mx_fadeout 1s 2s forwards;
  animation: mx_fadeout 1s 2s forwards;
}

.mx_Field .mx_Dropdown_input {
  border: initial;
  border-radius: 0;
  border-radius: initial;
}

.mx_Field .mx_CountryDropdown {
  width: 7.8rem;
}

.mx_ImageView {
  width: 100%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.mx_ImageView,
.mx_ImageView_image_wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
}

.mx_ImageView_image_wrapper {
  pointer-events: auto;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  overflow: hidden;
}

.mx_ImageView_image {
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

.mx_ImageView_panel {
  width: 100%;
  height: 68px;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.mx_ImageView_info_wrapper,
.mx_ImageView_panel {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_ImageView_info_wrapper {
  pointer-events: auto;
  padding-left: 32px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  color: #fff;
}

.mx_ImageView_info {
  padding-left: 12px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.mx_ImageView_info_sender {
  font-weight: 700;
}

.mx_ImageView_toolbar {
  padding-right: 16px;
  pointer-events: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  grid-gap: 14px;
  gap: 14px;
}

.mx_ImageView_button {
  padding: 5px;
  display: block;
}

.mx_ImageView_button:before {
  content: "";
  height: 22px;
  width: 22px;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-position: center;
  mask-position: center;
  display: block;
  background-color: #c1c6cd;
}

.mx_ImageView_button_rotateCW:before {
  -webkit-mask-image: url(../../img/image-view/rotate-cw.60d903e.svg);
  mask-image: url(../../img/image-view/rotate-cw.60d903e.svg);
}

.mx_ImageView_button_rotateCCW:before {
  -webkit-mask-image: url(../../img/image-view/rotate-ccw.b28ae4a.svg);
  mask-image: url(../../img/image-view/rotate-ccw.b28ae4a.svg);
}

.mx_ImageView_button_zoomOut:before {
  -webkit-mask-image: url(../../img/image-view/zoom-out.8506f80.svg);
  mask-image: url(../../img/image-view/zoom-out.8506f80.svg);
}

.mx_ImageView_button_zoomIn:before {
  -webkit-mask-image: url(../../img/image-view/zoom-in.3b3f32e.svg);
  mask-image: url(../../img/image-view/zoom-in.3b3f32e.svg);
}

.mx_ImageView_button_download:before {
  -webkit-mask-image: url(../../img/image-view/download.2eac468.svg);
  mask-image: url(../../img/image-view/download.2eac468.svg);
}

.mx_ImageView_button_more:before {
  -webkit-mask-image: url(../../img/image-view/more.0427c6c.svg);
  mask-image: url(../../img/image-view/more.0427c6c.svg);
}

.mx_ImageView_button_close {
  padding: 0;
  border-radius: 100%;
  background: #21262c;
}

.mx_ImageView_button_close:before {
  width: 32px;
  height: 32px;
  -webkit-mask-image: url(../../img/image-view/close.97d1731.svg);
  mask-image: url(../../img/image-view/close.97d1731.svg);
  -webkit-mask-size: 40%;
  mask-size: 40%;
}

.mx_InfoTooltip_icon,
.mx_InfoTooltip_icon:before {
  width: 16px;
  height: 16px;
  display: inline-block;
}

.mx_InfoTooltip_icon:before {
  background-color: #61708b;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 16px;
  mask-size: 16px;
  -webkit-mask-position: center;
  mask-position: center;
  content: "";
  vertical-align: middle;
}

.mx_InfoTooltip_icon_info:before {
  -webkit-mask-image: url(../../img/element-icons/info.dc07e19.svg);
  mask-image: url(../../img/element-icons/info.dc07e19.svg);
}

.mx_InfoTooltip_icon_warning:before {
  -webkit-mask-image: url(../../img/element-icons/warning.d65f5be.svg);
  mask-image: url(../../img/element-icons/warning.d65f5be.svg);
}

.mx_InlineSpinner {
  display: inline;
}

.mx_InlineSpinner_icon,
.mx_InlineSpinner img {
  margin: 0 6px;
  vertical-align: -3px;
}

.mx_InlineSpinner_icon {
  display: inline-block;
}

.mx_InviteReason {
  position: relative;
  margin-bottom: 1em;
}

.mx_InviteReason .mx_InviteReason_reason {
  visibility: visible;
}

.mx_InviteReason .mx_InviteReason_view {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
  color: #737d8c;
}

.mx_InviteReason .mx_InviteReason_view:before {
  content: "";
  margin-right: 8px;
  background-color: #737d8c;
  -webkit-mask-image: url(../../img/feather-customised/eye.52aa0d2.svg);
  mask-image: url(../../img/feather-customised/eye.52aa0d2.svg);
  display: inline-block;
  width: 18px;
  height: 14px;
}

.mx_InviteReason_hidden .mx_InviteReason_reason {
  visibility: hidden;
}

.mx_InviteReason_hidden .mx_InviteReason_view {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.mx_ManageIntegsButton_error {
  position: relative;
  float: right;
  cursor: not-allowed;
}

.mx_ManageIntegsButton_error img {
  position: absolute;
  right: -5px;
  top: -5px;
}

.mx_ManageIntegsButton_errorPopup {
  position: absolute;
  top: 110%;
  left: -275%;
  width: 550%;
  padding: 30%;
  font-size: 10pt;
  line-height: 1.5em;
  border-radius: 5px;
  background-color: #0dbd8b;
  color: #fff;
  text-align: center;
  z-index: 1000;
}

.mx_ManageIntegsButton_error .mx_ManageIntegsButton_errorPopup {
  display: none;
}

.mx_ManageIntegsButton_error:hover .mx_ManageIntegsButton_errorPopup {
  display: inline;
}

.mx_MiniAvatarUploader {
  position: relative;
  width: -webkit-min-content;
  width: -moz-min-content;
  width: min-content;
}

.mx_MiniAvatarUploader .mx_Tooltip {
  display: inline-block;
  position: absolute;
  z-index: unset;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  left: 72px;
  top: 0;
}

.mx_MiniAvatarUploader .mx_MiniAvatarUploader_indicator {
  position: absolute;
  height: 26px;
  width: 26px;
  right: -6px;
  bottom: -6px;
  background-color: #fff;
  border-radius: 50%;
  z-index: 1;
}

.mx_MiniAvatarUploader
  .mx_MiniAvatarUploader_indicator
  .mx_MiniAvatarUploader_cameraIcon {
  height: 100%;
  width: 100%;
  background-color: #737d8c;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-image: url(../../img/element-icons/camera.a81a395.svg);
  mask-image: url(../../img/element-icons/camera.a81a395.svg);
  -webkit-mask-size: 16px;
  mask-size: 16px;
  z-index: 2;
}

.mx_MiniAvatarUploader_input {
  display: none;
}

.mx_PowerSelector {
  width: 100%;
}

.mx_PowerSelector .mx_Field input,
.mx_PowerSelector .mx_Field select {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

progress.mx_ProgressBar {
  height: 6px;
  width: 60px;
  overflow: hidden;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  border-radius: 6px;
}

progress.mx_ProgressBar::-moz-progress-bar {
  border-radius: 6px;
}

progress.mx_ProgressBar::-webkit-progress-bar,
progress.mx_ProgressBar::-webkit-progress-value {
  border-radius: 6px;
}

progress.mx_ProgressBar {
  color: #0dbd8b;
}

progress.mx_ProgressBar::-moz-progress-bar {
  background-color: #0dbd8b;
}

progress.mx_ProgressBar::-webkit-progress-value {
  background-color: #0dbd8b;
}

progress.mx_ProgressBar {
  background-color: rgba(141, 151, 165, 0.2);
}

progress.mx_ProgressBar::-webkit-progress-bar {
  background-color: rgba(141, 151, 165, 0.2);
}

progress.mx_ProgressBar ::-webkit-progress-value {
  -webkit-transition: width 1s;
  transition: width 1s;
}

progress.mx_ProgressBar ::-moz-progress-bar {
  -moz-transition: padding-bottom 1s;
  transition: padding-bottom 1s;
  padding-bottom: var(--value);
  transform-origin: 0 0;
  transform: rotate(-90deg) translateX(-15px);
  padding-left: 15px;
  height: 0;
}

.mx_QRCode img {
  border-radius: 8px;
}

.mx_ReplyThread {
  margin: 0 0 8px;
  padding: 0 10px;
  border-left: 2px solid #0dbd8b;
  border-radius: 2px;
}

.mx_ReplyThread .mx_ReplyThread_show {
  cursor: pointer;
}

.mx_ReplyThread.mx_ReplyThread_color1 {
  border-left-color: #368bd6;
}

.mx_ReplyThread.mx_ReplyThread_color2 {
  border-left-color: #ac3ba8;
}

.mx_ReplyThread.mx_ReplyThread_color3 {
  border-left-color: #0dbd8b;
}

.mx_ReplyThread.mx_ReplyThread_color4 {
  border-left-color: #e64f7a;
}

.mx_ReplyThread.mx_ReplyThread_color5 {
  border-left-color: #ff812d;
}

.mx_ReplyThread.mx_ReplyThread_color6 {
  border-left-color: #2dc2c5;
}

.mx_ReplyThread.mx_ReplyThread_color7 {
  border-left-color: #5c56f5;
}

.mx_ReplyThread.mx_ReplyThread_color8 {
  border-left-color: #74d12c;
}

.mx_ResizeHandle {
  cursor: row-resize;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  z-index: 100;
}

.mx_ResizeHandle.mx_ResizeHandle_horizontal {
  margin: 0 -5px;
  padding: 0 5px;
  cursor: col-resize;
}

.mx_ResizeHandle.mx_ResizeHandle_vertical {
  margin: -5px 0;
  padding: 5px 0;
  cursor: row-resize;
}

.mx_MatrixChat > .mx_ResizeHandle.mx_ResizeHandle_horizontal {
  margin: 0 -10px 0 0;
  padding: 0 8px 0 0;
}

.mx_ResizeHandle > div {
  background: transparent;
}

.mx_ResizeHandle.mx_ResizeHandle_horizontal > div {
  width: 1px;
  height: 100%;
}

.mx_ResizeHandle.mx_ResizeHandle_vertical > div {
  height: 1px;
}

.mx_AtRoomPill,
.mx_GroupPill,
.mx_RoomPill,
.mx_UserPill {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  vertical-align: middle;
  border-radius: 1.6rem;
  line-height: 1.5rem;
  padding-left: 0;
}

a.mx_Pill {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: calc(100% - 1ch);
}

.mx_Pill {
  padding: 0.1rem 0.4em 0.1rem 0.1rem;
  vertical-align: text-top;
  line-height: 1.7rem;
}

.mx_EventTile_content .markdown-body a.mx_GroupPill,
.mx_GroupPill {
  color: #fff;
  background-color: #aaa;
}

.mx_EventTile_content .markdown-body a.mx_Pill {
  text-decoration: none;
}

.mx_EventTile_content .markdown-body a.mx_UserPill,
.mx_UserPill {
  color: #2e2f32;
  background-color: rgba(0, 0, 0, 0.1);
}

.mx_UserPill_selected {
  background-color: #0dbd8b !important;
}

.mx_EventTile_content .markdown-body a.mx_AtRoomPill,
.mx_EventTile_content .mx_AtRoomPill,
.mx_EventTile_highlight .mx_EventTile_content .markdown-body a.mx_UserPill_me,
.mx_MessageComposer_input .mx_AtRoomPill {
  color: #fff;
  background-color: #ff4b55;
}

.mx_EventTile_content .markdown-body a.mx_GroupPill,
.mx_EventTile_content .markdown-body a.mx_RoomPill,
.mx_GroupPill,
.mx_RoomPill {
  color: #fff;
  background-color: #aaa;
}

.mx_EventTile_body .mx_GroupPill,
.mx_EventTile_body .mx_RoomPill,
.mx_EventTile_body .mx_UserPill {
  cursor: pointer;
}

.mx_AtRoomPill .mx_BaseAvatar,
.mx_GroupPill .mx_BaseAvatar,
.mx_RoomPill .mx_BaseAvatar,
.mx_UserPill .mx_BaseAvatar {
  position: relative;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 10rem;
  margin-right: 0.24rem;
}

.mx_Markdown_BOLD {
  font-weight: 700;
}

.mx_Markdown_ITALIC {
  font-style: italic;
}

.mx_Markdown_CODE {
  padding: 0.2em 0;
  margin: 0;
  font-size: 85%;
  background-color: rgba(0, 0, 0, 0.04);
  border-radius: 3px;
}

.mx_Markdown_HR {
  display: block;
  background: #e9e9e9;
}

.mx_Markdown_STRIKETHROUGH {
  text-decoration: line-through;
}

.mx_RoleButton {
  margin-left: 4px;
  margin-right: 4px;
  cursor: pointer;
  display: inline-block;
}

.mx_RoleButton object {
  pointer-events: none;
}

.mx_RoleButton_tooltip {
  display: inline-block;
  position: relative;
  top: -25px;
  left: 6px;
}

.mx_RoomAliasField {
  -webkit-box-flex: 0;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  min-width: 0;
  max-width: 100%;
}

.mx_RoomAliasField input {
  width: 150px;
  padding-left: 0;
  padding-right: 0;
}

.mx_RoomAliasField input::-webkit-input-placeholder {
  color: #888;
  font-weight: 400;
}

.mx_RoomAliasField input::-moz-placeholder {
  color: #888;
  font-weight: 400;
}

.mx_RoomAliasField input:-ms-input-placeholder {
  color: #888;
  font-weight: 400;
}

.mx_RoomAliasField input::-ms-input-placeholder {
  color: #888;
  font-weight: 400;
}

.mx_RoomAliasField input::placeholder {
  color: #888;
  font-weight: 400;
}

.mx_RoomAliasField .mx_Field_postfix,
.mx_RoomAliasField .mx_Field_prefix {
  color: #888;
  border-left: none;
  border-right: none;
  font-weight: 600;
  padding: 9px 10px;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}

.mx_RoomAliasField .mx_Field_postfix {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: calc(100% - 180px);
}

.mx_SSOButtons {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.mx_SSOButtons .mx_SSOButtons_row + .mx_SSOButtons_row {
  margin-top: 16px;
}

.mx_SSOButtons .mx_SSOButton {
  position: relative;
  width: 100%;
  padding: 7px 32px;
  text-align: center;
  border-radius: 8px;
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 600;
  border: 1px solid #e7e7e7;
  color: #2e2f32;
}

.mx_SSOButtons .mx_SSOButton > img {
  -o-object-fit: contain;
  object-fit: contain;
  position: absolute;
  left: 8px;
  top: 4px;
}

.mx_SSOButtons .mx_SSOButton_default {
  color: #0dbd8b;
  background-color: #fff;
  border-color: #0dbd8b;
}

.mx_SSOButtons .mx_SSOButton_default.mx_SSOButton_primary {
  color: #fff;
  background-color: #0dbd8b;
}

.mx_SSOButtons .mx_SSOButton_mini {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  min-width: 50px;
  padding: 12px;
}

.mx_SSOButtons .mx_SSOButton_mini > img {
  left: 12px;
  top: 12px;
}

.mx_SSOButtons .mx_SSOButton_mini + .mx_SSOButton_mini {
  margin-left: 16px;
}

.mx_ServerPicker {
  margin-bottom: 14px;
  border-bottom: 1px solid rgba(141, 151, 165, 0.2);
  display: grid;
  grid-template-columns: auto -webkit-min-content;
  grid-template-columns: auto min-content;
  grid-template-rows: auto auto auto;
  font-size: 1.4rem;
  line-height: 2rem;
}

.mx_ServerPicker > h3 {
  font-weight: 600;
  margin: 0 0 20px;
  grid-column: 1;
  grid-row: 1;
}

.mx_ServerPicker .mx_ServerPicker_help {
  width: 20px;
  height: 20px;
  background-color: #c1c6cd;
  border-radius: 10px;
  grid-column: 2;
  grid-row: 1;
  margin-left: auto;
  text-align: center;
  color: #fff;
  font-size: 16px;
  position: relative;
}

.mx_ServerPicker .mx_ServerPicker_help:before {
  content: "";
  width: 24px;
  height: 24px;
  position: absolute;
  top: -2px;
  left: -2px;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-image: url(../../img/element-icons/i.80d84f3.svg);
  mask-image: url(../../img/element-icons/i.80d84f3.svg);
  background: #fff;
}

.mx_ServerPicker .mx_ServerPicker_server {
  color: #232f32;
  grid-column: 1;
  grid-row: 2;
  margin-bottom: 16px;
}

.mx_ServerPicker .mx_ServerPicker_change {
  padding: 0;
  font-size: inherit;
  grid-column: 2;
  grid-row: 2;
}

.mx_ServerPicker .mx_ServerPicker_desc {
  margin-top: -12px;
  color: #8d99a5;
  grid-column: 1/2;
  grid-row: 3;
  margin-bottom: 16px;
}

.mx_ServerPicker_helpDialog .mx_Dialog_content {
  width: 456px;
}

.mx_Slider {
  position: relative;
  margin: 0;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.mx_Slider_dotContainer {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.mx_Slider_bar,
.mx_Slider_dotContainer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.mx_Slider_bar {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: absolute;
  height: 1em;
  width: 100%;
  padding: 0 0.5em;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_Slider_bar > hr {
  width: 100%;
  height: 0.4em;
  background-color: #c1c9d6;
  border: 0;
}

.mx_Slider_selection {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: calc(100% - 1em);
  height: 1em;
  position: absolute;
  pointer-events: none;
}

.mx_Slider_selectionDot {
  position: absolute;
  width: 1.1em;
  height: 1.1em;
  background-color: #0dbd8b;
  border-radius: 50%;
  -webkit-box-shadow: 0 0 6px #d3d3d3;
  box-shadow: 0 0 6px #d3d3d3;
  z-index: 10;
}

.mx_Slider_selection > hr {
  margin: 0;
  border: 0.2em solid #0dbd8b;
}

.mx_Slider_dot {
  height: 1em;
  width: 1em;
  border-radius: 50%;
  background-color: #c1c9d6;
  z-index: 0;
}

.mx_Slider_dotActive {
  background-color: #0dbd8b;
}

.mx_Slider_dotValue {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #c1c9d6;
}

.mx_Slider_labelContainer {
  width: 1em;
}

.mx_Slider_label {
  position: relative;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  left: -50%;
}

.mx_Spinner {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.mx_MatrixChat_middlePanel .mx_Spinner {
  height: auto;
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

.mx_Spinner_icon {
  background-color: #2e2f32;
  -webkit-mask: url(../../img/spinner.5a0438d.svg);
  mask: url(../../img/spinner.5a0438d.svg);
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-animation: spin 1.1s steps(12) infinite;
  animation: spin 1.1s steps(12) infinite;
}

.mx_Checkbox {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.mx_Checkbox input[type="checkbox"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
  padding: 0;
}

.mx_Checkbox input[type="checkbox"] + label {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.mx_Checkbox input[type="checkbox"] + label > .mx_Checkbox_background {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  position: relative;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  height: 1.6rem;
  width: 1.6rem;
  size: 0.5rem;
  border: 0.15rem solid rgba(97, 112, 139, 0.5);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 0.4rem;
}

.mx_Checkbox input[type="checkbox"] + label > .mx_Checkbox_background img {
  display: none;
  height: 100%;
  width: 100%;
  -webkit-filter: invert(100%);
  filter: invert(100%);
}

.mx_Checkbox input[type="checkbox"]:checked + label > .mx_Checkbox_background {
  background: #0dbd8b;
  border-color: #0dbd8b;
}

.mx_Checkbox
  input[type="checkbox"]:checked
  + label
  > .mx_Checkbox_background
  img {
  display: block;
}

.mx_Checkbox input[type="checkbox"] + label > :not(.mx_Checkbox_background) {
  margin-left: 10px;
}

.mx_Checkbox input[type="checkbox"]:disabled + label {
  opacity: 0.5;
  cursor: not-allowed;
}

.mx_Checkbox
  input[type="checkbox"]:checked:disabled
  + label
  > .mx_Checkbox_background {
  background-color: #0dbd8b;
  border-color: #0dbd8b;
}

.mx_Checkbox
  input[type="checkbox"].focus-visible
  + label
  .mx_Checkbox_background {
  outline-width: 2px;
  outline-style: solid;
  outline-color: Highlight;
}

@media (-webkit-min-device-pixel-ratio: 0) {
  .mx_Checkbox
    input[type="checkbox"].focus-visible
    + label
    .mx_Checkbox_background {
    outline-color: -webkit-focus-ring-color;
    outline-style: auto;
  }
}

.mx_RadioButton {
  position: relative;
  -webkit-box-align: baseline;
  -ms-flex-align: baseline;
  align-items: baseline;
}

.mx_RadioButton,
.mx_RadioButton > .mx_RadioButton_content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.mx_RadioButton > .mx_RadioButton_content {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-left: 8px;
  margin-right: 8px;
}

.mx_RadioButton .mx_RadioButton_spacer {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  height: 1.6rem;
  width: 1.6rem;
}

.mx_RadioButton input[type="radio"] {
  margin: 0;
  padding: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.mx_RadioButton input[type="radio"] + div {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 1.6rem;
  width: 1.6rem;
  margin-left: 2px;
  border: 0.15rem solid #61708b;
  border-radius: 1.6rem;
}

.mx_RadioButton input[type="radio"] + div > div {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 0.8rem;
}

.mx_RadioButton input[type="radio"].focus-visible + div {
  outline-width: 2px;
  outline-style: solid;
  outline-color: Highlight;
}

@media (-webkit-min-device-pixel-ratio: 0) {
  .mx_RadioButton input[type="radio"].focus-visible + div {
    outline-color: -webkit-focus-ring-color;
    outline-style: auto;
  }
}

.mx_RadioButton input[type="radio"]:checked + div {
  border-color: #0dbd8b;
}

.mx_RadioButton input[type="radio"]:checked + div > div {
  background: #0dbd8b;
}

.mx_RadioButton input[type="radio"]:disabled + div,
.mx_RadioButton input[type="radio"]:disabled + div + span {
  opacity: 0.5;
  cursor: not-allowed;
}

.mx_RadioButton input[type="radio"]:disabled + div {
  border-color: #61708b;
}

.mx_RadioButton input[type="radio"]:checked:disabled + div > div {
  background-color: #61708b;
}

.mx_RadioButton .mx_RadioButton_innerLabel {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  top: 4px;
}

.mx_RadioButton_outlined {
  border: 1px solid #e3e8f0;
  border-radius: 8px;
}

.mx_RadioButton_checked {
  border-color: #0dbd8b;
}

.mx_SyntaxHighlight {
  background: none !important;
  color: #747474 !important;
}

.mx_TagComposer .mx_TagComposer_input {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.mx_TagComposer .mx_TagComposer_input .mx_Field {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin: 0;
}

.mx_TagComposer .mx_TagComposer_input .mx_AccessibleButton {
  min-width: 70px;
  padding: 0;
  margin-left: 16px;
}

.mx_TagComposer .mx_TagComposer_input .mx_AccessibleButton,
.mx_TagComposer .mx_TagComposer_input .mx_Field,
.mx_TagComposer .mx_TagComposer_input .mx_Field input {
  border-radius: 8px;
}

.mx_TagComposer .mx_TagComposer_tags {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-top: 12px;
}

.mx_TagComposer .mx_TagComposer_tags .mx_TagComposer_tag {
  padding: 6px 8px 8px 12px;
  position: relative;
  margin-right: 12px;
  margin-top: 12px;
}

.mx_TagComposer .mx_TagComposer_tags .mx_TagComposer_tag:before {
  content: "";
  border-radius: 20px;
  background-color: #8d99a5;
  opacity: 0.15;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.mx_TagComposer .mx_TagComposer_tags .mx_AccessibleButton {
  background-image: url(../../img/subtract.880420e.svg);
  width: 16px;
  height: 16px;
  margin-left: 8px;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
}

.mx_TextWithTooltip_tooltip {
  display: none;
}

.mx_ToggleSwitch {
  -webkit-transition: background-color 0.2s ease-out 0.1s;
  transition: background-color 0.2s ease-out 0.1s;
  width: 4.4rem;
  height: 2rem;
  border-radius: 1.5rem;
  padding: 2px;
  background-color: #c1c9d6;
  opacity: 0.5;
}

.mx_ToggleSwitch_enabled {
  cursor: pointer;
  opacity: 1;
}

.mx_ToggleSwitch.mx_ToggleSwitch_on {
  background-color: #0dbd8b;
}

.mx_ToggleSwitch.mx_ToggleSwitch_on > .mx_ToggleSwitch_ball {
  left: calc(100% - 2rem);
}

.mx_ToggleSwitch_ball {
  position: relative;
  width: 2rem;
  height: 2rem;
  border-radius: 2rem;
  background-color: #fff;
  -webkit-transition: left 0.15s ease-out 0.1s;
  transition: left 0.15s ease-out 0.1s;
  left: 0;
}

@-webkit-keyframes mx_fadein {
  0% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes mx_fadein {
  0% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@-webkit-keyframes mx_fadeout {
  0% {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes mx_fadeout {
  0% {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.mx_Tooltip_chevron {
  position: absolute;
  left: -7px;
  top: 10px;
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-right: 7px solid #e7e7e7;
  border-bottom: 7px solid transparent;
}

.mx_Tooltip_chevron:after {
  content: "";
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-right: 6px solid #fff;
  border-bottom: 6px solid transparent;
  position: absolute;
  top: -6px;
  left: 1px;
}

.mx_Tooltip {
  position: fixed;
  border-radius: 8px;
  -webkit-box-shadow: 4px 4px 12px 0 rgba(118, 131, 156, 0.6);
  box-shadow: 4px 4px 12px 0 rgba(118, 131, 156, 0.6);
  z-index: 6000;
  padding: 10px;
  pointer-events: none;
  line-height: 1.4rem;
  font-size: 1.2rem;
  font-weight: 500;
  max-width: 200px;
  word-break: break-word;
  margin-right: 50px;
  background-color: #27303a;
  color: #fff;
  border: 0;
  text-align: center;
}

.mx_Tooltip,
.mx_Tooltip .mx_Tooltip_chevron {
  display: none;
}

.mx_Tooltip.mx_Tooltip_visible {
  -webkit-animation: mx_fadein 0.2s forwards;
  animation: mx_fadein 0.2s forwards;
}

.mx_Tooltip.mx_Tooltip_invisible {
  -webkit-animation: mx_fadeout 0.1s forwards;
  animation: mx_fadeout 0.1s forwards;
}

.mx_Field_tooltip {
  background-color: #fff;
  color: #2e2f32;
  border: 1px solid #e7e7e7;
  text-align: unset;
}

.mx_Field_tooltip .mx_Tooltip_chevron {
  display: unset;
}

.mx_Tooltip_title {
  font-weight: 600;
}

.mx_Tooltip_sub {
  opacity: 0.7;
  margin-top: 4px;
}

.mx_TooltipButton {
  display: inline-block;
  width: 11px;
  height: 11px;
  margin-left: 5px;
  border: 2px solid #dbdbdb;
  border-radius: 20px;
  color: #dbdbdb;
  -webkit-transition: opacity 0.2s ease-in;
  transition: opacity 0.2s ease-in;
  opacity: 0.6;
  line-height: 1.1rem;
  text-align: center;
  cursor: pointer;
}

.mx_TooltipButton:hover {
  opacity: 1;
}

.mx_TooltipButton_container {
  position: relative;
  top: -18px;
  left: 4px;
}

.mx_TooltipButton_helpText {
  width: 400px;
  text-align: start;
  line-height: 17px !important;
}

.mx_Validation {
  position: relative;
}

.mx_Validation_details {
  padding-left: 20px;
  margin: 0;
}

.mx_Validation_description + .mx_Validation_details {
  margin: 1em 0 0;
}

.mx_Validation_detail {
  position: relative;
  font-weight: 400;
  list-style: none;
  margin-bottom: 0.5em;
}

.mx_Validation_detail:last-child {
  margin-bottom: 0;
}

.mx_Validation_detail:before {
  content: "";
  position: absolute;
  width: 14px;
  height: 14px;
  top: 0;
  left: -18px;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
}

.mx_Validation_detail.mx_Validation_valid {
  color: #0dbd8b;
}

.mx_Validation_detail.mx_Validation_valid:before {
  -webkit-mask-image: url(../../img/feather-customised/check.5745b4e.svg);
  mask-image: url(../../img/feather-customised/check.5745b4e.svg);
  background-color: #0dbd8b;
}

.mx_Validation_detail.mx_Validation_invalid {
  color: #ff4b55;
}

.mx_Validation_detail.mx_Validation_invalid:before {
  -webkit-mask-image: url(../../img/feather-customised/x.9662221.svg);
  mask-image: url(../../img/feather-customised/x.9662221.svg);
  background-color: #ff4b55;
}

.mx_EmojiPicker {
  width: 340px;
  height: 450px;
  border-radius: 4px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.mx_EmojiPicker_body {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
}

.mx_EmojiPicker_header {
  padding: 4px 8px 0;
  border-bottom: 1px solid #e9edf1;
}

.mx_EmojiPicker_anchor {
  padding: 8px 8px 6px;
  border: none;
  border-bottom: 2px solid transparent;
  background-color: transparent;
  border-radius: 4px 4px 0 0;
  width: 36px;
  height: 38px;
}

.mx_EmojiPicker_anchor:not(:disabled) {
  cursor: pointer;
}

.mx_EmojiPicker_anchor:not(:disabled):hover {
  background-color: #ddd;
  border-bottom: 2px solid #0dbd8b;
}

.mx_EmojiPicker_anchor:before {
  background-color: #2e2f32;
  content: "";
  display: inline-block;
  -webkit-mask-size: 100%;
  mask-size: 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  width: 100%;
  height: 100%;
}

.mx_EmojiPicker_anchor:disabled:before {
  background-color: #ddd;
}

.mx_EmojiPicker_anchor_activity:before {
  -webkit-mask-image: url(../../img/emojipicker/activity.921ec9f.svg);
  mask-image: url(../../img/emojipicker/activity.921ec9f.svg);
}

.mx_EmojiPicker_anchor_custom:before {
  -webkit-mask-image: url(../../img/emojipicker/custom.e1cd0fd.svg);
  mask-image: url(../../img/emojipicker/custom.e1cd0fd.svg);
}

.mx_EmojiPicker_anchor_flags:before {
  -webkit-mask-image: url(../../img/emojipicker/flags.1a8855e.svg);
  mask-image: url(../../img/emojipicker/flags.1a8855e.svg);
}

.mx_EmojiPicker_anchor_foods:before {
  -webkit-mask-image: url(../../img/emojipicker/foods.c6b220a.svg);
  mask-image: url(../../img/emojipicker/foods.c6b220a.svg);
}

.mx_EmojiPicker_anchor_nature:before {
  -webkit-mask-image: url(../../img/emojipicker/nature.6540b99.svg);
  mask-image: url(../../img/emojipicker/nature.6540b99.svg);
}

.mx_EmojiPicker_anchor_objects:before {
  -webkit-mask-image: url(../../img/emojipicker/objects.4d34f58.svg);
  mask-image: url(../../img/emojipicker/objects.4d34f58.svg);
}

.mx_EmojiPicker_anchor_people:before {
  -webkit-mask-image: url(../../img/emojipicker/people.e918580.svg);
  mask-image: url(../../img/emojipicker/people.e918580.svg);
}

.mx_EmojiPicker_anchor_places:before {
  -webkit-mask-image: url(../../img/emojipicker/places.7310322.svg);
  mask-image: url(../../img/emojipicker/places.7310322.svg);
}

.mx_EmojiPicker_anchor_recent:before {
  -webkit-mask-image: url(../../img/emojipicker/recent.13b42e2.svg);
  mask-image: url(../../img/emojipicker/recent.13b42e2.svg);
}

.mx_EmojiPicker_anchor_symbols:before {
  -webkit-mask-image: url(../../img/emojipicker/symbols.15a557d.svg);
  mask-image: url(../../img/emojipicker/symbols.15a557d.svg);
}

.mx_EmojiPicker_anchor_visible {
  border-bottom: 2px solid #0dbd8b;
}

.mx_EmojiPicker_search {
  margin: 8px;
  border-radius: 4px;
  border: 1px solid #e7e7e7;
  background-color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.mx_EmojiPicker_search input {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  border: none;
  padding: 8px 12px;
  border-radius: 4px 0;
}

.mx_EmojiPicker_search button {
  border: none;
  background-color: inherit;
  margin: 0;
  padding: 8px;
  -ms-flex-item-align: center;
  align-self: center;
  width: 32px;
  height: 32px;
}

.mx_EmojiPicker_search_clear {
  cursor: pointer;
}

.mx_EmojiPicker_search_icon {
  width: 16px;
  margin: 8px;
}

.mx_EmojiPicker_search_icon:not(.mx_EmojiPicker_search_clear) {
  pointer-events: none;
}

.mx_EmojiPicker_search_icon:after {
  -webkit-mask: url(../../img/emojipicker/search.973c315.svg) no-repeat;
  mask: url(../../img/emojipicker/search.973c315.svg) no-repeat;
  -webkit-mask-size: 100%;
  mask-size: 100%;
  background-color: #2e2f32;
  content: "";
  display: inline-block;
  width: 100%;
  height: 100%;
}

.mx_EmojiPicker_search_clear:after {
  -webkit-mask-image: url(../../img/emojipicker/delete.f7344c5.svg);
  mask-image: url(../../img/emojipicker/delete.f7344c5.svg);
}

.mx_EmojiPicker_category {
  padding: 0 12px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_EmojiPicker_category_label {
  width: 304px;
}

.mx_EmojiPicker_list {
  width: 304px;
  padding: 0;
  margin: 0;
}

.mx_EmojiPicker_item_wrapper {
  display: inline-block;
  list-style: none;
  width: 38px;
  cursor: pointer;
}

.mx_EmojiPicker_item {
  display: inline-block;
  font-size: 2rem;
  padding: 5px;
  width: 100%;
  height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-align: center;
  border-radius: 4px;
}

.mx_EmojiPicker_item:hover {
  background-color: #ddd;
}

.mx_EmojiPicker_item_selected {
  color: rgba(0, 0, 0, 0.5);
  border: 1px solid #0dbd8b;
  padding: 4px;
}

.mx_EmojiPicker_category_label,
.mx_EmojiPicker_preview_name {
  font-size: 1.6rem;
  font-weight: 600;
  margin: 0;
}

.mx_EmojiPicker_footer {
  border-top: 1px solid #e9edf1;
  min-height: 72px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_EmojiPicker_preview_emoji {
  font-size: 3.2rem;
  padding: 8px 16px;
}

.mx_EmojiPicker_preview_text {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.mx_EmojiPicker_name {
  text-transform: capitalize;
}

.mx_EmojiPicker_shortcode {
  color: #747474;
  font-size: 1.4rem;
}

.mx_EmojiPicker_shortcode:after,
.mx_EmojiPicker_shortcode:before {
  content: ":";
}

.mx_EmojiPicker_quick {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: distribute;
  justify-content: space-around;
}

.mx_EmojiPicker_quick_header .mx_EmojiPicker_name {
  margin-right: 4px;
}

.mx_GroupPublicity_toggle {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 8px;
}

.mx_GroupPublicity_toggle .mx_GroupTile {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  cursor: pointer;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
}

.mx_GroupPublicity_toggle .mx_ToggleSwitch {
  float: right;
}

.mx_GroupRoomTile {
  position: relative;
  color: #2e2f32;
  cursor: pointer;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_GroupRoomList_wrapper {
  padding: 10px;
}

.mx_GroupUserSettings_groupPublicity_scrollbox {
  height: 200px;
  border: 1px solid transparent;
  border-radius: 3px;
  overflow: hidden;
}

.mx_CallEvent {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  background-color: #f2f5f8;
  border-radius: 8px;
  margin: 10px auto;
  max-width: 75%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 60px;
}

.mx_CallEvent.mx_CallEvent_voice
  .mx_CallEvent_content_button_answer
  span:before,
.mx_CallEvent.mx_CallEvent_voice
  .mx_CallEvent_content_button_callBack
  span:before,
.mx_CallEvent.mx_CallEvent_voice .mx_CallEvent_type_icon:before {
  -webkit-mask-image: url(../../img/element-icons/call/voice-call.303eba8.svg);
  mask-image: url(../../img/element-icons/call/voice-call.303eba8.svg);
}

.mx_CallEvent.mx_CallEvent_video
  .mx_CallEvent_content_button_answer
  span:before,
.mx_CallEvent.mx_CallEvent_video
  .mx_CallEvent_content_button_callBack
  span:before,
.mx_CallEvent.mx_CallEvent_video .mx_CallEvent_type_icon:before {
  -webkit-mask-image: url(../../img/element-icons/call/video-call.f465ed0.svg);
  mask-image: url(../../img/element-icons/call/video-call.f465ed0.svg);
}

.mx_CallEvent .mx_CallEvent_info {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 12px;
}

.mx_CallEvent .mx_CallEvent_info .mx_CallEvent_info_basic {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-left: 10px;
}

.mx_CallEvent .mx_CallEvent_info .mx_CallEvent_info_basic .mx_CallEvent_sender {
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.8rem;
  margin-bottom: 3px;
}

.mx_CallEvent .mx_CallEvent_info .mx_CallEvent_info_basic .mx_CallEvent_type {
  font-weight: 400;
  color: #737d8c;
  font-size: 1.2rem;
  line-height: 1.3rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_CallEvent
  .mx_CallEvent_info
  .mx_CallEvent_info_basic
  .mx_CallEvent_type
  .mx_CallEvent_type_icon {
  height: 13px;
  width: 13px;
  margin-right: 5px;
}

.mx_CallEvent
  .mx_CallEvent_info
  .mx_CallEvent_info_basic
  .mx_CallEvent_type
  .mx_CallEvent_type_icon:before {
  content: "";
  position: absolute;
  height: 13px;
  width: 13px;
  background-color: #8d99a5;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
}

.mx_CallEvent .mx_CallEvent_content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #737d8c;
  margin-right: 16px;
}

.mx_CallEvent .mx_CallEvent_content .mx_CallEvent_content_button {
  height: 24px;
  padding: 0 12px;
  margin-left: 8px;
}

.mx_CallEvent .mx_CallEvent_content .mx_CallEvent_content_button span {
  padding: 8px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_CallEvent .mx_CallEvent_content .mx_CallEvent_content_button span:before {
  content: "";
  display: inline-block;
  background-color: #fff;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 16px;
  mask-size: 16px;
  width: 16px;
  height: 16px;
  margin-right: 8px;
}

.mx_CallEvent
  .mx_CallEvent_content
  .mx_CallEvent_content_button_reject
  span:before {
  -webkit-mask-image: url(../../img/element-icons/call/hangup.a207e54.svg);
  mask-image: url(../../img/element-icons/call/hangup.a207e54.svg);
}

.mx_CallEvent .mx_CallEvent_content .mx_CallEvent_content_tooltip {
  margin-right: 5px;
}

.mx_CallEvent .mx_CallEvent_content .mx_CallEvent_iconButton {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  margin-right: 8px;
}

.mx_CallEvent .mx_CallEvent_content .mx_CallEvent_iconButton:before {
  content: "";
  height: 16px;
  width: 16px;
  background-color: #8d99a5;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-position: center;
  mask-position: center;
}

.mx_CallEvent .mx_CallEvent_content .mx_CallEvent_silence:before {
  -webkit-mask-image: url(../../img/voip/silence.08cd2d6.svg);
  mask-image: url(../../img/voip/silence.08cd2d6.svg);
}

.mx_CallEvent .mx_CallEvent_content .mx_CallEvent_unSilence:before {
  -webkit-mask-image: url(../../img/voip/un-silence.cebdd12.svg);
  mask-image: url(../../img/voip/un-silence.cebdd12.svg);
}

.mx_CreateEvent:before {
  background-color: #91a1c0;
  -webkit-mask-image: url(../../img/element-icons/chat-bubbles.e2bd2cb.svg);
  mask-image: url(../../img/element-icons/chat-bubbles.e2bd2cb.svg);
}

.mx_DateSeparator {
  clear: both;
  margin: 4px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 1.4rem;
  color: #9e9e9e;
}

.mx_DateSeparator > hr {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 0px;
  flex: 1 1 0;
  height: 0;
  border: none;
  border-bottom: 1px solid transparent;
}

.mx_DateSeparator > div {
  margin: 0 25px;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}

.mx_EventTileBubble {
  background-color: #f2f5f8;
  padding: 10px;
  border-radius: 8px;
  margin: 10px auto;
  max-width: 75%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 24px minmax(0, 1fr) -webkit-min-content;
  grid-template-columns: 24px minmax(0, 1fr) min-content;
}

.mx_EventTileBubble:after,
.mx_EventTileBubble:before {
  position: relative;
  grid-column: 1;
  grid-row: 1/3;
  width: 16px;
  height: 16px;
  content: "";
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  margin-top: 4px;
}

.mx_EventTileBubble .mx_EventTileBubble_subtitle,
.mx_EventTileBubble .mx_EventTileBubble_title {
  overflow-wrap: break-word;
}

.mx_EventTileBubble .mx_EventTileBubble_title {
  font-weight: 600;
  font-size: 1.5rem;
  grid-column: 2;
  grid-row: 1;
}

.mx_EventTileBubble .mx_EventTileBubble_subtitle {
  font-size: 1.2rem;
  grid-column: 2;
  grid-row: 2;
}

.mx_MEmoteBody {
  white-space: pre-wrap;
}

.mx_MEmoteBody_sender {
  cursor: pointer;
}

.mx_MFileBody_download {
  color: #0dbd8b;
}

.mx_MFileBody_download .mx_MFileBody_download_icon {
  width: 12px;
  height: 12px;
  -webkit-mask-size: 12px;
  mask-size: 12px;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-image: url(../../img/download.4f331f0.svg);
  mask-image: url(../../img/download.4f331f0.svg);
  background-color: #0dbd8b;
  display: inline-block;
}

.mx_MFileBody_download a {
  color: #0dbd8b;
  text-decoration: none;
  cursor: pointer;
}

.mx_MFileBody_download object {
  margin-left: -16px;
  padding-right: 4px;
  margin-top: -4px;
  vertical-align: middle;
  pointer-events: none;
}

.mx_MFileBody_download iframe {
  margin: 0;
  padding: 0;
  border: none;
  width: 100%;
  height: 1.5em;
}

.mx_MFileBody_info .mx_MFileBody_info_icon {
  background-color: #f4f6fa;
  border-radius: 20px;
  display: inline-block;
  width: 32px;
  height: 32px;
  position: relative;
  vertical-align: middle;
  margin-right: 12px;
}

.mx_MFileBody_info .mx_MFileBody_info_icon:before {
  content: "";
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: cover;
  mask-size: cover;
  -webkit-mask-image: url(../../img/element-icons/room/composer/attach.359c84e.svg);
  mask-image: url(../../img/element-icons/room/composer/attach.359c84e.svg);
  background-color: #737d8c;
  width: 15px;
  height: 15px;
  position: absolute;
  top: 8px;
  left: 8px;
}

.mx_MFileBody_info .mx_MFileBody_info_filename {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  width: calc(100% - 44px);
  vertical-align: middle;
}

.mx_MImageBody_thumbnail {
  -o-object-fit: contain;
  object-fit: contain;
  border-radius: 4px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_MImageBody_thumbnail > div > canvas {
  border-radius: 4px;
}

.mx_MImageBody_thumbnail_container {
  overflow: hidden;
  position: relative;
}

.mx_MImageBody_gifLabel {
  position: absolute;
  display: block;
  top: 0;
  left: 14px;
  padding: 5px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid rgba(0, 0, 0, 0.2);
  color: #fff;
  pointer-events: none;
}

.mx_HiddenImagePlaceholder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  background-color: #f3f8fd;
}

.mx_HiddenImagePlaceholder .mx_HiddenImagePlaceholder_button {
  color: #0dbd8b;
}

.mx_HiddenImagePlaceholder
  .mx_HiddenImagePlaceholder_button
  span.mx_HiddenImagePlaceholder_eye {
  margin-right: 8px;
  background-color: #0dbd8b;
  -webkit-mask-image: url(../../img/feather-customised/eye.52aa0d2.svg);
  mask-image: url(../../img/feather-customised/eye.52aa0d2.svg);
  display: inline-block;
  width: 18px;
  height: 14px;
}

.mx_HiddenImagePlaceholder
  .mx_HiddenImagePlaceholder_button
  span:not(.mx_HiddenImagePlaceholder_eye) {
  vertical-align: text-bottom;
}

.mx_EventTile:hover .mx_HiddenImagePlaceholder {
  background-color: #fff;
}

.mx_MImageReplyBody {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.mx_MImageReplyBody .mx_MImageBody_thumbnail_container {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin-right: 4px;
}

.mx_MImageReplyBody .mx_MImageReplyBody_info {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.mx_MImageReplyBody .mx_MImageReplyBody_info .mx_MImageReplyBody_sender {
  grid-area: sender;
}

.mx_MImageReplyBody .mx_MImageReplyBody_info .mx_MImageReplyBody_filename {
  grid-area: filename;
}

.mx_MJitsiWidgetEvent:before {
  background-color: #91a1c0;
  -webkit-mask-image: url(../../img/element-icons/call/video-call.f465ed0.svg);
  mask-image: url(../../img/element-icons/call/video-call.f465ed0.svg);
}

.mx_MNoticeBody {
  white-space: pre-wrap;
  opacity: 0.6;
}

.mx_MStickerBody_wrapper {
  padding: 20px 0;
}

.mx_MStickerBody_tooltip {
  position: absolute;
  top: 50%;
}

.mx_MStickerBody_hidden {
  max-width: 220px;
  text-decoration: none;
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.mx_MTextBody {
  white-space: pre-wrap;
}

span.mx_MVideoBody video.mx_MVideoBody {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}

.mx_MediaBody {
  background-color: #e3e8f0;
  border-radius: 12px;
  max-width: 243px;
  color: #737d8c;
  font-size: 1.4rem;
  line-height: 2.4rem;
  padding: 6px 12px;
}

.mx_MessageActionBar {
  position: absolute;
  visibility: hidden;
  cursor: pointer;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 32px;
  line-height: 2.4rem;
  border-radius: 8px;
  background: #fff;
  border: 1px solid #e7e7e7;
  top: -32px;
  right: 8px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 1;
}

.mx_MessageActionBar:before {
  content: "";
  position: absolute;
  width: calc(66px + 100%);
  height: calc(20px + 100%);
  top: -12px;
  left: -58px;
  z-index: -1;
  cursor: auto;
}

.mx_MessageActionBar > * {
  white-space: nowrap;
  display: inline-block;
  position: relative;
  margin: 2px;
}

.mx_MessageActionBar > :hover {
  background: rgba(141, 151, 165, 0.2);
  border-radius: 6px;
  z-index: 1;
}

.mx_MessageActionBar_maskButton {
  width: 28px;
  height: 28px;
}

.mx_MessageActionBar_maskButton:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  -webkit-mask-size: 18px;
  mask-size: 18px;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  background-color: #737d8c;
}

.mx_MessageActionBar_maskButton:hover:after {
  background-color: #2e2f32;
}

.mx_MessageActionBar_reactButton:after {
  -webkit-mask-image: url(../../img/element-icons/room/message-bar/emoji.af14771.svg);
  mask-image: url(../../img/element-icons/room/message-bar/emoji.af14771.svg);
}

.mx_MessageActionBar_replyButton:after {
  -webkit-mask-image: url(../../img/element-icons/room/message-bar/reply.5812741.svg);
  mask-image: url(../../img/element-icons/room/message-bar/reply.5812741.svg);
}

.mx_MessageActionBar_editButton:after {
  -webkit-mask-image: url(../../img/element-icons/room/message-bar/edit.688678e.svg);
  mask-image: url(../../img/element-icons/room/message-bar/edit.688678e.svg);
}

.mx_MessageActionBar_optionsButton:after {
  -webkit-mask-image: url(../../img/element-icons/context-menu.829cc1a.svg);
  mask-image: url(../../img/element-icons/context-menu.829cc1a.svg);
}

.mx_MessageActionBar_resendButton:after {
  -webkit-mask-image: url(../../img/element-icons/retry.6cd23ad.svg);
  mask-image: url(../../img/element-icons/retry.6cd23ad.svg);
}

.mx_MessageActionBar_cancelButton:after {
  -webkit-mask-image: url(../../img/element-icons/trashcan.3b626db.svg);
  mask-image: url(../../img/element-icons/trashcan.3b626db.svg);
}

.mx_MessageActionBar_downloadButton:after {
  -webkit-mask-size: 14px;
  mask-size: 14px;
  -webkit-mask-image: url(../../img/download.4f331f0.svg);
  mask-image: url(../../img/download.4f331f0.svg);
}

.mx_MessageActionBar_downloadButton.mx_MessageActionBar_downloadSpinnerButton:after {
  background-color: transparent;
}

.mx_MessageTimestamp {
  color: #acacac;
  font-size: 1rem;
  -webkit-font-feature-settings: "tnum";
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
}

.mx_MjolnirBody {
  opacity: 0.4;
}

.mx_ReactionsRow {
  margin: 6px 0;
  color: #2e2f32;
}

.mx_ReactionsRow .mx_ReactionsRow_addReactionButton {
  position: relative;
  display: inline-block;
  visibility: hidden;
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-left: 4px;
  margin-right: 4px;
}

.mx_ReactionsRow .mx_ReactionsRow_addReactionButton:before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  -webkit-mask-size: 16px;
  mask-size: 16px;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  background-color: #8d99a5;
  -webkit-mask-image: url(../../img/element-icons/room/message-bar/emoji.af14771.svg);
  mask-image: url(../../img/element-icons/room/message-bar/emoji.af14771.svg);
}

.mx_ReactionsRow
  .mx_ReactionsRow_addReactionButton.mx_ReactionsRow_addReactionButton_active {
  visibility: visible;
}

.mx_ReactionsRow
  .mx_ReactionsRow_addReactionButton.mx_ReactionsRow_addReactionButton_active:before,
.mx_ReactionsRow .mx_ReactionsRow_addReactionButton:hover:before {
  background-color: #2e2f32;
}

.mx_EventTile:hover .mx_ReactionsRow_addReactionButton {
  visibility: visible;
}

.mx_ReactionsRow_showAll {
  text-decoration: none;
  font-size: 1.2rem;
  line-height: 2rem;
  margin-left: 4px;
  vertical-align: middle;
}

.mx_ReactionsRow_showAll:link,
.mx_ReactionsRow_showAll:visited {
  color: #8d99a5;
}

.mx_ReactionsRow_showAll:hover {
  color: #2e2f32;
}

.mx_ReactionsRowButton {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  line-height: 2rem;
  margin-right: 6px;
  padding: 1px 6px;
  border: 1px solid #e9edf1;
  border-radius: 10px;
  background-color: #f3f8fd;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
}

.mx_ReactionsRowButton:hover {
  border-color: #ddd;
}

.mx_ReactionsRowButton.mx_ReactionsRowButton_selected {
  background-color: #e9fff9;
  border-color: #0dbd8b;
}

.mx_ReactionsRowButton.mx_AccessibleButton_disabled {
  cursor: not-allowed;
}

.mx_ReactionsRowButton .mx_ReactionsRowButton_content {
  max-width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-right: 4px;
}

.mx_RedactedBody {
  white-space: pre-wrap;
  color: #61708b;
  vertical-align: middle;
  padding-left: 20px;
  position: relative;
}

.mx_RedactedBody:before {
  height: 14px;
  width: 14px;
  background-color: #61708b;
  -webkit-mask-image: url(../../img/feather-customised/trash.custom.1e6ecd4.svg);
  mask-image: url(../../img/feather-customised/trash.custom.1e6ecd4.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  content: "";
  position: absolute;
  top: 1px;
  left: 0;
}

.mx_RoomAvatarEvent {
  opacity: 0.5;
  overflow-y: hidden;
}

.mx_RoomAvatarEvent_avatar {
  display: inline;
  position: relative;
  top: 5px;
}

.mx_SenderProfile_displayName {
  font-weight: 600;
}

.mx_SenderProfile_mxid {
  font-weight: 600;
  font-size: 1.1rem;
  margin-left: 5px;
  opacity: 0.5;
}

.mx_TextualEvent {
  opacity: 0.5;
  overflow-y: hidden;
}

.mx_TextualEvent a {
  color: #0dbd8b;
  cursor: pointer;
}

.mx_UnknownBody {
  white-space: pre-wrap;
}

.mx_EventTile_content.mx_ViewSourceEvent {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  opacity: 0.6;
  font-size: 1.2rem;
}

.mx_EventTile_content.mx_ViewSourceEvent code,
.mx_EventTile_content.mx_ViewSourceEvent pre {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.mx_EventTile_content.mx_ViewSourceEvent pre {
  line-height: 1.2;
  margin: 3.5px 0;
}

.mx_EventTile_content.mx_ViewSourceEvent .mx_ViewSourceEvent_toggle {
  width: 12px;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: 0 center;
  mask-position: 0 center;
  -webkit-mask-size: auto 12px;
  mask-size: auto 12px;
  visibility: hidden;
  background-color: #0dbd8b;
  -webkit-mask-image: url(../../img/feather-customised/maximise.dc32127.svg);
  mask-image: url(../../img/feather-customised/maximise.dc32127.svg);
}

.mx_EventTile_content.mx_ViewSourceEvent.mx_ViewSourceEvent_expanded
  .mx_ViewSourceEvent_toggle {
  -webkit-mask-position: 0 bottom;
  mask-position: 0 bottom;
  margin-bottom: 7px;
  -webkit-mask-image: url(../../img/feather-customised/minimise.aec9142.svg);
  mask-image: url(../../img/feather-customised/minimise.aec9142.svg);
}

.mx_EventTile_content.mx_ViewSourceEvent:hover .mx_ViewSourceEvent_toggle {
  visibility: visible;
}

.mx_cryptoEvent.mx_cryptoEvent_icon:before {
  background-color: #fff;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: 80%;
  mask-size: 80%;
}

.mx_cryptoEvent.mx_cryptoEvent_icon:after,
.mx_cryptoEvent.mx_cryptoEvent_icon:before {
  -webkit-mask-image: url(../../img/e2e/normal.76f0c09.svg);
  mask-image: url(../../img/e2e/normal.76f0c09.svg);
}

.mx_cryptoEvent.mx_cryptoEvent_icon:after {
  background-color: #91a1c0;
}

.mx_cryptoEvent.mx_cryptoEvent_icon_verified:after {
  -webkit-mask-image: url(../../img/e2e/verified.5be6c9f.svg);
  mask-image: url(../../img/e2e/verified.5be6c9f.svg);
  background-color: #0dbd8b;
}

.mx_cryptoEvent.mx_cryptoEvent_icon_warning:after {
  -webkit-mask-image: url(../../img/e2e/warning.78bb264.svg);
  mask-image: url(../../img/e2e/warning.78bb264.svg);
  background-color: #ff4b55;
}

.mx_cryptoEvent .mx_cryptoEvent_buttons,
.mx_cryptoEvent .mx_cryptoEvent_state {
  grid-column: 3;
  grid-row: 1/3;
}

.mx_cryptoEvent .mx_cryptoEvent_buttons {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  grid-gap: 5px;
  gap: 5px;
}

.mx_cryptoEvent .mx_cryptoEvent_state {
  width: 130px;
  padding: 10px 20px;
  margin: auto 0;
  text-align: center;
  color: #8d99a5;
  overflow-wrap: break-word;
  font-size: 1.2rem;
}

.mx_BaseCard {
  padding: 0 8px;
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.mx_BaseCard .mx_BaseCard_header {
  margin: 8px 0;
}

.mx_BaseCard .mx_BaseCard_header > h2 {
  margin: 0 44px;
  font-size: 1.8rem;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mx_BaseCard .mx_BaseCard_header .mx_BaseCard_back,
.mx_BaseCard .mx_BaseCard_header .mx_BaseCard_close {
  position: absolute;
  background-color: rgba(141, 151, 165, 0.2);
  height: 20px;
  width: 20px;
  margin: 12px;
  top: 0;
  border-radius: 10px;
}

.mx_BaseCard .mx_BaseCard_header .mx_BaseCard_back:before,
.mx_BaseCard .mx_BaseCard_header .mx_BaseCard_close:before {
  content: "";
  position: absolute;
  height: 20px;
  width: 20px;
  top: 0;
  left: 0;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  background-color: #91a1c0;
}

.mx_BaseCard .mx_BaseCard_header .mx_BaseCard_back {
  left: 0;
}

.mx_BaseCard .mx_BaseCard_header .mx_BaseCard_back:before {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  -webkit-mask-size: 22px;
  mask-size: 22px;
  -webkit-mask-image: url(../../img/feather-customised/chevron-down.5278abe.svg);
  mask-image: url(../../img/feather-customised/chevron-down.5278abe.svg);
}

.mx_BaseCard .mx_BaseCard_header .mx_BaseCard_close {
  right: 0;
}

.mx_BaseCard .mx_BaseCard_header .mx_BaseCard_close:before {
  -webkit-mask-image: url(../../img/icons-close.11ff07c.svg);
  mask-image: url(../../img/icons-close.11ff07c.svg);
  -webkit-mask-size: 8px;
  mask-size: 8px;
}

.mx_BaseCard .mx_AutoHideScrollbar {
  margin-right: -8px;
  padding-right: 8px;
  min-height: 0;
  width: 100%;
  height: 100%;
}

.mx_BaseCard .mx_BaseCard_Group {
  margin: 20px 0 16px;
}

.mx_BaseCard .mx_BaseCard_Group > * {
  margin-left: 12px;
  margin-right: 12px;
}

.mx_BaseCard .mx_BaseCard_Group > h1 {
  color: #8d99a5;
  font-size: 1.2rem;
  font-weight: 500;
}

.mx_BaseCard .mx_BaseCard_Group .mx_BaseCard_Button {
  padding: 10px 38px 10px 12px;
  margin: 0;
  position: relative;
  font-size: 1.3rem;
  height: 20px;
  line-height: 20px;
  border-radius: 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.mx_BaseCard .mx_BaseCard_Group .mx_BaseCard_Button:hover {
  background-color: rgba(141, 151, 165, 0.1);
}

.mx_BaseCard .mx_BaseCard_Group .mx_BaseCard_Button:after {
  content: "";
  position: absolute;
  top: 10px;
  right: 6px;
  height: 20px;
  width: 20px;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  background-color: #c1c6cd;
  -webkit-transform: rotate(270deg);
  transform: rotate(270deg);
  -webkit-mask-size: 20px;
  mask-size: 20px;
  -webkit-mask-image: url(../../img/feather-customised/chevron-down.5278abe.svg);
  mask-image: url(../../img/feather-customised/chevron-down.5278abe.svg);
}

.mx_BaseCard
  .mx_BaseCard_Group
  .mx_BaseCard_Button.mx_AccessibleButton_disabled {
  padding-right: 12px;
}

.mx_BaseCard
  .mx_BaseCard_Group
  .mx_BaseCard_Button.mx_AccessibleButton_disabled:after {
  content: unset;
}

.mx_BaseCard .mx_BaseCard_footer {
  padding-top: 4px;
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
  justify-content: space-around;
}

.mx_BaseCard .mx_BaseCard_footer .mx_AccessibleButton_kind_secondary {
  color: #737d8c;
  background-color: rgba(141, 151, 165, 0.2);
  font-weight: 600;
  font-size: 1.4rem;
}

.mx_BaseCard .mx_BaseCard_footer .mx_AccessibleButton_disabled {
  cursor: not-allowed;
}

.mx_FilePanel.mx_BaseCard,
.mx_MemberList.mx_BaseCard,
.mx_NotificationPanel.mx_BaseCard,
.mx_UserInfo.mx_BaseCard {
  padding: 32px 0 0;
}

.mx_FilePanel.mx_BaseCard .mx_AutoHideScrollbar,
.mx_MemberList.mx_BaseCard .mx_AutoHideScrollbar,
.mx_NotificationPanel.mx_BaseCard .mx_AutoHideScrollbar,
.mx_UserInfo.mx_BaseCard .mx_AutoHideScrollbar {
  margin-right: unset;
  padding-right: unset;
}

.mx_EncryptionInfo_spinner .mx_Spinner {
  margin-top: 25px;
  margin-bottom: 15px;
}

.mx_EncryptionInfo_spinner {
  text-align: center;
}

.mx_PinnedMessagesCard {
  padding-top: 0;
}

.mx_PinnedMessagesCard .mx_BaseCard_header {
  text-align: center;
  margin-top: 0;
  border-bottom: 1px solid #e7e7e7;
}

.mx_PinnedMessagesCard .mx_BaseCard_header > h2 {
  font-weight: 600;
  font-size: 1.8rem;
  margin: 8px 0;
}

.mx_PinnedMessagesCard .mx_BaseCard_header .mx_BaseCard_close {
  margin-right: 6px;
}

.mx_PinnedMessagesCard .mx_PinnedMessagesCard_empty {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
}

.mx_PinnedMessagesCard .mx_PinnedMessagesCard_empty > div {
  height: -webkit-max-content;
  height: -moz-max-content;
  height: max-content;
  text-align: center;
  margin: auto 40px;
}

.mx_PinnedMessagesCard
  .mx_PinnedMessagesCard_empty
  > div
  .mx_PinnedMessagesCard_MessageActionBar {
  pointer-events: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 32px;
  line-height: 2.4rem;
  border-radius: 8px;
  background: #fff;
  border: 1px solid #e7e7e7;
  padding: 1px;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  margin: 0 auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.mx_PinnedMessagesCard
  .mx_PinnedMessagesCard_empty
  > div
  .mx_PinnedMessagesCard_MessageActionBar
  .mx_MessageActionBar_maskButton {
  display: inline-block;
  position: relative;
}

.mx_PinnedMessagesCard
  .mx_PinnedMessagesCard_empty
  > div
  .mx_PinnedMessagesCard_MessageActionBar
  .mx_MessageActionBar_optionsButton {
  background: rgba(141, 151, 165, 0.2);
  border-radius: 6px;
  z-index: 1;
}

.mx_PinnedMessagesCard
  .mx_PinnedMessagesCard_empty
  > div
  .mx_PinnedMessagesCard_MessageActionBar
  .mx_MessageActionBar_optionsButton:after {
  background-color: #2e2f32;
}

.mx_PinnedMessagesCard .mx_PinnedMessagesCard_empty > div > h2 {
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2.4rem;
  color: #2e2f32;
  margin-top: 24px;
  margin-bottom: 20px;
}

.mx_PinnedMessagesCard .mx_PinnedMessagesCard_empty > div > span {
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #737d8c;
}

.mx_RoomSummaryCard .mx_BaseCard_header {
  text-align: center;
  margin-top: 20px;
}

.mx_RoomSummaryCard .mx_BaseCard_header h2 {
  font-weight: 600;
  font-size: 1.8rem;
  margin: 12px 0 4px;
}

.mx_RoomSummaryCard .mx_BaseCard_header .mx_RoomSummaryCard_alias {
  font-size: 1.3rem;
  color: #737d8c;
}

.mx_RoomSummaryCard .mx_BaseCard_header .mx_RoomSummaryCard_alias,
.mx_RoomSummaryCard .mx_BaseCard_header h2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-wrap;
}

.mx_RoomSummaryCard .mx_BaseCard_header .mx_RoomSummaryCard_avatar {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
}

.mx_RoomSummaryCard
  .mx_BaseCard_header
  .mx_RoomSummaryCard_avatar
  .mx_RoomSummaryCard_e2ee {
  display: inline-block;
  position: relative;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background-color: #737d8c;
  margin-top: -3px;
  margin-left: -10px;
  border: 3px solid #f2f5f8;
}

.mx_RoomSummaryCard
  .mx_BaseCard_header
  .mx_RoomSummaryCard_avatar
  .mx_RoomSummaryCard_e2ee:before {
  content: "";
  position: absolute;
  top: 13px;
  left: 13px;
  height: 28px;
  width: 28px;
  -webkit-mask-size: cover;
  mask-size: cover;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-image: url(../../img/e2e/disabled.6c5c6be.svg);
  mask-image: url(../../img/e2e/disabled.6c5c6be.svg);
  background-color: #fff;
}

.mx_RoomSummaryCard
  .mx_BaseCard_header
  .mx_RoomSummaryCard_avatar
  .mx_RoomSummaryCard_e2ee_normal {
  background-color: #424446;
}

.mx_RoomSummaryCard
  .mx_BaseCard_header
  .mx_RoomSummaryCard_avatar
  .mx_RoomSummaryCard_e2ee_normal:before {
  -webkit-mask-image: url(../../img/e2e/normal.76f0c09.svg);
  mask-image: url(../../img/e2e/normal.76f0c09.svg);
}

.mx_RoomSummaryCard
  .mx_BaseCard_header
  .mx_RoomSummaryCard_avatar
  .mx_RoomSummaryCard_e2ee_verified {
  background-color: #0dbd8b;
}

.mx_RoomSummaryCard
  .mx_BaseCard_header
  .mx_RoomSummaryCard_avatar
  .mx_RoomSummaryCard_e2ee_verified:before {
  -webkit-mask-image: url(../../img/e2e/verified.5be6c9f.svg);
  mask-image: url(../../img/e2e/verified.5be6c9f.svg);
}

.mx_RoomSummaryCard
  .mx_BaseCard_header
  .mx_RoomSummaryCard_avatar
  .mx_RoomSummaryCard_e2ee_warning {
  background-color: #ff4b55;
}

.mx_RoomSummaryCard
  .mx_BaseCard_header
  .mx_RoomSummaryCard_avatar
  .mx_RoomSummaryCard_e2ee_warning:before {
  -webkit-mask-image: url(../../img/e2e/warning.78bb264.svg);
  mask-image: url(../../img/e2e/warning.78bb264.svg);
}

.mx_RoomSummaryCard .mx_RoomSummaryCard_aboutGroup .mx_RoomSummaryCard_Button {
  padding-left: 44px;
}

.mx_RoomSummaryCard
  .mx_RoomSummaryCard_aboutGroup
  .mx_RoomSummaryCard_Button:before {
  content: "";
  position: absolute;
  top: 8px;
  left: 10px;
  height: 24px;
  width: 24px;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  background-color: #c1c6cd;
}

.mx_RoomSummaryCard .mx_RoomSummaryCard_appsGroup .mx_RoomSummaryCard_Button {
  padding: 0;
  height: auto;
  color: #8d99a5;
}

.mx_RoomSummaryCard
  .mx_RoomSummaryCard_appsGroup
  .mx_RoomSummaryCard_Button
  .mx_RoomSummaryCard_icon_app {
  padding: 10px 48px 10px 12px;
  text-overflow: ellipsis;
  overflow: hidden;
}

.mx_RoomSummaryCard
  .mx_RoomSummaryCard_appsGroup
  .mx_RoomSummaryCard_Button
  .mx_RoomSummaryCard_icon_app
  .mx_BaseAvatar_image {
  vertical-align: top;
  margin-right: 12px;
}

.mx_RoomSummaryCard
  .mx_RoomSummaryCard_appsGroup
  .mx_RoomSummaryCard_Button
  .mx_RoomSummaryCard_icon_app
  span {
  color: #2e2f32;
}

.mx_RoomSummaryCard
  .mx_RoomSummaryCard_appsGroup
  .mx_RoomSummaryCard_Button
  .mx_RoomSummaryCard_app_options,
.mx_RoomSummaryCard
  .mx_RoomSummaryCard_appsGroup
  .mx_RoomSummaryCard_Button
  .mx_RoomSummaryCard_app_pinToggle {
  position: absolute;
  top: 0;
  height: 100%;
  width: 24px;
  padding: 12px 4px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  min-width: 24px;
}

.mx_RoomSummaryCard
  .mx_RoomSummaryCard_appsGroup
  .mx_RoomSummaryCard_Button
  .mx_RoomSummaryCard_app_options:hover:after,
.mx_RoomSummaryCard
  .mx_RoomSummaryCard_appsGroup
  .mx_RoomSummaryCard_Button
  .mx_RoomSummaryCard_app_pinToggle:hover:after {
  content: "";
  position: absolute;
  height: 24px;
  width: 24px;
  top: 8px;
  left: 0;
  border-radius: 12px;
  background-color: rgba(141, 151, 165, 0.1);
}

.mx_RoomSummaryCard
  .mx_RoomSummaryCard_appsGroup
  .mx_RoomSummaryCard_Button
  .mx_RoomSummaryCard_app_options:before,
.mx_RoomSummaryCard
  .mx_RoomSummaryCard_appsGroup
  .mx_RoomSummaryCard_Button
  .mx_RoomSummaryCard_app_pinToggle:before {
  content: "";
  position: absolute;
  height: 16px;
  width: 16px;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: 16px;
  mask-size: 16px;
  background-color: #c1c6cd;
}

.mx_RoomSummaryCard
  .mx_RoomSummaryCard_appsGroup
  .mx_RoomSummaryCard_Button
  .mx_RoomSummaryCard_app_pinToggle {
  right: 24px;
}

.mx_RoomSummaryCard
  .mx_RoomSummaryCard_appsGroup
  .mx_RoomSummaryCard_Button
  .mx_RoomSummaryCard_app_pinToggle:before {
  -webkit-mask-image: url(../../img/element-icons/room/pin-upright.65783fb.svg);
  mask-image: url(../../img/element-icons/room/pin-upright.65783fb.svg);
}

.mx_RoomSummaryCard
  .mx_RoomSummaryCard_appsGroup
  .mx_RoomSummaryCard_Button
  .mx_RoomSummaryCard_app_options {
  right: 48px;
  display: none;
}

.mx_RoomSummaryCard
  .mx_RoomSummaryCard_appsGroup
  .mx_RoomSummaryCard_Button
  .mx_RoomSummaryCard_app_options:before {
  -webkit-mask-image: url(../../img/element-icons/room/ellipsis.b82ece6.svg);
  mask-image: url(../../img/element-icons/room/ellipsis.b82ece6.svg);
}

.mx_RoomSummaryCard
  .mx_RoomSummaryCard_appsGroup
  .mx_RoomSummaryCard_Button.mx_RoomSummaryCard_Button_pinned:after {
  opacity: 0.2;
}

.mx_RoomSummaryCard
  .mx_RoomSummaryCard_appsGroup
  .mx_RoomSummaryCard_Button.mx_RoomSummaryCard_Button_pinned
  .mx_RoomSummaryCard_app_pinToggle:before {
  background-color: #0dbd8b;
}

.mx_RoomSummaryCard
  .mx_RoomSummaryCard_appsGroup
  .mx_RoomSummaryCard_Button:hover
  .mx_RoomSummaryCard_icon_app {
  padding-right: 72px;
}

.mx_RoomSummaryCard
  .mx_RoomSummaryCard_appsGroup
  .mx_RoomSummaryCard_Button:hover
  .mx_RoomSummaryCard_app_options {
  display: unset;
}

.mx_RoomSummaryCard
  .mx_RoomSummaryCard_appsGroup
  .mx_RoomSummaryCard_Button:before {
  content: unset;
}

.mx_RoomSummaryCard
  .mx_RoomSummaryCard_appsGroup
  .mx_RoomSummaryCard_Button:after {
  top: 8px;
  pointer-events: none;
}

.mx_RoomSummaryCard .mx_AccessibleButton_kind_link {
  padding: 0;
  margin-top: 12px;
  margin-bottom: 12px;
  font-size: 1.3rem;
  font-weight: 600;
}

.mx_RoomSummaryCard_icon_people:before {
  -webkit-mask-image: url(../../img/element-icons/room/members.88c3e93.svg);
  mask-image: url(../../img/element-icons/room/members.88c3e93.svg);
}

.mx_RoomSummaryCard_icon_files:before {
  -webkit-mask-image: url(../../img/element-icons/room/files.5709c0c.svg);
  mask-image: url(../../img/element-icons/room/files.5709c0c.svg);
}

.mx_RoomSummaryCard_icon_share:before {
  -webkit-mask-image: url(../../img/element-icons/room/share.54dc3fb.svg);
  mask-image: url(../../img/element-icons/room/share.54dc3fb.svg);
}

.mx_RoomSummaryCard_icon_settings:before {
  -webkit-mask-image: url(../../img/element-icons/settings.6b381af.svg);
  mask-image: url(../../img/element-icons/settings.6b381af.svg);
}

.mx_RoomSummaryCard_icon_export:before {
  -webkit-mask-image: url(../../img/element-icons/export.57444c5.svg);
  mask-image: url(../../img/element-icons/export.57444c5.svg);
}

.mx_UserInfo.mx_BaseCard {
  padding-top: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  overflow-y: auto;
  font-size: 1.2rem;
}

.mx_UserInfo.mx_BaseCard .mx_UserInfo_cancel {
  cursor: pointer;
  position: absolute;
  top: 0;
  border-radius: 4px;
  background-color: #f2f5f8;
  margin: 9px;
  z-index: 1;
}

.mx_UserInfo.mx_BaseCard .mx_UserInfo_cancel div {
  height: 16px;
  width: 16px;
  padding: 4px;
  -webkit-mask-image: url(../../img/minimise.871d2de.svg);
  mask-image: url(../../img/minimise.871d2de.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: 7px center;
  mask-position: 7px center;
  background-color: #91a1c0;
}

.mx_UserInfo.mx_BaseCard h2 {
  font-size: 1.8rem;
  font-weight: 600;
  margin: 18px 0 0;
}

.mx_UserInfo.mx_BaseCard .mx_UserInfo_container {
  padding: 8px 16px;
}

.mx_UserInfo.mx_BaseCard .mx_UserInfo_separator {
  border-bottom: 1px solid rgba(46, 47, 50, 0.1);
}

.mx_UserInfo.mx_BaseCard .mx_UserInfo_memberDetailsContainer {
  padding-top: 0;
  padding-bottom: 0;
  margin-bottom: 8px;
}

.mx_UserInfo.mx_BaseCard .mx_RoomTile_nameContainer {
  width: 154px;
}

.mx_UserInfo.mx_BaseCard .mx_RoomTile_badge {
  display: none;
}

.mx_UserInfo.mx_BaseCard .mx_RoomTile_name {
  width: 160px;
}

.mx_UserInfo.mx_BaseCard .mx_UserInfo_avatar {
  margin: 24px 32px 0;
}

.mx_UserInfo.mx_BaseCard .mx_UserInfo_avatar > div {
  max-width: 30vh;
  margin: 0 auto;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.mx_UserInfo.mx_BaseCard .mx_UserInfo_avatar > div > div {
  padding-top: 100%;
  position: relative;
}

.mx_UserInfo.mx_BaseCard .mx_UserInfo_avatar > div > div * {
  border-radius: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
}

.mx_UserInfo.mx_BaseCard .mx_UserInfo_avatar .mx_BaseAvatar_initial {
  z-index: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-size: 6rem !important;
  width: 100% !important;
  -webkit-transition: font-size 0.5s;
  transition: font-size 0.5s;
}

.mx_UserInfo.mx_BaseCard
  .mx_UserInfo_avatar
  .mx_BaseAvatar.mx_BaseAvatar_image {
  cursor: -webkit-zoom-in;
  cursor: zoom-in;
}

.mx_UserInfo.mx_BaseCard h3 {
  text-transform: uppercase;
  color: #8d99a5;
  font-weight: 600;
  font-size: 1.2rem;
  margin: 4px 0;
}

.mx_UserInfo.mx_BaseCard p {
  margin: 5px 0;
}

.mx_UserInfo.mx_BaseCard .mx_UserInfo_profile {
  text-align: center;
}

.mx_UserInfo.mx_BaseCard .mx_UserInfo_profile h2 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 1.8rem;
  line-height: 2.5rem;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.mx_UserInfo.mx_BaseCard .mx_UserInfo_profile h2 span {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
}

.mx_UserInfo.mx_BaseCard .mx_UserInfo_profile h2 .mx_E2EIcon {
  margin-top: 3px;
  margin-right: 4px;
  min-width: 18px;
}

.mx_UserInfo.mx_BaseCard .mx_UserInfo_profile .mx_UserInfo_profileStatus {
  margin-top: 12px;
}

.mx_UserInfo.mx_BaseCard .mx_UserInfo_memberDetails .mx_UserInfo_profileField {
  margin: 6px 0;
}

.mx_UserInfo.mx_BaseCard .mx_UserInfo_memberDetails .mx_UserInfo_profileField,
.mx_UserInfo.mx_BaseCard
  .mx_UserInfo_memberDetails
  .mx_UserInfo_profileField
  .mx_UserInfo_roleDescription {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_UserInfo.mx_BaseCard
  .mx_UserInfo_memberDetails
  .mx_UserInfo_profileField
  .mx_UserInfo_roleDescription {
  margin: 11px 0 12px;
}

.mx_UserInfo.mx_BaseCard
  .mx_UserInfo_memberDetails
  .mx_UserInfo_profileField
  .mx_Field {
  margin: 0;
}

.mx_UserInfo.mx_BaseCard .mx_UserInfo_field {
  cursor: pointer;
  color: #0dbd8b;
  line-height: 1.6rem;
  margin: 8px 0;
}

.mx_UserInfo.mx_BaseCard .mx_UserInfo_field.mx_UserInfo_destructive {
  color: #ff4b55;
}

.mx_UserInfo.mx_BaseCard .mx_UserInfo_statusMessage {
  font-size: 1.1rem;
  opacity: 0.5;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: clip;
}

.mx_UserInfo.mx_BaseCard .mx_AutoHideScrollbar {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 0px;
  flex: 1 1 0;
}

.mx_UserInfo.mx_BaseCard .mx_UserInfo_container:not(.mx_UserInfo_separator) {
  padding-top: 16px;
  padding-bottom: 0;
}

.mx_UserInfo.mx_BaseCard
  .mx_UserInfo_container:not(.mx_UserInfo_separator)
  > :not(h3) {
  margin-left: 8px;
}

.mx_UserInfo.mx_BaseCard .mx_UserInfo_devices .mx_UserInfo_device {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 8px 0;
}

.mx_UserInfo.mx_BaseCard
  .mx_UserInfo_devices
  .mx_UserInfo_device.mx_UserInfo_device_verified
  .mx_UserInfo_device_trusted {
  color: #0dbd8b;
}

.mx_UserInfo.mx_BaseCard
  .mx_UserInfo_devices
  .mx_UserInfo_device.mx_UserInfo_device_unverified
  .mx_UserInfo_device_trusted {
  color: #ff4b55;
}

.mx_UserInfo.mx_BaseCard
  .mx_UserInfo_devices
  .mx_UserInfo_device
  .mx_UserInfo_device_name {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin-right: 5px;
  word-break: break-word;
}

.mx_UserInfo.mx_BaseCard .mx_UserInfo_devices .mx_E2EIcon {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  margin: 2px 5px 0 0;
  width: 12px;
  height: 12px;
}

.mx_UserInfo.mx_BaseCard .mx_UserInfo_devices .mx_UserInfo_expand {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 11px;
}

.mx_UserInfo.mx_BaseCard .mx_AccessibleButton.mx_AccessibleButton_hasKind {
  padding: 8px 18px;
}

.mx_UserInfo.mx_BaseCard .mx_UserInfo_wideButton,
.mx_UserInfo.mx_BaseCard .mx_VerificationShowSas .mx_AccessibleButton {
  display: block;
  margin: 16px 0 8px;
}

.mx_UserInfo.mx_BaseCard
  .mx_VerificationShowSas
  .mx_AccessibleButton
  + .mx_AccessibleButton {
  margin: 8px 0;
}

.mx_UserInfo.mx_UserInfo_smallAvatar .mx_UserInfo_avatar > div {
  max-width: 72px;
  margin: 0 auto;
}

.mx_UserInfo.mx_UserInfo_smallAvatar
  .mx_UserInfo_avatar
  .mx_BaseAvatar_initial {
  font-size: 40px !important;
}

.mx_VerificationPanel_reciprocate_section .mx_E2EIcon,
.mx_VerificationPanel_verified_section .mx_E2EIcon {
  margin: 20px auto !important;
}

.mx_UserInfo .mx_EncryptionPanel_cancel {
  -webkit-mask: url(../../img/feather-customised/cancel.23c2689.svg);
  mask: url(../../img/feather-customised/cancel.23c2689.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: cover;
  mask-size: cover;
  width: 14px;
  height: 14px;
  background-color: #61708b;
  cursor: pointer;
  position: absolute;
  z-index: 100;
  top: 14px;
  right: 14px;
}

.mx_UserInfo .mx_VerificationPanel_qrCode {
  padding: 4px 4px 0;
  background: #fff;
  border-radius: 4px;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  max-width: 100%;
  margin: 0 auto !important;
}

.mx_UserInfo .mx_VerificationPanel_qrCode canvas {
  height: auto !important;
  width: 100% !important;
  max-width: 240px;
}

.mx_UserInfo .mx_VerificationPanel_reciprocate_section .mx_AccessibleButton {
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  display: block;
  margin: 10px 0;
}

.mx_CompleteSecurity_body .mx_VerificationPanel_QRPhase_startOptions,
.mx_Dialog .mx_VerificationPanel_QRPhase_startOptions {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.mx_CompleteSecurity_body
  .mx_VerificationPanel_QRPhase_startOptions
  > .mx_VerificationPanel_QRPhase_betweenText,
.mx_Dialog
  .mx_VerificationPanel_QRPhase_startOptions
  > .mx_VerificationPanel_QRPhase_betweenText {
  width: 50px;
  vertical-align: middle;
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.mx_CompleteSecurity_body
  .mx_VerificationPanel_QRPhase_startOptions
  .mx_VerificationPanel_QRPhase_startOption,
.mx_Dialog
  .mx_VerificationPanel_QRPhase_startOptions
  .mx_VerificationPanel_QRPhase_startOption {
  background-color: #f3f8fd;
  border-radius: 10px;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 20px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
  max-width: 310px;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.mx_CompleteSecurity_body
  .mx_VerificationPanel_QRPhase_startOptions
  .mx_VerificationPanel_QRPhase_startOption
  .mx_VerificationPanel_QRPhase_noQR,
.mx_CompleteSecurity_body
  .mx_VerificationPanel_QRPhase_startOptions
  .mx_VerificationPanel_QRPhase_startOption
  canvas,
.mx_Dialog
  .mx_VerificationPanel_QRPhase_startOptions
  .mx_VerificationPanel_QRPhase_startOption
  .mx_VerificationPanel_QRPhase_noQR,
.mx_Dialog
  .mx_VerificationPanel_QRPhase_startOptions
  .mx_VerificationPanel_QRPhase_startOption
  canvas {
  width: 220px !important;
  height: 220px !important;
  background-color: #fff;
  border-radius: 4px;
  vertical-align: middle;
  text-align: center;
  padding: 10px;
}

.mx_CompleteSecurity_body
  .mx_VerificationPanel_QRPhase_startOptions
  .mx_VerificationPanel_QRPhase_startOption
  > p,
.mx_Dialog
  .mx_VerificationPanel_QRPhase_startOptions
  .mx_VerificationPanel_QRPhase_startOption
  > p {
  margin-top: 0;
  font-weight: 700;
}

.mx_CompleteSecurity_body
  .mx_VerificationPanel_QRPhase_startOptions
  .mx_VerificationPanel_QRPhase_startOption
  .mx_VerificationPanel_QRPhase_helpText,
.mx_Dialog
  .mx_VerificationPanel_QRPhase_startOptions
  .mx_VerificationPanel_QRPhase_startOption
  .mx_VerificationPanel_QRPhase_helpText {
  font-size: 1.4rem;
  margin: 30px 0;
  text-align: center;
}

.mx_CompleteSecurity_body
  .mx_VerificationPanel_verified_section
  .mx_AccessibleButton,
.mx_Dialog .mx_VerificationPanel_verified_section .mx_AccessibleButton {
  float: right;
}

.mx_CompleteSecurity_body
  .mx_VerificationPanel_reciprocate_section
  .mx_AccessibleButton,
.mx_Dialog .mx_VerificationPanel_reciprocate_section .mx_AccessibleButton {
  margin-left: 10px;
  padding: 7px 40px;
}

.mx_CompleteSecurity_body
  .mx_VerificationPanel_reciprocate_section
  .mx_VerificationPanel_reciprocateButtons,
.mx_Dialog
  .mx_VerificationPanel_reciprocate_section
  .mx_VerificationPanel_reciprocateButtons {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}

.mx_WidgetCard {
  height: 100%;
  display: contents;
}

.mx_WidgetCard .mx_AppTileFullWidth {
  max-width: unset;
  height: 100%;
  border: 0;
}

.mx_WidgetCard .mx_BaseCard_header {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
}

.mx_WidgetCard .mx_BaseCard_header > h2 {
  margin-right: 0;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.mx_WidgetCard .mx_BaseCard_header .mx_WidgetCard_optionsButton {
  position: relative;
  margin-right: 44px;
  height: 20px;
  width: 20px;
  min-width: 20px;
  padding: 0;
}

.mx_WidgetCard .mx_BaseCard_header .mx_WidgetCard_optionsButton:before {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 4px;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-image: url(../../img/element-icons/room/ellipsis.b82ece6.svg);
  mask-image: url(../../img/element-icons/room/ellipsis.b82ece6.svg);
  background-color: #737d8c;
}

.mx_WidgetCard_maxPinnedTooltip {
  background-color: #ff4b55;
  color: #fff;
}

.mx_AliasSettings_editable {
  border: 0;
  border-bottom: 1px solid #c7c7c7;
  padding: 0;
  min-width: 240px;
}

.mx_AliasSettings_editable:focus {
  border-bottom: 1px solid #0dbd8b;
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.mx_AliasSettings summary {
  cursor: pointer;
  color: #0dbd8b;
  font-weight: 600;
  list-style: none;
}

.mx_AliasSettings summary::-webkit-details-marker {
  display: none;
}

.mx_AliasSettings .mx_AliasSettings_localAliasHeader {
  margin-top: 35px;
}

.mx_AppsDrawer {
  margin: 5px 5px 5px 18px;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow: hidden;
}

.mx_AppsDrawer .mx_AppsContainer_resizerHandleContainer {
  width: 100%;
  height: 10px;
  margin-top: -3px;
  display: block;
  position: relative;
}

.mx_AppsDrawer .mx_AppsContainer_resizerHandle {
  cursor: ns-resize;
  width: 100% !important;
  height: 100% !important;
  position: absolute;
  bottom: 0 !important;
}

.mx_AppsDrawer .mx_AppsContainer_resizerHandle:after {
  content: "";
  position: absolute;
  border-radius: 3px;
  top: 6px;
  bottom: 0;
  left: calc(50% - 32px);
  right: calc(50% - 32px);
}

.mx_AppsDrawer:hover .mx_AppsContainer_resizerHandle:after {
  opacity: 0.8;
  background: #2e2f32;
}

.mx_AppsDrawer:hover .mx_ResizeHandle_horizontal:before {
  position: absolute;
  left: 3px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  height: 64px;
  width: 4px;
  border-radius: 4px;
  content: "";
  background-color: #2e2f32;
  opacity: 0.8;
}

.mx_AppsContainer_resizer {
  margin-bottom: 8px;
}

.mx_AppsContainer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  min-height: 0;
}

.mx_AppsContainer .mx_AppTile:first-of-type {
  border-left-width: 8px;
  border-radius: 10px 0 0 10px;
}

.mx_AppsContainer .mx_AppTile:last-of-type {
  border-right-width: 8px;
  border-radius: 0 10px 10px 0;
}

.mx_AppsContainer .mx_ResizeHandle_horizontal {
  position: relative;
}

.mx_AppsContainer .mx_ResizeHandle_horizontal > div {
  width: 0;
}

.mx_AppsDrawer_2apps .mx_AppTile {
  width: 50%;
}

.mx_AppsDrawer_2apps .mx_AppTile:nth-child(3) {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  width: 0 !important;
  min-width: 240px !important;
}

.mx_AppsDrawer_3apps .mx_AppTile {
  width: 33%;
}

.mx_AppsDrawer_3apps .mx_AppTile:nth-child(3) {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  width: 0 !important;
  min-width: 240px !important;
}

.mx_AppTile {
  width: 50%;
  min-width: 240px;
  border-color: #f2f5f8;
  border-style: solid;
  border-width: 8px 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #f2f5f8;
}

.mx_AppTileFullWidth {
  width: 100% !important;
  border: 5px solid #f2f5f8;
  border-radius: 8px;
  background-color: #f2f5f8;
}

.mx_AppTile_mini,
.mx_AppTileFullWidth {
  margin: 0;
  padding: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.mx_AppTile_mini {
  width: 100%;
  height: 200px;
}

.mx_AppTile .mx_AppTile_persistedWrapper,
.mx_AppTile_mini .mx_AppTile_persistedWrapper,
.mx_AppTileFullWidth .mx_AppTile_persistedWrapper {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.mx_AppTile_persistedWrapper div {
  width: 100%;
  height: 100%;
}

.mx_AppTileMenuBar {
  margin: 0;
  font-size: 1.2rem;
  background-color: #f2f5f8;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 100%;
  padding-top: 2px;
  padding-bottom: 8px;
}

.mx_AppTileMenuBarTitle {
  line-height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mx_AppTileMenuBarTitle .mx_WidgetAvatar {
  margin-right: 12px;
}

.mx_AppTileMenuBarTitle > :last-child {
  margin-left: 9px;
}

.mx_AppTileMenuBarWidgets {
  float: right;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_AppTileMenuBar_iconButton {
  width: 12px;
  height: 12px;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: 0 center;
  mask-position: 0 center;
  -webkit-mask-size: auto 12px;
  mask-size: auto 12px;
  background-color: #212121;
  margin: 0 3px;
}

.mx_AppTileMenuBar_iconButton.mx_AppTileMenuBar_iconButton_popout {
  -webkit-mask-image: url(../../img/feather-customised/widget/external-link.7ab6751.svg);
  mask-image: url(../../img/feather-customised/widget/external-link.7ab6751.svg);
}

.mx_AppTileMenuBar_iconButton.mx_AppTileMenuBar_iconButton_menu {
  -webkit-mask-image: url(../../img/element-icons/room/ellipsis.b82ece6.svg);
  mask-image: url(../../img/element-icons/room/ellipsis.b82ece6.svg);
}

.mx_AppTileBody {
  height: 100%;
  background-color: #fff;
}

.mx_AppTileBody,
.mx_AppTileBody_mini {
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
}

.mx_AppTileBody_mini {
  height: 200px;
}

.mx_AppTile .mx_AppTileBody,
.mx_AppTile_mini .mx_AppTileBody_mini,
.mx_AppTileFullWidth .mx_AppTileBody {
  height: inherit;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.mx_AppTileBody_mini iframe,
.mx_AppTileBody iframe {
  border: none;
  width: 100%;
  height: 100%;
}

.mx_AppTileBody iframe {
  overflow: hidden;
  padding: 0;
  margin: 0;
  display: block;
}

.mx_AppPermissionWarning {
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 1.6rem;
}

.mx_AppPermissionWarning_row {
  margin-bottom: 12px;
}

.mx_AppPermissionWarning_smallText {
  font-size: 1.2rem;
}

.mx_AppPermissionWarning_bolder {
  font-weight: 600;
}

.mx_AppPermissionWarning h4 {
  margin: 0;
  padding: 0;
}

.mx_AppPermissionWarning_helpIcon {
  margin-top: 1px;
  margin-right: 2px;
  width: 10px;
  height: 10px;
  display: inline-block;
}

.mx_AppPermissionWarning_helpIcon:before {
  display: inline-block;
  background-color: #0dbd8b;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 12px;
  mask-size: 12px;
  width: 12px;
  height: 12px;
  -webkit-mask-position: center;
  mask-position: center;
  content: "";
  vertical-align: middle;
  -webkit-mask-image: url(../../img/feather-customised/help-circle.03fb6cf.svg);
  mask-image: url(../../img/feather-customised/help-circle.03fb6cf.svg);
}

.mx_AppPermissionWarning_tooltip {
  -webkit-box-shadow: none;
  box-shadow: none;
  background-color: #27303a;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 6px 8px;
}

.mx_AppPermissionWarning_tooltip ul {
  list-style-position: inside;
  padding-left: 2px;
  margin-left: 0;
}

.mx_AppLoading {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-weight: 700;
  position: relative;
  height: 100%;
  background-color: #fff !important;
  border-radius: 8px;
}

.mx_AppLoading .mx_Spinner {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.mx_AppLoading_spinner_fadeIn {
  -webkit-animation-fill-mode: backwards;
  animation-fill-mode: backwards;
  -webkit-animation-duration: 0.2s;
  animation-duration: 0.2s;
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
  -webkit-animation-name: mx_AppLoading_spinner_fadeIn_animation;
  animation-name: mx_AppLoading_spinner_fadeIn_animation;
}

@-webkit-keyframes mx_AppLoading_spinner_fadeIn_animation {
  0% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes mx_AppLoading_spinner_fadeIn_animation {
  0% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.mx_AppLoading iframe {
  display: none;
}

.mx_AppsDrawer_resizing .mx_AppTile_persistedWrapper {
  z-index: 1;
}

.mx_Autocomplete {
  position: absolute;
  bottom: 0;
  z-index: 1001;
  width: 100%;
  background: #fff;
  border: 1px solid transparent;
  border-bottom: none;
  border-radius: 8px 8px 0 0;
  max-height: 50vh;
  overflow: auto;
  -webkit-box-shadow: 0 -16px 32px rgba(0, 0, 0, 0.04);
  box-shadow: 0 -16px 32px rgba(0, 0, 0, 0.04);
}

.mx_Autocomplete_ProviderSection {
  border-bottom: 1px solid transparent;
}

.mx_Autocomplete_Completion_block {
  height: 34px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 0 12px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #2e2f32;
}

.mx_Autocomplete_Completion_block * {
  margin: 0 3px;
}

.mx_Autocomplete_Completion_pill {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 2rem;
  height: 3.4rem;
  padding: 0.4rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #2e2f32;
}

.mx_Autocomplete_Completion_pill > * {
  margin-right: 0.3rem;
}

.mx_Autocomplete_Completion_subtitle {
  font-style: italic;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.mx_Autocomplete_Completion_description {
  color: grey;
}

.mx_Autocomplete_Completion_container_pill {
  margin: 12px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-flow: wrap;
  flex-flow: wrap;
}

.mx_Autocomplete_Completion_container_truncate
  .mx_Autocomplete_Completion_description,
.mx_Autocomplete_Completion_container_truncate
  .mx_Autocomplete_Completion_subtitle,
.mx_Autocomplete_Completion_container_truncate
  .mx_Autocomplete_Completion_title {
  max-width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mx_Autocomplete_Completion.selected,
.mx_Autocomplete_Completion:hover {
  background: #f2f5f8;
  outline: none;
}

.mx_Autocomplete_provider_name {
  margin: 12px;
  color: #2e2f32;
  font-weight: 400;
  opacity: 0.4;
}

.m_RoomView_auxPanel_stateViews {
  padding: 5px 5px 5px 19px;
  border-bottom: 1px solid transparent;
}

.m_RoomView_auxPanel_stateViews_span a {
  text-decoration: none;
  color: inherit;
}

.m_RoomView_auxPanel_stateViews_span[data-severity="warning"] {
  font-weight: 700;
  color: orange;
}

.m_RoomView_auxPanel_stateViews_span[data-severity="alert"] {
  font-weight: 700;
  color: red;
}

.m_RoomView_auxPanel_stateViews_span[data-severity="normal"] {
  font-weight: 400;
}

.m_RoomView_auxPanel_stateViews_span[data-severity="notice"] {
  font-weight: 400;
  color: #a2a2a2;
}

.m_RoomView_auxPanel_stateViews_delim {
  padding: 0 5px;
  color: #a2a2a2;
}

.mx_BasicMessageComposer {
  position: relative;
}

.mx_BasicMessageComposer
  .mx_BasicMessageComposer_inputEmpty
  > :first-child:before {
  content: var(--placeholder);
  opacity: 0.333;
  width: 0;
  height: 0;
  overflow: visible;
  display: inline-block;
  pointer-events: none;
  white-space: nowrap;
}

@-webkit-keyframes visualbell {
  0% {
    background-color: #faa;
  }
  to {
    background-color: #fff;
  }
}

.mx_BasicMessageComposer.mx_BasicMessageComposer_input_error {
  -webkit-animation: visualbell 0.2s;
  animation: visualbell 0.2s;
}

.mx_BasicMessageComposer .mx_BasicMessageComposer_input {
  white-space: pre-wrap;
  word-wrap: break-word;
  outline: none;
  overflow-x: hidden;
}

.mx_BasicMessageComposer
  .mx_BasicMessageComposer_input.mx_BasicMessageComposer_input_shouldShowPillAvatar
  span.mx_RoomPill,
.mx_BasicMessageComposer
  .mx_BasicMessageComposer_input.mx_BasicMessageComposer_input_shouldShowPillAvatar
  span.mx_UserPill {
  position: relative;
}

.mx_BasicMessageComposer
  .mx_BasicMessageComposer_input.mx_BasicMessageComposer_input_shouldShowPillAvatar
  span.mx_RoomPill:before,
.mx_BasicMessageComposer
  .mx_BasicMessageComposer_input.mx_BasicMessageComposer_input_shouldShowPillAvatar
  span.mx_UserPill:before {
  content: var(--avatar-letter);
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 0.24rem;
  background: var(--avatar-background), #fff;
  color: #fff;
  background-repeat: no-repeat;
  background-size: 1.6rem;
  border-radius: 1.6rem;
  text-align: center;
  font-weight: 400;
  line-height: 1.6rem;
  font-size: 1.04rem;
}

.mx_BasicMessageComposer
  .mx_BasicMessageComposer_input.mx_BasicMessageComposer_input_disabled {
  pointer-events: none;
}

.mx_BasicMessageComposer .mx_BasicMessageComposer_AutoCompleteWrapper {
  position: relative;
  height: 0;
}

.mx_E2EIcon {
  width: 16px;
  height: 16px;
  margin: 0 9px;
  position: relative;
  display: block;
}

.mx_E2EIcon_normal:after,
.mx_E2EIcon_normal:before,
.mx_E2EIcon_verified:after,
.mx_E2EIcon_verified:before,
.mx_E2EIcon_warning:after,
.mx_E2EIcon_warning:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
}

.mx_E2EIcon:before {
  background-color: #fff;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: 80%;
  mask-size: 80%;
}

.mx_E2EIcon:before,
.mx_E2EIcon_bordered {
  -webkit-mask-image: url(../../img/e2e/normal.76f0c09.svg);
  mask-image: url(../../img/e2e/normal.76f0c09.svg);
}

.mx_E2EIcon_bordered {
  background-color: #f3f8fd;
}

.mx_E2EIcon_bordered:after {
  -webkit-mask-size: 75%;
  mask-size: 75%;
}

.mx_E2EIcon_bordered:before {
  -webkit-mask-size: 60%;
  mask-size: 60%;
}

.mx_E2EIcon_warning:after {
  -webkit-mask-image: url(../../img/e2e/warning.78bb264.svg);
  mask-image: url(../../img/e2e/warning.78bb264.svg);
  background-color: #ff4b55;
}

.mx_E2EIcon_normal:after {
  -webkit-mask-image: url(../../img/e2e/normal.76f0c09.svg);
  mask-image: url(../../img/e2e/normal.76f0c09.svg);
  background-color: #91a1c0;
}

.mx_E2EIcon_verified:after {
  -webkit-mask-image: url(../../img/e2e/verified.5be6c9f.svg);
  mask-image: url(../../img/e2e/verified.5be6c9f.svg);
  background-color: #0dbd8b;
}

.mx_EditMessageComposer {
  padding: 3px;
  margin: -7px -10px -5px;
  overflow: visible !important;
}

.mx_EditMessageComposer .mx_BasicMessageComposer_input {
  border-radius: 4px;
  border: 1px solid transparent;
  background-color: #fff;
  max-height: 200px;
  padding: 3px 6px;
}

.mx_EditMessageComposer .mx_BasicMessageComposer_input:focus {
  border-color: rgba(13, 189, 139, 0.5);
}

.mx_EditMessageComposer .mx_EditMessageComposer_buttons {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  position: absolute;
  left: 0;
  background: #f3f8fd;
  z-index: 100;
  right: 0;
  margin: 0 -110px 0 0;
  padding: 5px 147px 5px 5px;
}

.mx_EditMessageComposer .mx_EditMessageComposer_buttons .mx_AccessibleButton {
  margin-left: 5px;
  padding: 5px 40px;
}

.mx_EventTile_last .mx_EditMessageComposer_buttons {
  position: static;
  margin-right: -147px;
}

.mx_EntityTile {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #2e2f32;
  cursor: pointer;
}

.mx_EntityTile .mx_E2EIcon {
  margin: 0;
  position: absolute;
  bottom: 2px;
  right: 7px;
}

.mx_EntityTile:hover {
  padding-right: 30px;
  position: relative;
}

.mx_EntityTile:hover:before {
  content: "";
  position: absolute;
  top: calc(50% - 8px);
  right: -8px;
  -webkit-mask: url(../../img/member_chevron.4163a20.png);
  mask: url(../../img/member_chevron.4163a20.png);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  width: 16px;
  height: 16px;
  background-color: #91a1c0;
}

.mx_EntityTile .mx_PresenceLabel {
  display: none;
}

.mx_EntityTile:not(.mx_EntityTile_noHover):hover .mx_PresenceLabel {
  display: block;
}

.mx_EntityTile_invite {
  display: table-cell;
  vertical-align: middle;
  margin-left: 10px;
  width: 26px;
}

.mx_EntityTile_avatar,
.mx_GroupRoomTile_avatar {
  padding: 4px 12px 4px 3px;
  position: relative;
}

.mx_EntityTile_name,
.mx_GroupRoomTile_name {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 0px;
  flex: 1 1 0;
  overflow: hidden;
  font-size: 1.4rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mx_EntityTile_details {
  overflow: hidden;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.mx_EntityTile_ellipsis .mx_EntityTile_name,
.mx_EntityTile_invitePlaceholder .mx_EntityTile_name {
  font-style: italic;
  color: #2e2f32;
}

.mx_EntityTile_offline_beenactive .mx_EntityTile_avatar,
.mx_EntityTile_offline_beenactive .mx_EntityTile_name,
.mx_EntityTile_unavailable .mx_EntityTile_avatar,
.mx_EntityTile_unavailable .mx_EntityTile_name {
  opacity: 0.5;
}

.mx_EntityTile_offline_neveractive .mx_EntityTile_avatar,
.mx_EntityTile_offline_neveractive .mx_EntityTile_name,
.mx_EntityTile_unknown .mx_EntityTile_avatar,
.mx_EntityTile_unknown .mx_EntityTile_name {
  opacity: 0.25;
}

.mx_EntityTile_subtext {
  font-size: 1.1rem;
  opacity: 0.5;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: clip;
}

.mx_EntityTile_power {
  -webkit-padding-start: 6px;
  padding-inline-start: 6px;
  font-size: 1rem;
  color: #8d99a5;
  max-width: 6em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mx_EntityTile:hover .mx_EntityTile_power {
  display: none;
}

.mx_EventTile[data-layout="bubble"],
.mx_EventTile[data-layout="bubble"] ~ .mx_EventListSummary {
  --avatarSize: 32px;
  --gutterSize: 11px;
  --cornerRadius: 12px;
  --maxWidth: 70%;
}

.mx_EventTile[data-layout="bubble"] {
  position: relative;
  margin-top: var(--gutterSize);
  margin-left: 50px;
  margin-right: 100px;
}

.mx_EventTile[data-layout="bubble"].mx_EventTile_continuation {
  margin-top: 2px;
}

.mx_EventTile[data-layout="bubble"] .mx_EventTile {
  padding-top: 0;
}

.mx_EventTile[data-layout="bubble"].mx_EventTile_selected:before,
.mx_EventTile[data-layout="bubble"]:hover:before {
  content: "";
  position: absolute;
  top: -1px;
  bottom: -1px;
  left: -60px;
  right: -60px;
  z-index: -1;
  background: #fefcf5;
  border-radius: 4px;
}

.mx_EventTile[data-layout="bubble"].mx_EventTile_selected
  .mx_EventTile_avatar
  img,
.mx_EventTile[data-layout="bubble"]:hover .mx_EventTile_avatar img {
  -webkit-box-shadow: 0 0 0 3px #fefcf5;
  box-shadow: 0 0 0 3px #fefcf5;
}

.mx_EventTile[data-layout="bubble"] .mx_EventTile_line,
.mx_EventTile[data-layout="bubble"] .mx_SenderProfile {
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  max-width: 70%;
}

.mx_EventTile[data-layout="bubble"] .mx_SenderProfile {
  position: relative;
  top: -2px;
  left: 2px;
}

.mx_EventTile[data-layout="bubble"][data-self="false"] .mx_EventTile_line {
  border-bottom-right-radius: var(--cornerRadius);
}

.mx_EventTile[data-layout="bubble"][data-self="false"] .mx_EventTile_avatar {
  left: -34px;
}

.mx_EventTile[data-layout="bubble"][data-self="false"] .mx_MessageActionBar {
  right: 0;
  -webkit-transform: translate3d(90%, 50%, 0);
  transform: translate3d(90%, 50%, 0);
}

.mx_EventTile[data-layout="bubble"][data-self="false"] {
  --backgroundColor: #f7f8f9;
}

.mx_EventTile[data-layout="bubble"][data-self="true"] .mx_EventTile_line {
  border-bottom-left-radius: var(--cornerRadius);
  float: right;
}

.mx_EventTile[data-layout="bubble"][data-self="true"] .mx_EventTile_line > a {
  left: auto;
  right: -68px;
}

.mx_EventTile[data-layout="bubble"][data-self="true"] .mx_SenderProfile {
  display: none;
}

.mx_EventTile[data-layout="bubble"][data-self="true"]
  .mx_ReplyTile
  .mx_SenderProfile {
  display: block;
}

.mx_EventTile[data-layout="bubble"][data-self="true"] .mx_ReactionsRow {
  float: right;
  clear: right;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.mx_EventTile[data-layout="bubble"][data-self="true"]
  .mx_ReactionsRow
  > :last-child {
  -webkit-box-ordinal-group: 0;
  -ms-flex-order: -1;
  order: -1;
}

.mx_EventTile[data-layout="bubble"][data-self="true"] .mx_EventTile_avatar {
  top: -19px;
  right: -35px;
}

.mx_EventTile[data-layout="bubble"][data-self="true"] {
  --backgroundColor: #f8fdfc;
}

.mx_EventTile[data-layout="bubble"] .mx_EventTile_line {
  position: relative;
  padding: var(--gutterSize);
  border-top-left-radius: var(--cornerRadius);
  border-top-right-radius: var(--cornerRadius);
  background: var(--backgroundColor);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  grid-gap: 5px;
  gap: 5px;
  margin: 0 -12px 0 -9px;
}

.mx_EventTile[data-layout="bubble"] .mx_EventTile_line > a {
  position: absolute;
  padding: 10px 20px;
  top: 0;
  left: -68px;
}

.mx_EventTile[data-layout="bubble"].mx_EventTile_continuation[data-self="false"]
  .mx_EventTile_line {
  border-top-left-radius: 0;
}

.mx_EventTile[data-layout="bubble"].mx_EventTile_lastInSection[data-self="false"]
  .mx_EventTile_line {
  border-bottom-left-radius: var(--cornerRadius);
}

.mx_EventTile[data-layout="bubble"].mx_EventTile_continuation[data-self="true"]
  .mx_EventTile_line {
  border-top-right-radius: 0;
}

.mx_EventTile[data-layout="bubble"].mx_EventTile_lastInSection[data-self="true"]
  .mx_EventTile_line {
  border-bottom-right-radius: var(--cornerRadius);
}

.mx_EventTile[data-layout="bubble"] .mx_EventTile_avatar {
  position: absolute;
  top: 0;
}

.mx_EventTile[data-layout="bubble"] .mx_EventTile_avatar img {
  -webkit-box-shadow: 0 0 0 3px #fff;
  box-shadow: 0 0 0 3px #fff;
  border-radius: 50%;
}

.mx_EventTile[data-layout="bubble"] .mx_BaseAvatar,
.mx_EventTile[data-layout="bubble"] .mx_EventTile_avatar {
  line-height: 1;
}

.mx_EventTile[data-layout="bubble"][data-has-reply="true"]
  > .mx_EventTile_line {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.mx_EventTile[data-layout="bubble"][data-has-reply="true"]
  .mx_ReplyThread_show {
  -webkit-box-ordinal-group: 100000;
  -ms-flex-order: 99999;
  order: 99999;
}

.mx_EventTile[data-layout="bubble"][data-has-reply="true"] .mx_ReplyThread {
  margin: 0 calc(var(--gutterSize) * -1);
}

.mx_EventTile[data-layout="bubble"][data-has-reply="true"]
  .mx_ReplyThread
  .mx_EventTile_reply {
  max-width: 90%;
  padding: 0;
}

.mx_EventTile[data-layout="bubble"][data-has-reply="true"]
  .mx_ReplyThread
  .mx_EventTile_reply
  > a {
  display: none !important;
}

.mx_EventTile[data-layout="bubble"][data-has-reply="true"]
  .mx_ReplyThread
  .mx_EventTile {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  grid-gap: var(--gutterSize);
  gap: var(--gutterSize);
}

.mx_EventTile[data-layout="bubble"][data-has-reply="true"]
  .mx_ReplyThread
  .mx_EventTile
  .mx_EventTile_avatar {
  position: static;
}

.mx_EventTile[data-layout="bubble"][data-has-reply="true"]
  .mx_ReplyThread
  .mx_EventTile
  .mx_SenderProfile {
  display: none;
}

.mx_EventTile[data-layout="bubble"] .mx_EditMessageComposer_buttons {
  position: static;
  padding: 0;
  margin: 0;
  background: transparent;
}

.mx_EventTile[data-layout="bubble"] .mx_ReactionsRow {
  margin-right: -18px;
  margin-left: -9px;
}

.mx_EventTile[data-layout="bubble"] .mx_ReplyThread {
  border-left-width: 2px;
  border-left-color: #c1c6cd;
}

.mx_EventTile[data-layout="bubble"].mx_EventTile_bubbleContainer,
.mx_EventTile[data-layout="bubble"].mx_EventTile_info,
.mx_EventTile[data-layout="bubble"]
  ~ .mx_EventListSummary[data-expanded="false"] {
  --backgroundColor: transparent;
  --gutterSize: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 5px 0;
}

.mx_EventTile[data-layout="bubble"].mx_EventTile_bubbleContainer
  .mx_EventTile_avatar,
.mx_EventTile[data-layout="bubble"].mx_EventTile_info .mx_EventTile_avatar,
.mx_EventTile[data-layout="bubble"]
  ~ .mx_EventListSummary[data-expanded="false"]
  .mx_EventTile_avatar {
  position: static;
  -webkit-box-ordinal-group: 0;
  -ms-flex-order: -1;
  order: -1;
  margin-right: 5px;
}

.mx_EventTile[data-layout="bubble"] ~ .mx_EventListSummary {
  --maxWidth: 80%;
  margin-left: calc(var(--avatarSize) + var(--gutterSize));
  margin-right: calc(var(--gutterSize) + var(--avatarSize));
}

.mx_EventTile[data-layout="bubble"]
  ~ .mx_EventListSummary
  .mx_EventListSummary_toggle {
  float: none;
  -webkit-box-ordinal-group: 10;
  -ms-flex-order: 9;
  order: 9;
  margin: 0 0 0 5px;
}

.mx_EventTile[data-layout="bubble"]
  ~ .mx_EventListSummary
  .mx_EventListSummary_avatars {
  padding-top: 0;
}

.mx_EventTile[data-layout="bubble"] ~ .mx_EventListSummary:after {
  content: "";
  clear: both;
}

.mx_EventTile[data-layout="bubble"] ~ .mx_EventListSummary .mx_EventTile {
  margin: 0 6px;
}

.mx_EventTile[data-layout="bubble"] ~ .mx_EventListSummary .mx_EventTile_line {
  margin: 0 5px;
}

.mx_EventTile[data-layout="bubble"]
  ~ .mx_EventListSummary
  .mx_EventTile_line
  > a {
  left: auto;
  right: 0;
  -webkit-transform: translateX(calc(100% + 5px));
  transform: translateX(calc(100% + 5px));
}

.mx_EventTile[data-layout="bubble"]
  ~ .mx_EventListSummary
  .mx_MessageActionBar {
  -webkit-transform: translate3d(90%, 0, 0);
  transform: translate3d(90%, 0, 0);
}

.mx_EventTile[data-layout="bubble"]
  ~ .mx_EventListSummary[data-expanded="false"] {
  padding: 0 34px;
}

.mx_EventTile[data-layout="bubble"].mx_EventTile_bad .mx_EventTile_line,
.mx_EventTile[data-layout="bubble"].mx_EventTile_bad:hover:before,
.mx_EventTile[data-layout="bubble"] ~ .mx_EventListSummary .mx_EventTile_line,
.mx_EventTile[data-layout="bubble"] ~ .mx_EventListSummary:hover:before {
  background: transparent;
}

.mx_EventTile[data-layout="bubble"] + .mx_EventListSummary .mx_EventTile {
  margin-top: 0;
  padding: 2px 0;
}

.mx_EventTile[data-layout="bubble"] .mx_EventListSummary_toggle {
  margin-right: 55px;
}

.mx_EventTile[data-layout="bubble"].mx_EventTile_bad > .mx_EventTile_line {
  display: grid;
  grid-template: "reply reply" auto "shield body" auto "shield link" auto/auto 1fr;
}

.mx_EventTile[data-layout="bubble"].mx_EventTile_bad
  > .mx_EventTile_line
  .mx_EventTile_e2eIcon {
  grid-area: shield;
}

.mx_EventTile[data-layout="bubble"].mx_EventTile_bad
  > .mx_EventTile_line
  .mx_UnknownBody {
  grid-area: body;
}

.mx_EventTile[data-layout="bubble"].mx_EventTile_bad
  > .mx_EventTile_line
  .mx_EventTile_keyRequestInfo {
  grid-area: link;
}

.mx_EventTile[data-layout="bubble"].mx_EventTile_bad
  > .mx_EventTile_line
  .mx_ReplyThread_wrapper {
  grid-area: reply;
}

.mx_EventTile[data-layout="bubble"] .mx_EventTile_readAvatars {
  position: absolute;
  right: -110px;
  bottom: 0;
  top: auto;
}

.mx_EventTile[data-layout="bubble"] .mx_MTextBody {
  max-width: 100%;
}

.mx_EventTile:not([data-layout="bubble"]) {
  max-width: 100%;
  clear: both;
  padding-top: 18px;
  font-size: 1.4rem;
  position: relative;
}

.mx_EventTile:not([data-layout="bubble"]).mx_EventTile_info {
  padding-top: 1px;
}

.mx_EventTile:not([data-layout="bubble"]) .mx_EventTile_avatar {
  top: 14px;
  left: 8px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.mx_EventTile:not([data-layout="bubble"]).mx_EventTile_info
  .mx_EventTile_avatar {
  top: 0.6rem;
  left: 64px;
}

.mx_EventTile:not([data-layout="bubble"]).mx_EventTile_continuation {
  padding-top: 0 !important;
}

.mx_EventTile:not([data-layout="bubble"]).mx_EventTile_continuation.mx_EventTile_isEditing {
  padding-top: 5px !important;
  margin-top: -5px;
}

.mx_EventTile:not([data-layout="bubble"]).mx_EventTile_isEditing {
  background-color: #f3f8fd;
}

.mx_EventTile:not([data-layout="bubble"]) .mx_SenderProfile {
  color: #2e2f32;
  font-size: 1.4rem;
  display: inline-block;
  overflow: hidden;
  cursor: pointer;
  padding-bottom: 0;
  padding-top: 0;
  margin: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: calc(100% - 64px);
}

.mx_EventTile:not([data-layout="bubble"]) .mx_SenderProfile .mx_Flair {
  opacity: 0.7;
  margin-left: 5px;
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.mx_EventTile:not([data-layout="bubble"]) .mx_SenderProfile .mx_Flair img {
  vertical-align: -2px;
  margin-right: 2px;
  border-radius: 8px;
}

.mx_EventTile:not([data-layout="bubble"]).mx_EventTile_isEditing
  .mx_MessageTimestamp {
  visibility: hidden;
}

.mx_EventTile:not([data-layout="bubble"]) .mx_MessageTimestamp {
  display: block;
  white-space: nowrap;
  left: 0;
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.mx_EventTile:not([data-layout="bubble"]).mx_EventTile_continuation
  .mx_EventTile_line {
  clear: both;
}

.mx_EventTile:not([data-layout="bubble"]) .mx_EventTile_line,
.mx_EventTile:not([data-layout="bubble"]) .mx_EventTile_reply {
  position: relative;
  padding-left: 64px;
  border-radius: 8px;
}

.mx_EventTile:not([data-layout="bubble"]) .mx_EventTile_reply {
  margin-right: 10px;
}

.mx_EventTile:not([data-layout="bubble"]).mx_EventTile_selected
  > div
  > a
  > .mx_MessageTimestamp {
  left: -4px;
}

.mx_EventTile:not([data-layout="bubble"]).mx_EventTile_selected
  > .mx_EventTile_line {
  border-left: 4px solid #0dbd8b;
  padding-left: 60px;
  background-color: #f6f7f8;
}

.mx_EventTile:not([data-layout="bubble"]).mx_EventTile_highlight,
.mx_EventTile:not([data-layout="bubble"]).mx_EventTile_highlight
  .markdown-body {
  color: #ff4b55;
}

.mx_EventTile:not([data-layout="bubble"]).mx_EventTile_highlight
  .markdown-body
  .mx_EventTile_line,
.mx_EventTile:not([data-layout="bubble"]).mx_EventTile_highlight
  .mx_EventTile_line {
  background-color: #fff8e3;
}

.mx_EventTile:not([data-layout="bubble"]).mx_EventTile_info .mx_EventTile_line,
.mx_EventTile:not([data-layout="bubble"])
  ~ .mx_EventListSummary
  .mx_EventTile_avatar
  ~ .mx_EventTile_line {
  padding-left: 82px;
}

.mx_EventTile:not([data-layout="bubble"])
  ~ .mx_EventListSummary
  .mx_EventTile_line {
  padding-left: 64px;
}

.mx_EventTile:not([data-layout="bubble"]).mx_EventTile_selected.mx_EventTile_info
  .mx_EventTile_line {
  padding-left: 78px;
}

.mx_EventTile:not([data-layout="bubble"]).mx_EventTile.focus-visible:focus-within
  .mx_EventTile_line,
.mx_EventTile:not([data-layout="bubble"]).mx_EventTile.mx_EventTile_actionBarFocused
  .mx_EventTile_line,
.mx_EventTile:not([data-layout="bubble"]).mx_EventTile:hover
  .mx_EventTile_line {
  background-color: #f6f7f8;
}

.mx_EventTile:not([data-layout="bubble"]) .mx_EventTile_searchHighlight {
  background-color: #0dbd8b;
  color: #fff;
  border-radius: 5px;
  padding-left: 2px;
  padding-right: 2px;
  cursor: pointer;
}

.mx_EventTile:not([data-layout="bubble"]) .mx_EventTile_searchHighlight a {
  background-color: #0dbd8b;
  color: #fff;
}

.mx_EventTile:not([data-layout="bubble"]) .mx_EventTile_receiptSending:before,
.mx_EventTile:not([data-layout="bubble"]) .mx_EventTile_receiptSent:before {
  background-color: #8d99a5;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: 14px;
  mask-size: 14px;
  width: 14px;
  height: 14px;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.mx_EventTile:not([data-layout="bubble"]) .mx_EventTile_receiptSent:before {
  -webkit-mask-image: url(../../img/element-icons/circle-sent.5079cbe.svg);
  mask-image: url(../../img/element-icons/circle-sent.5079cbe.svg);
}

.mx_EventTile:not([data-layout="bubble"]) .mx_EventTile_receiptSending:before {
  -webkit-mask-image: url(../../img/element-icons/circle-sending.bcca6aa.svg);
  mask-image: url(../../img/element-icons/circle-sending.bcca6aa.svg);
}

.mx_EventTile:not([data-layout="bubble"]).mx_EventTile_contextual {
  opacity: 0.4;
}

.mx_EventTile:not([data-layout="bubble"]) .mx_EventTile_msgOption {
  float: right;
  text-align: right;
  position: relative;
  width: 90px;
  height: 1px;
  margin-right: 10px;
}

.mx_EventTile:not([data-layout="bubble"]) .mx_EventTile_msgOption a {
  text-decoration: none;
}

.mx_EventTile:not([data-layout="bubble"]) .mx_EventTile_body {
  overflow-y: hidden;
}

.mx_EventTile:not([data-layout="bubble"]):hover.mx_EventTile_unknown
  .mx_EventTile_line,
.mx_EventTile:not([data-layout="bubble"]):hover.mx_EventTile_unverified
  .mx_EventTile_line,
.mx_EventTile:not([data-layout="bubble"]):hover.mx_EventTile_verified
  .mx_EventTile_line {
  padding-left: 60px;
}

.mx_EventTile:not([data-layout="bubble"]):hover.mx_EventTile_verified
  .mx_EventTile_line {
  border-left: 4px solid #76cfa5;
}

.mx_EventTile:not([data-layout="bubble"]):hover.mx_EventTile_unknown
  .mx_EventTile_line,
.mx_EventTile:not([data-layout="bubble"]):hover.mx_EventTile_unverified
  .mx_EventTile_line {
  border-left: 4px solid #e8bf37;
}

.mx_EventTile:not([data-layout="bubble"]):hover.mx_EventTile_unknown.mx_EventTile_info
  .mx_EventTile_line,
.mx_EventTile:not([data-layout="bubble"]):hover.mx_EventTile_unverified.mx_EventTile_info
  .mx_EventTile_line,
.mx_EventTile:not([data-layout="bubble"]):hover.mx_EventTile_verified.mx_EventTile_info
  .mx_EventTile_line {
  padding-left: 78px;
}

.mx_EventTile:not([data-layout="bubble"]):hover .mx_EventTile_e2eIcon {
  opacity: 1;
}

.mx_EventTile:not([data-layout="bubble"]):hover.mx_EventTile_unknown
  .mx_EventTile_line
  > a
  > .mx_MessageTimestamp,
.mx_EventTile:not([data-layout="bubble"]):hover.mx_EventTile_unverified
  .mx_EventTile_line
  > a
  > .mx_MessageTimestamp,
.mx_EventTile:not([data-layout="bubble"]):hover.mx_EventTile_verified
  .mx_EventTile_line
  > a
  > .mx_MessageTimestamp {
  left: -4px;
}

.mx_EventTile:not([data-layout="bubble"]):hover.mx_EventTile_unknown
  .mx_EventTile_line
  > .mx_EventTile_e2eIcon,
.mx_EventTile:not([data-layout="bubble"]):hover.mx_EventTile_unverified
  .mx_EventTile_line
  > .mx_EventTile_e2eIcon,
.mx_EventTile:not([data-layout="bubble"]):hover.mx_EventTile_verified
  .mx_EventTile_line
  > .mx_EventTile_e2eIcon {
  display: block;
  left: 41px;
}

.mx_EventTile:not([data-layout="bubble"]) .mx_MImageBody {
  margin-right: 34px;
}

.mx_EventTile:not([data-layout="bubble"]) .mx_EventTile_e2eIcon {
  position: absolute;
  top: 6px;
  left: 44px;
  bottom: 0;
  right: 0;
}

.mx_EventTile:not([data-layout="bubble"]) .mx_ReactionsRow {
  margin: 0;
  padding: 6px 60px;
}

.mx_EventTile_content {
  overflow-y: hidden;
  overflow-x: hidden;
  margin-right: 34px;
}

.mx_EventTile_spoiler {
  cursor: pointer;
}

.mx_EventTile_spoiler_reason {
  color: #acacac;
  font-size: 1.1rem;
}

.mx_EventTile_spoiler_content {
  -webkit-filter: blur(5px) saturate(0.1) sepia(1);
  filter: blur(5px) saturate(0.1) sepia(1);
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
}

.mx_EventTile_spoiler.visible > .mx_EventTile_spoiler_content {
  -webkit-filter: none;
  filter: none;
}

.mx_RoomView_timeline_rr_enabled
  .mx_EventTile:not([data-layout="bubble"])
  .mx_EventTile_line {
  margin-right: 110px;
}

.mx_EventTile_bubbleContainer {
  display: grid;
  grid-template-columns: 1fr 100px;
}

.mx_EventTile_bubbleContainer .mx_EventTile_line {
  margin-right: 0;
  grid-column: 1/3;
  padding: 0 !important;
}

.mx_EventTile_bubbleContainer .mx_EventTile_msgOption {
  grid-column: 2;
}

.mx_EventTile_bubbleContainer:hover .mx_EventTile_line {
  background-color: inherit !important;
}

.mx_EventTile_readAvatars {
  position: relative;
  display: inline-block;
  width: 14px;
  height: 14px;
  top: -2.2rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 1;
}

.mx_EventTile_readAvatars .mx_BaseAvatar {
  position: absolute;
  display: inline-block;
  height: 1.4rem;
  width: 1.4rem;
  will-change: left, top;
  -webkit-transition: left 0.1s ease-out, top 0.3s ease-out;
  transition: left 0.1s ease-out, top 0.3s ease-out;
  -webkit-transition: left var(--transition-short) ease-out,
    top var(--transition-standard) ease-out;
  transition: left var(--transition-short) ease-out,
    top var(--transition-standard) ease-out;
}

.mx_EventTile_readAvatarRemainder {
  color: #acacac;
  font-size: 1.1rem;
  position: absolute;
}

.mx_EventTile_bigEmoji.mx_EventTile_bigEmoji {
  font-size: 48px !important;
  line-height: 57px !important;
}

.mx_EventTile_content .mx_EventTile_edited {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 1.2rem;
  color: #9e9e9e;
  display: inline-block;
  margin-left: 9px;
  cursor: pointer;
}

.mx_EventTile_e2eIcon {
  position: relative;
  width: 14px;
  height: 14px;
  display: block;
  opacity: 0.2;
  background-repeat: no-repeat;
  background-size: contain;
}

.mx_EventTile_e2eIcon:after,
.mx_EventTile_e2eIcon:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  -webkit-mask-size: contain;
  mask-size: contain;
}

.mx_EventTile_e2eIcon:after,
.mx_EventTile_e2eIcon:before {
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
}

.mx_EventTile_e2eIcon:before {
  background-color: #fff;
  -webkit-mask-image: url(../../img/e2e/normal.76f0c09.svg);
  mask-image: url(../../img/e2e/normal.76f0c09.svg);
  -webkit-mask-size: 80%;
  mask-size: 80%;
}

.mx_EventTile_e2eIcon_undecryptable:after,
.mx_EventTile_e2eIcon_unverified:after {
  -webkit-mask-image: url(../../img/e2e/warning.78bb264.svg);
  mask-image: url(../../img/e2e/warning.78bb264.svg);
  background-color: #ff4b55;
}

.mx_EventTile_e2eIcon_undecryptable,
.mx_EventTile_e2eIcon_unverified {
  opacity: 1;
}

.mx_EventTile_e2eIcon_unknown:after {
  -webkit-mask-image: url(../../img/e2e/warning.78bb264.svg);
  mask-image: url(../../img/e2e/warning.78bb264.svg);
  background-color: #ff4b55;
}

.mx_EventTile_e2eIcon_unknown {
  opacity: 1;
}

.mx_EventTile_e2eIcon_unencrypted:after {
  -webkit-mask-image: url(../../img/e2e/warning.78bb264.svg);
  mask-image: url(../../img/e2e/warning.78bb264.svg);
  background-color: #ff4b55;
}

.mx_EventTile_e2eIcon_unencrypted {
  opacity: 1;
}

.mx_EventTile_e2eIcon_unauthenticated:after {
  -webkit-mask-image: url(../../img/e2e/normal.76f0c09.svg);
  mask-image: url(../../img/e2e/normal.76f0c09.svg);
  background-color: #91a1c0;
}

.mx_EventTile_e2eIcon_unauthenticated {
  opacity: 1;
}

.mx_EventTile_body pre {
  border: 1px solid transparent;
}

.mx_EventTile_content .markdown-body {
  font-family: inherit !important;
  white-space: normal !important;
  line-height: inherit !important;
  color: inherit;
  font-size: 1.4rem;
}

.mx_EventTile_content .markdown-body code,
.mx_EventTile_content .markdown-body pre {
  font-family: Menlo, Consolas, Liberation Mono, Lucida Console, monospace !important;
  background-color: #f3f8fd;
}

.mx_EventTile_content .markdown-body pre code > * {
  display: inline-block;
}

.mx_EventTile_content .markdown-body pre {
  overflow-x: overlay;
  overflow-y: visible;
}

.mx_EventTile_lineNumbers {
  float: left;
  margin: 0 0.5em 0 -1.5em;
  color: grey;
}

.mx_EventTile_lineNumber {
  text-align: right;
  display: block;
  padding-left: 1em;
}

.mx_EventTile_collapsedCodeBlock {
  max-height: 30vh;
}

.mx_EventTile.focus-visible:focus-within .mx_EventTile_body pre,
.mx_EventTile:hover .mx_EventTile_body pre {
  border: 1px solid #e5e5e5;
}

.mx_EventTile_pre_container {
  position: relative;
}

.mx_EventTile_button {
  position: absolute;
  display: inline-block;
  visibility: hidden;
  cursor: pointer;
  top: 8px;
  right: 8px;
  width: 19px;
  height: 19px;
  background-color: #2e2f32;
}

.mx_EventTile_buttonBottom {
  top: 33px;
}

.mx_EventTile_copyButton {
  -webkit-mask-image: url(../../img/feather-customised/clipboard.24dd87a.svg);
  mask-image: url(../../img/feather-customised/clipboard.24dd87a.svg);
}

.mx_EventTile_collapseButton {
  -webkit-mask-image: url(../../img/feather-customised/minimise.aec9142.svg);
  mask-image: url(../../img/feather-customised/minimise.aec9142.svg);
}

.mx_EventTile_collapseButton,
.mx_EventTile_expandButton {
  -webkit-mask-size: 75%;
  mask-size: 75%;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

.mx_EventTile_expandButton {
  -webkit-mask-image: url(../../img/feather-customised/maximise.dc32127.svg);
  mask-image: url(../../img/feather-customised/maximise.dc32127.svg);
}

.mx_EventTile_body
  .mx_EventTile_pre_container:focus-within
  .mx_EventTile_collapseButton,
.mx_EventTile_body
  .mx_EventTile_pre_container:focus-within
  .mx_EventTile_copyButton,
.mx_EventTile_body
  .mx_EventTile_pre_container:focus-within
  .mx_EventTile_expandButton,
.mx_EventTile_body
  .mx_EventTile_pre_container:hover
  .mx_EventTile_collapseButton,
.mx_EventTile_body .mx_EventTile_pre_container:hover .mx_EventTile_copyButton,
.mx_EventTile_body
  .mx_EventTile_pre_container:hover
  .mx_EventTile_expandButton {
  visibility: visible;
}

.mx_EventTile_content .markdown-body h1,
.mx_EventTile_content .markdown-body h2,
.mx_EventTile_content .markdown-body h3,
.mx_EventTile_content .markdown-body h4,
.mx_EventTile_content .markdown-body h5,
.mx_EventTile_content .markdown-body h6 {
  font-family: inherit !important;
  color: inherit;
}

.mx_EventTile_content .markdown-body h1,
.mx_EventTile_content .markdown-body h2 {
  font-size: 1.5em;
  border-bottom: none !important;
}

.mx_EventTile_content .markdown-body a {
  color: #238cf5;
}

.mx_EventTile_content .markdown-body .hljs {
  display: inline !important;
}

.mx_EventTile_keyRequestInfo {
  font-size: 1.2rem;
}

.mx_EventTile_keyRequestInfo_text {
  opacity: 0.5;
}

.mx_EventTile_keyRequestInfo_text a {
  color: #2e2f32;
  text-decoration: underline;
  cursor: pointer;
}

.mx_EventTile_keyRequestInfo_tooltip_contents p {
  text-align: auto;
  margin-left: 3px;
  margin-right: 3px;
}

.mx_EventTile_keyRequestInfo_tooltip_contents p:first-child {
  margin-top: 0;
}

.mx_EventTile_keyRequestInfo_tooltip_contents p:last-child {
  margin-bottom: 0;
}

.mx_EventTile_tileError {
  color: red;
  text-align: center;
  margin-right: 0;
}

.mx_EventTile_tileError .mx_EventTile_line {
  padding-left: 0;
  margin-right: 0;
}

.mx_EventTile_tileError .mx_EventTile_line span {
  padding: 4px 8px;
}

.mx_EventTile_tileError a {
  margin-left: 1em;
}

.mx_EventTile.focus-visible:focus-within .mx_MessageActionBar,
.mx_EventTile.mx_EventTile_actionBarFocused .mx_MessageActionBar,
.mx_EventTile:hover .mx_MessageActionBar,
[data-whatinput="keyboard"] .mx_EventTile:focus-within .mx_MessageActionBar {
  visibility: visible;
}

@media only screen and (max-width: 480px) {
  .mx_EventTile_line,
  .mx_EventTile_reply {
    padding-left: 0;
    margin-right: 0;
  }
  .mx_EventTile_content {
    margin-top: 10px;
    margin-right: 0;
  }
}

.mx_GroupLayout .mx_EventTile > .mx_SenderProfile {
  line-height: 2rem;
  margin-left: 64px;
}

.mx_GroupLayout .mx_EventTile > .mx_EventTile_avatar {
  position: absolute;
  z-index: 9;
}

.mx_GroupLayout .mx_EventTile .mx_MessageTimestamp {
  position: absolute;
  width: 46px;
}

.mx_GroupLayout .mx_EventTile .mx_EventTile_line,
.mx_GroupLayout .mx_EventTile .mx_EventTile_reply {
  padding-top: 1px;
  padding-bottom: 3px;
  line-height: 2.2rem;
}

.mx_MatrixChat_useCompactLayout .mx_EventTile {
  padding-top: 4px;
}

.mx_MatrixChat_useCompactLayout .mx_EventTile .mx_EventTile_line,
.mx_MatrixChat_useCompactLayout .mx_EventTile .mx_EventTile_reply {
  padding-top: 0;
  padding-bottom: 0;
}

.mx_MatrixChat_useCompactLayout .mx_EventTile.mx_EventTile_info {
  padding-top: 0;
  font-size: 1.3rem;
}

.mx_MatrixChat_useCompactLayout
  .mx_EventTile.mx_EventTile_info
  .mx_EventTile_line,
.mx_MatrixChat_useCompactLayout
  .mx_EventTile.mx_EventTile_info
  .mx_EventTile_reply {
  line-height: 2rem;
}

.mx_MatrixChat_useCompactLayout
  .mx_EventTile.mx_EventTile_info
  .mx_EventTile_avatar {
  top: 4px;
}

.mx_MatrixChat_useCompactLayout .mx_EventTile .mx_SenderProfile {
  font-size: 1.3rem;
}

.mx_MatrixChat_useCompactLayout .mx_EventTile.mx_EventTile_emote {
  padding-top: 8px;
}

.mx_MatrixChat_useCompactLayout
  .mx_EventTile.mx_EventTile_emote
  .mx_EventTile_avatar {
  top: 2px;
}

.mx_MatrixChat_useCompactLayout
  .mx_EventTile.mx_EventTile_emote
  .mx_EventTile_line,
.mx_MatrixChat_useCompactLayout
  .mx_EventTile.mx_EventTile_emote
  .mx_EventTile_reply {
  padding-top: 0;
  padding-bottom: 1px;
}

.mx_MatrixChat_useCompactLayout
  .mx_EventTile.mx_EventTile_emote.mx_EventTile_continuation {
  padding-top: 0;
}

.mx_MatrixChat_useCompactLayout
  .mx_EventTile.mx_EventTile_emote.mx_EventTile_continuation
  .mx_EventTile_line,
.mx_MatrixChat_useCompactLayout
  .mx_EventTile.mx_EventTile_emote.mx_EventTile_continuation
  .mx_EventTile_reply {
  padding-top: 0;
  padding-bottom: 0;
}

.mx_MatrixChat_useCompactLayout .mx_EventTile .mx_EventTile_avatar {
  top: 2px;
}

.mx_MatrixChat_useCompactLayout .mx_EventTile .mx_EventTile_e2eIcon {
  top: 3px;
}

.mx_MatrixChat_useCompactLayout .mx_EventTile .mx_EventTile_readAvatars {
  top: -2rem;
}

.mx_MatrixChat_useCompactLayout
  .mx_EventTile
  .mx_EventTile_content
  .markdown-body
  blockquote,
.mx_MatrixChat_useCompactLayout
  .mx_EventTile
  .mx_EventTile_content
  .markdown-body
  dl,
.mx_MatrixChat_useCompactLayout
  .mx_EventTile
  .mx_EventTile_content
  .markdown-body
  ol,
.mx_MatrixChat_useCompactLayout
  .mx_EventTile
  .mx_EventTile_content
  .markdown-body
  p,
.mx_MatrixChat_useCompactLayout
  .mx_EventTile
  .mx_EventTile_content
  .markdown-body
  pre,
.mx_MatrixChat_useCompactLayout
  .mx_EventTile
  .mx_EventTile_content
  .markdown-body
  table,
.mx_MatrixChat_useCompactLayout
  .mx_EventTile
  .mx_EventTile_content
  .markdown-body
  ul {
  margin-bottom: 4px;
}

.mx_MatrixChat_useCompactLayout .mx_RoomView_MessageList h2 {
  margin-top: 6px;
}

.mx_IRCLayout {
  --name-width: 70px;
  line-height: 1.8rem !important;
}

.mx_IRCLayout .mx_EventTile > a {
  text-decoration: none;
  min-width: 45px;
}

.mx_IRCLayout .mx_EventTile {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  padding-top: 0;
}

.mx_IRCLayout .mx_EventTile > * {
  margin-right: 5px;
}

.mx_IRCLayout .mx_EventTile > .mx_EventTile_msgOption {
  -webkit-box-ordinal-group: 6;
  -ms-flex-order: 5;
  order: 5;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

.mx_IRCLayout
  .mx_EventTile
  > .mx_EventTile_msgOption
  .mx_EventTile_readAvatars {
  top: 0.2rem;
}

.mx_IRCLayout .mx_EventTile .mx_EventTile_line,
.mx_IRCLayout .mx_EventTile .mx_EventTile_reply {
  padding: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-ordinal-group: 4;
  -ms-flex-order: 3;
  order: 3;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -ms-flex-negative: 1;
  flex-shrink: 1;
  min-width: 0;
}

.mx_IRCLayout .mx_EventTile > .mx_EventTile_avatar {
  -webkit-box-ordinal-group: 2;
  -ms-flex-order: 1;
  order: 1;
  position: relative;
  top: 0;
  left: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  height: 1.8rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_IRCLayout .mx_EventTile > .mx_EventTile_avatar > .mx_BaseAvatar,
.mx_IRCLayout .mx_EventTile > .mx_EventTile_avatar > .mx_BaseAvatar > * {
  height: 1.4rem !important;
  width: 1.4rem !important;
  font-size: 1rem !important;
  line-height: 1.5rem !important;
}

.mx_IRCLayout .mx_EventTile .mx_MessageTimestamp {
  font-size: 1rem;
  width: 45px;
  text-align: right;
}

.mx_IRCLayout .mx_EventTile > .mx_EventTile_e2eIcon {
  position: absolute;
  right: unset;
  left: unset;
  top: 0;
  padding: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  height: 1.8rem;
  background-position: 50%;
}

.mx_IRCLayout .mx_EventTile .mx_EventTile_line .mx_EventTile_e2eIcon,
.mx_IRCLayout .mx_EventTile .mx_EventTile_line .mx_MTextBody,
.mx_IRCLayout .mx_EventTile .mx_EventTile_line .mx_TextualEvent {
  display: inline-block;
}

.mx_IRCLayout .mx_EventTile .mx_EventTile_reply {
  -webkit-box-ordinal-group: 5;
  -ms-flex-order: 4;
  order: 4;
}

.mx_IRCLayout .mx_EventTile .mx_EditMessageComposer_buttons {
  position: relative;
}

.mx_IRCLayout .mx_EventTile_emote > .mx_EventTile_avatar {
  margin-left: calc(var(--name-width) + 19px);
}

.mx_IRCLayout blockquote {
  margin: 0;
}

.mx_IRCLayout .mx_EventListSummary > .mx_EventTile_line {
  padding-left: calc(var(--name-width) + 74px);
}

.mx_IRCLayout .mx_EventListSummary .mx_EventListSummary_avatars {
  padding: 0;
  margin: 0 9px 0 0;
}

.mx_IRCLayout .mx_EventTile.mx_EventTile_info .mx_EventTile_avatar {
  left: calc(var(--name-width) + 24px);
  top: 0;
}

.mx_IRCLayout .mx_EventTile.mx_EventTile_info .mx_EventTile_line {
  left: calc(var(--name-width) + 24px);
}

.mx_IRCLayout .mx_EventTile.mx_EventTile_info .mx_TextualEvent {
  line-height: 1.8rem;
}

.mx_IRCLayout .mx_EventTile:hover.mx_EventTile_unknown .mx_EventTile_line,
.mx_IRCLayout .mx_EventTile:hover.mx_EventTile_unverified .mx_EventTile_line,
.mx_IRCLayout .mx_EventTile:hover.mx_EventTile_verified .mx_EventTile_line {
  padding-left: 0;
  border-left: 0;
}

.mx_IRCLayout .mx_SenderProfile {
  width: var(--name-width);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-ordinal-group: 3;
  -ms-flex-order: 2;
  order: 2;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_IRCLayout .mx_SenderProfile > .mx_SenderProfile_displayName {
  width: 100%;
  text-align: end;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mx_IRCLayout .mx_SenderProfile > .mx_SenderProfile_mxid {
  visibility: collapse;
}

.mx_IRCLayout .mx_SenderProfile:hover {
  overflow: visible;
  z-index: 10;
}

.mx_IRCLayout .mx_SenderProfile:hover > .mx_SenderProfile_displayName {
  overflow: visible;
}

.mx_IRCLayout .mx_SenderProfile:hover > .mx_SenderProfile_mxid {
  visibility: visible;
}

.mx_IRCLayout .mx_ReplyThread {
  margin: 0;
}

.mx_IRCLayout .mx_ReplyThread .mx_SenderProfile {
  -webkit-box-ordinal-group: unset;
  -ms-flex-order: unset;
  order: unset;
  max-width: unset;
  width: unset;
  background: transparent;
}

.mx_IRCLayout .mx_ReplyThread .mx_EventTile_emote > .mx_EventTile_avatar {
  margin-left: 0;
}

.mx_IRCLayout .mx_ReplyThread .mx_MessageTimestamp {
  width: auto;
}

.mx_IRCLayout .mx_ReplyThread .mx_EventTile_e2eIcon {
  position: relative;
  -webkit-box-ordinal-group: 0;
  -ms-flex-order: -1;
  order: -1;
}

.mx_IRCLayout .mx_ProfileResizer {
  position: absolute;
  height: 100%;
  width: 15px;
  left: calc(80px + var(--name-width));
  cursor: col-resize;
  z-index: 100;
}

.mx_IRCLayout .mx_Flair > img {
  height: 1.4rem !important;
  width: 1.4rem !important;
}

.mx_JumpToBottomButton {
  z-index: 1000;
  position: absolute;
  bottom: 12px;
  right: 24px;
  width: 38px;
  height: 50px;
  text-align: center;
}

.mx_JumpToBottomButton_badge {
  position: relative;
  top: -12px;
  border-radius: 16px;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.4rem;
  text-align: center;
  display: inline-block;
  padding: 0 4px;
  color: #fff;
  background-color: #61708b;
}

.mx_JumpToBottomButton_highlight .mx_JumpToBottomButton_badge {
  color: #f2f5f8;
  background-color: #ff4b55;
}

.mx_JumpToBottomButton_scrollDown {
  position: relative;
  display: block;
  height: 38px;
  border-radius: 19px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: #fff;
  border: 1.3px solid #61708b;
  cursor: pointer;
}

.mx_JumpToBottomButton_scrollDown:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  -webkit-mask-image: url(../../img/feather-customised/chevron-down-thin.f9a2477.svg);
  mask-image: url(../../img/feather-customised/chevron-down-thin.f9a2477.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
  background: #61708b;
}

.mx_LinkPreviewGroup .mx_LinkPreviewGroup_hide {
  cursor: pointer;
  width: 18px;
  height: 18px;
}

.mx_LinkPreviewGroup .mx_LinkPreviewGroup_hide img {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 40px;
  flex: 0 0 40px;
  visibility: hidden;
}

.mx_LinkPreviewGroup .mx_LinkPreviewGroup_hide.focus-visible:focus img,
.mx_LinkPreviewGroup:hover .mx_LinkPreviewGroup_hide img {
  visibility: visible;
}

.mx_LinkPreviewGroup > .mx_AccessibleButton {
  color: #0dbd8b;
  text-align: center;
}

.mx_LinkPreviewWidget {
  margin-top: 15px;
  margin-right: 15px;
  margin-bottom: 15px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border-left: 2px solid #ddd;
  border-radius: 2px;
  color: #888;
}

.mx_LinkPreviewWidget_image {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100px;
  flex: 0 0 100px;
  margin-left: 15px;
  text-align: center;
  cursor: pointer;
}

.mx_LinkPreviewWidget_caption {
  margin-left: 15px;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  overflow: hidden;
}

.mx_LinkPreviewWidget_title {
  font-weight: 700;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.mx_LinkPreviewWidget_title .mx_LinkPreviewWidget_siteName {
  font-weight: 400;
}

.mx_LinkPreviewWidget_description {
  margin-top: 8px;
  white-space: normal;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.mx_MatrixChat_useCompactLayout .mx_LinkPreviewWidget {
  margin-top: 6px;
  margin-bottom: 6px;
}

.mx_MemberInfo {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  overflow-y: auto;
  margin-top: 8px;
}

.mx_MemberInfo,
.mx_MemberInfo_name {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.mx_MemberInfo_name {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_MemberInfo_name > .mx_E2EIcon {
  margin-right: 0;
}

.mx_MemberInfo_cancel {
  height: 16px;
  width: 16px;
  padding: 10px 0 10px 10px;
  cursor: pointer;
  -webkit-mask-image: url(../../img/minimise.871d2de.svg);
  mask-image: url(../../img/minimise.871d2de.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: 16px center;
  mask-position: 16px center;
  background-color: #91a1c0;
}

.mx_MemberInfo_name h2 {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  overflow-x: auto;
  max-height: 50px;
}

.mx_MemberInfo h2 {
  font-size: 1.8rem;
  font-weight: 600;
  margin: 16px 0 16px 15px;
}

.mx_MemberInfo_container {
  margin: 0 16px 16px;
}

.mx_MemberInfo .mx_RoomTile_nameContainer {
  width: 154px;
}

.mx_MemberInfo .mx_RoomTile_badge {
  display: none;
}

.mx_MemberInfo .mx_RoomTile_name {
  width: 160px;
}

.mx_MemberInfo_avatar {
  background: hsla(0, 0%, 91%, 0.77);
  margin-bottom: 16px;
}

.mx_MemberInfo_avatar > img {
  height: auto;
  width: 100%;
  max-height: 30vh;
  -o-object-fit: contain;
  object-fit: contain;
  display: block;
}

.mx_MemberInfo_avatar .mx_BaseAvatar.mx_BaseAvatar_image {
  cursor: -webkit-zoom-in;
  cursor: zoom-in;
}

.mx_MemberInfo_profile {
  margin-bottom: 16px;
}

.mx_MemberInfo h3 {
  text-transform: uppercase;
  color: #9fa9ba;
  font-weight: 700;
  font-size: 1.2rem;
  margin: 4px 0;
}

.mx_MemberInfo_profileField {
  font-size: 1.5rem;
  position: relative;
}

.mx_MemberInfo_buttons {
  margin-bottom: 16px;
}

.mx_MemberInfo_field {
  cursor: pointer;
  font-size: 1.5rem;
  color: #2e2f32;
  margin-left: 8px;
  line-height: 2.3rem;
}

.mx_MemberInfo_createRoom {
  cursor: pointer;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 8px;
}

.mx_MemberInfo_createRoom_label {
  width: auto !important;
  cursor: pointer;
}

.mx_MemberInfo label {
  font-size: 1.3rem;
}

.mx_MemberInfo label .mx_MemberInfo_label_text {
  display: inline-block;
  max-width: 180px;
  vertical-align: text-top;
}

.mx_MemberInfo input[type="radio"] {
  vertical-align: -2px;
  margin-right: 5px;
  margin-left: 8px;
}

.mx_MemberInfo_statusMessage {
  font-size: 1.1rem;
  opacity: 0.5;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: clip;
}

.mx_MemberInfo .mx_MemberInfo_scrollContainer {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.mx_GroupMemberList,
.mx_GroupRoomList,
.mx_MemberList {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-height: 0;
}

.mx_GroupMemberList .mx_Spinner,
.mx_GroupRoomList .mx_Spinner,
.mx_MemberList .mx_Spinner {
  -webkit-box-flex: 1;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
}

.mx_GroupMemberList .mx_SearchBox,
.mx_GroupRoomList .mx_SearchBox,
.mx_MemberList .mx_SearchBox {
  margin-bottom: 5px;
}

.mx_GroupMemberList h2,
.mx_GroupRoomList h2,
.mx_MemberList h2 {
  text-transform: uppercase;
  color: #3d3b39;
  font-weight: 600;
  font-size: 1.3rem;
  padding-left: 3px;
  padding-right: 12px;
  margin-top: 8px;
  margin-bottom: 4px;
}

.mx_GroupMemberList .mx_AutoHideScrollbar,
.mx_GroupRoomList .mx_AutoHideScrollbar,
.mx_MemberList .mx_AutoHideScrollbar {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 0px;
  flex: 1 1 0;
}

.mx_GroupMemberList .mx_RightPanel_scopeHeader,
.mx_GroupRoomList .mx_RightPanel_scopeHeader,
.mx_MemberList .mx_RightPanel_scopeHeader {
  margin-top: -8px;
}

.mx_GroupMemberList_query,
.mx_GroupRoomList_query {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}

.mx_MemberList_chevron {
  position: absolute;
  right: 35px;
  margin-top: -15px;
}

.mx_MemberList_border {
  overflow-y: auto;
  -webkit-box-ordinal-group: 2;
  -ms-flex-order: 1;
  order: 1;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 0px;
  flex: 1 1 0px;
}

.mx_MemberList_query {
  height: 16px;
}

.mx_MemberList_query[type="text"] {
  font-size: 1.2rem;
}

.mx_MemberList_wrapper {
  padding: 10px;
}

.mx_MemberList_invite {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  position: relative;
  background-color: #0dbd8b;
  border-radius: 4px;
  margin: 5px 9px 9px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
}

.mx_MemberList_invite.mx_AccessibleButton_disabled {
  background-color: #888;
  cursor: not-allowed;
}

.mx_MemberList_invite span {
  padding: 8px 0;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
}

.mx_MemberList_invite span:before {
  content: "";
  display: inline-block;
  background-color: #fff;
  -webkit-mask-image: url(../../img/element-icons/room/invite.946a71b.svg);
  mask-image: url(../../img/element-icons/room/invite.946a71b.svg);
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 20px;
  mask-size: 20px;
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.mx_MemberList_inviteCommunity span:before {
  -webkit-mask-image: url(../../img/icon-invite-people.d82f491.svg);
  mask-image: url(../../img/icon-invite-people.d82f491.svg);
}

.mx_MemberList_addRoomToCommunity span:before {
  -webkit-mask-image: url(../../img/icons-room-add.bd36e26.svg);
  mask-image: url(../../img/icons-room-add.bd36e26.svg);
}

.mx_MessageComposer_wrapper {
  vertical-align: middle;
  margin: auto;
  border-top: 1px solid transparent;
  position: relative;
  padding-left: 82px;
  padding-right: 6px;
}

.mx_MessageComposer_replaced_wrapper {
  margin-left: auto;
  margin-right: auto;
}

.mx_MessageComposer_replaced_valign {
  height: 60px;
  display: table-cell;
  vertical-align: middle;
}

.mx_MessageComposer_roomReplaced_icon {
  float: left;
  margin-right: 20px;
  margin-top: 5px;
  width: 31px;
  height: 31px;
}

.mx_MessageComposer_roomReplaced_header {
  font-weight: 700;
}

.mx_MessageComposer_autocomplete_wrapper {
  position: relative;
  height: 0;
}

.mx_MessageComposer_row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
}

.mx_MessageComposer .mx_MessageComposer_avatar {
  position: absolute;
  left: 26px;
}

.mx_MessageComposer .mx_MessageComposer_avatar .mx_BaseAvatar {
  display: block;
}

.mx_MessageComposer_composecontrols {
  width: 100%;
}

.mx_MessageComposer_e2eIcon.mx_E2EIcon {
  position: absolute;
  left: 60px;
  margin-right: 0;
  margin-left: 3px;
  width: 12px;
  height: 12px;
}

.mx_MessageComposer_noperm_error {
  width: 100%;
  height: 60px;
  font-style: italic;
  color: #888;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.mx_MessageComposer_input_wrapper {
  cursor: text;
}

.mx_MessageComposer_input,
.mx_MessageComposer_input_wrapper {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.mx_MessageComposer_input {
  vertical-align: middle;
  min-height: 60px;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  font-size: 1.4rem;
  margin-right: 6px;
}

.mx_MessageComposer_editor {
  width: 100%;
  max-height: 120px;
  min-height: 19px;
  overflow-y: auto;
  overflow-x: hidden;
  word-break: break-word;
}

.mx_MessageComposer_editor > :first-child {
  margin-top: 0 !important;
}

.mx_MessageComposer_editor > :last-child {
  margin-bottom: 0 !important;
}

@keyframes visualbell {
  0% {
    background-color: #faa;
  }
  to {
    background-color: #fff;
  }
}

.mx_MessageComposer_input_error {
  -webkit-animation: visualbell 0.2s;
  animation: visualbell 0.2s;
}

.mx_MessageComposer_input blockquote {
  color: #777;
  margin: 0 0 16px;
  padding: 0 15px;
  border-left: 4px solid #ddd;
}

.mx_MessageComposer_input pre {
  background-color: rgba(0, 0, 0, 0.04);
  border-radius: 3px;
  padding: 10px;
}

.mx_MessageComposer_input textarea {
  display: block;
  width: 100%;
  padding: 0;
  margin-top: 6px;
  margin-bottom: 6px;
  border: 0;
  resize: none;
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  color: #2e2f32;
  background-color: #fff;
  font-size: 1.4rem;
  max-height: 120px;
  overflow: auto;
  font-family: Inter, Twemoji, Apple Color Emoji, Segoe UI Emoji, Arial,
    Helvetica, Sans-Serif, Noto Color Emoji;
}

.mx_MessageComposer_input textarea::-moz-placeholder {
  line-height: 100%;
  color: #0dbd8b;
  opacity: 1;
}

.mx_MessageComposer_input textarea::-webkit-input-placeholder {
  color: #0dbd8b;
}

.mx_MessageComposer_button_highlight {
  background: rgba(13, 189, 139, 0.25);
}

.mx_MessageComposer_button_highlight:before {
  background-color: #0dbd8b !important;
}

.mx_MessageComposer_button {
  position: relative;
  margin-right: 6px;
  cursor: pointer;
  height: 26px;
  width: 26px;
  border-radius: 100%;
}

.mx_MessageComposer_button:before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  height: 20px;
  width: 20px;
  background-color: #c1c6cd;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-position: center;
  mask-position: center;
}

.mx_MessageComposer_button:hover {
  background: rgba(13, 189, 139, 0.1);
}

.mx_MessageComposer_button:hover:before {
  background-color: #0dbd8b;
}

.mx_MessageComposer_button.mx_MessageComposer_hangup:not(.mx_AccessibleButton_disabled):before {
  background-color: #ff4b55;
}

.mx_MessageComposer_upload:before {
  -webkit-mask-image: url(../../img/element-icons/room/composer/attach.359c84e.svg);
  mask-image: url(../../img/element-icons/room/composer/attach.359c84e.svg);
}

.mx_MessageComposer_voiceMessage:before {
  -webkit-mask-image: url(../../img/voip/mic-on-mask.97ec7a0.svg);
  mask-image: url(../../img/voip/mic-on-mask.97ec7a0.svg);
}

.mx_MessageComposer_emoji:before {
  -webkit-mask-image: url(../../img/element-icons/room/composer/emoji.52d7369.svg);
  mask-image: url(../../img/element-icons/room/composer/emoji.52d7369.svg);
}

.mx_MessageComposer_stickers:before {
  -webkit-mask-image: url(../../img/element-icons/room/composer/sticker.8dbe5ec.svg);
  mask-image: url(../../img/element-icons/room/composer/sticker.8dbe5ec.svg);
}

.mx_MessageComposer_sendMessage {
  cursor: pointer;
  position: relative;
  margin-right: 6px;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background-color: #0dbd8b;
}

.mx_MessageComposer_sendMessage:before {
  position: absolute;
  height: 16px;
  width: 16px;
  top: 8px;
  left: 9px;
  -webkit-mask-image: url(../../img/element-icons/send-message.a4e9cf8.svg);
  mask-image: url(../../img/element-icons/send-message.a4e9cf8.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-position: center;
  mask-position: center;
  background-color: #fff;
  content: "";
}

.mx_MessageComposer_formatting {
  cursor: pointer;
  margin: 0 11px;
  width: 24px;
  height: 18px;
}

.mx_MessageComposer_formatbar_wrapper {
  width: 100%;
  background-color: #fff;
  -webkit-box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.08);
  box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.08);
}

.mx_MessageComposer_formatbar {
  margin: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 30px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding-left: 62px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 1rem;
  color: #888;
}

.mx_MessageComposer_formatbar * {
  margin-right: 4px;
}

.mx_MessageComposer_format_button,
.mx_MessageComposer_formatbar_cancel,
.mx_MessageComposer_formatbar_markdown {
  cursor: pointer;
}

.mx_MessageComposer_formatbar_cancel {
  margin-right: 22px;
}

.mx_MessageComposer_formatbar_markdown {
  height: 17px;
  width: 30px;
  margin-right: 64px;
}

.mx_MessageComposer_input_markdownIndicator {
  height: 10px;
  width: 12px;
  padding: 4px 4px 4px 0;
}

.mx_MessageComposer_formatbar_markdown,
.mx_MessageComposer_input_markdownIndicator {
  cursor: pointer;
  -webkit-mask-image: url(../../img/markdown.6905ba8.svg);
  mask-image: url(../../img/markdown.6905ba8.svg);
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  background-color: #c1c6cd;
}

.mx_MessageComposer_formatbar_markdown.mx_MessageComposer_markdownDisabled,
.mx_MessageComposer_input_markdownIndicator.mx_MessageComposer_markdownDisabled {
  opacity: 0.2;
}

.mx_MatrixChat_useCompactLayout .mx_MessageComposer_input {
  min-height: 50px;
}

.mx_MatrixChat_useCompactLayout .mx_MessageComposer_noperm_error {
  height: 50px;
}

.mx_MessageComposerFormatBar {
  display: none;
  width: 130px;
  height: 24px;
  position: absolute;
  cursor: pointer;
  border-radius: 4px;
  background-color: #fff;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 1000;
}

.mx_MessageComposerFormatBar.mx_MessageComposerFormatBar_shown {
  display: block;
}

.mx_MessageComposerFormatBar > * {
  white-space: nowrap;
  display: inline-block;
  position: relative;
  border: 1px solid #e9edf1;
  margin-left: -1px;
}

.mx_MessageComposerFormatBar > :hover {
  border-color: #ddd;
  z-index: 1;
}

.mx_MessageComposerFormatBar > :first-child {
  border-radius: 3px 0 0 3px;
}

.mx_MessageComposerFormatBar > :last-child {
  border-radius: 0 3px 3px 0;
}

.mx_MessageComposerFormatBar > :only-child {
  border-radius: 3px;
}

.mx_MessageComposerFormatBar .mx_MessageComposerFormatBar_button {
  width: 27px;
  height: 24px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: none;
  vertical-align: middle;
}

.mx_MessageComposerFormatBar .mx_MessageComposerFormatBar_button:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  background-color: #2e2f32;
}

.mx_MessageComposerFormatBar .mx_MessageComposerFormatBar_buttonIconBold:after {
  -webkit-mask-image: url(../../img/element-icons/room/format-bar/bold.0d80ac7.svg);
  mask-image: url(../../img/element-icons/room/format-bar/bold.0d80ac7.svg);
}

.mx_MessageComposerFormatBar
  .mx_MessageComposerFormatBar_buttonIconItalic:after {
  -webkit-mask-image: url(../../img/element-icons/room/format-bar/italic.bf18054.svg);
  mask-image: url(../../img/element-icons/room/format-bar/italic.bf18054.svg);
}

.mx_MessageComposerFormatBar
  .mx_MessageComposerFormatBar_buttonIconStrikethrough:after {
  -webkit-mask-image: url(../../img/element-icons/room/format-bar/strikethrough.0264f7b.svg);
  mask-image: url(../../img/element-icons/room/format-bar/strikethrough.0264f7b.svg);
}

.mx_MessageComposerFormatBar
  .mx_MessageComposerFormatBar_buttonIconQuote:after {
  -webkit-mask-image: url(../../img/element-icons/room/format-bar/quote.560cd8f.svg);
  mask-image: url(../../img/element-icons/room/format-bar/quote.560cd8f.svg);
}

.mx_MessageComposerFormatBar .mx_MessageComposerFormatBar_buttonIconCode:after {
  -webkit-mask-image: url(../../img/element-icons/room/format-bar/code.27444ba.svg);
  mask-image: url(../../img/element-icons/room/format-bar/code.27444ba.svg);
}

.mx_MessageComposerFormatBar_buttonTooltip {
  white-space: nowrap;
  font-size: 1.3rem;
  font-weight: 600;
  min-width: 54px;
  text-align: center;
}

.mx_MessageComposerFormatBar_buttonTooltip
  .mx_MessageComposerFormatBar_tooltipShortcut {
  font-size: 0.9rem;
  opacity: 0.7;
}

.mx_NewRoomIntro {
  margin: 40px 0 48px 64px;
}

.mx_NewRoomIntro
  .mx_MiniAvatarUploader_hasAvatar:not(.mx_MiniAvatarUploader_busy):not(:hover)
  .mx_MiniAvatarUploader_indicator {
  display: none;
}

.mx_NewRoomIntro .mx_AccessibleButton_kind_link {
  padding: 0;
  font-size: inherit;
}

.mx_NewRoomIntro .mx_NewRoomIntro_buttons {
  margin-top: 28px;
}

.mx_NewRoomIntro .mx_NewRoomIntro_buttons .mx_AccessibleButton {
  line-height: 2.4rem;
  display: inline-block;
}

.mx_NewRoomIntro
  .mx_NewRoomIntro_buttons
  .mx_AccessibleButton
  + .mx_AccessibleButton {
  margin-left: 12px;
}

.mx_NewRoomIntro
  .mx_NewRoomIntro_buttons
  .mx_AccessibleButton:not(.mx_AccessibleButton_kind_primary_outline):before {
  content: "";
  display: inline-block;
  background-color: #fff;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 20px;
  mask-size: 20px;
  width: 20px;
  height: 20px;
  margin-right: 5px;
  vertical-align: text-bottom;
}

.mx_NewRoomIntro .mx_NewRoomIntro_buttons .mx_NewRoomIntro_inviteButton:before {
  -webkit-mask-image: url(../../img/element-icons/room/invite.946a71b.svg);
  mask-image: url(../../img/element-icons/room/invite.946a71b.svg);
}

.mx_NewRoomIntro > h2 {
  margin-top: 24px;
  font-size: 2.4rem;
  font-weight: 600;
}

.mx_NewRoomIntro > p {
  margin: 0;
  font-size: 1.5rem;
  color: #737d8c;
}

.mx_NotificationBadge:not(.mx_NotificationBadge_visible) {
  display: none;
}

.mx_NotificationBadge.mx_NotificationBadge_visible {
  background-color: #61708b;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.mx_NotificationBadge.mx_NotificationBadge_visible.mx_NotificationBadge_highlighted {
  background-color: #ff4b55;
}

.mx_NotificationBadge.mx_NotificationBadge_visible.mx_NotificationBadge_dot {
  background-color: #2e2f32;
  width: 6px;
  height: 6px;
  border-radius: 6px;
}

.mx_NotificationBadge.mx_NotificationBadge_visible.mx_NotificationBadge_2char {
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 1.6rem;
}

.mx_NotificationBadge.mx_NotificationBadge_visible.mx_NotificationBadge_3char {
  width: 2.6rem;
  height: 1.6rem;
  border-radius: 1.6rem;
}

.mx_NotificationBadge.mx_NotificationBadge_visible .mx_NotificationBadge_count {
  font-size: 1rem;
  line-height: 1.4rem;
  color: #fff;
}

.mx_PinnedEventTile {
  min-height: 40px;
  width: 100%;
  padding: 0 4px 12px;
  display: grid;
  grid-template-areas: "avatar name remove" "content content content" "footer footer footer";
  grid-template-rows: -webkit-max-content auto -webkit-max-content;
  grid-template-rows: max-content auto max-content;
  grid-template-columns: 24px auto 24px;
  grid-row-gap: 12px;
  grid-column-gap: 8px;
}

.mx_PinnedEventTile + .mx_PinnedEventTile {
  padding: 12px 4px;
  border-top: 1px solid #e7e7e7;
}

.mx_PinnedEventTile .mx_PinnedEventTile_senderAvatar {
  grid-area: avatar;
}

.mx_PinnedEventTile .mx_PinnedEventTile_sender {
  grid-area: name;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2.4rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.mx_PinnedEventTile .mx_PinnedEventTile_unpinButton {
  visibility: hidden;
  grid-area: remove;
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 8px;
}

.mx_PinnedEventTile .mx_PinnedEventTile_unpinButton:hover {
  background-color: rgba(92, 100, 112, 0.2);
}

.mx_PinnedEventTile .mx_PinnedEventTile_unpinButton:before {
  content: "";
  position: absolute;
  height: inherit;
  width: inherit;
  background: #737d8c;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: 8px;
  mask-size: 8px;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-image: url(../../img/image-view/close.97d1731.svg);
  mask-image: url(../../img/image-view/close.97d1731.svg);
}

.mx_PinnedEventTile .mx_PinnedEventTile_message {
  grid-area: content;
}

.mx_PinnedEventTile .mx_PinnedEventTile_footer {
  grid-area: footer;
  font-size: 10px;
  line-height: 12px;
}

.mx_PinnedEventTile .mx_PinnedEventTile_footer .mx_PinnedEventTile_timestamp {
  font-size: inherit;
  line-height: inherit;
  color: #737d8c;
}

.mx_PinnedEventTile .mx_PinnedEventTile_footer .mx_AccessibleButton_kind_link {
  padding: 0;
  margin-left: 12px;
  font-size: inherit;
  line-height: inherit;
}

.mx_PinnedEventTile:hover .mx_PinnedEventTile_unpinButton {
  visibility: visible;
}

.mx_PresenceLabel {
  font-size: 1.1rem;
  opacity: 0.5;
}

.mx_ReplyPreview {
  background: #fff;
  border: 1px solid transparent;
  border-bottom: none;
  border-radius: 8px 8px 0 0;
  max-height: 50vh;
  overflow: auto;
  -webkit-box-shadow: 0 -16px 32px rgba(0, 0, 0, 0.04);
  box-shadow: 0 -16px 32px rgba(0, 0, 0, 0.04);
}

.mx_ReplyPreview .mx_ReplyPreview_section {
  border-bottom: 1px solid transparent;
}

.mx_ReplyPreview .mx_ReplyPreview_section .mx_ReplyPreview_header {
  margin: 8px;
  color: #2e2f32;
  font-weight: 400;
  opacity: 0.4;
}

.mx_ReplyPreview .mx_ReplyPreview_section .mx_ReplyPreview_tile {
  margin: 0 8px;
}

.mx_ReplyPreview .mx_ReplyPreview_section .mx_ReplyPreview_title {
  float: left;
}

.mx_ReplyPreview .mx_ReplyPreview_section .mx_ReplyPreview_cancel {
  float: right;
  cursor: pointer;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.mx_ReplyPreview .mx_ReplyPreview_section .mx_ReplyPreview_clear {
  clear: both;
}

.mx_ReplyTile {
  position: relative;
  padding: 2px 0;
  font-size: 1.4rem;
  line-height: 1.6rem;
}

.mx_ReplyTile.mx_ReplyTile_audio .mx_MFileBody_info_icon:before {
  -webkit-mask-image: url(../../img/element-icons/speaker.7124b41.svg);
  mask-image: url(../../img/element-icons/speaker.7124b41.svg);
}

.mx_ReplyTile.mx_ReplyTile_video .mx_MFileBody_info_icon:before {
  -webkit-mask-image: url(../../img/element-icons/call/video-call.f465ed0.svg);
  mask-image: url(../../img/element-icons/call/video-call.f465ed0.svg);
}

.mx_ReplyTile .mx_MFileBody .mx_MFileBody_info {
  margin: 5px 0;
}

.mx_ReplyTile .mx_MFileBody .mx_MFileBody_download {
  display: none;
}

.mx_ReplyTile > a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  text-decoration: none;
  color: #2e2f32;
}

.mx_ReplyTile .mx_RedactedBody {
  padding: 4px 0 2px 20px;
}

.mx_ReplyTile .mx_RedactedBody:before {
  height: 13px;
  width: 13px;
  top: 5px;
}

.mx_ReplyTile .mx_EventTile_content {
  pointer-events: none;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-height: 2.2rem;
}

.mx_ReplyTile .mx_EventTile_content .mx_EventTile_body.mx_EventTile_bigEmoji {
  line-height: 2.2rem !important;
  font-size: 1.4rem !important;
}

.mx_ReplyTile .mx_EventTile_content .mx_EventTile_lineNumbers {
  display: none;
}

.mx_ReplyTile .mx_EventTile_content .mx_EventTile_pre_container > pre {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  padding: 4px;
}

.mx_ReplyTile .mx_EventTile_content .markdown-body blockquote,
.mx_ReplyTile .mx_EventTile_content .markdown-body dl,
.mx_ReplyTile .mx_EventTile_content .markdown-body ol,
.mx_ReplyTile .mx_EventTile_content .markdown-body p,
.mx_ReplyTile .mx_EventTile_content .markdown-body pre,
.mx_ReplyTile .mx_EventTile_content .markdown-body table,
.mx_ReplyTile .mx_EventTile_content .markdown-body ul {
  margin-bottom: 4px;
}

.mx_ReplyTile.mx_ReplyTile_info {
  padding-top: 0;
}

.mx_ReplyTile .mx_SenderProfile {
  font-size: 1.4rem;
  line-height: 1.7rem;
  display: inline-block;
  padding: 0;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.mx_RoomBreadcrumbs {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.mx_RoomBreadcrumbs .mx_RoomBreadcrumbs_crumb {
  margin-right: 8px;
  width: 32px;
}

.mx_RoomBreadcrumbs.mx_RoomBreadcrumbs-enter {
  -webkit-transform: translateX(-40px);
  transform: translateX(-40px);
}

.mx_RoomBreadcrumbs.mx_RoomBreadcrumbs-enter-active {
  -webkit-transform: translateX(0);
  transform: translateX(0);
  -webkit-transition: -webkit-transform 0.64s cubic-bezier(0.66, 0.02, 0.36, 1);
  transition: -webkit-transform 0.64s cubic-bezier(0.66, 0.02, 0.36, 1);
  transition: transform 0.64s cubic-bezier(0.66, 0.02, 0.36, 1);
  transition: transform 0.64s cubic-bezier(0.66, 0.02, 0.36, 1),
    -webkit-transform 0.64s cubic-bezier(0.66, 0.02, 0.36, 1);
}

.mx_RoomBreadcrumbs .mx_RoomBreadcrumbs_placeholder {
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 32px;
  height: 32px;
}

.mx_RoomBreadcrumbs_Tooltip {
  margin-left: -42px;
  margin-top: -42px;
}

.mx_RoomHeader {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50px;
  flex: 0 0 50px;
  border-bottom: 1px solid transparent;
  background-color: #fff;
}

.mx_RoomHeader .mx_RoomHeader_e2eIcon {
  height: 12px;
  width: 12px;
}

.mx_RoomHeader .mx_RoomHeader_e2eIcon .mx_E2EIcon {
  margin: 0;
  position: absolute;
  height: 12px;
  width: 12px;
}

.mx_RoomHeader_wrapper {
  margin: auto;
  height: 50px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  min-width: 0;
  padding: 0 10px 0 18px;
}

.mx_RoomHeader_wrapper .mx_InviteOnlyIcon_large {
  margin: 0;
}

.mx_RoomHeader_spinner {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  height: 36px;
  padding-left: 12px;
  padding-right: 12px;
}

.mx_RoomHeader_textButton {
  vertical-align: middle;
  border: 0;
  border-radius: 8px;
  font-family: Inter, Twemoji, Apple Color Emoji, Segoe UI Emoji, Arial,
    Helvetica, Sans-Serif, Noto Color Emoji;
  font-size: 1.4rem;
  color: #fff;
  background-color: #0dbd8b;
  width: auto;
  padding: 7px 1.5em;
  cursor: pointer;
  display: inline-block;
  outline: none;
  margin-right: 8px;
  margin-top: -5px;
}

.mx_RoomHeader_textButton_danger {
  background-color: #ff4b55;
}

.mx_RoomHeader_cancelButton {
  cursor: pointer;
  padding-left: 12px;
  padding-right: 12px;
}

.mx_RoomHeader_buttons {
  background-color: #fff;
}

.mx_RoomHeader_buttons,
.mx_RoomHeader_info {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.mx_RoomHeader_info {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_RoomHeader_simpleHeader {
  line-height: 5.2rem;
  color: #45474a;
  font-size: 1.8rem;
  font-weight: 600;
  overflow: hidden;
  margin-left: 63px;
  text-overflow: ellipsis;
  width: 100%;
}

.mx_RoomHeader_simpleHeader .mx_RoomHeader_cancelButton {
  float: right;
}

.mx_RoomHeader_simpleHeader .mx_RoomHeader_icon {
  margin-left: 14px;
  margin-right: 24px;
  vertical-align: -4px;
}

.mx_RoomHeader_name {
  -webkit-box-flex: 0;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  overflow: hidden;
  color: #45474a;
  font-weight: 600;
  font-size: 1.8rem;
  margin: 0 7px;
  border-bottom: 1px solid transparent;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.mx_RoomHeader_nametext {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.mx_RoomHeader_settingsHint {
  color: #a2a2a2 !important;
}

.mx_RoomHeader_searchStatus {
  font-weight: 400;
  opacity: 0.6;
}

.mx_RoomHeader_avatar,
.mx_RoomHeader_avatarPicker,
.mx_RoomHeader_avatarPicker_edit,
.mx_RoomHeader_avatarPicker_remove,
.mx_RoomHeader_name {
  cursor: pointer;
}

.mx_RoomHeader_avatarPicker_remove {
  position: absolute;
  top: -11px;
  right: -9px;
}

.mx_RoomHeader_name:hover div:not(.mx_RoomHeader_editable) {
  color: #0dbd8b;
}

.mx_RoomHeader_placeholder {
  color: #a2a2a2 !important;
}

.mx_RoomHeader_editable {
  border-bottom: 1px solid #c7c7c7 !important;
  min-width: 150px;
  cursor: text;
}

.mx_RoomHeader_editable:focus {
  border-bottom: 1px solid #0dbd8b !important;
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.mx_RoomHeader_topic {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  color: #9e9e9e;
  font-weight: 400;
  font-size: 1.3rem;
  margin: 4px 7px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: 1px solid transparent;
  line-height: 1.2em;
  max-height: 2.4em;
}

.mx_RoomHeader_avatar {
  -webkit-box-flex: 0;
  -ms-flex: 0;
  flex: 0;
  margin: 0 6px 0 7px;
  position: relative;
}

.mx_RoomHeader_avatar .mx_BaseAvatar_image {
  -o-object-fit: cover;
  object-fit: cover;
}

.mx_RoomHeader_avatarPicker {
  position: relative;
}

.mx_RoomHeader_avatarPicker_edit {
  position: absolute;
  left: 16px;
  top: 18px;
}

.mx_RoomHeader_avatarPicker_edit > label {
  cursor: pointer;
}

.mx_RoomHeader_avatarPicker_edit > input {
  display: none;
}

.mx_RoomHeader_button {
  position: relative;
  margin-left: 1px;
  margin-right: 1px;
  cursor: pointer;
  height: 32px;
  width: 32px;
  border-radius: 100%;
}

.mx_RoomHeader_button:before {
  content: "";
  position: absolute;
  top: 4px;
  left: 4px;
  height: 24px;
  width: 24px;
  background-color: #c1c6cd;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
}

.mx_RoomHeader_button:hover {
  background: rgba(13, 189, 139, 0.1);
}

.mx_RoomHeader_button:hover:before {
  background-color: #0dbd8b;
}

.mx_RoomHeader_forgetButton:before {
  -webkit-mask-image: url(../../img/element-icons/leave.bb917e7.svg);
  mask-image: url(../../img/element-icons/leave.bb917e7.svg);
  width: 26px;
}

.mx_RoomHeader_appsButton:before {
  -webkit-mask-image: url(../../img/element-icons/room/apps.5ee9f78.svg);
  mask-image: url(../../img/element-icons/room/apps.5ee9f78.svg);
}

.mx_RoomHeader_appsButton_highlight:before {
  background-color: #0dbd8b;
}

.mx_RoomHeader_searchButton:before {
  -webkit-mask-image: url(../../img/element-icons/room/search-inset.db6314d.svg);
  mask-image: url(../../img/element-icons/room/search-inset.db6314d.svg);
}

.mx_RoomHeader_voiceCallButton:before {
  -webkit-mask-image: url(../../img/element-icons/call/voice-call.303eba8.svg);
  mask-image: url(../../img/element-icons/call/voice-call.303eba8.svg);
  -webkit-mask-size: 20px;
  mask-size: 20px;
  -webkit-mask-position: center;
  mask-position: center;
}

.mx_RoomHeader_videoCallButton:before {
  -webkit-mask-image: url(../../img/element-icons/call/video-call.f465ed0.svg);
  mask-image: url(../../img/element-icons/call/video-call.f465ed0.svg);
}

.mx_RoomHeader_showPanel {
  height: 16px;
}

.mx_RoomHeader_voipButton {
  display: table-cell;
}

.mx_RoomHeader_voipButtons {
  margin-top: 18px;
}

@media only screen and (max-width: 480px) {
  .mx_RoomHeader_wrapper {
    padding: 0;
  }
  .mx_RoomHeader {
    overflow: hidden;
  }
}

.mx_RoomList {
  padding-right: 7px;
}

.mx_RoomList_iconPlus:before {
  -webkit-mask-image: url(../../img/element-icons/roomlist/plus-circle.aa44b1a.svg);
  mask-image: url(../../img/element-icons/roomlist/plus-circle.aa44b1a.svg);
}

.mx_RoomList_iconHash:before {
  -webkit-mask-image: url(../../img/element-icons/roomlist/hash-circle.c36ee5b.svg);
  mask-image: url(../../img/element-icons/roomlist/hash-circle.c36ee5b.svg);
}

.mx_RoomList_iconExplore:before {
  -webkit-mask-image: url(../../img/element-icons/roomlist/explore.1523e65.svg);
  mask-image: url(../../img/element-icons/roomlist/explore.1523e65.svg);
}

.mx_RoomList_iconBrowse:before {
  -webkit-mask-image: url(../../img/element-icons/roomlist/browse.080f923.svg);
  mask-image: url(../../img/element-icons/roomlist/browse.080f923.svg);
}

.mx_RoomList_iconDialpad:before {
  -webkit-mask-image: url(../../img/element-icons/roomlist/dialpad.37f876f.svg);
  mask-image: url(../../img/element-icons/roomlist/dialpad.37f876f.svg);
}

.mx_RoomList_explorePrompt {
  margin: 4px 12px;
  padding-top: 12px;
  border-top: 1px solid #e7e7e7;
  font-size: 1.4rem;
}

.mx_RoomList_explorePrompt div:first-child {
  font-weight: 600;
  line-height: 1.8rem;
  color: #2e2f32;
}

.mx_RoomList_explorePrompt .mx_AccessibleButton {
  color: #2e2f32;
  position: relative;
  padding: 8px 8px 8px 32px;
  font-size: inherit;
  margin-top: 12px;
  display: block;
  text-align: start;
  background-color: rgba(141, 151, 165, 0.2);
  border-radius: 4px;
}

.mx_RoomList_explorePrompt .mx_AccessibleButton:before {
  content: "";
  width: 16px;
  height: 16px;
  position: absolute;
  top: 8px;
  left: 8px;
  background: #737d8c;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

.mx_RoomList_explorePrompt
  .mx_AccessibleButton.mx_RoomList_explorePrompt_startChat:before {
  -webkit-mask-image: url(../../img/element-icons/feedback.a91241e.svg);
  mask-image: url(../../img/element-icons/feedback.a91241e.svg);
}

.mx_RoomList_explorePrompt
  .mx_AccessibleButton.mx_RoomList_explorePrompt_explore:before {
  -webkit-mask-image: url(../../img/element-icons/roomlist/explore.1523e65.svg);
  mask-image: url(../../img/element-icons/roomlist/explore.1523e65.svg);
}

.mx_RoomList_explorePrompt
  .mx_AccessibleButton.mx_RoomList_explorePrompt_spaceInvite:before {
  -webkit-mask-image: url(../../img/element-icons/room/invite.946a71b.svg);
  mask-image: url(../../img/element-icons/room/invite.946a71b.svg);
}

.mx_RoomList_explorePrompt
  .mx_AccessibleButton.mx_RoomList_explorePrompt_spaceExplore:before {
  -webkit-mask-image: url(../../img/element-icons/roomlist/browse.080f923.svg);
  mask-image: url(../../img/element-icons/roomlist/browse.080f923.svg);
}

.mx_RoomPreviewBar {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
}

.mx_RoomPreviewBar h3 {
  font-size: 1.8rem;
  font-weight: 600;
}

.mx_RoomPreviewBar h3.mx_RoomPreviewBar_spinnerTitle {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_RoomPreviewBar .mx_RoomPreviewBar_message p,
.mx_RoomPreviewBar h3 {
  word-break: break-all;
  word-break: break-word;
}

.mx_RoomPreviewBar .mx_Spinner {
  width: auto;
  height: auto;
  margin: 10px 10px 10px 0;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}

.mx_RoomPreviewBar .mx_RoomPreviewBar_footer {
  font-size: 1.2rem;
  line-height: 2rem;
}

.mx_RoomPreviewBar .mx_RoomPreviewBar_footer .mx_Spinner {
  vertical-align: middle;
  display: inline-block;
}

.mx_RoomPreviewBar_actions,
.mx_RoomPreviewBar_message {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.mx_RoomPreviewBar_message {
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
}

.mx_RoomPreviewBar_message p {
  overflow-wrap: break-word;
}

.mx_RoomPreviewBar_panel {
  padding: 8px 8px 8px 20px;
  border-top: 1px solid transparent;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
}

.mx_RoomPreviewBar_panel .mx_RoomPreviewBar_actions {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  padding: 3px 8px;
}

.mx_RoomPreviewBar_panel .mx_RoomPreviewBar_actions > * {
  margin-left: 12px;
}

.mx_RoomPreviewBar_panel .mx_RoomPreviewBar_message {
  -webkit-box-flex: 1;
  -ms-flex: 1 0 0px;
  flex: 1 0 0;
  min-width: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.mx_RoomPreviewBar_panel .mx_RoomPreviewBar_message > * {
  margin: 4px;
}

.mx_RoomPreviewBar_dialog {
  margin: auto;
  -webkit-box-sizing: content;
  box-sizing: content;
  width: 400px;
  border-radius: 4px;
  padding: 20px;
  text-align: center;
}

.mx_RoomPreviewBar_dialog,
.mx_RoomPreviewBar_dialog .mx_RoomPreviewBar_message {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.mx_RoomPreviewBar_dialog .mx_RoomPreviewBar_message > * {
  margin: 5px 0 20px;
}

.mx_RoomPreviewBar_dialog .mx_RoomPreviewBar_actions {
  -webkit-box-orient: vertical;
  -webkit-box-direction: reverse;
  -ms-flex-direction: column-reverse;
  flex-direction: column-reverse;
}

.mx_RoomPreviewBar_dialog .mx_RoomPreviewBar_actions .mx_AccessibleButton {
  padding: 7px 50px;
}

.mx_RoomPreviewBar_dialog .mx_RoomPreviewBar_actions > * {
  margin-top: 12px;
}

.mx_RoomPreviewBar_dialog
  .mx_RoomPreviewBar_actions
  .mx_AccessibleButton.mx_AccessibleButton_kind_primary {
  margin-bottom: 7px;
}

.mx_RoomPreviewBar_inviter {
  font-weight: 600;
}

a.mx_RoomPreviewBar_inviter {
  text-decoration: underline;
  cursor: pointer;
}

.mx_RoomSublist {
  margin-left: 8px;
  margin-bottom: 4px;
}

.mx_RoomSublist.mx_RoomSublist_hidden {
  display: none;
}

.mx_RoomSublist .mx_RoomSublist_headerContainer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-bottom: 8px;
  max-height: 24px;
  color: #8d99a5;
}

.mx_RoomSublist .mx_RoomSublist_headerContainer .mx_RoomSublist_stickable {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  max-width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_RoomSublist
  .mx_RoomSublist_headerContainer
  .mx_RoomSublist_stickable.mx_RoomSublist_headerContainer_sticky {
  position: fixed;
  height: 32px;
  width: calc(100% - 15px);
}

.mx_RoomSublist .mx_RoomSublist_headerContainer .mx_RoomSublist_badgeContainer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.mx_RoomSublist
  .mx_RoomSublist_headerContainer
  .mx_RoomSublist_badgeContainer
  .mx_NotificationBadge {
  margin-left: 8px;
}

.mx_RoomSublist
  .mx_RoomSublist_headerContainer:not(.mx_RoomSublist_headerContainer_withAux)
  .mx_NotificationBadge {
  margin-right: 4px;
}

.mx_RoomSublist .mx_RoomSublist_headerContainer .mx_RoomSublist_auxButton,
.mx_RoomSublist .mx_RoomSublist_headerContainer .mx_RoomSublist_menuButton {
  margin-left: 8px;
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 8px;
}

.mx_RoomSublist
  .mx_RoomSublist_headerContainer
  .mx_RoomSublist_auxButton:before,
.mx_RoomSublist
  .mx_RoomSublist_headerContainer
  .mx_RoomSublist_menuButton:before {
  content: "";
  width: 16px;
  height: 16px;
  position: absolute;
  top: 4px;
  left: 4px;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  background: #61708b;
}

.mx_RoomSublist .mx_RoomSublist_headerContainer .mx_RoomSublist_auxButton:hover,
.mx_RoomSublist
  .mx_RoomSublist_headerContainer
  .mx_RoomSublist_menuButton:hover {
  background: rgba(141, 151, 165, 0.2);
}

.mx_RoomSublist .mx_RoomSublist_headerContainer .mx_RoomSublist_menuButton {
  visibility: hidden;
  width: 0;
  margin: 0;
}

.mx_RoomSublist
  .mx_RoomSublist_headerContainer
  .mx_RoomSublist_auxButton:before {
  -webkit-mask-image: url(../../img/element-icons/roomlist/plus.daac9ba.svg);
  mask-image: url(../../img/element-icons/roomlist/plus.daac9ba.svg);
}

.mx_RoomSublist
  .mx_RoomSublist_headerContainer
  .mx_RoomSublist_menuButton:before {
  -webkit-mask-image: url(../../img/element-icons/context-menu.829cc1a.svg);
  mask-image: url(../../img/element-icons/context-menu.829cc1a.svg);
}

.mx_RoomSublist .mx_RoomSublist_headerContainer .mx_RoomSublist_headerText {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  max-width: calc(100% - 16px);
  line-height: 1.6rem;
  font-size: 1.3rem;
  font-weight: 600;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.mx_RoomSublist
  .mx_RoomSublist_headerContainer
  .mx_RoomSublist_headerText
  .mx_RoomSublist_collapseBtn {
  display: inline-block;
  position: relative;
  width: 14px;
  height: 14px;
  margin-right: 6px;
}

.mx_RoomSublist
  .mx_RoomSublist_headerContainer
  .mx_RoomSublist_headerText
  .mx_RoomSublist_collapseBtn:before {
  content: "";
  width: 18px;
  height: 18px;
  position: absolute;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  background-color: #8d99a5;
  -webkit-mask-image: url(../../img/feather-customised/chevron-down.5278abe.svg);
  mask-image: url(../../img/feather-customised/chevron-down.5278abe.svg);
}

.mx_RoomSublist
  .mx_RoomSublist_headerContainer
  .mx_RoomSublist_headerText
  .mx_RoomSublist_collapseBtn.mx_RoomSublist_collapseBtn_collapsed:before {
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
}

.mx_RoomSublist:first-child .mx_RoomSublist_headerContainer {
  height: 0;
  padding-bottom: 4px;
}

.mx_RoomSublist .mx_RoomSublist_resizeBox {
  position: relative;
  -ms-flex-direction: column;
  flex-direction: column;
}

.mx_RoomSublist .mx_RoomSublist_resizeBox,
.mx_RoomSublist .mx_RoomSublist_resizeBox .mx_RoomSublist_tiles {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  overflow: hidden;
}

.mx_RoomSublist .mx_RoomSublist_resizeBox .mx_RoomSublist_tiles {
  -webkit-box-flex: 1;
  -ms-flex: 1 0 0px;
  flex: 1 0 0;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-item-align: stretch;
  align-self: stretch;
  -webkit-mask-image: linear-gradient(0deg, transparent, #000 4px);
  mask-image: linear-gradient(0deg, transparent, #000 4px);
}

.mx_RoomSublist
  .mx_RoomSublist_resizeBox
  .mx_RoomSublist_resizerHandles_showNButton {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 32px;
  flex: 0 0 32px;
}

.mx_RoomSublist .mx_RoomSublist_resizeBox .mx_RoomSublist_resizerHandles {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 4px;
  flex: 0 0 4px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
}

.mx_RoomSublist .mx_RoomSublist_resizeBox .mx_RoomSublist_resizerHandle {
  cursor: ns-resize;
  border-radius: 3px;
  max-width: 64px;
  height: 4px !important;
  position: relative !important;
  bottom: 0 !important;
}

.mx_RoomSublist
  .mx_RoomSublist_resizeBox.mx_RoomSublist_hasMenuOpen
  .mx_RoomSublist_resizerHandle,
.mx_RoomSublist .mx_RoomSublist_resizeBox:hover .mx_RoomSublist_resizerHandle {
  opacity: 0.8;
  background-color: #2e2f32;
}

.mx_RoomSublist .mx_RoomSublist_showNButton {
  cursor: pointer;
  font-size: 1.3rem;
  line-height: 1.8rem;
  color: #737d8c;
  height: 24px;
  padding-bottom: 4px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_RoomSublist .mx_RoomSublist_showNButton .mx_RoomSublist_showNButtonChevron {
  position: relative;
  width: 18px;
  height: 18px;
  margin-left: 12px;
  margin-right: 16px;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  background: #8d99a5;
  left: -1px;
}

.mx_RoomSublist
  .mx_RoomSublist_showNButton
  .mx_RoomSublist_showLessButtonChevron,
.mx_RoomSublist
  .mx_RoomSublist_showNButton
  .mx_RoomSublist_showMoreButtonChevron {
  -webkit-mask-image: url(../../img/feather-customised/chevron-down.5278abe.svg);
  mask-image: url(../../img/feather-customised/chevron-down.5278abe.svg);
}

.mx_RoomSublist
  .mx_RoomSublist_showNButton
  .mx_RoomSublist_showLessButtonChevron {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

.mx_RoomSublist.mx_RoomSublist_hasMenuOpen .mx_RoomSublist_menuButton,
.mx_RoomSublist:not(.mx_RoomSublist_minimized)
  > .mx_RoomSublist_headerContainer:focus-within
  .mx_RoomSublist_menuButton,
.mx_RoomSublist:not(.mx_RoomSublist_minimized)
  > .mx_RoomSublist_headerContainer:hover
  .mx_RoomSublist_menuButton {
  visibility: visible;
  width: 24px;
  margin-left: 8px;
}

.mx_RoomSublist.mx_RoomSublist_minimized .mx_RoomSublist_headerContainer {
  height: auto;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
}

.mx_RoomSublist.mx_RoomSublist_minimized
  .mx_RoomSublist_headerContainer
  .mx_RoomSublist_badgeContainer {
  -webkit-box-ordinal-group: 1;
  -ms-flex-order: 0;
  order: 0;
  -ms-flex-item-align: end;
  align-self: flex-end;
  margin-right: 0;
}

.mx_RoomSublist.mx_RoomSublist_minimized
  .mx_RoomSublist_headerContainer
  .mx_RoomSublist_stickable {
  -webkit-box-ordinal-group: 2;
  -ms-flex-order: 1;
  order: 1;
  max-width: 100%;
}

.mx_RoomSublist.mx_RoomSublist_minimized
  .mx_RoomSublist_headerContainer
  .mx_RoomSublist_auxButton {
  -webkit-box-ordinal-group: 3;
  -ms-flex-order: 2;
  order: 2;
  visibility: visible;
  width: 32px !important;
  height: 32px !important;
  margin-left: 0 !important;
  background-color: rgba(141, 151, 165, 0.2);
  margin-top: 8px;
}

.mx_RoomSublist.mx_RoomSublist_minimized
  .mx_RoomSublist_headerContainer
  .mx_RoomSublist_auxButton:before {
  top: 8px;
  left: 8px;
}

.mx_RoomSublist.mx_RoomSublist_minimized .mx_RoomSublist_resizeBox {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_RoomSublist.mx_RoomSublist_minimized .mx_RoomSublist_showNButton {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.mx_RoomSublist.mx_RoomSublist_minimized
  .mx_RoomSublist_showNButton
  .mx_RoomSublist_showNButtonChevron {
  margin-right: 12px;
}

.mx_RoomSublist.mx_RoomSublist_minimized .mx_RoomSublist_menuButton {
  height: 16px;
}

.mx_RoomSublist.mx_RoomSublist_minimized.mx_RoomSublist_hasMenuOpen
  .mx_RoomSublist_menuButton,
.mx_RoomSublist.mx_RoomSublist_minimized
  > .mx_RoomSublist_headerContainer:hover
  .mx_RoomSublist_menuButton {
  visibility: visible;
  position: absolute;
  bottom: 48px;
  right: 0;
  width: 16px;
  height: 16px;
  border-radius: 0;
  z-index: 1;
  background-color: hsla(0, 0%, 96.1%, 0.9);
}

.mx_RoomSublist.mx_RoomSublist_minimized.mx_RoomSublist_hasMenuOpen
  .mx_RoomSublist_menuButton:before,
.mx_RoomSublist.mx_RoomSublist_minimized
  > .mx_RoomSublist_headerContainer:hover
  .mx_RoomSublist_menuButton:before {
  top: 0;
  left: 0;
}

.mx_RoomSublist.mx_RoomSublist_minimized.mx_RoomSublist_hasMenuOpen.mx_RoomSublist_headerContainer:not(.mx_RoomSublist_headerContainer_withAux)
  .mx_RoomSublist_menuButton,
.mx_RoomSublist.mx_RoomSublist_minimized
  > .mx_RoomSublist_headerContainer:hover.mx_RoomSublist_headerContainer:not(.mx_RoomSublist_headerContainer_withAux)
  .mx_RoomSublist_menuButton {
  bottom: 8px;
}

.mx_RoomSublist_contextMenu {
  padding: 20px 16px;
  width: 250px;
}

.mx_RoomSublist_contextMenu hr {
  margin-top: 16px;
  margin-bottom: 16px;
  margin-right: 16px;
  border: 1px solid #2e2f32;
  opacity: 0.1;
}

.mx_RoomSublist_contextMenu .mx_RoomSublist_contextMenu_title {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
  margin-bottom: 4px;
}

.mx_RoomSublist_contextMenu .mx_Checkbox,
.mx_RoomSublist_contextMenu .mx_RadioButton {
  margin-top: 8px;
}

.mx_RoomSublist_addRoomTooltip {
  margin-top: -3px;
}

.mx_RoomSublist_skeletonUI {
  position: relative;
  margin-left: 4px;
  height: 288px;
}

.mx_RoomSublist_skeletonUI:before {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#fff),
    to(hsla(0, 0%, 100%, 0))
  );
  background: linear-gradient(180deg, #fff, hsla(0, 0%, 100%, 0));
  width: 100%;
  height: 100%;
  content: "";
  position: absolute;
  -webkit-mask-repeat: repeat-y;
  mask-repeat: repeat-y;
  -webkit-mask-size: auto 48px;
  mask-size: auto 48px;
  -webkit-mask-image: url(../../img/element-icons/roomlist/skeleton-ui.1f67400.svg);
  mask-image: url(../../img/element-icons/roomlist/skeleton-ui.1f67400.svg);
}

.mx_RoomTile {
  margin-bottom: 4px;
  padding: 4px;
  contain: content;
  height: 40px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.mx_RoomTile.mx_RoomTile_hasMenuOpen,
.mx_RoomTile.mx_RoomTile_selected,
.mx_RoomTile:focus-within,
.mx_RoomTile:hover {
  background-color: #fff;
  border-radius: 8px;
}

.mx_RoomTile .mx_DecoratedRoomAvatar,
.mx_RoomTile .mx_RoomTile_avatarContainer {
  margin-right: 8px;
}

.mx_RoomTile .mx_RoomTile_nameContainer {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  min-width: 0;
  margin-right: 8px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.mx_RoomTile .mx_RoomTile_nameContainer .mx_RoomTile_messagePreview,
.mx_RoomTile .mx_RoomTile_nameContainer .mx_RoomTile_name {
  margin: 0 2px;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.mx_RoomTile .mx_RoomTile_nameContainer .mx_RoomTile_name {
  font-size: 1.4rem;
  line-height: 1.8rem;
}

.mx_RoomTile
  .mx_RoomTile_nameContainer
  .mx_RoomTile_name.mx_RoomTile_nameHasUnreadEvents {
  font-weight: 600;
}

.mx_RoomTile .mx_RoomTile_nameContainer .mx_RoomTile_messagePreview {
  font-size: 1.3rem;
  line-height: 1.8rem;
  color: #737d8c;
}

.mx_RoomTile .mx_RoomTile_nameContainer .mx_RoomTile_nameWithPreview {
  margin-top: -4px;
}

.mx_RoomTile .mx_RoomTile_notificationsButton {
  margin-left: 4px;
}

.mx_RoomTile .mx_RoomTile_badgeContainer {
  height: 16px;
  margin: auto 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_RoomTile .mx_RoomTile_badgeContainer .mx_NotificationBadge {
  margin-right: 2px;
}

.mx_RoomTile .mx_RoomTile_badgeContainer .mx_NotificationBadge_dot {
  margin-left: 5px;
  margin-right: 7px;
}

.mx_RoomTile .mx_RoomTile_menuButton,
.mx_RoomTile .mx_RoomTile_notificationsButton {
  width: 20px;
  min-width: 20px;
  height: 20px;
  margin-top: auto;
  margin-bottom: auto;
  position: relative;
  display: none;
}

.mx_RoomTile .mx_RoomTile_menuButton:before,
.mx_RoomTile .mx_RoomTile_notificationsButton:before {
  top: 2px;
  left: 2px;
  content: "";
  width: 16px;
  height: 16px;
  position: absolute;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  background: #2e2f32;
}

.mx_RoomTile
  .mx_RoomTile_notificationsButton.mx_RoomTile_notificationsButton_show {
  display: block;
}

.mx_RoomTile .mx_RoomTile_menuButton:before {
  -webkit-mask-image: url(../../img/element-icons/context-menu.829cc1a.svg);
  mask-image: url(../../img/element-icons/context-menu.829cc1a.svg);
}

.mx_RoomTile:not(.mx_RoomTile_minimized).mx_RoomTile_hasMenuOpen
  .mx_RoomTile_badgeContainer,
.mx_RoomTile:not(.mx_RoomTile_minimized):focus-within
  .mx_RoomTile_badgeContainer,
.mx_RoomTile:not(.mx_RoomTile_minimized):hover .mx_RoomTile_badgeContainer {
  width: 0;
  height: 0;
  display: none;
}

.mx_RoomTile:not(.mx_RoomTile_minimized).mx_RoomTile_hasMenuOpen
  .mx_RoomTile_menuButton,
.mx_RoomTile:not(.mx_RoomTile_minimized).mx_RoomTile_hasMenuOpen
  .mx_RoomTile_notificationsButton,
.mx_RoomTile:not(.mx_RoomTile_minimized):focus-within .mx_RoomTile_menuButton,
.mx_RoomTile:not(.mx_RoomTile_minimized):focus-within
  .mx_RoomTile_notificationsButton,
.mx_RoomTile:not(.mx_RoomTile_minimized):hover .mx_RoomTile_menuButton,
.mx_RoomTile:not(.mx_RoomTile_minimized):hover
  .mx_RoomTile_notificationsButton {
  display: block;
}

.mx_RoomTile.mx_RoomTile_minimized {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
}

.mx_RoomTile.mx_RoomTile_minimized .mx_DecoratedRoomAvatar,
.mx_RoomTile.mx_RoomTile_minimized .mx_RoomTile_avatarContainer {
  margin-right: 0;
}

.mx_RoomTile_iconBell:before {
  -webkit-mask-image: url(../../img/element-icons/notifications.d298b39.svg);
  mask-image: url(../../img/element-icons/notifications.d298b39.svg);
}

.mx_RoomTile_iconBellDot:before {
  -webkit-mask-image: url(../../img/element-icons/roomlist/notifications-default.8b8509e.svg);
  mask-image: url(../../img/element-icons/roomlist/notifications-default.8b8509e.svg);
}

.mx_RoomTile_iconBellCrossed:before {
  -webkit-mask-image: url(../../img/element-icons/roomlist/notifications-off.0c57561.svg);
  mask-image: url(../../img/element-icons/roomlist/notifications-off.0c57561.svg);
}

.mx_RoomTile_iconBellMentions:before {
  -webkit-mask-image: url(../../img/element-icons/roomlist/notifications-dm.ffa8881.svg);
  mask-image: url(../../img/element-icons/roomlist/notifications-dm.ffa8881.svg);
}

.mx_RoomTile_contextMenu .mx_RoomTile_iconStar:before {
  -webkit-mask-image: url(../../img/element-icons/roomlist/favorite.ff7609d.svg);
  mask-image: url(../../img/element-icons/roomlist/favorite.ff7609d.svg);
}

.mx_RoomTile_contextMenu .mx_RoomTile_iconArrowDown:before {
  -webkit-mask-image: url(../../img/element-icons/roomlist/low-priority.6c7fb97.svg);
  mask-image: url(../../img/element-icons/roomlist/low-priority.6c7fb97.svg);
}

.mx_RoomTile_contextMenu .mx_RoomTile_iconSettings:before {
  -webkit-mask-image: url(../../img/element-icons/settings.6b381af.svg);
  mask-image: url(../../img/element-icons/settings.6b381af.svg);
}

.mx_RoomTile_contextMenu .mx_RoomTile_iconCopyLink:before {
  -webkit-mask-image: url(../../img/element-icons/link.8f4b1fc.svg);
  mask-image: url(../../img/element-icons/link.8f4b1fc.svg);
}

.mx_RoomTile_contextMenu .mx_RoomTile_iconInvite:before {
  -webkit-mask-image: url(../../img/element-icons/room/invite.946a71b.svg);
  mask-image: url(../../img/element-icons/room/invite.946a71b.svg);
}

.mx_RoomTile_contextMenu .mx_RoomTile_iconSignOut:before {
  -webkit-mask-image: url(../../img/element-icons/leave.bb917e7.svg);
  mask-image: url(../../img/element-icons/leave.bb917e7.svg);
}

.mx_RoomUpgradeWarningBar {
  max-height: 235px;
  background-color: #f7f7f7;
  padding-left: 20px;
  padding-right: 20px;
  overflow: scroll;
}

.mx_RoomUpgradeWarningBar_wrapped {
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  text-align: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
}

.mx_RoomUpgradeWarningBar_header {
  color: #ff4b55;
  font-weight: 700;
}

.mx_RoomUpgradeWarningBar_body {
  color: #ff4b55;
}

.mx_RoomUpgradeWarningBar_upgradelink {
  color: #ff4b55;
  text-decoration: underline;
}

.mx_RoomUpgradeWarningBar_small {
  color: #888;
  font-size: 70%;
}

.mx_SearchBar {
  height: 56px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-bottom: 1px solid transparent;
}

.mx_SearchBar .mx_SearchBar_input {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 0px;
  flex: 1 1 0;
  margin-left: 22px;
}

.mx_SearchBar .mx_SearchBar_searchButton {
  cursor: pointer;
  width: 37px;
  height: 37px;
  background-color: #0dbd8b;
  -webkit-mask: url(../../img/feather-customised/search-input.044bfa7.svg);
  mask: url(../../img/feather-customised/search-input.044bfa7.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
}

.mx_SearchBar .mx_SearchBar_buttons {
  display: inherit;
}

.mx_SearchBar .mx_SearchBar_button {
  border: 0;
  margin: 0 0 0 22px;
  padding: 5px;
  font-size: 1.5rem;
  cursor: pointer;
  color: #2e2f32;
  border-bottom: 2px solid #0dbd8b;
  font-weight: 600;
}

.mx_SearchBar .mx_SearchBar_unselected {
  color: #9fa9ba;
  border-color: transparent;
}

.mx_SearchBar .mx_SearchBar_cancel {
  background-color: #ff4b55;
  -webkit-mask: url(../../img/cancel.4b9715b.svg);
  mask: url(../../img/cancel.4b9715b.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: 14px;
  mask-size: 14px;
  padding: 9px;
  margin: 0 12px 0 3px;
  cursor: pointer;
}

.mx_SendMessageComposer {
  -ms-flex: 1;
  flex: 1;
  -ms-flex-direction: column;
  flex-direction: column;
  font-size: 1.4rem;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 6px;
  min-width: 0;
}

.mx_SendMessageComposer,
.mx_SendMessageComposer .mx_BasicMessageComposer {
  -webkit-box-flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
}

.mx_SendMessageComposer .mx_BasicMessageComposer {
  -ms-flex: 1;
  flex: 1;
  -ms-flex-direction: column;
  flex-direction: column;
  min-height: 55px;
}

.mx_SendMessageComposer
  .mx_BasicMessageComposer
  .mx_BasicMessageComposer_input {
  padding: 3px 0;
  margin: auto 0;
  max-height: 140px;
  overflow-y: auto;
}

.mx_Stickers_content {
  overflow: hidden;
}

.mx_Stickers_content_container {
  overflow: hidden;
  height: 300px;
}

#mx_persistedElement_stickerPicker .mx_AppTileFullWidth {
  height: unset;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-left: none;
  border-right: none;
  border-bottom: none;
}

#mx_persistedElement_stickerPicker .mx_AppTileMenuBar {
  padding: 0;
}

#mx_persistedElement_stickerPicker iframe {
  height: 283px;
}

.mx_Stickers_contentPlaceholder {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
}

.mx_Stickers_contentPlaceholder p {
  max-width: 200px;
}

.mx_Stickers_addLink {
  display: inline;
  cursor: pointer;
  color: #0dbd8b;
}

.mx_Stickers_hideStickers {
  z-index: 2001;
}

.mx_TopUnreadMessagesBar {
  z-index: 1000;
  position: absolute;
  top: 24px;
  right: 24px;
  width: 38px;
}

.mx_TopUnreadMessagesBar:after {
  content: "";
  position: absolute;
  top: -8px;
  left: 10.5px;
  width: 4px;
  height: 4px;
  border-radius: 16px;
  background-color: #f2f5f8;
  border: 6px solid #0dbd8b;
  pointer-events: none;
}

.mx_TopUnreadMessagesBar_scrollUp {
  height: 38px;
  border-radius: 19px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: #fff;
  border: 1.3px solid #61708b;
  cursor: pointer;
}

.mx_TopUnreadMessagesBar_scrollUp:before {
  content: "";
  position: absolute;
  width: 36px;
  height: 36px;
  -webkit-mask-image: url(../../img/feather-customised/chevron-down-thin.f9a2477.svg);
  mask-image: url(../../img/feather-customised/chevron-down-thin.f9a2477.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
  background: #61708b;
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

.mx_TopUnreadMessagesBar_markAsRead {
  display: block;
  width: 18px;
  height: 18px;
  background: #fff;
  border: 1.3px solid #61708b;
  border-radius: 10px;
  margin: 5px auto;
}

.mx_TopUnreadMessagesBar_markAsRead:before {
  content: "";
  position: absolute;
  width: 18px;
  height: 18px;
  -webkit-mask-image: url(../../img/cancel.4b9715b.svg);
  mask-image: url(../../img/cancel.4b9715b.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 10px;
  mask-size: 10px;
  -webkit-mask-position: 4px 4px;
  mask-position: 4px 4px;
  background: #61708b;
}

.mx_VoiceRecordComposerTile_stop {
  width: 28px;
  height: 28px;
  border: 2px solid #e3e8f0;
  border-radius: 32px;
  margin-right: 16px;
  position: relative;
}

.mx_VoiceRecordComposerTile_stop:after {
  content: "";
  width: 14px;
  height: 14px;
  position: absolute;
  top: 7px;
  left: 7px;
  border-radius: 2px;
  background-color: #ff4b55;
}

.mx_VoiceRecordComposerTile_delete {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-right: 8px;
  background-color: #8d99a5;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-image: url(../../img/element-icons/trashcan.3b626db.svg);
  mask-image: url(../../img/element-icons/trashcan.3b626db.svg);
}

.mx_MessageComposer_row .mx_VoiceMessagePrimaryContainer {
  margin: 6px 12px 6px 6px;
  position: relative;
}

.mx_MessageComposer_row
  .mx_VoiceMessagePrimaryContainer.mx_VoiceRecordComposerTile_recording {
  padding-left: 22px;
}

.mx_MessageComposer_row
  .mx_VoiceMessagePrimaryContainer.mx_VoiceRecordComposerTile_recording:before {
  -webkit-animation: recording-pulse 2s infinite;
  animation: recording-pulse 2s infinite;
  content: "";
  background-color: #ff4b55;
  width: 10px;
  height: 10px;
  position: absolute;
  left: 12px;
  top: 18px;
  border-radius: 10px;
}

@-webkit-keyframes recording-pulse {
  0% {
    opacity: 1;
  }
  35% {
    opacity: 0;
  }
  65% {
    opacity: 1;
  }
}

@keyframes recording-pulse {
  0% {
    opacity: 1;
  }
  35% {
    opacity: 0;
  }
  65% {
    opacity: 1;
  }
}

.mx_WhoIsTypingTile {
  margin-left: -18px;
  padding-top: 18px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_WhoIsTypingTile_avatars {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 83px;
  flex: 0 0 83px;
  text-align: center;
}

.mx_WhoIsTypingTile_avatars > :not(:first-child) {
  margin-left: -12px;
}

.mx_WhoIsTypingTile_avatars .mx_BaseAvatar_initial {
  padding-top: 1px;
}

.mx_WhoIsTypingTile_avatars .mx_BaseAvatar {
  border: 1px solid #fff;
  border-radius: 40px;
}

.mx_WhoIsTypingTile_remainingAvatarPlaceholder {
  position: relative;
  display: inline-block;
  color: #acacac;
  background-color: #ddd;
  border: 1px solid #fff;
  border-radius: 40px;
  width: 24px;
  height: 24px;
  line-height: 2.4rem;
  font-size: 0.8em;
  vertical-align: top;
  text-align: center;
}

.mx_WhoIsTypingTile_label {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  font-size: 1.4rem;
  font-weight: 600;
  color: #9e9e9e;
}

.mx_WhoIsTypingTile_label > span {
  background-image: url(../../img/typing-indicator-2x.0eb9f0e.gif);
  background-size: 25px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  padding-bottom: 15px;
  display: block;
}

.mx_MatrixChat_useCompactLayout .mx_WhoIsTypingTile {
  padding-top: 4px;
}

.mx_AvatarSetting_avatar {
  width: 90px;
  min-width: 90px;
  height: 90px;
  margin-top: 8px;
  position: relative;
}

.mx_AvatarSetting_avatar .mx_AvatarSetting_hover {
  -webkit-transition: opacity 0.08s cubic-bezier(0.46, 0.03, 0.52, 0.96);
  transition: opacity 0.08s cubic-bezier(0.46, 0.03, 0.52, 0.96);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  line-height: 90px;
  text-align: center;
}

.mx_AvatarSetting_avatar .mx_AvatarSetting_hover > span {
  color: #fff;
  position: relative;
  font-weight: 500;
}

.mx_AvatarSetting_avatar .mx_AvatarSetting_hover .mx_AvatarSetting_hoverBg {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.5;
  background-color: #2e2f32;
  border-radius: 90px;
}

.mx_AvatarSetting_avatar.mx_AvatarSetting_avatar_hovering
  .mx_AvatarSetting_hover {
  opacity: 1;
}

.mx_AvatarSetting_avatar:not(.mx_AvatarSetting_avatar_hovering)
  .mx_AvatarSetting_hover {
  opacity: 0;
}

.mx_AvatarSetting_avatar > * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.mx_AvatarSetting_avatar .mx_AccessibleButton.mx_AccessibleButton_kind_primary {
  margin-top: 8px;
}

.mx_AvatarSetting_avatar .mx_AccessibleButton.mx_AccessibleButton_kind_link_sm {
  width: 100%;
}

.mx_AvatarSetting_avatar > img {
  cursor: pointer;
  -o-object-fit: cover;
  object-fit: cover;
}

.mx_AvatarSetting_avatar .mx_AvatarSetting_avatarPlaceholder,
.mx_AvatarSetting_avatar > img {
  display: block;
  height: 90px;
  width: inherit;
  border-radius: 90px;
  cursor: pointer;
}

.mx_AvatarSetting_avatar .mx_AvatarSetting_avatarPlaceholder:before {
  background-color: #2e2f32;
  -webkit-mask: url(../../img/feather-customised/user.7a4d23d.svg);
  mask: url(../../img/feather-customised/user.7a4d23d.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 36px;
  mask-size: 36px;
  -webkit-mask-position: center;
  mask-position: center;
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.mx_AvatarSetting_avatar .mx_AvatarSetting_uploadButton {
  width: 32px;
  height: 32px;
  border-radius: 32px;
  background-color: #e7e7e7;
  position: absolute;
  bottom: 0;
  right: 0;
}

.mx_AvatarSetting_avatar .mx_AvatarSetting_uploadButton:before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: 55%;
  mask-size: 55%;
  background-color: #2e2f32;
  -webkit-mask-image: url(../../img/feather-customised/edit.fd55ec2.svg);
  mask-image: url(../../img/feather-customised/edit.fd55ec2.svg);
}

.mx_AvatarSetting_avatar .mx_AvatarSetting_avatarPlaceholder {
  background-color: #f4f6fa;
}

.mx_CrossSigningPanel_statusList {
  border-spacing: 0;
}

.mx_CrossSigningPanel_statusList td {
  padding: 0;
}

.mx_CrossSigningPanel_statusList td:first-of-type {
  -webkit-padding-end: 1em;
  padding-inline-end: 1em;
}

.mx_CrossSigningPanel_buttonRow {
  margin: 1em 0;
}

.mx_CrossSigningPanel_buttonRow :nth-child(n + 1) {
  -webkit-margin-end: 10px;
  margin-inline-end: 10px;
}

.mx_DevicesPanel {
  display: table;
  table-layout: fixed;
  width: 880px;
  border-spacing: 10px;
}

.mx_DevicesPanel_header {
  display: table-header-group;
  font-weight: 700;
}

.mx_DevicesPanel_header > .mx_DevicesPanel_deviceButtons {
  height: 48px;
}

.mx_DevicesPanel_header > div {
  display: table-cell;
  vertical-align: middle;
}

.mx_DevicesPanel_header .mx_DevicesPanel_deviceName {
  width: 50%;
}

.mx_DevicesPanel_header .mx_DevicesPanel_deviceLastSeen {
  width: 30%;
}

.mx_DevicesPanel_header .mx_DevicesPanel_deviceButtons {
  width: 20%;
}

.mx_DevicesPanel_device {
  display: table-row;
}

.mx_DevicesPanel_device > div {
  display: table-cell;
}

.mx_DevicesPanel_myDevice {
  font-weight: 700;
}

.mx_E2eAdvancedPanel_settingLongDescription {
  margin-right: 150px;
}

.mx_ExistingEmailAddress {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 5px;
}

.mx_ExistingEmailAddress_delete {
  margin-right: 5px;
  cursor: pointer;
  vertical-align: middle;
}

.mx_ExistingEmailAddress_email,
.mx_ExistingEmailAddress_promptText {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin-right: 10px;
}

.mx_ExistingEmailAddress_confirmBtn {
  margin-left: 5px;
}

.mx_IntegrationManager .mx_Dialog {
  width: 60%;
  height: 70%;
  overflow: hidden;
  padding: 0;
  max-width: none;
  max-height: none;
}

.mx_IntegrationManager iframe {
  background-color: #fff;
  border: 0;
  width: 100%;
  height: 100%;
}

.mx_IntegrationManager_loading h3 {
  text-align: center;
}

.mx_IntegrationManager_error {
  text-align: center;
  padding-top: 20px;
}

.mx_IntegrationManager_error h3 {
  color: #ff4b55;
}

.mx_UserNotifSettings {
  color: #2e2f32;
}

.mx_UserNotifSettings .mx_UserNotifSettings_pushRulesTable {
  width: calc(100% + 12px);
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 0;
  margin-top: 40px;
}

.mx_UserNotifSettings .mx_UserNotifSettings_pushRulesTable tr > th {
  font-weight: 600;
}

.mx_UserNotifSettings .mx_UserNotifSettings_pushRulesTable tr > th:first-child {
  text-align: left;
  font-size: 1.8rem;
}

.mx_UserNotifSettings
  .mx_UserNotifSettings_pushRulesTable
  tr
  > th:nth-child(n + 2) {
  color: #737d8c;
  font-size: 1.2rem;
  vertical-align: middle;
  width: 66px;
}

.mx_UserNotifSettings
  .mx_UserNotifSettings_pushRulesTable
  tr
  > td:nth-child(n + 2) {
  text-align: center;
}

.mx_UserNotifSettings .mx_UserNotifSettings_pushRulesTable tr > td {
  padding-top: 8px;
}

.mx_UserNotifSettings .mx_UserNotifSettings_pushRulesTable .mx_RadioButton {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.mx_UserNotifSettings
  .mx_UserNotifSettings_pushRulesTable
  .mx_RadioButton
  .mx_RadioButton_content,
.mx_UserNotifSettings
  .mx_UserNotifSettings_pushRulesTable
  .mx_RadioButton
  .mx_RadioButton_spacer {
  display: none;
}

.mx_UserNotifSettings .mx_UserNotifSettings_floatingSection {
  margin-top: 40px;
}

.mx_UserNotifSettings .mx_UserNotifSettings_floatingSection > div:first-child {
  font-size: 1.8rem;
  font-weight: 600;
}

.mx_UserNotifSettings .mx_UserNotifSettings_floatingSection > table {
  border-collapse: collapse;
  border-spacing: 0;
  margin-top: 8px;
}

.mx_UserNotifSettings
  .mx_UserNotifSettings_floatingSection
  > table
  tr
  > td:first-child {
  padding-right: 8px;
}

.mx_UserNotifSettings .mx_UserNotifSettings_clearNotifsButton {
  margin-top: 8px;
}

.mx_UserNotifSettings .mx_TagComposer {
  margin-top: 35px;
}

.mx_ExistingPhoneNumber {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 5px;
}

.mx_ExistingPhoneNumber_delete {
  margin-right: 5px;
  cursor: pointer;
  vertical-align: middle;
}

.mx_ExistingPhoneNumber_address,
.mx_ExistingPhoneNumber_promptText {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin-right: 10px;
}

.mx_ExistingPhoneNumber_confirmBtn {
  margin-left: 5px;
}

.mx_ExistingPhoneNumber_verification {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_ExistingPhoneNumber_verification .mx_Field {
  margin: 0 0 0 1em;
}

.mx_PhoneNumbers_input {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_PhoneNumbers_input > .mx_Field {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.mx_PhoneNumbers_country {
  width: 80px;
}

.mx_ProfileSettings_controls_topic > textarea {
  resize: vertical;
}

.mx_ProfileSettings_profile {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.mx_ProfileSettings_controls {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  margin-right: 54px;
}

.mx_ProfileSettings_controls .mx_SettingsTab_subheading {
  margin-top: 0;
}

.mx_ProfileSettings_controls .mx_Field #profileTopic {
  height: 4em;
}

.mx_ProfileSettings_controls .mx_Field:first-child {
  margin-top: 0;
}

.mx_ProfileSettings_hostingSignup {
  margin-left: 20px;
}

.mx_ProfileSettings_hostingSignup img {
  margin-left: 5px;
}

.mx_ProfileSettings_avatarUpload {
  display: none;
}

.mx_ProfileSettings_profileForm {
  margin-right: 100px;
  border-bottom: 1px solid #e7e7e7;
}

.mx_ProfileSettings_buttons {
  margin-top: 10px;
  margin-bottom: 28px;
}

.mx_ProfileSettings_buttons > .mx_AccessibleButton_kind_link {
  padding-left: 0;
}

.mx_SecureBackupPanel_deviceNotVerified,
.mx_SecureBackupPanel_deviceVerified,
.mx_SecureBackupPanel_sigInvalid,
.mx_SecureBackupPanel_sigValid {
  font-weight: 700;
}

.mx_SecureBackupPanel_deviceVerified,
.mx_SecureBackupPanel_sigValid {
  color: #76cfa5;
}

.mx_SecureBackupPanel_deviceNotVerified,
.mx_SecureBackupPanel_sigInvalid {
  color: #ba6363;
}

.mx_SecureBackupPanel_deviceName {
  font-style: italic;
}

.mx_SecureBackupPanel_buttonRow {
  margin: 1em 0;
}

.mx_SecureBackupPanel_buttonRow :nth-child(n + 1) {
  -webkit-margin-end: 10px;
  margin-inline-end: 10px;
}

.mx_SecureBackupPanel_statusList {
  border-spacing: 0;
}

.mx_SecureBackupPanel_statusList td {
  padding: 0;
}

.mx_SecureBackupPanel_statusList td:first-of-type {
  -webkit-padding-end: 1em;
  padding-inline-end: 1em;
}

.mx_SetIdServer .mx_Field_input {
  margin-right: 100px;
}

.mx_SetIdServer_tooltip {
  max-width: 120px;
}

.mx_SetIntegrationManager {
  margin-top: 10px;
  margin-bottom: 10px;
}

.mx_SetIntegrationManager > .mx_SettingsTab_heading {
  margin-bottom: 10px;
}

.mx_SetIntegrationManager
  > .mx_SettingsTab_heading
  > .mx_SettingsTab_subheading {
  display: inline-block;
  padding-left: 5px;
}

.mx_SetIntegrationManager .mx_ToggleSwitch {
  display: inline-block;
  float: right;
  top: 9px;
  margin-right: 100px;
}

.mx_ExistingSpellCheckLanguage {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 5px;
}

.mx_ExistingSpellCheckLanguage_language {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin-right: 10px;
}

.mx_GeneralUserSettingsTab_spellCheckLanguageInput {
  margin-top: 1em;
  margin-bottom: 1em;
}

.mx_SpellCheckLanguages {
  margin-right: 100px;
}

.mx_UpdateCheckButton_summary {
  margin-left: 16px;
}

.mx_UpdateCheckButton_summary .mx_AccessibleButton_kind_link {
  padding: 0;
}

.mx_SettingsTab {
  color: #61708b;
}

.mx_SettingsTab_warningText {
  color: #ff4b55;
}

.mx_SettingsTab_heading {
  font-size: 2rem;
  font-weight: 600;
  color: #2e2f32;
  margin-bottom: 10px;
}

.mx_SettingsTab_heading:nth-child(n + 2) {
  margin-top: 30px;
}

.mx_SettingsTab_subheading {
  font-size: 1.6rem;
  display: block;
  font-family: Inter, Twemoji, Apple Color Emoji, Segoe UI Emoji, Arial,
    Helvetica, Sans-Serif, Noto Color Emoji;
  font-weight: 600;
  color: #2e2f32;
  margin-bottom: 10px;
  margin-top: 12px;
}

.mx_SettingsTab_subsectionText {
  color: #61708b;
  font-size: 1.4rem;
  display: block;
  margin: 10px 80px 10px 0;
}

.mx_SettingsTab_section {
  margin-bottom: 24px;
}

.mx_SettingsTab_section .mx_SettingsFlag {
  margin-right: 80px;
  margin-bottom: 10px;
}

.mx_SettingsTab_section.mx_SettingsTab_subsectionText .mx_SettingsFlag {
  margin-right: 0 !important;
}

.mx_SettingsTab_section .mx_SettingsFlag .mx_SettingsFlag_label {
  vertical-align: middle;
  display: inline-block;
  font-size: 1.4rem;
  color: #2e2f32;
  max-width: calc(100% - 4.8rem);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding-right: 10px;
}

.mx_SettingsTab_section .mx_SettingsFlag .mx_ToggleSwitch {
  float: right;
}

.mx_SettingsTab_linkBtn {
  cursor: pointer;
  color: #0dbd8b;
  word-break: break-all;
}

.mx_SettingsTab a {
  color: #238cf5;
}

.mx_GeneralRoomSettingsTab_profileSection {
  margin-top: 10px;
}

.mx_RolesRoomSettingsTab ul {
  margin-bottom: 0;
}

.mx_RolesRoomSettingsTab_unbanBtn {
  margin-right: 10px;
  margin-bottom: 5px;
}

.mx_SecurityRoomSettingsTab .mx_SettingsTab_showAdvanced {
  padding: 0;
  margin-bottom: 16px;
}

.mx_SecurityRoomSettingsTab .mx_SecurityRoomSettingsTab_spacesWithAccess > h4 {
  color: #737d8c;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.5rem;
  text-transform: uppercase;
}

.mx_SecurityRoomSettingsTab
  .mx_SecurityRoomSettingsTab_spacesWithAccess
  > span {
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 32px;
  color: #737d8c;
  display: inline-block;
}

.mx_SecurityRoomSettingsTab
  .mx_SecurityRoomSettingsTab_spacesWithAccess
  > span
  .mx_RoomAvatar_isSpaceRoom
  img,
.mx_SecurityRoomSettingsTab
  .mx_SecurityRoomSettingsTab_spacesWithAccess
  > span
  img.mx_RoomAvatar_isSpaceRoom {
  border-radius: 8px;
}

.mx_SecurityRoomSettingsTab
  .mx_SecurityRoomSettingsTab_spacesWithAccess
  > span
  .mx_BaseAvatar {
  margin-right: 8px;
}

.mx_SecurityRoomSettingsTab
  .mx_SecurityRoomSettingsTab_spacesWithAccess
  > span
  + span {
  margin-left: 16px;
}

.mx_SecurityRoomSettingsTab_warning {
  display: block;
}

.mx_SecurityRoomSettingsTab_warning img {
  vertical-align: middle;
  margin-right: 5px;
  margin-left: 3px;
  margin-bottom: 5px;
}

.mx_SecurityRoomSettingsTab_encryptionSection {
  padding-bottom: 24px;
  border-bottom: 1px solid #e7e7e7;
  margin-bottom: 32px;
}

.mx_SecurityRoomSettingsTab_upgradeRequired {
  margin-left: 16px;
  padding: 4px 16px;
  border: 1px solid #0dbd8b;
  border-radius: 8px;
  color: #0dbd8b;
  font-size: 1.2rem;
  line-height: 1.5rem;
}

.mx_SecurityRoomSettingsTab_joinRule .mx_RadioButton {
  padding-top: 16px;
  margin-bottom: 8px;
}

.mx_SecurityRoomSettingsTab_joinRule .mx_RadioButton .mx_RadioButton_content {
  margin-left: 14px;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2.4rem;
  color: #2e2f32;
  display: block;
}

.mx_SecurityRoomSettingsTab_joinRule > span {
  display: inline-block;
  margin-left: 34px;
  margin-bottom: 16px;
  font-size: 1.5rem;
  line-height: 2.4rem;
  color: #737d8c;
}

.mx_SecurityRoomSettingsTab_joinRule > span + .mx_RadioButton {
  border-top: 1px solid #e7e7e7;
}

.mx_SecurityRoomSettingsTab_joinRule .mx_AccessibleButton_kind_link {
  padding: 0;
  font-size: inherit;
}

.mx_AppearanceUserSettingsTab_fontSlider,
.mx_AppearanceUserSettingsTab_fontSlider_preview {
  margin-right: 100px;
}

.mx_AppearanceUserSettingsTab .mx_Field {
  width: 256px;
}

.mx_AppearanceUserSettingsTab_fontScaling {
  color: #2e2f32;
}

.mx_AppearanceUserSettingsTab_fontSlider {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 15px;
  background: rgba(227, 232, 240, 0.2);
  border-radius: 10px;
  font-size: 10px;
  margin-top: 24px;
  margin-bottom: 24px;
}

.mx_AppearanceUserSettingsTab_fontSlider_preview {
  border: 1px solid #e3e8f0;
  border-radius: 10px;
  padding: 0 16px 9px;
  pointer-events: none;
  display: flow-root;
}

.mx_AppearanceUserSettingsTab_fontSlider_preview
  .mx_EventTile[data-layout="bubble"] {
  margin-top: 30px;
}

.mx_AppearanceUserSettingsTab_fontSlider_preview .mx_EventTile_msgOption {
  display: none;
}

.mx_AppearanceUserSettingsTab_fontSlider_preview.mx_IRCLayout {
  padding-top: 9px;
}

.mx_AppearanceUserSettingsTab_fontSlider_smallText {
  font-size: 15px;
  padding-right: 20px;
  padding-left: 5px;
  font-weight: 500;
}

.mx_AppearanceUserSettingsTab_fontSlider_largeText {
  font-size: 18px;
  padding-left: 20px;
  padding-right: 5px;
  font-weight: 500;
}

.mx_AppearanceUserSettingsTab > .mx_SettingsTab_SubHeading {
  margin-bottom: 32px;
}

.mx_AppearanceUserSettingsTab_themeSection {
  color: #2e2f32;
}

.mx_AppearanceUserSettingsTab_themeSection > .mx_ThemeSelectors {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-top: 4px;
  margin-bottom: 30px;
}

.mx_AppearanceUserSettingsTab_themeSection
  > .mx_ThemeSelectors
  > .mx_RadioButton {
  padding: 1.6rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 10px;
  width: 180px;
  background: #e3e8f0;
  opacity: 0.4;
  -ms-flex-negative: 1;
  flex-shrink: 1;
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  margin-right: 15px;
  margin-top: 10px;
  font-weight: 600;
  color: #61708b;
}

.mx_AppearanceUserSettingsTab_themeSection
  > .mx_ThemeSelectors
  > .mx_RadioButton
  > span {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.mx_AppearanceUserSettingsTab_themeSection
  > .mx_ThemeSelectors
  > .mx_RadioButton_enabled {
  opacity: 1;
}

.mx_AppearanceUserSettingsTab_themeSection
  > .mx_ThemeSelectors
  > .mx_RadioButton_enabled.mx_ThemeSelector_light {
  background-color: #f3f8fd;
  color: #2e2f32;
}

.mx_AppearanceUserSettingsTab_themeSection
  > .mx_ThemeSelectors
  > .mx_RadioButton_enabled.mx_ThemeSelector_dark {
  background-color: #25282e;
  color: #f3f8fd;
}

.mx_AppearanceUserSettingsTab_themeSection
  > .mx_ThemeSelectors
  > .mx_RadioButton_enabled.mx_ThemeSelector_dark
  > input
  > div,
.mx_AppearanceUserSettingsTab_themeSection
  > .mx_ThemeSelectors
  > .mx_RadioButton_enabled.mx_ThemeSelector_dark
  > input
  > div
  > div {
  border-color: #e3e8f0;
}

.mx_AppearanceUserSettingsTab_themeSection
  > .mx_ThemeSelectors
  > .mx_RadioButton_enabled.mx_ThemeSelector_black {
  background-color: #000;
  color: #f3f8fd;
}

.mx_AppearanceUserSettingsTab_themeSection
  > .mx_ThemeSelectors
  > .mx_RadioButton_enabled.mx_ThemeSelector_black
  > input
  > div,
.mx_AppearanceUserSettingsTab_themeSection
  > .mx_ThemeSelectors
  > .mx_RadioButton_enabled.mx_ThemeSelector_black
  > input
  > div
  > div {
  border-color: #e3e8f0;
}

.mx_SettingsTab_customFontSizeField {
  margin-left: calc(1.6rem + 10px);
}

.mx_AppearanceUserSettingsTab_Layout_RadioButtons {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  grid-gap: 24px;
  gap: 24px;
  color: #2e2f32;
}

.mx_AppearanceUserSettingsTab_Layout_RadioButtons
  > .mx_AppearanceUserSettingsTab_Layout_RadioButton {
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  -ms-flex-negative: 1;
  flex-shrink: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 300px;
  border: 1px solid #e3e8f0;
  border-radius: 10px;
}

.mx_AppearanceUserSettingsTab_Layout_RadioButtons
  > .mx_AppearanceUserSettingsTab_Layout_RadioButton
  .mx_EventTile_msgOption,
.mx_AppearanceUserSettingsTab_Layout_RadioButtons
  > .mx_AppearanceUserSettingsTab_Layout_RadioButton
  .mx_MessageActionBar {
  display: none;
}

.mx_AppearanceUserSettingsTab_Layout_RadioButtons
  > .mx_AppearanceUserSettingsTab_Layout_RadioButton
  .mx_AppearanceUserSettingsTab_Layout_RadioButton_preview {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 10px;
  pointer-events: none;
}

.mx_AppearanceUserSettingsTab_Layout_RadioButtons
  > .mx_AppearanceUserSettingsTab_Layout_RadioButton
  .mx_RadioButton {
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  padding: 10px;
}

.mx_AppearanceUserSettingsTab_Layout_RadioButtons
  > .mx_AppearanceUserSettingsTab_Layout_RadioButton
  .mx_EventTile_content {
  margin-right: 0;
}

.mx_AppearanceUserSettingsTab_Layout_RadioButtons
  > .mx_AppearanceUserSettingsTab_Layout_RadioButton.mx_AppearanceUserSettingsTab_Layout_RadioButton_selected {
  border-color: #0dbd8b;
}

.mx_AppearanceUserSettingsTab_Layout_RadioButtons .mx_RadioButton {
  border-top: 1px solid #e3e8f0;
}

.mx_AppearanceUserSettingsTab_Layout_RadioButtons
  .mx_RadioButton
  > input
  + div {
  border-color: rgba(97, 112, 139, 0.2);
}

.mx_AppearanceUserSettingsTab_Layout_RadioButtons .mx_RadioButton_checked {
  background-color: rgba(13, 189, 139, 0.08);
}

.mx_AppearanceUserSettingsTab_Layout_RadioButtons .mx_EventTile {
  margin: 0;
}

.mx_AppearanceUserSettingsTab_Layout_RadioButtons
  .mx_EventTile[data-layout="bubble"] {
  margin-right: 40px;
}

.mx_AppearanceUserSettingsTab_Layout_RadioButtons
  .mx_EventTile[data-layout="irc"]
  > a {
  display: none;
}

.mx_AppearanceUserSettingsTab_Layout_RadioButtons
  .mx_EventTile
  .mx_EventTile_line {
  max-width: 90%;
}

.mx_AppearanceUserSettingsTab_Advanced {
  color: #2e2f32;
}

.mx_AppearanceUserSettingsTab_Advanced > * {
  margin-bottom: 16px;
}

.mx_AppearanceUserSettingsTab_Advanced
  .mx_AppearanceUserSettingsTab_AdvancedToggle {
  color: #0dbd8b;
  cursor: pointer;
}

.mx_AppearanceUserSettingsTab_Advanced
  .mx_AppearanceUserSettingsTab_systemFont {
  margin-left: calc(1.6rem + 10px);
}

.mx_GeneralUserSettingsTab_changePassword .mx_Field {
  margin-right: 100px;
}

.mx_GeneralUserSettingsTab_changePassword .mx_Field:first-child {
  margin-top: 0;
}

.mx_GeneralUserSettingsTab_accountSection
  .mx_SettingsTab_subheading:nth-child(n + 1),
.mx_GeneralUserSettingsTab_discovery
  .mx_SettingsTab_subheading:nth-child(n + 2),
.mx_SetIdServer .mx_SettingsTab_subheading {
  margin-top: 24px;
}

.mx_GeneralUserSettingsTab_accountSection .mx_Spinner,
.mx_GeneralUserSettingsTab_discovery .mx_Spinner {
  -webkit-box-pack: left;
  -ms-flex-pack: left;
  justify-content: left;
}

.mx_GeneralUserSettingsTab_accountSection .mx_EmailAddresses,
.mx_GeneralUserSettingsTab_accountSection .mx_PhoneNumbers,
.mx_GeneralUserSettingsTab_discovery .mx_ExistingEmailAddress,
.mx_GeneralUserSettingsTab_discovery .mx_ExistingPhoneNumber,
.mx_GeneralUserSettingsTab_languageInput {
  margin-right: 100px;
}

.mx_GeneralUserSettingsTab_warningIcon {
  vertical-align: middle;
}

.mx_HelpUserSettingsTab_debugButton {
  margin-bottom: 5px;
  margin-top: 5px;
}

.mx_HelpUserSettingsTab span.mx_AccessibleButton {
  word-break: break-word;
}

.mx_HelpUserSettingsTab code {
  word-break: break-all;
  -webkit-user-select: all;
  -moz-user-select: all;
  -ms-user-select: all;
  user-select: all;
}

.mx_HelpUserSettingsTab_accessToken {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-radius: 5px;
  border: 1px solid #747474;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 10px;
}

.mx_HelpUserSettingsTab_accessToken_copy {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  cursor: pointer;
  margin-left: 20px;
  display: inherit;
}

.mx_HelpUserSettingsTab_accessToken_copy > div {
  -webkit-mask-image: url(../../img/feather-customised/clipboard.24dd87a.svg);
  mask-image: url(../../img/feather-customised/clipboard.24dd87a.svg);
  background-color: #2e2f32;
  margin-left: 5px;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
}

.mx_LabsUserSettingsTab .mx_SettingsTab_section {
  margin-top: 32px;
}

.mx_LabsUserSettingsTab .mx_SettingsTab_section .mx_SettingsFlag {
  margin-right: 0;
}

.mx_MjolnirUserSettingsTab .mx_Field {
  margin-right: 100px;
}

.mx_MjolnirUserSettingsTab_listItem {
  margin-bottom: 2px;
}

.mx_NotificationUserSettingsTab .mx_SettingsTab_heading {
  margin-bottom: 10px;
}

.mx_PreferencesUserSettingsTab .mx_Field {
  margin-right: 100px;
}

.mx_PreferencesUserSettingsTab .mx_SettingsTab_section {
  margin-bottom: 30px;
}

.mx_SecurityUserSettingsTab .mx_DevicesPanel {
  width: auto;
  max-width: 880px;
}

.mx_SecurityUserSettingsTab_deviceInfo {
  display: table;
  padding-left: 0;
}

.mx_SecurityUserSettingsTab_deviceInfo > li {
  display: table-row;
}

.mx_SecurityUserSettingsTab_deviceInfo > li > label,
.mx_SecurityUserSettingsTab_deviceInfo > li > span {
  display: table-cell;
  padding-right: 1em;
}

.mx_SecurityUserSettingsTab_bulkOptions .mx_AccessibleButton,
.mx_SecurityUserSettingsTab_importExportButtons .mx_AccessibleButton {
  margin-right: 10px;
}

.mx_SecurityUserSettingsTab_importExportButtons {
  margin-bottom: 15px;
}

.mx_SecurityUserSettingsTab_ignoredUser {
  margin-bottom: 5px;
}

.mx_SecurityUserSettingsTab_ignoredUser .mx_AccessibleButton {
  margin-right: 10px;
}

.mx_SecurityUserSettingsTab
  .mx_SettingsTab_section
  .mx_AccessibleButton_kind_link {
  padding: 0;
  font-size: inherit;
}

.mx_SecurityUserSettingsTab .mx_SecurityUserSettingsTab_warning {
  color: #ff4b55;
  position: relative;
  padding-left: 40px;
  margin-top: 30px;
}

.mx_SecurityUserSettingsTab .mx_SecurityUserSettingsTab_warning:before {
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: 0 center;
  mask-position: 0 center;
  -webkit-mask-size: 2.4rem;
  mask-size: 2.4rem;
  position: absolute;
  width: 2.4rem;
  height: 2.4rem;
  content: "";
  top: 0;
  left: 0;
  background-color: #ff4b55;
  -webkit-mask-image: url(../../img/feather-customised/alert-triangle.38aca3a.svg);
  mask-image: url(../../img/feather-customised/alert-triangle.38aca3a.svg);
}

.mx_VoiceUserSettingsTab .mx_Field {
  margin-right: 100px;
}

.mx_VoiceUserSettingsTab_missingMediaPermissions {
  margin-bottom: 15px;
}

.mx_SpaceBasicSettings .mx_Field {
  margin: 24px 0;
}

.mx_SpaceBasicSettings .mx_SpaceBasicSettings_avatarContainer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 24px;
}

.mx_SpaceBasicSettings
  .mx_SpaceBasicSettings_avatarContainer
  .mx_SpaceBasicSettings_avatar {
  position: relative;
  height: 80px;
  width: 80px;
  background-color: #8d99a5;
  border-radius: 16px;
}

.mx_SpaceBasicSettings
  .mx_SpaceBasicSettings_avatarContainer
  img.mx_SpaceBasicSettings_avatar {
  width: 80px;
  height: 80px;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 16px;
}

.mx_SpaceBasicSettings
  .mx_SpaceBasicSettings_avatarContainer
  div.mx_SpaceBasicSettings_avatar {
  cursor: pointer;
}

.mx_SpaceBasicSettings
  .mx_SpaceBasicSettings_avatarContainer
  div.mx_SpaceBasicSettings_avatar:before {
  content: "";
  position: absolute;
  height: 80px;
  width: 80px;
  top: 0;
  left: 0;
  background-color: #fff;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: 20px;
  mask-size: 20px;
  -webkit-mask-image: url(../../img/element-icons/camera.a81a395.svg);
  mask-image: url(../../img/element-icons/camera.a81a395.svg);
}

.mx_SpaceBasicSettings
  .mx_SpaceBasicSettings_avatarContainer
  > input[type="file"] {
  display: none;
}

.mx_SpaceBasicSettings
  .mx_SpaceBasicSettings_avatarContainer
  > .mx_AccessibleButton_kind_link {
  display: inline-block;
  padding: 0;
  margin: auto 16px;
  color: #368bd6;
}

.mx_SpaceBasicSettings
  .mx_SpaceBasicSettings_avatarContainer
  > .mx_SpaceBasicSettings_avatar_remove {
  color: #ff4b55;
}

.mx_SpaceBasicSettings .mx_AccessibleButton_hasKind {
  padding: 8px 22px;
  margin-left: auto;
  display: block;
  width: -webkit-min-content;
  width: -moz-min-content;
  width: min-content;
}

.mx_SpaceBasicSettings .mx_AccessibleButton_disabled {
  cursor: not-allowed;
}

.mx_SpaceCreateMenu_wrapper .mx_ContextualMenu_background {
  background-color: rgba(46, 48, 51, 0.38);
  opacity: 0.6;
  left: 71px;
}

.mx_SpaceCreateMenu_wrapper .mx_ContextualMenu {
  padding: 24px;
  width: 480px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #fff;
  position: relative;
}

.mx_SpaceCreateMenu_wrapper .mx_ContextualMenu > div > h2 {
  font-weight: 600;
  font-size: 1.8rem;
  margin-top: 4px;
}

.mx_SpaceCreateMenu_wrapper .mx_ContextualMenu > div > p {
  font-size: 1.5rem;
  color: #737d8c;
  margin: 0;
}

.mx_SpaceCreateMenu_wrapper .mx_ContextualMenu .mx_BetaCard_betaPill {
  position: absolute;
  top: 24px;
  right: 24px;
}

.mx_SpaceCreateMenu_wrapper .mx_ContextualMenu .mx_SpaceCreateMenuType {
  position: relative;
  padding: 16px 32px 16px 72px;
  width: 432px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #e7e7e7;
  font-size: 1.5rem;
  margin: 20px 0;
}

.mx_SpaceCreateMenu_wrapper .mx_ContextualMenu .mx_SpaceCreateMenuType > h3 {
  font-weight: 600;
  margin: 0 0 4px;
}

.mx_SpaceCreateMenu_wrapper .mx_ContextualMenu .mx_SpaceCreateMenuType > span {
  color: #737d8c;
}

.mx_SpaceCreateMenu_wrapper .mx_ContextualMenu .mx_SpaceCreateMenuType:before {
  position: absolute;
  content: "";
  width: 32px;
  height: 32px;
  top: 24px;
  left: 20px;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 24px;
  mask-size: 24px;
  background-color: #8d99a5;
}

.mx_SpaceCreateMenu_wrapper .mx_ContextualMenu .mx_SpaceCreateMenuType:hover {
  border-color: #0dbd8b;
}

.mx_SpaceCreateMenu_wrapper
  .mx_ContextualMenu
  .mx_SpaceCreateMenuType:hover:before {
  background-color: #0dbd8b;
}

.mx_SpaceCreateMenu_wrapper
  .mx_ContextualMenu
  .mx_SpaceCreateMenuType:hover
  > span {
  color: #2e2f32;
}

.mx_SpaceCreateMenu_wrapper
  .mx_ContextualMenu
  .mx_SpaceCreateMenuType_public:before {
  -webkit-mask-image: url(../../img/globe.8201f08.svg);
  mask-image: url(../../img/globe.8201f08.svg);
}

.mx_SpaceCreateMenu_wrapper
  .mx_ContextualMenu
  .mx_SpaceCreateMenuType_private:before {
  -webkit-mask-image: url(../../img/element-icons/lock.1f264bd.svg);
  mask-image: url(../../img/element-icons/lock.1f264bd.svg);
}

.mx_SpaceCreateMenu_wrapper .mx_ContextualMenu .mx_SpaceCreateMenu_back {
  width: 28px;
  height: 28px;
  position: relative;
  background-color: rgba(141, 151, 165, 0.2);
  border-radius: 14px;
  margin-bottom: 12px;
}

.mx_SpaceCreateMenu_wrapper .mx_ContextualMenu .mx_SpaceCreateMenu_back:before {
  content: "";
  position: absolute;
  height: 28px;
  width: 28px;
  top: 0;
  left: 0;
  background-color: #8d99a5;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: 2px 3px;
  mask-position: 2px 3px;
  -webkit-mask-size: 24px;
  mask-size: 24px;
  -webkit-mask-image: url(../../img/feather-customised/chevron-down.5278abe.svg);
  mask-image: url(../../img/feather-customised/chevron-down.5278abe.svg);
}

.mx_SpaceCreateMenu_wrapper
  .mx_ContextualMenu
  .mx_AccessibleButton_kind_primary {
  padding: 8px 22px;
  margin-left: auto;
  display: block;
  width: -webkit-min-content;
  width: -moz-min-content;
  width: min-content;
}

.mx_SpaceCreateMenu_wrapper .mx_ContextualMenu .mx_AccessibleButton_disabled {
  cursor: not-allowed;
}

.mx_SpacePublicShare .mx_AccessibleButton {
  position: relative;
  padding: 16px 32px 16px 72px;
  width: 432px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #e7e7e7;
  font-size: 1.5rem;
  margin: 20px 0;
}

.mx_SpacePublicShare .mx_AccessibleButton > h3 {
  font-weight: 600;
  margin: 0 0 4px;
}

.mx_SpacePublicShare .mx_AccessibleButton > span {
  color: #737d8c;
}

.mx_SpacePublicShare .mx_AccessibleButton:before {
  position: absolute;
  content: "";
  width: 32px;
  height: 32px;
  top: 24px;
  left: 20px;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 24px;
  mask-size: 24px;
  background-color: #8d99a5;
}

.mx_SpacePublicShare .mx_AccessibleButton:hover {
  border-color: #0dbd8b;
}

.mx_SpacePublicShare .mx_AccessibleButton:hover:before {
  background-color: #0dbd8b;
}

.mx_SpacePublicShare .mx_AccessibleButton:hover > span {
  color: #2e2f32;
}

.mx_SpacePublicShare
  .mx_AccessibleButton.mx_SpacePublicShare_shareButton:before {
  -webkit-mask-image: url(../../img/element-icons/link.8f4b1fc.svg);
  mask-image: url(../../img/element-icons/link.8f4b1fc.svg);
}

.mx_SpacePublicShare
  .mx_AccessibleButton.mx_SpacePublicShare_inviteButton:before {
  -webkit-mask-image: url(../../img/element-icons/room/invite.946a71b.svg);
  mask-image: url(../../img/element-icons/room/invite.946a71b.svg);
}

.mx_InlineTermsAgreement_cbContainer {
  margin-bottom: 10px;
  font-size: 1.4rem;
}

.mx_InlineTermsAgreement_cbContainer a {
  color: #0dbd8b;
  text-decoration: none;
}

.mx_InlineTermsAgreement_cbContainer .mx_InlineTermsAgreement_checkbox {
  margin-top: 10px;
}

.mx_InlineTermsAgreement_cbContainer .mx_InlineTermsAgreement_checkbox input {
  vertical-align: text-bottom;
}

.mx_InlineTermsAgreement_link {
  display: inline-block;
  -webkit-mask-image: url(../../img/external-link.a8d3e9b.svg);
  mask-image: url(../../img/external-link.a8d3e9b.svg);
  background-color: #0dbd8b;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
  width: 12px;
  height: 12px;
  margin-left: 3px;
  vertical-align: middle;
}

.mx_AnalyticsToast .mx_AccessibleButton_kind_danger {
  background: none;
  color: #0dbd8b;
}

.mx_AnalyticsToast .mx_AccessibleButton_kind_primary {
  background: #0dbd8b;
  color: #fff;
}

.mx_NonUrgentEchoFailureToast .mx_NonUrgentEchoFailureToast_icon {
  display: inline-block;
  width: 1.8rem;
  height: 1.8rem;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  background-color: #fff;
  -webkit-mask-image: url(../../img/element-icons/cloud-off.33cd28e.svg);
  mask-image: url(../../img/element-icons/cloud-off.33cd28e.svg);
  margin-right: 8px;
}

.mx_NonUrgentEchoFailureToast span {
  vertical-align: middle;
}

.mx_NonUrgentEchoFailureToast .mx_AccessibleButton {
  padding: 0;
}

.mx_VerificationShowSas_decimalSas {
  text-align: center;
  font-weight: 700;
  padding-left: 3px;
  padding-right: 3px;
}

.mx_VerificationShowSas_decimalSas span {
  margin-left: 5px;
  margin-right: 5px;
}

.mx_VerificationShowSas_emojiSas {
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 25px 0;
}

.mx_VerificationShowSas_emojiSas_block {
  display: inline-block;
  margin-bottom: 16px;
  position: relative;
  width: 52px;
}

.mx_AuthPage_modal .mx_VerificationShowSas_emojiSas_block,
.mx_Dialog .mx_VerificationShowSas_emojiSas_block {
  width: 60px;
}

.mx_VerificationShowSas_emojiSas_emoji {
  font-size: 3.2rem;
}

.mx_VerificationShowSas_emojiSas_label {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 1.2rem;
}

.mx_VerificationShowSas_emojiSas_break {
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
}

.mx_VerificationShowSas
  .mx_Dialog_buttons
  button.mx_VerificationShowSas_matchButton {
  color: #0dbd8b;
  background-color: rgba(3, 179, 129, 0.16);
  border: none;
}

.mx_VerificationShowSas
  .mx_Dialog_buttons
  button.mx_VerificationShowSas_noMatchButton {
  color: #ff4b55;
  background-color: rgba(255, 75, 85, 0.16);
  border: none;
}

.mx_CallContainer {
  position: absolute;
  right: 20px;
  bottom: 72px;
  z-index: 100;
  pointer-events: none;
}

.mx_CallContainer .mx_CallPreview {
  pointer-events: auto;
  cursor: pointer;
}

.mx_CallContainer .mx_CallPreview .mx_VideoFeed_remote.mx_VideoFeed_voice {
  min-height: 150px;
}

.mx_CallContainer .mx_CallPreview .mx_VideoFeed_local {
  border-radius: 8px;
  overflow: hidden;
}

.mx_CallContainer .mx_AppTile_persistedWrapper div {
  min-width: 350px;
}

.mx_CallContainer .mx_IncomingCallBox {
  min-width: 250px;
  background-color: #f4f6fa;
  padding: 8px;
  -webkit-box-shadow: 0 14px 24px rgba(0, 0, 0, 0.08);
  box-shadow: 0 14px 24px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  pointer-events: auto;
  cursor: pointer;
}

.mx_CallContainer .mx_IncomingCallBox .mx_IncomingCallBox_CallerInfo {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  direction: row;
}

.mx_CallContainer
  .mx_IncomingCallBox
  .mx_IncomingCallBox_CallerInfo
  .mx_BaseAvatar_initial,
.mx_CallContainer .mx_IncomingCallBox .mx_IncomingCallBox_CallerInfo img {
  margin: 8px;
}

.mx_CallContainer .mx_IncomingCallBox .mx_IncomingCallBox_CallerInfo > div {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.mx_CallContainer .mx_IncomingCallBox .mx_IncomingCallBox_CallerInfo h1,
.mx_CallContainer .mx_IncomingCallBox .mx_IncomingCallBox_CallerInfo p {
  margin: 0;
  padding: 0;
  font-size: 1.4rem;
  line-height: 1.6rem;
}

.mx_CallContainer .mx_IncomingCallBox .mx_IncomingCallBox_CallerInfo h1 {
  font-weight: 700;
}

.mx_CallContainer .mx_IncomingCallBox .mx_IncomingCallBox_buttons {
  padding: 8px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
}

.mx_CallContainer
  .mx_IncomingCallBox
  .mx_IncomingCallBox_buttons
  > .mx_IncomingCallBox_spacer {
  width: 8px;
}

.mx_CallContainer .mx_IncomingCallBox .mx_IncomingCallBox_buttons > * {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  margin-right: 0;
  font-size: 1.5rem;
  line-height: 2.4rem;
}

.mx_CallContainer .mx_IncomingCallBox .mx_IncomingCallBox_iconButton {
  position: absolute;
  right: 8px;
}

.mx_CallContainer .mx_IncomingCallBox .mx_IncomingCallBox_iconButton:before {
  content: "";
  height: 20px;
  width: 20px;
  background-color: #c1c6cd;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-position: center;
  mask-position: center;
}

.mx_CallContainer .mx_IncomingCallBox .mx_IncomingCallBox_silence:before {
  -webkit-mask-image: url(../../img/voip/silence.08cd2d6.svg);
  mask-image: url(../../img/voip/silence.08cd2d6.svg);
}

.mx_CallContainer .mx_IncomingCallBox .mx_IncomingCallBox_unSilence:before {
  -webkit-mask-image: url(../../img/voip/un-silence.cebdd12.svg);
  mask-image: url(../../img/voip/un-silence.cebdd12.svg);
}

.mx_CallPreview {
  position: fixed;
  left: 0;
  top: 0;
}

.mx_CallView {
  border-radius: 8px;
  background-color: #f2f5f8;
  padding-left: 8px;
  padding-right: 8px;
  pointer-events: auto;
}

.mx_CallView_large {
  padding-bottom: 10px;
  margin: 5px 5px 5px 18px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.mx_CallView_large,
.mx_CallView_large .mx_CallView_voice {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.mx_CallView_pip {
  width: 320px;
  padding-bottom: 8px;
  background-color: #f4f6fa;
  -webkit-box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}

.mx_CallView_pip .mx_CallView_voice {
  height: 180px;
}

.mx_CallView_pip .mx_CallView_callControls {
  bottom: 0;
}

.mx_CallView_pip .mx_CallView_callControls_button:before {
  width: 36px;
  height: 36px;
}

.mx_CallView_pip .mx_CallView_holdTransferContent {
  padding-top: 10px;
  padding-bottom: 25px;
}

.mx_CallView_content {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border-radius: 8px;
}

.mx_CallView_voice {
  -webkit-box-orient: vertical;
  -ms-flex-direction: column;
  flex-direction: column;
  background-color: #27303a;
}

.mx_CallView_voice,
.mx_CallView_voice_avatarsContainer {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-direction: normal;
}

.mx_CallView_voice_avatarsContainer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -ms-flex-direction: row;
  flex-direction: row;
}

.mx_CallView_voice_avatarsContainer div {
  margin-left: 12px;
  margin-right: 12px;
}

.mx_CallView_voice
  .mx_CallView_holdTransferContent
  .mx_CallView_voice_avatarContainer {
  border-radius: 2000px;
  overflow: hidden;
  position: relative;
}

.mx_CallView_holdTransferContent {
  height: 20px;
  padding-top: 20px;
  padding-bottom: 15px;
  color: #fff;
}

.mx_CallView_holdTransferContent .mx_AccessibleButton_hasKind {
  padding: 0;
  font-weight: 700;
}

.mx_CallView_video {
  width: 100%;
  height: 100%;
  z-index: 30;
  overflow: hidden;
}

.mx_CallView_video_hold {
  overflow: hidden;
}

.mx_CallView_video_hold .mx_VideoFeed {
  visibility: hidden;
}

.mx_CallView_video_holdBackground {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  -webkit-filter: blur(20px);
  filter: blur(20px);
}

.mx_CallView_video_holdBackground:after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
}

.mx_CallView_video .mx_CallView_holdTransferContent {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-weight: 700;
  color: #fff;
  text-align: center;
}

.mx_CallView_video .mx_CallView_holdTransferContent:before {
  display: block;
  margin-left: auto;
  margin-right: auto;
  content: "";
  width: 40px;
  height: 40px;
  background-image: url(../../img/voip/paused.77799b3.svg);
  background-position: 50%;
  background-size: cover;
}

.mx_CallView_pip .mx_CallView_video .mx_CallView_holdTransferContent:before {
  width: 30px;
  height: 30px;
}

.mx_CallView_video
  .mx_CallView_holdTransferContent
  .mx_AccessibleButton_hasKind {
  padding: 0;
}

.mx_CallView_header {
  height: 44px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: left;
  -ms-flex-pack: left;
  justify-content: left;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

.mx_CallView_header_callType {
  font-size: 1.2rem;
  font-weight: 700;
  vertical-align: middle;
}

.mx_CallView_header_secondaryCallInfo:before {
  content: "·";
  margin-left: 6px;
  margin-right: 6px;
}

.mx_CallView_header_controls {
  margin-left: auto;
}

.mx_CallView_header_button {
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
}

.mx_CallView_header_button:before {
  content: "";
  display: inline-block;
  height: 20px;
  width: 20px;
  vertical-align: middle;
  background-color: #737d8c;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-position: center;
  mask-position: center;
}

.mx_CallView_header_button_fullscreen:before {
  -webkit-mask-image: url(../../img/element-icons/call/fullscreen.43be138.svg);
  mask-image: url(../../img/element-icons/call/fullscreen.43be138.svg);
}

.mx_CallView_header_button_expand:before {
  -webkit-mask-image: url(../../img/element-icons/call/expand.7ef9f56.svg);
  mask-image: url(../../img/element-icons/call/expand.7ef9f56.svg);
}

.mx_CallView_header_callInfo {
  margin-left: 12px;
  margin-right: 16px;
}

.mx_CallView_header_roomName {
  font-weight: 700;
  font-size: 12px;
  line-height: normal;
  height: 15px;
}

.mx_CallView_secondaryCall_roomName {
  margin-left: 4px;
}

.mx_CallView_header_callTypeSmall {
  font-size: 12px;
  color: #737d8c;
  line-height: normal;
  height: 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 240px;
}

.mx_CallView_header_phoneIcon {
  display: inline-block;
  margin-right: 6px;
  height: 16px;
  width: 16px;
  vertical-align: middle;
}

.mx_CallView_header_phoneIcon:before {
  content: "";
  display: inline-block;
  vertical-align: top;
  height: 16px;
  width: 16px;
  background-color: #ff4b55;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-image: url(../../img/element-icons/call/voice-call.303eba8.svg);
  mask-image: url(../../img/element-icons/call/voice-call.303eba8.svg);
}

.mx_CallView_callControls {
  position: absolute;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  bottom: 5px;
  width: 100%;
  opacity: 1;
  -webkit-transition: opacity 0.5s;
  transition: opacity 0.5s;
}

.mx_CallView_callControls_hidden {
  opacity: 0.001;
  pointer-events: none;
}

.mx_CallView_callControls_button {
  cursor: pointer;
  margin-left: 8px;
  margin-right: 8px;
}

.mx_CallView_callControls_button:before {
  content: "";
  display: inline-block;
  height: 48px;
  width: 48px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50%;
}

.mx_CallView_callControls_dialpad {
  margin-right: auto;
}

.mx_CallView_callControls_dialpad:before {
  background-image: url(../../img/voip/dialpad.fdda9a0.svg);
}

.mx_CallView_callControls_button_dialpad_hidden {
  margin-right: auto;
  cursor: auto;
}

.mx_CallView_callControls_button_micOn:before {
  background-image: url(../../img/voip/mic-on.2592c14.svg);
}

.mx_CallView_callControls_button_micOff:before {
  background-image: url(../../img/voip/mic-off.774e42b.svg);
}

.mx_CallView_callControls_button_vidOn:before {
  background-image: url(../../img/voip/vid-on.b9b8bbf.svg);
}

.mx_CallView_callControls_button_vidOff:before {
  background-image: url(../../img/voip/vid-off.5552596.svg);
}

.mx_CallView_callControls_button_hangup:before {
  background-image: url(../../img/voip/hangup.9c3adeb.svg);
}

.mx_CallView_callControls_button_more {
  margin-left: auto;
}

.mx_CallView_callControls_button_more:before {
  background-image: url(../../img/voip/more.5e8055e.svg);
}

.mx_CallView_callControls_button_more_hidden {
  margin-left: auto;
  cursor: auto;
}

.mx_CallView_callControls_button_invisible {
  visibility: hidden;
  pointer-events: none;
  position: absolute;
}

.mx_CallViewForRoom {
  overflow: hidden;
}

.mx_CallViewForRoom .mx_CallViewForRoom_ResizeWrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 8px;
}

.mx_CallViewForRoom
  .mx_CallViewForRoom_ResizeWrapper:hover
  .mx_CallViewForRoom_ResizeHandle {
  width: 100% !important;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.mx_CallViewForRoom
  .mx_CallViewForRoom_ResizeWrapper:hover
  .mx_CallViewForRoom_ResizeHandle:after {
  content: "";
  margin-top: 3px;
  border-radius: 4px;
  height: 4px;
  width: 100%;
  max-width: 64px;
  background-color: #2e2f32;
}

.mx_DialPad {
  display: grid;
  grid-row-gap: 16px;
  row-gap: 16px;
  grid-column-gap: 0;
  -webkit-column-gap: 0;
  -moz-column-gap: 0;
  column-gap: 0;
  margin-top: 24px;
  grid-template-columns: repeat(3, 1fr);
}

.mx_DialPad,
.mx_DialPad_button {
  margin-left: auto;
  margin-right: auto;
}

.mx_DialPad_button {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #e3e8f0;
  border-radius: 40px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  vertical-align: middle;
}

.mx_DialPad_button .mx_DialPad_buttonSubText {
  font-size: 8px;
}

.mx_DialPad_dialButton {
  grid-column: 2;
  background-color: #0dbd8b;
}

.mx_DialPad_dialButton:before {
  content: "";
  display: inline-block;
  height: 40px;
  width: 40px;
  vertical-align: middle;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 20px;
  mask-size: 20px;
  -webkit-mask-position: center;
  mask-position: center;
  background-color: #fff;
  -webkit-mask-image: url(../../img/element-icons/call/voice-call.303eba8.svg);
  mask-image: url(../../img/element-icons/call/voice-call.303eba8.svg);
}

.mx_DialPadContextMenu_dialPad .mx_DialPad {
  grid-row-gap: 16px;
  row-gap: 16px;
  grid-column-gap: 32px;
  -webkit-column-gap: 32px;
  -moz-column-gap: 32px;
  column-gap: 32px;
}

.mx_DialPadContextMenuWrapper {
  padding: 15px;
}

.mx_DialPadContextMenu_header {
  margin-top: 32px;
  margin-left: 20px;
  margin-right: 20px;
  border: none;
  border-bottom: 1px solid #c1c6cd;
  -webkit-transition: border-bottom 0.25s;
  transition: border-bottom 0.25s;
}

.mx_DialPadContextMenu_cancel {
  float: right;
  -webkit-mask: url(../../img/feather-customised/cancel.23c2689.svg);
  mask: url(../../img/feather-customised/cancel.23c2689.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: cover;
  mask-size: cover;
  width: 14px;
  height: 14px;
  background-color: #c1c1c1;
  cursor: pointer;
}

.mx_DialPadContextMenu_header:focus-within {
  border-bottom: 1px solid #0dbd8b;
}

.mx_DialPadContextMenu_title {
  color: #61708b;
  font-size: 12px;
  font-weight: 600;
}

.mx_DialPadContextMenu_dialled {
  height: 1.5em;
  font-size: 18px;
  font-weight: 600;
  border: none;
  margin: 0;
}

.mx_DialPadContextMenu_dialled input {
  font-size: 18px;
  font-weight: 600;
  overflow: hidden;
  max-width: 185px;
  text-align: left;
  direction: rtl;
  padding: 8px 0;
  background-color: transparent;
}

.mx_DialPadContextMenu_dialPad {
  margin: 16px;
}

.mx_Dialog_dialPadWrapper .mx_Dialog {
  padding: 0;
}

.mx_DialPadModal {
  width: 292px;
  height: 370px;
  padding: 16px 0 0;
}

.mx_DialPadModal_header {
  margin-top: 32px;
  margin-left: 40px;
  margin-right: 40px;
  border-bottom: 1px solid #c1c6cd;
  -webkit-transition: border-bottom 0.25s;
  transition: border-bottom 0.25s;
}

.mx_DialPadModal_header:focus-within {
  border-bottom: 1px solid #0dbd8b;
}

.mx_DialPadModal_title {
  color: #61708b;
  font-size: 12px;
  font-weight: 600;
}

.mx_DialPadModal_cancel {
  float: right;
  -webkit-mask: url(../../img/feather-customised/cancel.23c2689.svg);
  mask: url(../../img/feather-customised/cancel.23c2689.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: cover;
  mask-size: cover;
  width: 14px;
  height: 14px;
  background-color: #c1c1c1;
  cursor: pointer;
  margin-right: 16px;
}

.mx_DialPadModal_field {
  border: none;
  margin: 0;
  height: 30px;
}

.mx_DialPadModal_field .mx_Field_postfix {
  border-left: none;
}

.mx_DialPadModal_field input {
  font-size: 18px;
  font-weight: 600;
}

.mx_DialPadModal_dialPad {
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 16px;
}

.mx_VideoFeed_voice {
  background-color: #27303a;
}

.mx_VideoFeed_remote {
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.mx_VideoFeed_remote.mx_VideoFeed_video {
  background-color: #000;
}

.mx_VideoFeed_local {
  max-width: 25%;
  max-height: 25%;
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 100;
  border-radius: 4px;
}

.mx_VideoFeed_local.mx_VideoFeed_video {
  background-color: transparent;
}

.mx_VideoFeed_mirror {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  color: #383a42;
  background: #fafafa;
}

.hljs-comment,
.hljs-quote {
  color: #a0a1a7;
  font-style: italic;
}

.hljs-doctag,
.hljs-formula,
.hljs-keyword {
  color: #a626a4;
}

.hljs-deletion,
.hljs-name,
.hljs-section,
.hljs-selector-tag,
.hljs-subst {
  color: #e45649;
}

.hljs-literal {
  color: #0184bb;
}

.hljs-addition,
.hljs-attribute,
.hljs-meta-string,
.hljs-regexp,
.hljs-string {
  color: #50a14f;
}

.hljs-built_in,
.hljs-class .hljs-title {
  color: #c18401;
}

.hljs-attr,
.hljs-number,
.hljs-selector-attr,
.hljs-selector-class,
.hljs-selector-pseudo,
.hljs-template-variable,
.hljs-type,
.hljs-variable {
  color: #986801;
}

.hljs-bullet,
.hljs-link,
.hljs-meta,
.hljs-selector-id,
.hljs-symbol,
.hljs-title {
  color: #4078f2;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: 700;
}

.hljs-link {
  text-decoration: underline;
}
`;

const customCSS = `
#snackbar {
  display: flex;
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: #333;
  color: #fff;
  text-align: center;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
  font-size: 17px;
  padding: 6px 16px;
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif;
  font-weight: 400;
  line-height: 1.43;
  border-radius: 4px;
  letter-spacing: 0.01071em;
}

#snackbar.mx_show {
  visibility: visible;
  -webkit-animation: mx_snackbar_fadein 0.5s, mx_snackbar_fadeout 0.5s 2.5s;
  animation: mx_snackbar_fadein 0.5s, mx_snackbar_fadeout 0.5s 2.5s;
}

a.mx_reply_anchor{
  cursor: pointer;
  color: #238cf5;
}

a.mx_reply_anchor:hover{
  text-decoration: underline;
}

@-webkit-keyframes mx_snackbar_fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@keyframes mx_snackbar_fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes mx_snackbar_fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}

@keyframes mx_snackbar_fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}

.mx_MFileBody_info .mx_MFileBody_info_icon img.mx_export_attach_icon {
  content: '';
  background-color: #ffffff;
  width: 13px;
  height: 15px;
  position: absolute;
  top: 8px;
  left: 9px;
}

* {
  scroll-behavior: smooth !important;
}


.mx_Export_EventWrapper:target {
  background: white;
  animation: mx_event_highlight_animation 2s linear;
}


@keyframes mx_event_highlight_animation {
  0%,100% {
    background: white;
  }
  50% {
    background: #e3e2df;
  }
}

.mx_ReplyThread_Export {
  margin-top: -5px;
  margin-bottom: 5px;
}

.mx_RedactedBody img.mx_export_trash_icon {
  height: 14px;
  width: 14px;
  background-color: #ffffff;
  content: '';
  position: absolute;
  top: 1px;
  left: 0;
}

img {
  white-space: nowrap;
  overflow: hidden;
}
`;

const markdownCSS = `.markdown-body{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;color:#333;overflow:hidden;font-family:'Helvetica Neue',Helvetica,'Segoe UI',Arial,freesans,sans-serif;font-size:16px;line-height:1.6;word-wrap:break-word}.markdown-body *{-moz-box-sizing:border-box;box-sizing:border-box}.markdown-body>:first-child{margin-top:0!important}.markdown-body>:last-child{margin-bottom:0!important}.markdown-body a{background:0 0;color:#4183c4;text-decoration:none}.markdown-body a:active,.markdown-body a:hover{outline:0}.markdown-body a:active,.markdown-body a:focus,.markdown-body a:hover{text-decoration:underline}.markdown-body strong{font-weight:700}.markdown-body em{font-style:italic}.markdown-body blockquote,.markdown-body dl,.markdown-body ol,.markdown-body p,.markdown-body pre,.markdown-body table,.markdown-body ul{margin-top:0;margin-bottom:16px}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{font-family:'Helvetica Neue',Helvetica,'Segoe UI',Arial,freesans,sans-serif;position:relative;margin-top:1em;margin-bottom:16px;font-weight:700;line-height:1.4}.markdown-body h1,.markdown-body h2{padding-bottom:.3em;border-bottom:1px solid #eee}.markdown-body h1{font-size:2.25em;line-height:1.2}.markdown-body h2{font-size:1.75em;line-height:1.225}.markdown-body h3{font-size:1.5em}.markdown-body h4{font-size:1.25em}.markdown-body h5{font-size:1em}.markdown-body h6{font-size:1em;color:#777}.markdown-body code,.markdown-body kbd,.markdown-body pre{font-family:Consolas,'Liberation Mono',Menlo,Courier,monospace}.markdown-body code{padding:.2em 0;margin:0;font-size:85%;background-color:rgba(0,0,0,.04);border-radius:3px}.markdown-body code:after,.markdown-body code:before{letter-spacing:-.2em;content:'\\00a0'}.markdown-body pre{word-wrap:normal;padding:16px;overflow:auto;font-size:85%;line-height:1.45;background-color:#f7f7f7;border-radius:3px}.markdown-body pre code{display:inline;max-width:initial;padding:0;margin:0;overflow:initial;line-height:inherit;word-wrap:normal;background:0 0}.markdown-body pre code:after,.markdown-body pre code:before{content:normal}.markdown-body pre>code{font-size:1em;word-break:normal;white-space:pre;border:0}.markdown-body kbd{background-color:#e7e7e7;background-image:-webkit-linear-gradient(#fefefe,#e7e7e7);background-image:linear-gradient(#fefefe,#e7e7e7);background-repeat:repeat-x;display:inline-block;padding:5px 5px 1px;margin:0 1px;font-size:11px;line-height:10px;color:#000;border:1px solid #cfcfcf;border-radius:2px;box-shadow:0 1px 0 #ccc}.markdown-body hr:after,.markdown-body hr:before{display:table;content:''}.markdown-body input{color:inherit;font:inherit;margin:0;font-size:13px;line-height:1.4;font-family:Helvetica,Arial,freesans,clean,sans-serif,'Segoe UI Emoji','Segoe UI Symbol'}.markdown-body input[disabled]{cursor:default}.markdown-body input[type=checkbox]{-moz-box-sizing:border-box;box-sizing:border-box;padding:0}.markdown-body blockquote{margin:0 0 16px;padding:0 15px;color:#777;border-left:4px solid #ddd}.markdown-body blockquote>:first-child{margin-top:0}.markdown-body blockquote>:last-child{margin-bottom:0}.markdown-body img{border:0;max-width:100%;-moz-box-sizing:border-box;box-sizing:border-box}.markdown-body hr{-moz-box-sizing:content-box;box-sizing:content-box;overflow:hidden;background:#e7e7e7;height:4px;padding:0;margin:16px 0;border:0}.markdown-body hr:after{clear:both}.markdown-body td,.markdown-body th{padding:0}.markdown-body table{border-collapse:collapse;border-spacing:0;display:block;width:100%;overflow:auto;word-break:normal;word-break:keep-all}.markdown-body table td,.markdown-body table th{padding:6px 13px;border:1px solid #ddd}.markdown-body table th{font-weight:700}.markdown-body table tr{background-color:#fff;border-top:1px solid #ccc}.markdown-body table tr:nth-child(2n){background-color:#f8f8f8}.markdown-body ol,.markdown-body ul{padding:0 0 0 2em}.markdown-body ol ol,.markdown-body ul ol{list-style-type:lower-roman}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:0;margin-bottom:0}.markdown-body ol ol ol,.markdown-body ol ul ol,.markdown-body ul ol ol,.markdown-body ul ul ol{list-style-type:lower-alpha}.markdown-body li>p{margin-top:16px}.markdown-body dd{margin-left:0}.markdown-body dl{padding:0}.markdown-body dl dt{padding:0;margin-top:16px;font-size:1em;font-style:italic;font-weight:700}.markdown-body dl dd{padding:0 16px;margin-bottom:16px}`;

export default lightCSS + markdownCSS + customCSS;
