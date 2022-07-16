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

package com.facebook.litho.widget;

import com.facebook.litho.Component;
import com.facebook.litho.ComponentContext;
import com.facebook.litho.SizeSpec;
import com.facebook.litho.annotations.CachedValue;
import com.facebook.litho.annotations.LayoutSpec;
import com.facebook.litho.annotations.OnCalculateCachedValue;
import com.facebook.litho.annotations.OnCreateLayoutWithSizeSpec;
import com.facebook.litho.annotations.Prop;

@LayoutSpec
public class LayoutWithSizeSpecWithCachedValueSpec {

  @OnCalculateCachedValue(name = "expensiveValue")
  static int onCalculateExpensiveValue(@Prop Integer number) {
    return number == null ? -1 : number;
  }

  @OnCreateLayoutWithSizeSpec
  static Component onCreateLayoutWithSizeSpec(
      ComponentContext c, int widthSpec, int heightSpec, @CachedValue int expensiveValue) {

    return Text.create(c)
        .widthPx(SizeSpec.getSize(widthSpec))
        .heightPx(SizeSpec.getSize(heightSpec))
        .text("ExpensiveCachedValue: " + expensiveValue)
        .build();
  }
}
