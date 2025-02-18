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

package com.facebook.litho

import android.content.Context
import android.view.View
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat
import com.facebook.rendercore.MountItemsPool
import com.facebook.rendercore.Mountable

/**
 * <p>Base class for Kotlin mountable components. This class encapsulates some of the Mount Spec
 * APIs. All Kotlin mountable components must extend this class.</p>
 *
 * <p>Experimental. Currently for Litho team internal use only.</p>
 */
abstract class MountableComponent() : Component() {

  final override fun prepare(c: ComponentContext): PrepareResult {
    val mountableComponentScope = MountableComponentScope(c)
    val mountableWithStyle = mountableComponentScope.render()
    // TODO(mkarpinski): currently we apply style to the MountableComponent here, but in the future
    // we want to add it onto PrepareResult and translate to Binders in MountableLithoRenderUnit
    mountableWithStyle.style?.applyToComponent(c, this)

    return PrepareResult(
        mountableWithStyle.mountable,
        mountableComponentScope.transitions,
        mountableComponentScope.useEffectEntries)
  }

  /** This function must return [Mountable] which are immutable. */
  abstract fun MountableComponentScope.render(): MountableWithStyle

  final override fun getMountType(): MountType = MountType.MOUNTABLE

  final override fun canMeasure(): Boolean {
    return true
  }

  /**
   * Compare this component to a different one to check if they are equivalent. This is used to be
   * able to skip rendering a component again.
   */
  final override fun isEquivalentProps(
      other: Component?,
      shouldCompareCommonProps: Boolean,
  ): Boolean {
    if (this === other) {
      return true
    }
    if (other == null || javaClass != other.javaClass) {
      return false
    }
    if (id == other.id) {
      return true
    }
    if (!EquivalenceUtils.hasEquivalentFields(this, other, shouldCompareCommonProps)) {
      return false
    }

    return true
  }

  // All other Component lifecycle methods are final and no-op here as they shouldn't be overridden.

  /** TODO: T115516203 [MountableComponent] solve for pre-allocation */
  final override fun canPreallocate(): Boolean = false

  final override fun canResolve(): Boolean = false

  final override fun createStateContainer() = super.createStateContainer()

  final override fun dispatchOnEventImpl(eventHandler: EventHandler<*>, eventState: Any) =
      super.dispatchOnEventImpl(eventHandler, eventState)

  internal final override fun getCommonDynamicProps() = super.getCommonDynamicProps()

  final override fun getDynamicProps() = super.getDynamicProps()

  final override fun getSimpleName(): String = super.getSimpleName()

  final override fun hasChildLithoViews(): Boolean = false

  internal final override fun hasCommonDynamicProps() = super.hasCommonDynamicProps()

  final override fun isPureRender(): Boolean = true

  final override fun implementsShouldUpdate(): Boolean = true

  final override fun makeShallowCopy() = super.makeShallowCopy()

  final override fun onCreateMountContent(context: Context) = super.onCreateMountContent(context)

  final override fun onCreateMountContentPool() = super.onCreateMountContentPool()

  final override fun onCreateTransition(c: ComponentContext) = super.onCreateTransition(c)

  final override fun onLoadStyle(c: ComponentContext) = super.onLoadStyle(c)

  final override fun onPopulateAccessibilityNode(
      c: ComponentContext,
      host: View,
      accessibilityNode: AccessibilityNodeInfoCompat,
      interStagePropsContainer: InterStagePropsContainer?
  ) = super.onPopulateAccessibilityNode(c, host, accessibilityNode, interStagePropsContainer)

  final override fun onPopulateExtraAccessibilityNode(
      c: ComponentContext,
      accessibilityNode: AccessibilityNodeInfoCompat,
      extraNodeIndex: Int,
      componentBoundsX: Int,
      componentBoundsY: Int,
      interStagePropsContainer: InterStagePropsContainer?
  ) =
      super.onPopulateExtraAccessibilityNode(
          c,
          accessibilityNode,
          extraNodeIndex,
          componentBoundsX,
          componentBoundsY,
          interStagePropsContainer)

  final override fun onPrepare(c: ComponentContext) = super.onPrepare(c)

  final override fun poolSize() = super.poolSize()

  final override fun recordEventTrigger(c: ComponentContext, container: EventTriggersContainer) =
      super.recordEventTrigger(c, container)

  final override fun recordRenderData(c: ComponentContext, toRecycle: RenderData) =
      super.recordRenderData(c, toRecycle)

  final override fun resolve(layoutContext: LayoutStateContext, c: ComponentContext): LithoNode? =
      super.resolve(layoutContext, c)

  final override fun shouldUpdate(
      previous: Component?,
      prevStateContainer: StateContainer?,
      next: Component?,
      nextStateContainer: StateContainer?
  ) = super.shouldUpdate(previous, prevStateContainer, next, nextStateContainer)

  final override fun transferState(
      previousStateContainer: StateContainer,
      nextStateContainer: StateContainer
  ) = super.transferState(previousStateContainer, nextStateContainer)

  final override fun createPoolableContent(context: Context): Any {
    return super.createPoolableContent(context)
  }

  final override fun getPoolableContentType(): Any {
    return super.getPoolableContentType()
  }

  final override fun isRecyclingDisabled(): Boolean {
    return super.isRecyclingDisabled()
  }

  final override fun createRecyclingPool(): MountItemsPool.ItemPool? {
    return super.createRecyclingPool()
  }

  final override fun render(c: ComponentContext, widthSpec: Int, heightSpec: Int): RenderResult {
    return super.render(c, widthSpec, heightSpec)
  }

  final override fun isEqualivalentTreeProps(
      current: ComponentContext,
      next: ComponentContext
  ): Boolean {
    return super.isEqualivalentTreeProps(current, next)
  }
}

/**
 * A class that holds a [Mountable] and [Style] that should be applied to the [MountableComponent].
 */
data class MountableWithStyle(val mountable: Mountable<*>, val style: Style?)
