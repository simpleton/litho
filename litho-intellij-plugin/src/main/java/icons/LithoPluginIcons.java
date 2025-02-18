/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package icons;

import com.intellij.openapi.util.IconLoader;
import javax.swing.Icon;

public interface LithoPluginIcons {
  Icon BASE_ACTION = IconLoader.getIcon("/icons/lithoLogo.svg");
  Icon TOOLWINDOW = IconLoader.getIcon("/icons/toolwindow.svg");
  Icon ERROR_ACTION = IconLoader.getIcon("/icons/lithoErrorLogo.svg");
}
