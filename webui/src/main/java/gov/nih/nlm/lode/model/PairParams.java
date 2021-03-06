package gov.nih.nlm.lode.model;

import javax.validation.constraints.NotEmpty;

public class PairParams extends DescriptorParams {

    @NotEmpty()
    private String descriptor;

    public String getDescriptor() {
        return descriptor;
    }
    public void setDescriptor(String descriptor) {
        this.descriptor = descriptor;
    }
}
