/*
Copyright 2017 Travis Ralston

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

import SettingsHandler from "./SettingsHandler";
import MatrixClientPeg from '../MatrixClientPeg';

/**
 * Gets and sets settings at the "room" level.
 */
export default class RoomSettingsHandler extends SettingsHandler {
    getValue(settingName, roomId) {
        // Special case URL previews
        if (settingName === "urlPreviewsEnabled") {
            const content = this._getSettings(roomId, "org.matrix.room.preview_urls");
            return !content['disable'];
        }

        return this._getSettings(roomId)[settingName];
    }

    setValue(settingName, roomId, newValue) {
        // Special case URL previews
        if (settingName === "urlPreviewsEnabled") {
            const content = this._getSettings(roomId, "org.matrix.room.preview_urls");
            content['disable'] = !newValue;
            return MatrixClientPeg.get().setRoomAccountData(roomId, "org.matrix.room.preview_urls", content);
        }

        const content = this._getSettings(roomId);
        content[settingName] = newValue;
        return MatrixClientPeg.get().sendStateEvent(roomId, "im.vector.web.settings", content, "");
    }

    canSetValue(settingName, roomId) {
        const cli = MatrixClientPeg.get();
        const room = cli.getRoom(roomId);

        if (!room) return false;
        return room.currentState.maySendStateEvent("im.vector.web.settings", cli.getUserId());
    }

    isSupported() {
        return !!MatrixClientPeg.get();
    }

    _getSettings(roomId, eventType = "im.vector.web.settings") {
        const room = MatrixClientPeg.get().getRoom(roomId);
        if (!room) return {};
        const event = room.currentState.getStateEvents(eventType, "");
        if (!event || !event.getContent()) return {};
        return event.getContent();
    }
}
