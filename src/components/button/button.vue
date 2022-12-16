<template>
    <button :class="classes" :disabled="disabled">
        <slot></slot>
    </button>
</template>

<script>
import { buttonTypeOptions } from './constants'

export default {
    props: {
        types: {
            type: String,
            default: buttonTypeOptions.primary,
            validator: (value) => Object.keys(buttonTypeOptions).includes(value)
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false
        },
    },
    computed: {
        classes() {
            const classList = ['button']
            classList.push(`btn-${this.types}`)

            return classList;
        }
    }
}
</script>

<style>
.btn-primary {
    background: blue;
}

.btn-secondary {
    background: green;
}

.btn-tertiary {
    background: yellow;
}

.btn-ghost {
    background: transparent;
}
</style>